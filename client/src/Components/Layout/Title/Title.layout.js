import { useTheme } from "@emotion/react"
import { Box, Typography } from "@mui/material"
import { useContext, useEffect, useRef } from "react"
import { IntersectionObserverContext } from "../../../context/IntersectionObserverContext"
import FocusMouseFollower from '../FocusMouseFollower/FocusMouseFollower.layout';



const Title=({text, icon, color, textDecorationColor, mt=5, mb=5, animationTextDirection="left", textAlign="left", justifyContent={xs:"flex-start", sm:"center"}})=>{
    // `color props take `light` or `primary`,
    // `animationTextDirection` takes `right` or `left`
    const theme=useTheme()
    const ref=useRef(null)
    const {observe, unObserve} =useContext(IntersectionObserverContext)
    const background=textDecorationColor?textDecorationColor:(color=="light"?"primary":"light")
    useEffect(()=>{
        observe(ref.current)
        return ()=>{
            const currentRef=ref.current
            unObserve(currentRef)
        }
    }, [])
    return(
        <Box ref={ref} 
            sx={{
                display:"flex",
                justifyContent:justifyContent,
                mt:mt,
                mb:mb,
                "&.animate":{
                    "& .img, & h2":{
                        opacity:1,
                        transform:"translateX(0)"
                    }
                }
                }}>
            
            <FocusMouseFollower scale={4}>
                {icon&&<Box className="img"
                    sx={{
                        width:{xs:30, md:50},
                        mr:1.5, ml:3,
                        opacity:0,
                        transform:"translateX(-600%)",
                        transition:"opacity .9s 0s cubic-bezier(0.5, 0, 0, 1), transform .9s 0s cubic-bezier(0.5, 0, 0, 1)",
                    }}>
                    <img src={require(`../../../assets/img/titles/${icon}`)} alt={text} style={{width:"100%",}}/>
                </Box>}
            </FocusMouseFollower>
            <Typography 
             sx={{
                ml:icon||textAlign==="center"?"unset":4,
                color:theme.palette[color].main,
                fontSize:{xs:"1.7rem", md:"3rem"}, display:"inline",
                textTransform:"uppercase",
                textDecoration:"line-through",
                textDecorationColor:theme.palette[background].main,
                textDecorationThickness:{xs:2, md:3},
                opacity:0,
                transform:animationTextDirection==="right"?"translateX(-50%)":"translateX(50%)",
                transition:"opacity .9s 0s cubic-bezier(0.5, 0, 0, 1), transform .9s 0s cubic-bezier(0.5, 0, 0, 1)",
                textAlign:textAlign,
                }}
                variant="h2" component="h2">{text}
            </Typography>
        </Box>
    )
}
export default Title