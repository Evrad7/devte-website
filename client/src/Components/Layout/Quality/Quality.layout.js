import React, { useContext, useEffect, useRef } from "react";
import Paper from '@mui/material/Paper';
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { IntersectionObserverContext } from "../../../context/IntersectionObserverContext";
import FocusMouseFollower from "../FocusMouseFollower/FocusMouseFollower.layout";


const Quality =({title, icon, body})=>{
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

    return(
      <FocusMouseFollower scale={3} backgroundColor="#808080">
         <Box ref={ref} sx={{
              position:"relative",
              maxWidth:300,
              "&:hover":{
                "& .body:before":{
                  width:"30%",
                },
                "& .body:after":{
                  height:"80%",
                }
              },
              "&.animate":{
                "& .title":{
                    transform:"translateY(0)",
                    opacity:1,
                  },
                  "& .body":{
                    transform:"translateY(0)",
                    opacity:1,
                  },

              }
             
            }}
            >
                <Box
                className="title"
                 sx={{
                  display:"flex",
                  position:"absolute",
                  alignItems:"center",
                  top:0,
                  left:{xs:-20, md:-35},
                  zIndex:100,
                  transform:"translateY(-50%)",
                  opacity:0,
                  transition:".5s 0s ease",
                  "&  svg": {
                    width:{xs:40, md:70},
                  }
                 }}>
                    <Box component="img" 
                       src={require(`../../../assets/img/${icon}`)}
                       alt={title}
                       sx={{width:{xs:40, md:60}}} 
                       />
                    <Typography sx={{ml:2, textTransform:"uppercase", fontSize:{xs:"1.25rem", md:"1.5rem"}}} variant="h5" component="h3" color="primary">{title}</Typography>
                </Box>
              <Paper  className="body"  sx={{
                border:{xs:`1px solid ${theme.palette.primary.main}`, md:`1.5px solid ${theme.palette.primary.main}`},
                height: 'auto',
                borderRadius: '10px',
                position: 'relative',
                background:theme.palette.light.main,
                transform:"translateY(50%)",
                opacity:0,
                transition:".5s 0s ease",
                "&:before":{
                  position:"absolute",
                  content:"''",
                  top:-5,
                  left:-10,
                  width:"80%",
                  height:10,
                  background:theme.palette.light.main,
                  zIndex:99,
                  transition:"width .5s 0s ease",

                },
                "&:after":{
                  position:"absolute",
                  content:"''",
                  top:-10,
                  left:-5,
                  width:10,
                  height:"60%",
                  background:theme.palette.light.main,
                  zIndex:99,
                  transition:"height .5s 0s ease",
                },
              }}>
                <Typography sx={{mt:{xs:7, md:8.5}, pl:3, pr:{xs:0.7, md:2}, pb:2, textAlign:"left"}} component="p" > 
                      {body}
                  </Typography>
              </Paper>
           
          </Box>
      </FocusMouseFollower>
           

)
}

export default Quality;