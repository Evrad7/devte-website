import {Grid, useMediaQuery } from "@mui/material"
import ServiceDetail from "./ServiceDetail.layout"
import { useTheme } from "@emotion/react"
import { StyledGridItem, StyledHorizontalBar, StyledVerticalBar } from "./ServiceDetails.style"
import { useEffect, useRef } from "react"
import useWindowDimensions from "../../../hooks/useWindowDimensions"


const ServiceDetails=({data})=>{
    // le prop data doit être un tableau de 4 objects avec les propriétés `title`, `photo` et `description`, 
    const theme=useTheme()
    const matchesMd=useMediaQuery(theme=>theme.breakpoints.up("md"))
    const ref=useRef(null)
    const rendered=useRef(false)
    const {height, isDesktop}=useWindowDimensions()

    var verticalBars=[]
    var horizontalBars=[]

    const animation=()=>{
        verticalBars=Array.from(document.body.querySelectorAll(".vertical--bar")).map(function(elt){
            return elt
        })
        horizontalBars=Array.from(document.body.querySelectorAll(".horizontal--bar")).map(function(elt){
            return elt
        })
        var speed=450
        var delayAjuster=0
        if(matchesMd){
            delayAjuster=-0.05
            speed=500
            const heighVerticalBar=verticalBars[0].getBoundingClientRect().height
            const animationVerticalBarDuration=heighVerticalBar/speed
            verticalBars[0].style.animationDuration=animationVerticalBarDuration+"s"
            verticalBars[0].style.animationDelay=0+"s"

            verticalBars[2].style.animationDuration=animationVerticalBarDuration+"s"
            verticalBars[2].style.animationDelay=(animationVerticalBarDuration+delayAjuster)+"s"
            
            const horizontalWidth=horizontalBars[2].getBoundingClientRect().width
            const horizontalAnimationDuration=horizontalWidth/speed
            horizontalBars[2].style.animationDuration=horizontalAnimationDuration+"s"
            horizontalBars[3].style.animationDuration=horizontalAnimationDuration+"s"
            horizontalBars[2].style.animationDelay=(animationVerticalBarDuration+delayAjuster)+"s"
            horizontalBars[3].style.animationDelay=(animationVerticalBarDuration+delayAjuster)+"s"

        }
        else{
            let heighVerticalBar=verticalBars[0].getBoundingClientRect().height
            let animationVerticalBarDuration=heighVerticalBar/speed
            verticalBars[0].style.animationDuration=animationVerticalBarDuration+"s"
            verticalBars[0].style.animationDelay=0+"s"
            
            let horizontalWidth=horizontalBars[1].getBoundingClientRect().width
            let horizontalAnimationDuration=horizontalWidth/speed
            horizontalBars[1].style.animationDuration=horizontalAnimationDuration+"s"
            let animationDelay=animationVerticalBarDuration
            horizontalBars[1].style.animationDelay=(animationDelay+delayAjuster)+"s"

            heighVerticalBar=verticalBars[1].getBoundingClientRect().height
            animationVerticalBarDuration=heighVerticalBar/speed
            verticalBars[1].style.animationDuration=animationVerticalBarDuration+"s"
            animationDelay=animationDelay+horizontalAnimationDuration
            verticalBars[1].style.animationDelay=(animationDelay+delayAjuster)+"s"

            horizontalWidth=horizontalBars[2].getBoundingClientRect().width
            horizontalAnimationDuration=horizontalWidth/speed
            horizontalBars[2].style.animationDuration=horizontalAnimationDuration+"s"
            animationDelay=animationDelay+animationVerticalBarDuration
            horizontalBars[2].style.animationDelay=(animationDelay+delayAjuster)+"s"

            heighVerticalBar=verticalBars[2].getBoundingClientRect().height
            animationVerticalBarDuration=heighVerticalBar/speed
            verticalBars[2].style.animationDuration=animationVerticalBarDuration+"s"
            animationDelay=animationDelay+horizontalAnimationDuration
            verticalBars[2].style.animationDelay=(animationDelay+delayAjuster)+"s"

            horizontalWidth=horizontalBars[3].getBoundingClientRect().width
            horizontalAnimationDuration=horizontalWidth/speed
            horizontalBars[3].style.animationDuration=horizontalAnimationDuration+"s"
            animationDelay=animationDelay+animationVerticalBarDuration
            horizontalBars[3].style.animationDelay=(animationDelay+delayAjuster)+"s"
            
            heighVerticalBar=verticalBars[3].getBoundingClientRect().height
            animationVerticalBarDuration=heighVerticalBar/speed
            verticalBars[3].style.animationDuration=animationVerticalBarDuration+"s"
            animationDelay=animationDelay+horizontalAnimationDuration
            verticalBars[3].style.animationDelay=(animationDelay+delayAjuster)+"s"
        }
        

    }

    const resetAnimation=(animate=true)=>{
            let animationPlayState=""
            if(animate){
                animationPlayState="running"
            }
            else{
                 animationPlayState="paused"
            }
            document.querySelectorAll(".horizontal--bar").forEach(function(elt){
                setTimeout(()=>{
                    elt.classList.remove("horizontal--bar")
                    void elt.offsetWidth
                    elt.classList.add("horizontal--bar")
                    elt.style.animationPlayState=animationPlayState
                }, 0)
                
            })
    
            document.querySelectorAll(".vertical--bar").forEach(function(elt){
                setTimeout(()=>{
                    elt.classList.remove("vertical--bar")
                void elt.offsetWidth
                elt.classList.add("vertical--bar")
                elt.style.animationPlayState=animationPlayState
                }, 0)
                

            })
        
       
    }

    useEffect(()=>{
        if(!rendered.current){
            animation()
            rendered.current=true
        }
        const intersectionRatioTop=0.1
        const intersectionRatioMiddle=matchesMd?0.5:0.3
        const threshold=isDesktop?[intersectionRatioTop, intersectionRatioMiddle]:[intersectionRatioMiddle]
        const observer=new IntersectionObserver(([entry], ob)=>{
            let fromTop=entry.intersectionRect.top
            let fromBottom=entry.rootBounds.height-entry.intersectionRect.bottom
            // if(isDesktop){
            //     if(fromTop>fromBottom){
            //         if(entry.intersectionRatio>=intersectionRatioMiddle){
            //             resetAnimation()
            //         }
            //         else{
            //             if(entry.intersectionRatio<=intersectionRatioTop){
            //                 resetAnimation(false)
            //             }
            //         } 
            //     }
            //     else if(entry.boundingClientRect.top > height){
            //             resetAnimation(false)
            //     }
       
            // }
          
            if(entry.isIntersecting){
                resetAnimation()
                ob.unobserve(entry.target)

            }
           
        }, {threshold:threshold})

        observer.observe(ref.current)
       
        return ()=>observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
            <Grid 
                ref={ref}
                container  
                spacing={{xs:1, md:1}} 
                sx={{
                    backgroundColor:theme.palette.primary.main}}>   
                    <StyledGridItem  item  matchesMd={matchesMd} xs={12} md={6}  topEdge={true} rightEdge={false} bottomEdge={false} leftEdge={true}   sx={{paddingTop:"0px !important"}}>
                        <StyledHorizontalBar className="horizontal--bar"/>
                        <StyledVerticalBar className="vertical--bar"/>
                        <ServiceDetail title={data[0].title} photo={data[0].photo} description={data[0].description} />
                    </StyledGridItem>

                    <StyledGridItem  item  matchesMd={matchesMd} xs={12} md={6}  topEdge={true} rightEdge={true} bottomEdge={false} leftEdge={false}  sx={{paddingTop:{md:"0px !important"}}} >
                        <StyledHorizontalBar className="horizontal--bar"/>
                        <StyledVerticalBar className="vertical--bar"/>
                        <ServiceDetail  title={data[1].title} photo={data[1].photo} description={data[1].description}/>

                    </StyledGridItem>

                    <StyledGridItem  item  matchesMd={matchesMd} xs={12} md={6}  topEdge={false} rightEdge={false} bottomEdge={true} leftEdge={true} >
                        <StyledHorizontalBar className="horizontal--bar"/>
                        <StyledVerticalBar className="vertical--bar"/>
                        <ServiceDetail  title={data[2].title} photo={data[2].photo} description={data[2].description}/>

                    </StyledGridItem>

                    <StyledGridItem  item  matchesMd={matchesMd} xs={12} md={6}  topEdge={false} rightEdge={true} bottomEdge={true} leftEdge={false }>
                        <StyledHorizontalBar className="horizontal--bar"/>
                        <StyledVerticalBar className="vertical--bar"/>
                        <ServiceDetail title={data[3].title} photo={data[3].photo} description={data[3].description}/>

                    </StyledGridItem>

        </Grid>
        
    )
}

export default ServiceDetails