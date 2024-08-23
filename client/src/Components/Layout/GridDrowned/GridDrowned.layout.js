import React, { useEffect, useRef, useState} from "react"
import {Button, Typography, useMediaQuery } from "@mui/material"
import { StyledGridContainer, StyledGridItem, StyledHorizontalBar, StyledPaper, StyledVerticalBar } from "./GridDrowned.style"
import {Box} from "@mui/material";
import useWindowDimensions from "../../../hooks/useWindowDimensions";


const GridDrowned=({items})=>{
    const {width}=useWindowDimensions()
    const ref=useRef(null)
    var rendered=useRef(false)
    const animating=useRef(false)
    const matchesSm=useMediaQuery(theme=>theme.breakpoints.up("sm"))
    const matchesMd=useMediaQuery(theme=>theme.breakpoints.up("md"))
    const {height}=useWindowDimensions()

    const widths=[
        {xs:5, sm:2.7},
        {xs:3, sm: 3.6},
        {xs:4, sm: 2.7},
        {xs:6, sm: 3},
        {xs:6, sm: 3.5},
        {xs:4, sm: 4},
        {xs:8, sm: 4.5},
        {xs:5, sm: 4.5},
        {xs:3.5, sm: 3.5},
        {xs:3.5, sm: 4},
        {xs:7, sm: 3},
        {xs:5, sm: 4},
        {xs:4, sm: 2.5},
        {xs:8, sm: 2.5},
        {xs:3, sm: 3.5},
        {xs:4.5, sm: 4.5},
        {xs:4.5, sm: 4},
    ]
    var currentWidth=0
    var size="xs"
    if(matchesSm){size="sm"}
    const sumSize=widths.reduce((accumulator, currentValue)=>accumulator+currentValue[size], 0)
    var verticalBars=[]
    var horizontalBars=[]

    const drownedAnimation=()=>{
        verticalBars=Array.from(document.body.querySelectorAll(".vertical-bar, .vertical-bar-right-edge")).map(function(elt){
            elt.style.display="block"
            elt.classList.remove("d-none")
            return {item:elt, animationDelay:0}
        })
        horizontalBars=Array.from(document.body.querySelectorAll(".horizontal-bar-l, .horizontal-bar-r")).map(function(elt){
            elt.style.display="block"
            elt.classList.remove("d-none")
            return {item:elt, animationDelay:0}
        })
        const heighVerticalBar=verticalBars[0].item.getBoundingClientRect().height
        var speed=0
        var ajusterDelay=0
        var ajusterSize=0.5//Cet ajuster permet de resoudre le problème des petits traits qui s'affiche à la bordure de deux barres
        if (matchesMd){
            speed=240
        }
        else if(matchesSm){
            speed=175
        }
        else{
            speed=170
            ajusterDelay=.05
        }
        var j=0
        const animationVerticalBarDuration=heighVerticalBar/speed
        // const animationVerticalBarDuration=0.7
        var horizontalTopBars=[]
        var horizontalBottomBars=[]
        for(var i=0; i<verticalBars.length; i++){
            if(verticalBars[i].item.classList.contains("vertical-bar-right-edge")){
                // Si on atteind la pordure droite
                horizontalBars[j-1].item.style.width=(width-horizontalBars[j-1].item.getBoundingClientRect().left+ajusterSize)+"px"
                horizontalBars[j-1].animationDuration=horizontalBars[j-1].item.getBoundingClientRect().width/speed
                horizontalBars[j-1].item.style.animationDuration=horizontalBars[j-1].animationDuration+"s"
                if(!horizontalBars[j-1].item.classList.contains("right-edge")){
                    while(true){
                        horizontalBars[j].item.style.display="none"
                        horizontalBars[j].item.classList.add("d-none")
                        horizontalBars[j+1].item.style.display="none"
                        horizontalBars[j+1].item.classList.add("d-none")
                        if(horizontalBars[j+1].item.classList.contains("right-edge")){
                            break
                        }
                        j+=2
                    }
                }
                horizontalTopBars=horizontalBottomBars
                horizontalBottomBars=[]
                continue
            }
            const vX1=verticalBars[i].item.getBoundingClientRect().left
            const vX2=verticalBars[i].item.getBoundingClientRect().right
            const vWidth=verticalBars[i].item.getBoundingClientRect().width
            var proximity=undefined
            var horizontalTopBarSelected=undefined
            verticalBars[i].item.style.animationDuration=animationVerticalBarDuration+"s"
            
            for (var k=0; k<horizontalTopBars.length; k++){
                //On boucle sur les barre horizontales situées au dessus de la barre verticale actuelle pour trouver celle qui déclanche l'animation
                var htX1=horizontalTopBars[k].item.getBoundingClientRect().left
                var htX2=horizontalTopBars[k].item.getBoundingClientRect().right
                if((htX1<=(vX1+vWidth/2))&&(htX2>=(vX2-vWidth/2))){
                    if(horizontalTopBars[k].item.classList.contains("horizontal-bar-r")){
                        if(!proximity){
                            proximity=vX2-htX1
                            horizontalTopBarSelected=horizontalTopBars[k]
                        }
                        else{
                            if(proximity>(vX2-htX1)){
                                proximity=vX2-htX1
                                horizontalTopBarSelected=horizontalTopBars[k]}
                        }
                    }
                    else if(horizontalTopBars[k].item.classList.contains("horizontal-bar-l")){
                        if(!proximity){
                            proximity=htX2-vX1
                            horizontalTopBarSelected=horizontalTopBars[k]}
                        else{
                            if(proximity>(htX2-vX1)){
                                proximity=htX2-vX1
                                horizontalTopBarSelected=horizontalTopBars[k]
                            }
                        }
                    }
                }
            }
    
            if(horizontalTopBarSelected){
                horizontalTopBarSelected.item.style.zIndex="100"
                var htWidthSelected=horizontalTopBarSelected.item.getBoundingClientRect().width
                
                var animationDelay=horizontalTopBarSelected.animationDelay+proximity*horizontalTopBarSelected.animationDuration/htWidthSelected
                verticalBars[i].animationDelay=animationDelay


            }
            while(true){
                //On boucle sur les barres horizontales pour définir leur position , leur longeur, et leur animation
                if(j>=horizontalBars.length){break}
                const hX1=horizontalBars[j].item.getBoundingClientRect().left
                const hX2=horizontalBars[j].item.getBoundingClientRect().right
                animationDelay=verticalBars[i].animationDelay+animationVerticalBarDuration-ajusterDelay
                if(((vX1+vWidth/2)>=hX1) && ((vX2-vWidth/2)<=hX2)){
                    // Si la barre verticale actuelle se trouve au dessus de la barre horizontale actuelle
                    horizontalBars[j].item.style.right=100-(vX1-hX1)*100/(hX2-hX1)+"%"
                    horizontalBars[j+1].item.style.left=(vX2-hX1)*100/(hX2-hX1)+"%"
                    horizontalBars[j].item.style.animationDelay=animationDelay+"s"
                    horizontalBars[j+1].item.style.animationDelay=animationDelay+"s"
                    horizontalBars[j].animationDelay=animationDelay
                    horizontalBars[j+1].animationDelay=animationDelay
                    if(j!==0){
                            let l=1
                            var previousElt=horizontalBars[j-l]
                            while(horizontalBars[j-l].item.classList.contains("d-none") && !horizontalBars[j-l].item.classList.contains("right-edge") ){
                                l++
                                previousElt=horizontalBars[j-l]
                            }
                        if(!previousElt.item.classList.contains("right-edge")){
                            
                            var d=horizontalBars[j].item.getBoundingClientRect().right-previousElt.item.getBoundingClientRect().left
                                    // var t=horizontalBars[j-1].animationDelay+d/speed/2  
                                    // var offset=d*(t- horizontalBars[j-1].animationDelay)/((2*t-horizontalBars[j-1].animationDelay-horizontalBars[j].animationDelay))
                                    var offset=(d-speed*(previousElt.animationDelay-horizontalBars[j].animationDelay))/2
                                    if(d<offset){
                                        horizontalBars[j].item.style.width=0+"px"
                                    }
                                    else{
                                    horizontalBars[j].item.style.width=(d-offset+ajusterSize)+"px"
                                    }
                                    previousElt.item.style.width=(offset+ajusterSize)+"px"
                                    horizontalBars[j].animationDuration=horizontalBars[j].item.getBoundingClientRect().width/speed
                                    previousElt.animationDuration=horizontalBars[j-1].item.getBoundingClientRect().width/speed
                                    horizontalBars[j].item.style.animationDuration=horizontalBars[j].animationDuration+"s"
                                    previousElt.item.style.animationDuration=horizontalBars[j-1].animationDuration+"s"    
                        }
                        else{
                            horizontalBars[j].item.style.width=(horizontalBars[j].item.getBoundingClientRect().right+ajusterSize)+"px"
                            horizontalBars[j].animationDuration=horizontalBars[j].item.getBoundingClientRect().width/speed
                            horizontalBars[j].item.style.animationDuration=horizontalBars[j].animationDuration+"s"
                        }
                                                    
                    
                    }
                    else{
                        horizontalBars[j].item.style.width=(horizontalBars[j].item.getBoundingClientRect().right+ajusterSize)+"px"
                        horizontalBars[j].animationDuration=horizontalBars[j].item.getBoundingClientRect().width/speed
                        horizontalBars[j].item.style.animationDuration=horizontalBars[j].animationDuration+"s"
                    }
                    horizontalBottomBars.push(horizontalBars[j], horizontalBars[j+1])
                    j+=2
                    break
                }
                horizontalBars[j+1].item.style.display="none"
                horizontalBars[j+1].item.classList.add("d-none")
                horizontalBars[j].item.style.display="none"
                horizontalBars[j].item.classList.add("d-none")

                j+=2

            }
            verticalBars[i].item.style.animationDelay=verticalBars[i].animationDelay+"s"

        }

    }


    // const resetAnimation=()=>{
    //     var el = document.getElementById('animated');
    //     el.style.animation = 'none';
    //     el.offsetHeight; /* trigger reflow */
    //     el.style.animation = null; 
    //   }
    const resetAnimation=(animate=true)=>{

        let animationPlayState=""
        if(animate){
            animationPlayState="running"
            animating.current=true
        }
        else{
             animationPlayState="paused"
        }
        verticalBars.forEach(function(elt){
            elt.item.classList.remove("vertical-bar")
            void elt.item.offsetWidth
            elt.item.classList.add("vertical-bar")
            elt.item.style.animationPlayState=animationPlayState
        })
        horizontalBars.forEach(function(elt){
            let className=""
            if(elt.item.classList.contains("horizontal-bar-l")){
                 className="horizontal-bar-l"
            }
            else if(elt.item.classList.contains("horizontal-bar-r")){
                 className="horizontal-bar-r"
            }
            elt.item.classList.remove(className)
            void elt.item.offsetWidth
            elt.item.classList.add(className)
            elt.item.style.animationPlayState=animationPlayState
        }) 
       
    }
       
    useEffect(()=>{
        if(!rendered.current){
            drownedAnimation()
            rendered.current=true
        }
        // const intersectionRatioTop=matchesMd?0.1:0.02
        const intersectionRatioMiddle=matchesMd?0.5:0.3
        const observer=new IntersectionObserver(([entry], ob)=>{
            // let fromTop=entry.intersectionRect.top
            // let fromBottom=entry.rootBounds.height-entry.intersectionRect.bottom
            // if(fromTop>fromBottom){
            //     if(entry.intersectionRatio>=intersectionRatioMiddle){
            //         resetAnimation()
            //     }
            //     else{
            //         if(entry.intersectionRatio<=intersectionRatioTop){
            //             resetAnimation(false)
            //         }
            //     } 
            // }
            // else if(entry.boundingClientRect.top > height){
            //         resetAnimation(false)
            // }
            if(entry.isIntersecting){
                resetAnimation()
                ob.unobserve(entry.target)

            }
   
        }, {threshold:[intersectionRatioMiddle]})

        observer.observe(ref.current)
       
        return ()=>observer.disconnect()
    }, [])

    return (
        <Box ref={ref}>
            <StyledGridContainer  sx={{p:0}} container spacing={{xs:.7, sm:1, md:1.5}}>
                {widths.map((width, index)=>{
                    const leftEdge=currentWidth%12===0?true:false
                    currentWidth+=width[size]
                    const topEdge=currentWidth<=12
                    const rightEdge=currentWidth%12===0?true:false
                    const remain=sumSize-currentWidth
                    const  bottomEdge=remain<12
                    return <StyledGridItem  key={index} item xs={width.xs} sm={width.sm} matchesSm={matchesSm} matchesMd={matchesMd} leftEdge={leftEdge} topEdge={topEdge} rightEdge={rightEdge} bottomEdge={bottomEdge}>
                    {!topEdge?<StyledHorizontalBar className="horizontal-bar-l"/>:null}
                    {!topEdge?<StyledHorizontalBar className={`horizontal-bar-r ${rightEdge?"right-edge":""}`}/>:null}

                    {!rightEdge?<StyledVerticalBar  className="vertical-bar"/>:<div className="vertical-bar-right-edge"></div>}                   
                        <StyledPaper className="paper">
                        {index<items.length?
                            <><img tml="REF" src={items[index].image} alt={items[index].name}/><Typography variant="subtitle1" component="span">{items[index].name}</Typography></>:
                            <><img src={require("../../../assets/img/devte.png")} alt="Devte"/><Typography variant="subtitle1" component="span">DEVTE</Typography></>
                        }
                        </StyledPaper>
                    </StyledGridItem>
                })}
            </StyledGridContainer>
        </Box>
       
    )
}

export default GridDrowned