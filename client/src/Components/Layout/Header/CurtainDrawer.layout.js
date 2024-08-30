import { Box } from "@mui/material"
import { createElement, useEffect, useMemo, useRef, useState } from "react"
import { useTheme } from "@emotion/react"
import { createPortal } from "react-dom"
import { StyledCurtainDrawer } from "./CurtainDrawer.style"


const CurtainDrawer =({open, transitionDuration, children})=>{
   const curtainLeftRef=useRef(null)
   const curtainRightRef=useRef(null)
   
   let openDrawerId, closeDrawerId

    const openDrawer=()=>{
            clearTimeout(closeDrawerId)
            openDrawerId=setTimeout(()=>{
                    if(curtainLeftRef.current && curtainRightRef.current){
                            curtainLeftRef.current.classList.add("animate")
                            curtainRightRef.current.classList.add("animate")
                    }

            }, 0)
           
    }
    const closeDrawer=()=>{
            clearTimeout(openDrawerId)
            closeDrawerId=setTimeout(()=>{
                if(curtainLeftRef.current && curtainRightRef.current){
                    curtainLeftRef.current.classList.remove("animate")
                    curtainRightRef.current.classList.remove("animate")
                 }

            },  0)
          

            // void curtainLeftRef.current.offsetWidth
            // void curtainRightRef.current.offsetWidth
            // curtainLeftRef.current.style.animationDirection="reverse"
            // curtainRightRef.current.style.animationDirection="reverse"

            // curtainLeftRef.current.classList.add("animate")
            // curtainRightRef.current.classList.add("animate")
    }
   
    const toggleDrawer=()=>{
        open?openDrawer():closeDrawer()
        //utilise requestAnimationFrame pour une meilleur performance
        // window.requestAnimationFrame(animationFrameCurtainCallback)
    }

    useEffect(()=>{
       toggleDrawer()
    }, [open])


    const container = typeof window !=="undefined"?window.document.body:undefined
    if(container){
        return createPortal(
            <StyledCurtainDrawer
                // Custom Drawer
                // onClose={handleDrawerToggle}
                transitionDuration={transitionDuration}
                sx={{display: { xs: 'block', lg: 'none' },}}
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