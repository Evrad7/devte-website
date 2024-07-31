import { Box } from "@mui/material"
import { createElement, useEffect, useMemo, useRef, useState } from "react"
import { useTheme } from "@emotion/react"
import { createPortal } from "react-dom"
import { StyledCurtainDrawer } from "./CurtainDrawer.style"


const CurtainDrawer =({open, transitionDuration, children})=>{
   const ref=useRef(null)
   const curtainLeftRef=useRef(null)
   const curtainRightRef=useRef(null)
   const prevStateOpen=useRef(open)
   
   let done=false
   let start, previousTimestamp

   const animationFrameCurtainCallback=(timestamp)=>{
        if(start===void 0){
            start=timestamp
        }
        const elapsed=timestamp-start

        if(previousTimestamp!=timestamp){

            const count=Math.min(elapsed*0.1, 50)
            
            const distance=open?(count-50):-count

            curtainLeftRef.current.style.left=`${distance}%`
            curtainRightRef.current.style.right=`${distance}%`
            console.log(count, distance, "----------------------------")
            // console.log(elapsed, count, "----------------------------")

            if( count===50)done=true

        }
        if(elapsed<700){
            previousTimestamp=timestamp
             if(!done)window.requestAnimationFrame(animationFrameCurtainCallback)
            else{
                previousTimestamp=0
                done=false
                start=void 0
                if(!open){
                    curtainLeftRef.current.style.left="-100%"
                    curtainRightRef.current.style.right="-100%"
                }

            }

        }

   }


    
    const openDrawer=()=>{
        if(ref.current){
            // curtainLeftRef.current.classList.remove("animate")
            // curtainRightRef.current.classList.remove("animate")

            // void curtainLeftRef.current.offsetWidth
            // void curtainRightRef.current.offsetWidth
            // curtainLeftRef.current.style.animationDirection="normal"
            // curtainRightRef.current.style.animationDirection="normal"

            setTimeout(()=>{
                curtainLeftRef.current.classList.add("animate")
                curtainRightRef.current.classList.add("animate")
            }, 0)
           
        }
    }
    const closeDrawer=()=>{
        if(ref.current){
            setTimeout(()=>{
                curtainLeftRef.current.classList.remove("animate")
                curtainRightRef.current.classList.remove("animate")
            },  0)
          

            // void curtainLeftRef.current.offsetWidth
            // void curtainRightRef.current.offsetWidth
            // curtainLeftRef.current.style.animationDirection="reverse"
            // curtainRightRef.current.style.animationDirection="reverse"

            // curtainLeftRef.current.classList.add("animate")
            // curtainRightRef.current.classList.add("animate")
        }
    }
   
    const toggleDrawer=()=>{
        open?openDrawer():closeDrawer()
        //utilise requestAnimationFrame pour une meilleur performance
        // window.requestAnimationFrame(animationFrameCurtainCallback)
    }

    useEffect(()=>{
        console.log("LLLOLLLLLLLLLLLLLLLLLLLLLLLLLllll")
       if(prevStateOpen.current!==open){
            toggleDrawer()
       }
       prevStateOpen.current=open
    }, [open])


    const container = typeof window !=="undefined"?window.document.body:undefined
    if(container){
        return createPortal(
            <StyledCurtainDrawer ref={ref}
                // Custom Drawer
                // onClose={handleDrawerToggle}
                transitionDuration={transitionDuration}
                sx={{display: { xs: 'block', md: 'none' },}}
                >
                <Box ref={curtainLeftRef} className="curtain-left curtain" >
                    {children}
                </Box>
                <Box ref={curtainRightRef}
                    className="curtain-right curtain" >
                    {children}
                </Box>
            </StyledCurtainDrawer>,
            container
    
        )
    }
  
 
 
        
 
}

export default CurtainDrawer