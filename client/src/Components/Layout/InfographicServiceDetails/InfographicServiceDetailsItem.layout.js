import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { useContext, useEffect, useRef } from "react";
import { IntersectionObserverContext } from "../../../context/IntersectionObserverContext";

const InfographicServiceDetailsItem = ({title, description, photo, sx}) => {
    // `photo` est le nom de la photo dans assets/img/services_details
    const theme=useTheme()
    const ref=useRef(null)
    const {observe, unObserve} =useContext(IntersectionObserverContext)
    useEffect(()=>{
      observe(ref.current)
      return ()=>{
          const currentRef=ref.current
          unObserve(currentRef)
      }
    }, [])
    return ( 
        <Box ref={ref} sx={{...sx,
            transform:"translateY(50%)",
            opacity:0,
            transition:"transform 1s 0s  cubic-bezier(0.5, 0, 0, 1), opacity 1s 0s  cubic-bezier(0.5, 0, 0, 1)",
            "&.animate":{
                transform:"translateY(0)",
                opacity:1,
            }
        }}>
            <Typography sx={{
                            px:1,
                            color:theme.palette.light.main,
                        }} component="h2" variant="h4">
                            {title}
                           </Typography>
                    <Box sx={{
                        py:1,
                        maxHeight:500,
                        maxWidth:500,
                    }}>
                        <img style={{width:"100%", height:"100%"}} src={require(`../../../assets/img/services_details/${photo}`)} alt="billets"/>
                    </Box>
                    <Typography sx={{
                        px:1,
                        color:theme.palette.light.main,
                    }} component="p" variant="body1">
                        {description}
                    </Typography>
        </Box>
     );
}
 
export default InfographicServiceDetailsItem;