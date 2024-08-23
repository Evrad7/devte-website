import { createContext, useEffect, useRef } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useMediaQuery } from "@mui/material";

const IntersectionObserverContext=createContext()

 function IntersectionObserverContextProvider({children}){
    const matchesMd=useMediaQuery(theme=>theme.breakpoints.up("md"))
    const intersectionRatioTop=0.1
    const intersectionRatioMiddle=matchesMd?0.5:0.2
    const {isDesktop}=useWindowDimensions()
    const callback=(entries, ob)=>{
        entries.forEach(entry=>{
            const fromTop=entry.intersectionRect.top
            if(entry.rootBounds){
                const fromBottom=entry.rootBounds.height-entry.intersectionRect.bottom
                // if(isDesktop){
                //     if(fromTop>fromBottom){
                //         if(entry.intersectionRatio>=intersectionRatioMiddle){
                //             setTimeout(()=>entry.target.classList.add("animate"), 0)
                //         }
                //         else if(entry.intersectionRatio<=intersectionRatioTop){
                //             setTimeout(()=>entry.target.classList.remove("animate"), 0)
                //         }
                //     }
                //     else if(entry.boundingClientRect.top > entry.rootBounds.height){
                //         //Premier chargement de la page
                //         // else if(entry.intersectionRatio<=intersectionRatioTop && fromTop<=fromBottom) {
                //         entry.target.classList.remove("animate") 
        
                //     }
                // }
                
           
                if(entry.isIntersecting){
                    entry.target.classList.add("animate")
                    ob.unobserve(entry.target)
                }
            }
           
        })
    }
    const threshold=isDesktop?[intersectionRatioTop, intersectionRatioMiddle]:[intersectionRatioMiddle]
    const observer=typeof window!=="undefined"?useRef(new IntersectionObserver(callback, {threshold:threshold})):useRef(null)

    const observe=(target)=>{
        observer.current.observe(target)
    }
    const unObserve=(target)=>{
        if(target){
            observer.current.unobserve(target)
        }
    }
    useEffect(()=>{
        const currentObserver=observer.current
        return ()=>currentObserver.disconnect()
    }, [])


    return <IntersectionObserverContext.Provider value={{observe, unObserve}}>
                {children}
            </IntersectionObserverContext.Provider>
}

export {IntersectionObserverContext, IntersectionObserverContextProvider}
