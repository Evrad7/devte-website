import { Box, Grid, Typography, useMediaQuery } from "@mui/material"
import smokeImage from '../../../assets/img/fume.png';
import PC from '../../../assets/img/16.png';
import RocketIcon from '@mui/icons-material/Rocket';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import  useWindowDimensions from '../../../hooks/useWindowDimensions'
import { CloudSync , Diversity1, Star } from "@mui/icons-material";
import { StyledBoxContainer } from "./Service.style";
import { useTheme } from "@emotion/react";
import AnimatedWaveButton from "../AnimatedWaveButton/AnimatedWaveButton.layout";
import { useContext, useEffect, useRef } from "react";
import { IntersectionObserverContext } from "../../../context/IntersectionObserverContext";

const Service=({title, image, body, link, position})=>{
    const matchesMd=useMediaQuery(theme=>theme.breakpoints.up("md"))
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
        <StyledBoxContainer ref={ref} matchesMd={matchesMd} top={position.top} right={position.right} bottom={position.bottom} left={position.left}>
            <Box className="image" sx={{
                mb:{xs:2, md:4},
                width:{xs:75, md:125},
                height:{xs:"auto", md:125},
                mx:"auto",
                opacity:0,
                transform:"translateY(300px)",
                transition:"opacity .9s 0s cubic-bezier(0.5, 0, 0, 1), transform .9s 0s cubic-bezier(0.5, 0, 0, 1)",
                }}>
                <img src={require(`../../../assets/img/services/${image}`)} alt={title} style={{width:"100%", height:"100%"}}/>
            </Box>
            <Star  color="info"
                sx={{
                    position:"absolute",
                    top:0,
                    left:0,
                    transform:"translateY(-75%)",
                    display:{xs:position.top&&position.left?"none":"block", md:"none"}
                }}
            />
            <Box sx={{mb:4}}>
                <Typography className="title" 
                    color="light.main"  variant="h5" component="h3"
                    sx={{
                        ml:{xs:2, md:4},
                        mb:2,
                        maxWidth:350,
                        opacity:0,
                        transform:"translateY(150px)",
                        transition:"opacity .9s 0s cubic-bezier(0.5, 0, 0, 1), transform .9s 0s cubic-bezier(0.5, 0, 0, 1)"}}
                    >{title}
                    
                </Typography>
                <Typography  component="p" color="light.main" variant="body1" className="body" 
                    sx={{
                        ml:{xs:4, md:8, opacity:.85},
                        opacity:0,
                        transform:"translateY(150px)",
                        transition:"opacity .9s .1s cubic-bezier(0.5, 0, 0, 1), transform .9s .1s cubic-bezier(0.5, 0, 0, 1)",
                        }}
                     > 
                    {body}
                </Typography>
            </Box>
            <Box className="btn"
                 sx={{
                textAlign:"center",
                opacity:0,
                transform:"translateY(150px)",
                transition:"opacity .9s .2s cubic-bezier(0.5, 0, 0, 1), transform .9s .2s cubic-bezier(0.5, 0, 0, 1)",}}>
                <AnimatedWaveButton href={link} text="En savoir Plus" color="info" />
            </Box>
      
        </StyledBoxContainer>
    )
}

export default Service