import { useTheme } from "@emotion/react"
import { Box, Typography, useMediaQuery } from "@mui/material"
import maskAgileTopLeft from "../../../assets/img/mask_agile_top_left.svg"
import maskAgileTopRight from "../../../assets/img/mask_agile_top_right.svg"
import maskAgileBottomRight from "../../../assets/img/mask_agile_bottom_right.svg"
import maskAgileBottomLeft from "../../../assets/img/mask_agile_bottom_left.svg"
import maskAgileBottom from "../../../assets/img/mask_agile_bottom.svg"
import maskAgileTop from "../../../assets/img/mask_agile_top.svg"
import maskAgileTopBottom from "../../../assets/img/mask_agile_top_bottom.svg"


import AgileImg from "../../../assets/img/agile.svg"
import { useContext, useEffect, useRef } from "react"
import { IntersectionObserverContext } from "../../../context/IntersectionObserverContext"



const AgileItem=({title, body, positionHole})=>{
    // le prop `positionHole` définit la position du creu circulaire sur large écran: `top left` `top right` `bottom left` ou `bottomright`
    const theme=useTheme()
    const matchesMd=useMediaQuery((theme=>theme.breakpoints.up("md")))
    const {observe, unObserve}=useContext(IntersectionObserverContext)
    const ref=useRef(null)
    const imgAgileRef=useRef(null)

    useEffect(()=>{
        observe(ref.current)
        observe(imgAgileRef.current)
        return ()=>{
            const currentRef=ref
            const currentImgAgileRef=imgAgileRef
            unObserve(currentRef.current)
            unObserve(currentImgAgileRef.current)
        }
    }, [observe, unObserve])

    let maskAgile=matchesMd?maskAgileTopLeft:maskAgileTop
    let pt=!matchesMd?5:8
    let pb=3
    const translateDistance=60
    let translateValue=`translateX(${translateDistance}px) translateY(${translateDistance}px)`
    if(positionHole=="top right"){
        maskAgile=matchesMd?maskAgileTopRight:maskAgileTopBottom
        translateValue=`translateX(-${translateDistance}px) translateY(${translateDistance}px)`
    }
    else if(positionHole==="bottom right"){
        maskAgile=matchesMd?maskAgileBottomRight:maskAgileBottom
        pt=!matchesMd?5:3
        pb=7
        translateValue=`translateX(-${translateDistance}px) translateY(-${translateDistance}px)`
    }
    else if(positionHole==="bottom left"){
        maskAgile=matchesMd?maskAgileBottomLeft:maskAgileTopBottom
        pt=!matchesMd?5:3
        pb=7
        translateValue=`translateX(${translateDistance}px) translateY(-${translateDistance}px)`

    }
    return (
        <Box ref={ref} id={positionHole==="bottom right"?"tml":null} className="intersection-observer"
            sx={{
                position:"relative",
                transition:".5s 0S linear",
                opacity:0,
                transform:{xs:`translateX(-${translateDistance}px)`, md:translateValue},
                "&.animate":{
                    transform:{xs:"translateX(0)", md:"translateX(0) translateY(0)"},
                    opacity:1,
                }
                }}>
            <Box ref={imgAgileRef} className="intersection-observer" sx={{
                display:{xs:positionHole!=="top left"?"block":"none",
                 md:"none"}, position:"absolute", left:"50%", bottom: "0",
                 p:0,
                 transform:"translateX(-50%) translateY(75%)",
                 transition: "1s 0s ease",
                 "&.animate":{
                    transform:"translateX(-50%) translateY(75%) rotate(360deg)"
                }}}>
                <img src={AgileImg} style={{width:70}} alt="Approche agile"/>
            </Box>

            <Box sx={{px:5,
                backgroundColor:theme.palette.info.dark,
                border:`solid 1.5px ${theme.palette.secondary.main}`,
                px:{xs:2, md:4},
                pt:pt,
                pb:pb,
                width:310,
                height:284,
                //  background:`radial-gradient(circle 50px at ${positionHole} ,#0000 98%,red  )` 
                maskImage:`url(${maskAgile})`,
                maskSize:"cover",
                maskRepeat:"no-repeat",
                position:"relative",
                zIndex:1000,            
         }}>
              <Typography sx={{color:theme.palette.light.main, pb:2}} variant="h6" component="h3">APPROCHE INCREMETALE</Typography>
              <Typography variant="body1" component="p" sx={{color:theme.palette.light.main}}> 
                    Nous découpons votre projet en sections fonctionnelles et successives pour toujours s'assurer a chaque étape
                    que votre besoin est respecté.
                   
              </Typography>
           
        </Box>

        </Box>
        
    )
}

export default AgileItem