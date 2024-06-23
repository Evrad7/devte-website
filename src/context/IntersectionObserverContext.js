import { createContext, useEffect, useRef } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

const IntersectionObserverContext=createContext()

 function IntersectionObserverContextComponent({children}){
    const {height}=useWindowDimensions()
    const n=useRef(0)
    const callback=(entries, ob)=>{
        entries.forEach(entry=>{
            const fromTop=entry.intersectionRect.top
            const fromBottom=entry.rootBounds.height-entry.intersectionRect.bottom
            if(fromTop>fromBottom){
                if(entry.intersectionRatio>=0.5){
                    entry.target.classList.add("animate")
                }
                else{
                    entry.target.classList.remove("animate") 
                }
            }
            else if(entry.boundingClientRect.top > height){
                entry.target.classList.remove("animate") 

            }
        })
    }
    console.log("NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN")
    console.log("BIIIIIIIIIIIIIIIG---------------------")
    const observer=useRef(new IntersectionObserver(callback, {threshold:[0, .5],}))
    n.current+=1
    console.log(n, "BANNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNG----------------------")
    observer.current.observe(document.querySelector("body"))

    const observe=(element)=>{
        observer.current.observe(element)
    }
    const unobserve=(element)=>{
        observer.current.unobserve(element)
    }
    useEffect(()=>{
        const currentObserver=observer.current
        return ()=>currentObserver.disconnect()
    }, [])
    return <IntersectionObserverContext.Provider value={{observe, unobserve}}>
                {children}
            </IntersectionObserverContext.Provider>
}

export {IntersectionObserverContext, IntersectionObserverContextComponent}
