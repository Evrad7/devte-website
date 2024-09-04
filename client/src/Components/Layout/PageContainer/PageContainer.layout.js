import { useContext, useEffect } from "react"
import { HeaderContext } from "../../../context/HeaderContext"
import {MouseFollower, useControlOptions } from "react-mouse-follower"
import useWindowDimensions from "../../../hooks/useWindowDimensions"
import Header from "../Header/Header.layout"

const PageContainer=({hideHeader=false, children})=>{
    const {setBackground, setElevation}=useContext(HeaderContext)
    const {clearLayers} = useControlOptions();
    const {isDesktop}=useWindowDimensions()


    useEffect(()=>{
        if(isDesktop){
            setBackground("transparent")
            setElevation(0)
            clearLayers();
        }
        window.scrollTo(0, 0)

    }, [])
    return(
        <>
            {isDesktop &&<MouseFollower/>}
            {(!isDesktop || !hideHeader)&&<Header />}
            {children}
        </>
    )
}
export default PageContainer