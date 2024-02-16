import React, { useEffect, useRef, useState } from "react"
import {breadcrumbsClasses, useMediaQuery } from "@mui/material"
import { StyledGridContainer, StyledGridItem, StyledHorizontalBar, StyledPaper, StyledVerticalBar } from "./GridDrowned.style"
import useWindowDimensions from "../../../hooks/useWindowDimensions";


const GridDrowned=()=>{
    const {width}=useWindowDimensions()
    var shouldLock=useRef(true)
    const matchesSm=useMediaQuery(theme=>theme.breakpoints.up("sm"))
    const matchesMd=useMediaQuery(theme=>theme.breakpoints.up("md"))
    const widths=[
        {xs:5, sm:2.7},
        {xs:3, sm: 3.6},
        {xs:4, sm: 2.7},
        {xs:6, sm: 3},
        {xs:6, sm: 3.5},
        {xs:4, sm: 4},
        {xs:8, sm: 4.5},
        {xs:5.5, sm: 4.5},
        {xs:3.5, sm: 3.5},
        {xs:3, sm: 4},
        {xs:6.5, sm: 3},
        {xs:5.5, sm: 4},
        {xs:4, sm: 2.5},
        {xs:8, sm: 2.5},
        {xs:3, sm: 3.5},
        {xs:4.5, sm: 4.5},
        {xs:4.5, sm: 4},


        // {xs:5, sm:2.7},
        // {xs:7, sm: 3.6},
        // {xs:6, sm: 2.7},
        // {xs:6, sm: 3},
        // {xs:5, sm: 3.5},
        // {xs:7, sm: 4},
        // {xs:5.5, sm: 4.5},
        // {xs:6.5, sm: 4.5},
        // {xs:6.5, sm: 3.5}, 
        // {xs:5.5, sm: 4},
        // {xs:4, sm: 3},
        // {xs:8, sm: 4},
        // {xs:5.2, sm: 2.5},
        // {xs:6.8, sm: 2.5},
        // {xs:6.8, sm: 3.5},
        // {xs:5.2,sm: 4.5},
        // {xs:12, sm: 4},
    ]
    var currentWidth=0
    var size="xs"
    if(matchesSm){size="sm"}
    const sumSize=widths.reduce((accumulator, currentValue)=>accumulator+currentValue[size], 0)
    useEffect(()=>{
        if (shouldLock){
            shouldLock=false
            const verticalBars=Array.from(document.body.querySelectorAll(".vertical-bar, .vertical-bar-right-edge")).map(function(elt){
                return {item:elt, animationDelay:0}
            })
            const horizontalBars=Array.from(document.body.querySelectorAll(".horizontal-bar-l, .horizontal-bar-r")).map(function(elt){
                return {item:elt, animationDelay:0}
            })
            const heighVerticalBar=verticalBars[0].item.getBoundingClientRect().height
            const speed=150
            var j=0
            const animationVerticalBarDuration=heighVerticalBar/speed
            // const animationVerticalBarDuration=0.7
            var horizontalTopBars=[]
            var horizontalBottomBars=[]
            for(var i=0; i<verticalBars.length; i++){
                if(verticalBars[i].item.classList.contains("vertical-bar-right-edge")){
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
                    console.log(horizontalTopBarSelected, verticalBars[i],"+++++++++++++++++++++++++++++++++++")
                    verticalBars[i].animationDelay=animationDelay
                }
                while(true){
                    if(j>=horizontalBars.length){break}
                    const hX1=horizontalBars[j].item.getBoundingClientRect().left
                    const hX2=horizontalBars[j].item.getBoundingClientRect().right
                    if(((vX1+vWidth/2)>=hX1) && ((vX2-vWidth/2)<=hX2)){
                        // horizontalBars[j].style.right=100-(((vX2+vX1)/2)-hX1)*100/(hX2-hX1)+"%"
                        horizontalBars[j].item.style.right=100-(vX1-hX1)*100/(hX2-hX1)+"%"
                        horizontalBars[j+1].item.style.left=(vX2-hX1)*100/(hX2-hX1)+"%"
                        // horizontalBars[j+1].style.right="-"+offset
                        animationDelay=verticalBars[i].animationDelay+animationVerticalBarDuration
                        // console.log(verticalBars[i], horizontalBars[j-1], horizontalBars[j], animationDelay, "555555555555555555555")
                        horizontalBars[j].item.style.animationDelay=animationDelay+"s"
                        horizontalBars[j+1].item.style.animationDelay=animationDelay+"s"
                        horizontalBars[j].animationDelay=animationDelay
                        horizontalBars[j+1].animationDelay=animationDelay
                        if(j!==0){
                            if(!horizontalBars[j-1].item.classList.contains("d-none") && !horizontalBars[j-1].item.classList.contains("right-edge")){
                                var d=horizontalBars[j].item.getBoundingClientRect().right-horizontalBars[j-1].item.getBoundingClientRect().left
                                        var t=horizontalBars[j-1].animationDelay+d/speed/2
                                        var offset=d*(t- horizontalBars[j-1].animationDelay)/(2*t-horizontalBars[j-1].animationDelay-horizontalBars[j].animationDelay)
                                        horizontalBars[j-1].item.style.width=(offset)+"px"
                                        horizontalBars[j].item.style.width=(d-offset)+"px"
                                        horizontalBars[j].animationDuration=horizontalBars[j].item.getBoundingClientRect().width/speed
                                        horizontalBars[j-1].animationDuration=horizontalBars[j-1].item.getBoundingClientRect().width/speed
                                        horizontalBars[j].item.style.animationDuration=horizontalBars[j].animationDuration+"s"
                                        horizontalBars[j-1].item.style.animationDuration=horizontalBars[j-1].animationDuration+"s"    
                            }
                            else{
                                horizontalBars[j].item.style.width=(horizontalBars[j].item.getBoundingClientRect().right)+"px"
                                horizontalBars[j].animationDuration=horizontalBars[j].item.getBoundingClientRect().width/speed
                                horizontalBars[j].item.style.animationDuration=horizontalBars[j].animationDuration+"s"
                                
                                var l=0
                                while(true){
                                    l++
                                    if(horizontalBars[j-l].item.classList.contains("d-none")){
                                        continue
                                    }                                           
                                    else{
                                            horizontalBars[j-l].item.style.width=(width-horizontalBars[j-l].item.getBoundingClientRect().left)+"px"
                                            horizontalBars[j-l].animationDuration=horizontalBars[j-l].item.getBoundingClientRect().width/speed
                                            horizontalBars[j-l].item.style.animationDuration=horizontalBars[j-l].animationDuration+"s"


                                            break
                                    }
                                    
                                }
                            }     
                        
                        }
                        else{
                            horizontalBars[j].item.style.width=(horizontalBars[j].item.getBoundingClientRect().right)+"px"
                            horizontalBars[j].animationDuration=horizontalBars[j].item.getBoundingClientRect().width/speed
                            horizontalBars[j].item.style.animationDuration=horizontalBars[j].animationDuration+"s"
                        }
                        horizontalBottomBars.push(horizontalBars[j], horizontalBars[j+1])
                        j+=2
                        break
                    }
                
                    horizontalBars[j].item.style.display="none"
                    horizontalBars[j].item.classList.add("d-none")
                    j+=1
    
                }
                verticalBars[i].item.style.animationDelay=verticalBars[i].animationDelay+"s"

            }
            l=0
            while(true){
                l++
                if(horizontalBars[j-l].item.classList.contains("d-none")){
                    continue
                }                                           
                else{
                       horizontalBars[j-l].item.style.width=(width-horizontalBars[j-l].item.getBoundingClientRect().left)+"px"
                       horizontalBars[j-l].item.style.animationDuration=(horizontalBars[j-l].item.getBoundingClientRect().width/speed)+"s"

                        break
                }
                
            }
        }
       
        
    }, [])
    return (
        <StyledGridContainer  sx={{p:0}} container spacing={{xs:.5, sm:1, md:1.5}}>
            {widths.map((width, index)=>{
                const leftEdge=currentWidth%12===0?true:false
                currentWidth+=width[size]
                const topEdge=currentWidth<=12
                const rightEdge=currentWidth%12===0?true:false
                const remain=sumSize-currentWidth
                const  bottomEdge=remain<12
                return <StyledGridItem  key={index} item xs={width.xs} sm={width.sm} matchesSm={matchesSm} matchesMd={matchesMd} leftEdge={leftEdge} topEdge={topEdge} rightEdge={rightEdge} bottomEdge={bottomEdge}>
                {/* {!topEdge?<StyledHorizontalBar className={`horizontal-bar-l ${rightEdge?"horizontal-bar-end":""}`}/>:null} */}
                {/* {!topEdge?<StyledHorizontalBar className={`horizontal-bar-r ${rightEdge?"horizontal-bar-end":""}`}/>:null} */}
                {!topEdge?<StyledHorizontalBar className="horizontal-bar-l"/>:null}
                {!topEdge?<StyledHorizontalBar className={`horizontal-bar-r ${rightEdge?"right-edge":""}`}/>:null}

                {!rightEdge?<StyledVerticalBar  className="vertical-bar"/>:<div className="vertical-bar-right-edge"></div>}
                <StyledPaper className="paper"><img src="/logo192.png" style={{width:"20px", height:"20px", marginRight:"3px"}}/>
                
                 Newsletter
                 </StyledPaper>

                </StyledGridItem>
            })}
        </StyledGridContainer>
    )
}

export default GridDrowned