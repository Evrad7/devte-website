
import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import React from 'react'
import CrewImage from "../../../assets/img/crew.png"


const Crew = () => {
    const theme=useTheme()
  return (
    <Box sx={{minHeight:600,
         backgroundImage:`url(${CrewImage})`,
         backgroundRepeat:"no-repeat",
         backgroundPosition:"center",
         backgroundSize:"100% 100%",
         position:"relative",
         borderBottomLeftRadius:{xs:"15%", sm:"35%", md:"50%", lg:"50%"},
         borderBottomRightRadius:{xs:"15%", sm:"35%", md:"50%", lg:"50%"},
         overflow:"hidden",
         display:"flex",
         alignItems:"center",
         display:"flex",
         justifyContent:"center",
         alignItems:"center",
         "&:before":{
            content:"''",
            position:"absolute",
            top:0,
            right:0,
            bottom:0,
            left:0,
            background:theme.palette.primary.main,
            opacity:.6
            
         },
         
         }}>
      
         <Typography sx={{
            color:theme.palette.light.main,
            fontSize:"6rem",
            textTransform:"uppercase",
            zIndex:100,
         }}>
            Une équipe 360°
        </Typography>
    </Box>
  )
}

export default Crew