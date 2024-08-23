import { createContext, useEffect, useRef, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";


// Contexte utilisé pour changer le background du header en fonction de la couleur du contenu visible
const HeaderContext=createContext()


const HeaderContextComponent=({children})=>{
    
    const {height, isDesktop}=useWindowDimensions()
    const [background, setBackground]=useState("transparent")
    const [elevation, setElevation]=useState(0)

    const callback=(entries)=>{

        entries.forEach((entry,index) => {
            const fromTop=entry.intersectionRect.top
            if(entry.rootBounds){
                const fromBottom=entry.rootBounds.height-entry.intersectionRect.bottom
                if(entry.isIntersecting && fromTop>=fromBottom){
                    const currentBackground=entry.target.getAttribute("header-background")
                    const currentElevation=entry.target.getAttribute("elevation")
                    setBackground(currentBackground)
                    setElevation(currentElevation?currentElevation:elevation)
                    entries.forEach(elt=>elt.target.classList.remove("active"))
                    entry.target.classList.add("active")
                }
                else if(entry.intersectionRatio<=0 && fromTop<=fromBottom) {
                    if(entry.target.classList.contains("main")){
                        setBackground("transparent")
                        setElevation(0)
                    }
                }
            }
            
        });
    }
   
    const observer=useRef((typeof window!=="undefined") && (isDesktop)?new IntersectionObserver(callback, {threshold:0, rootMargin:`-0px 0px -${height}px 0px`,}):null)

    useEffect(()=>{
            return ()=>{
                if(observer.current){
                    const currentObserver=observer
                    currentObserver.current.disconnect()
                }

            }

    }, [isDesktop])
    const observe=(target, background)=>{
        if(observer.current){
            target.setAttribute("header-background", background)
            target.setAttribute("elevation", 10)
            observer.current.observe(target)
        }

    }
    const unObserve=(target)=>{
        if(observer.current){
            if(target){
                observer.current.unobserve(target)
            }
        }
    }
    const observeMobile=(target)=>{
        if(observer.current){
            target.setAttribute("header-background", "light")
            target.setAttribute("elevation", 1)
            observer.current.observe(target)
        }
    }
    return (
        <HeaderContext.Provider value={{background, setBackground, elevation, setElevation, observe, observeMobile, unObserve}}>
            {children}
        </HeaderContext.Provider>
    )
    
    
}

export {HeaderContext, HeaderContextComponent}