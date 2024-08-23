import { useContext, useEffect } from "react"
import { HeaderContext } from "../../../context/HeaderContext"
import {MouseFollower, useControlOptions } from "react-mouse-follower"
import useWindowDimensions from "../../../hooks/useWindowDimensions"
import Header from "../Header/Header.layout"
import { useMediaQuery } from "@mui/material"

const PageContainer=({hideHeader=false, children})=>{
    const {setBackground, setElevation}=useContext(HeaderContext)
    const {clearLayers, removePreviousLayer} = useControlOptions();
    const {isDesktop}=useWindowDimensions()
    const matchesMd=useMediaQuery(theme=>theme.breakpoints.up("md"))


    useEffect(()=>{
        if(isDesktop){
            setBackground("transparent")
            setElevation(0)
            clearLayers();
            
        }
        else if(!matchesMd){
            window.scrollTo(0, 0)
        }

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