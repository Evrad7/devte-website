import { useTheme } from '@emotion/react'
import { Box, Paper } from '@mui/material'
import React from 'react'

const CrewMember = () => {
    const theme=useTheme()
  return (

        <Box sx={{
            my:5,
            height:200,
            background:theme.palette.primary.main,
            position:"relative",
            }}>

        <Paper sx={{
            height:300,
            width:200,
            background:theme.palette.light.main,
            position:"absolute",
            top:-50,
            left:50,
            backgroundImage:`url(${require("../../../assets/img/dev3.png")})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
        }}>

        </Paper>
        </Box>
   
  )
}

export default CrewMember