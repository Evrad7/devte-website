import { useTheme } from '@emotion/react'
import { Box, Paper, Typography } from '@mui/material'
import React, { useContext, useEffect, useRef } from 'react'
import Separator from '../Separator/Separator.layout'
import { Language, LinkedIn, Web } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import ButtonMouseFollower from '../ButtonMouseFollower/ButtonMouseFollower.layout'
import CustomUpdateFollower from '../CustomUpdateFollower/CustomUpdateFollower.layout'
import { IntersectionObserverContext } from '../../../context/IntersectionObserverContext'

const CrewMember = ({name, photo, description, linkedInLink, portoFilioLink, inverse=false}) => {
    // la prop photo est le nom de la photo avec extension dans assets/img/crew
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
    <CustomUpdateFollower  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.light.main}}>
        <Box ref={ref} sx={{
            mb:{xs:40, md:30},
            mt:{xs:35, md:0},
            background:theme.palette.primary.main,
            position:"relative",
            "&.animate":{
                ".MuiPaper-root":{
                    transform:{xs:"translate(-50%, -60%)",md:"translateX(0)"},
                    opacity:1,
                },
                ".body":{
                    transform:"translate(0, 0)",
                    opacity:1,
                },
                
            }
            }}>
            <Paper  sx={{
                height:350,
                width:250,
                background:theme.palette.light.main,
                position:"absolute",
                top:-50,
                left:{xs:"50%", md:inverse?"calc(100% - 300px)":50},
                transform:{xs:"translate(-50%, -70%)",md:inverse?"translateX(50%)":"translateX(-50%)"},
                backgroundImage:`url(${require(`../../../assets/img/crew/${photo}`)})`,
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
                zIndex:theme.zIndex.fab,
                transition:"opacity .9s 0s cubic-bezier(0.5, 0, 0, 1), transform .9s 0s cubic-bezier(0.5, 0, 0, 1)",
                opacity:0,
                "&:before":{
                    position:"absolute",
                    content:"''",
                    top:0,
                    left:0,
                    bottom:0,
                    right:0,
                    backgroundImage:{xs:`linear-gradient(to top, ${theme.palette.primary.main}, rgba(255, 255, 255, .1), transparent)`, md:"none"}
                },
                boxShadow:"0px -2px 1px -1px rgba(0, 0, 0, 0.2), 0px -1px 1px 0px rgba(0, 0, 0, 0.14), 0px -1px 3px 0px rgba(0, 0, 0, 0.12)"
            }}>
                <Typography 
                sx={{
                    position:"absolute",
                    transform:{xs:"translateX(25%)", md:"none"},
                    whiteSpace:"nowrap",
                    top:{xs:"90%", md:15},
                    left:{xs:0, md:inverse?"-100%":"110%"},
                    color:{xs:theme.palette.light.main, md:theme.palette.primary.main},
                    fontSize:{xs:"1.5rem", md:"2.125rem"}
                    

                }}
                variant="h4" component="h4">
                {name}
                </Typography>
            </Paper>
            <Separator direction="bottom" />
            <Box className="body" sx={{
                    minHeight:175,
                    color:theme.palette.light.main,
                    ml:{xs:3, md:inverse?3:"400px"},
                    mr:{md:inverse?"400px":3},
                    pr:3,
                    pt:{xs:8, md:3},
                    pb:3,
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    transform:{xs:"translateY(50%)", md:inverse?"translateX(-50%)":"translateX(50%)"},
                    transition:"opacity .9s 0s cubic-bezier(0.5, 0, 0, 1), transform .9s 0s cubic-bezier(0.5, 0, 0, 1)",
                    opacity:1,
    
                    
                }}>
                <Typography variant="body1" component="p" sx={{textAlign:{xs:"center",md:inverse?"right":"left"}}}>{description}</Typography>
                <Typography variant="body1" component="div" sx={{
                    justifyContent:{xs:"center", md:inverse?"flex-end":"flex-start"},
                    display:"flex",

                    mt:2.5 }}>
                    <ButtonMouseFollower>
                        <Link to={linkedInLink} target="_blank">
                            <LinkedIn color="light" sx={{fontSize:30}} />
                        </Link>
                    </ButtonMouseFollower>
                    <ButtonMouseFollower>
                        <Link to={portoFilioLink} target="_blank" style={{marginLeft:20}}>
                            <Language color="light" sx={{fontSize:30}} />
                        </Link>
                    </ButtonMouseFollower>
             
                    
                </Typography>
            </Box>
            <Separator direction="top" />
            
        </Box>
    </CustomUpdateFollower>
   
  )
}

export default CrewMember