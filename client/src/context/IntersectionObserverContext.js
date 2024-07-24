import { createContext, useEffect, useRef } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useMediaQuery } from "@mui/material";

const IntersectionObserverContext=createContext()

 function IntersectionObserverContextComponent({children}){
    const {disableIntersectionObserver}=useWindowDimensions()
    const matchesMd=useMediaQuery(theme=>theme.breakpoints.up("md"))
    const intersectionRatioTop=matchesMd?0.1:0.3
    const intersectionRatioMiddle=matchesMd?0.5:0.3
    const callback=(entries, ob)=>{
        entries.forEach(entry=>{
            const fromTop=entry.intersectionRect.top
            if(entry.rootBounds){
                const fromBottom=entry.rootBounds.height-entry.intersectionRect.bottom
                // if(fromTop>fromBottom){
                if(true){
                    // console.log("DESCEND........................................")
                    // if(entry.intersectionRatio>=intersectionRatioMiddle){
                    if(entry.isIntersecting){
                        if(entry.target.id==="tml")
                        console.log(entry)
                        entry.target.classList.add("animate")
                        ob.unobserve(entry.target)
                    }
                    // else if(entry.intersectionRatio<=intersectionRatioTop){
                    //     entry.target.classList.remove("animate")
                    //     if(entry.target.id==="tml"){
                    //         console.log("REMOVE")
                    //     }

                    // }
                }
                else if(entry.boundingClientRect.top > entry.rootBounds.height){
                    //Premier chargement de la page
                    // else if(entry.intersectionRatio<=intersectionRatioTop && fromTop<=fromBottom) {
                    if(entry.target.id==="tml"){
                     console.log(entry, "============================")
                    console.log("MONTE........................")
                    }
                        
                    entry.target.classList.remove("animate") 
    
                }
           
            }
           
        })
    }
    const threshold=[0, intersectionRatioMiddle, 0.5, 0.7, 0.9]
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

    // if(disableIntersectionObserver){
    //     document.querySelectorAll(".intersection-observer").forEach(elt=>elt.classList.add("animate"))
    //     observer.current.disconnect()
    // }
    return <IntersectionObserverContext.Provider value={{observe, unObserve}}>
                {children}
            </IntersectionObserverContext.Provider>
}

export {IntersectionObserverContext, IntersectionObserverContextComponent}
