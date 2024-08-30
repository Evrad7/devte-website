import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Title from "../Title/Title.layout";


const Experiences =()=>{
  const theme=useTheme()
    return(
       <Box sx={{
        position:"relative",
        display:"flex",
        justifyContent:"center",
        transform:"translateX(10px)",
       }}>
          <Box sx={{
            position:"absolute",
            top:-90,
            left:"14%",
            zIndex:-1

            }}>
            <Title text="Expérience" color="primary" animationTextDirection="right"/>
          </Box>


          <Box sx={{
            position:"absolute",
            bottom:-165,
            right:"20%",

            }}>
            <Title text="Expérience" color="primary" animationTextDirection="left"/>
          </Box>
          <Box sx={{
            width:{xs:"50%", sm:250},
            height:300,
            border:`1.8px solid ${theme.palette.primary.main}`,
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            background:theme.palette.light.main,
            textAlign:"center",
            pr:2,
            borderRadius:1,
          }}>
              <Typography color="primary.main" variant="h1" component="span"  sx={{fontSize:{xs:"3rem", md:"6rem"}}}>+20</Typography>
              <Typography color="primary.main" variant="h5" component="p" lineHeight={2}>Projets accomplis</Typography>

          </Box>

          <Box sx={{
            width:{xs:"50%", sm:250},
            height:300,
            border:`1.8px solid ${theme.palette.primary.main}`,
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            transform:"translate(-10%, 25%)",
            background:theme.palette.light.main,
            textAlign:"center",
            position:"relative",
            borderRadius:1,
            "&:before":{
              position:"absolute",
              content:"''",
              top:"15%",
              bottom:"35%",
              left:-5,
              width:10,
              background:theme.palette.light.main,


            }
          }}>
              <Typography color="primary.main" variant="h1" component="span"  sx={{fontSize:{xs:"3rem", md:"6rem"}}}>+10</Typography>
              <Typography color="primary.main" variant="h5" component="p" lineHeight={2}>clients satisfaits</Typography>

          </Box>
       </Box>
    )
}

export default Experiences;