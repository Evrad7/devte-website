import { MouseFollower, useControlOptions } from "react-mouse-follower"
import Header from "../Header/Header.layout"
import { useEffect } from "react"


const PageContainer=({children})=>{
    const {clearLayers}=useControlOptions()
    useEffect(()=>{
        clearLayers()
    }, [])
    return(
        <>
            <MouseFollower/>
            <Header/>
            {children}
        </>
    )
}
export default PageContainer