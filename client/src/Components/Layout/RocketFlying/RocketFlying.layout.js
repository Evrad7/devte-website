import { Box, Divider } from "@mui/material"
import RocketGradient from "../../../assets/img/rocket_gradient.svg"
import { useTheme } from "@emotion/react"
import { useContext, useEffect, useRef } from "react"
import { IntersectionObserverContext } from "../../../context/IntersectionObserverContext"


const RocketFlying=()=>{
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
    return (
        <Box ref={ref} sx={{
            pl:2,
            pr:7,
            position:"relative",
            display:"flex",
            alignItems:"center",
            "&.animate":{
                "& hr":{
                    width:"95%",
                    opacity:1,
                }
            }
          }}>
                <Divider sx={{
                  width:"0%",
                  border:`2px solid ${theme.palette.primary.main}`,
                  height:0,
                  mr:2,
                  transition:"opacity 1.3s .2s cubic-bezier(0.5, 0, 0, 1), width 1.3s .2s cubic-bezier(0.5, 0, 0, 1)",
                  opacity:0,

                }} />
                  <img src={RocketGradient} alt="Roquette" style={{
                }} />
           </Box>
    )
}

export default RocketFlying