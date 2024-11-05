
import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import React from 'react'
import CrewImage from "../../../assets/img/crew.png"


const Crew = () => {
    const theme=useTheme()
  return (
    <Box sx={{
         minHeight:{xs:300, md:600},
         backgroundImage:`url(${CrewImage})`,
         backgroundRepeat:"no-repeat",
         backgroundPosition:"center",
         backgroundSize:"100% 100%",
         position:"relative",
         borderBottomLeftRadius:{xs:"15%", sm:"35%", md:"50%", lg:"50%"},
         borderBottomRightRadius:{xs:"15%", sm:"35%", md:"50%", lg:"50%"},
         overflow:"hidden",
         py:10,
         px:{xs:2, md:10},
         // alignItems:"center",
         display:"flex",
         flexDirection:"column",
         alignItems:{xs:"center", md:"flex-start"},
         "&:before":{
            content:"''",
            position:"absolute",
            top:0,
            right:0,
            bottom:0,
            left:0,
            background:theme.palette.primary.main,
            opacity:.7
         },
         
         }}>
      
         <Typography variant="h4" sx={{

            color:theme.palette.light.main,
            textTransform:"uppercase",
            zIndex:100,
            fontSize:{xs:"1.5rem", md:"2.125rem"},
            lineHeight:{xs:"40px", md:"60px"},
         }}>
            Une équipe agile <br/> et performante
        </Typography>

        <Typography variant="h6" sx={{
            color:theme.palette.light.main,
            zIndex:100,
            mt:15,
            ml:25,
            display:{xs:"none", md:"inline"}
         }}>La réalisation de votre projet, des conseils stratégiques, des assistances techniques, des soutiens personnalisés, nous sommes là pour transformer vos idées en succès durable.
        </Typography>
    </Box>
  )
}

export default Crew