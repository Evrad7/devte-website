import { Box, Typography } from "@mui/material"
import Separator from "../Separator/Separator.layout"
import { useTheme } from "@emotion/react"
import AnimatedWaveButton from "../AnimatedWaveButton/AnimatedWaveButton.layout"
import Background from "../../../assets/img/stroboscope.svg"
import { useContext, useEffect, useRef } from "react"
import { IntersectionObserverContext } from "../../../context/IntersectionObserverContext"
import CustomUpdateFollower from "../CustomUpdateFollower/CustomUpdateFollower.layout"




const Action=()=>{
    const theme=useTheme()
    const {observe, unObserve}=useContext(IntersectionObserverContext)
    const ref=useRef(null)
  
      useEffect(()=>{
          observe(ref.current)
          return ()=>{
              const currentRef=ref.current
              unObserve(currentRef)
  
          }
      })

      const onClickHandler=()=>{
        document.getElementById("start-project").scrollIntoView()
      }
    return (
        <CustomUpdateFollower  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.light.main}}>
            <Box ref={ref} sx={{
                backgroundColor:theme.palette.primary.main,
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-between",
                position:"relative",
                overflow:"hidden",
                "&:before":{
                    position:"absolute",
                    content:"''",
                    top:0,
                    left:0,
                    right:0,
                    bottom:0,
                    backgroundImage:`url(${Background})`,
                    backgroundRepeat:"no-repeat",
                    backgroundPosition:"left bottom",
                    opacity:0,
                    transform:"translate(-50px, 50px)",
                    transition:"opacity .9s 0s cubic-bezier(0.5, 0, 0, 1), transform .9s 0s cubic-bezier(0.5, 0, 0, 1)",

                },
            
                "&.animate .content, &.animate:before":{
                    opacity:1,
                    transform:"translate(0, 0)",
                }
                
                
                }}>
                <Separator direction="bottom"/>
                
                    <Box className="content" sx={{
                        py:7,
                        textAlign:"center",
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        alignItems:"center",
                        px:{xs:2, sm:5, md:15, lg:50},
                        opacity:0,
                        transform:"translateY(50%)",
                        transition:"opacity .9s 0s cubic-bezier(0.5, 0, 0, 1), transform .9s 0s cubic-bezier(0.5, 0, 0, 1)",
                        }}>
                        <Typography sx={{mb:{xs:2, md:0}}} component="p" variant="body2" color="light.main">
                             Transformez vos idées en solutions concrètes et Boostez votre performance digitale avec des solutions informatiques innovantes et sur-mesure : services informatiques adaptés à vos besoins
                        </Typography>
                        <AnimatedWaveButton onClick={onClickHandler} text="FAITES DECOLLER VOTRE PROJET" color="light" />
                    </Box>

                <Separator direction="top"/>
            </Box>
        </CustomUpdateFollower>
    )   
}

export default Action