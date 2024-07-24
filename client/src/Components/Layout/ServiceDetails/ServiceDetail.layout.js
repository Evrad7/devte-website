import { useTheme } from "@emotion/react"
import { Box, Typography } from "@mui/material"
import { useContext, useEffect, useRef } from "react"
import { IntersectionObserverContext } from "../../../context/IntersectionObserverContext"


const ServiceDetail=({title, photo, description})=>{
    const theme=useTheme()
    const ref=useRef(null)
    const {observe, unObserve}=useContext(IntersectionObserverContext)
    useEffect(()=>{
        observe(ref.current)
        const currentRef=ref.current
        return ()=>unObserve(currentRef)
    }, [observe, unObserve])

    return (
        <Box  className="item-detail" sx={{background:theme.palette.light.main, px:5, pt:5, pb:{xs:5, md:1}, height:{md:300}}} >
            <Box ref={ref} className="animate intersection-observer">
                <Box sx={{display:"flex", alignItems:"center", flexDirection:{xs:"column", sm:"row"}}}>
                    <img src={require(`../../../assets/img/services/${photo}`)} alt={title} style={{width:100, height:"auto"}}/>
                    <Typography variant="h4" 
                    sx={{ml:{xs:2, sm:5}, 
                    fontSize:{xs:"1.5rem", sm:"2.125rem"},
                    pt:{xs:1, sm:"auto"}
                    }}>{title}</Typography>
                </Box>
                <Typography variant="body1" component="p" sx={{mt:{xs:2, sm:4}}}>
                    {description}
                </Typography>
            </Box>
            
        </Box>
    )
}

export default ServiceDetail