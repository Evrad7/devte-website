import { Box, styled, Typography, useScrollTrigger } from '@mui/material';
import  useWindowDimensions from '../../../hooks/useWindowDimensions'
import Astro from '../../../assets/img/astro.png'
import Star from '../../../assets/img/star.png'
import Slogan from "../Slogan/Slogan.layout"
import { useTheme } from "@emotion/react";
import { useContext, useEffect } from 'react';
import { HeaderContext } from '../../../context/HeaderContext';
import CustomUpdateFollower from '../CustomUpdateFollower/CustomUpdateFollower.layout';


const SecondaryLandingComponent =({title, description}) =>{
    const {isMobile, isDesktop}=useWindowDimensions()
    const theme=useTheme()

    const {setBackground, setElevation} =useContext(HeaderContext)
    const trigger=isDesktop?useScrollTrigger({
        disableHysteresis:true,
        threshold:0,

    }):true

    useEffect(()=>{
        if(isDesktop){
            if(trigger){
                setBackground("light")
                setElevation(10)
            }
            else{
                setBackground("transparent")
                setElevation(0)
            }
            
        }
    }, [trigger])

    
   


    
    return(
        <CustomUpdateFollower className="update-follower"  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.light.main}}>
            <Box sx={{
                background:theme.palette.darkSpace.main,
                height:600,
                position:"relative",
            }}>
                <Box sx={{
                    width:100,
                    height:"auto",
                    position:"absolute",
                    top:75,
                    right:175
                    }}>
                    <img  src={Star} style={{width:"100%", height:"100%"}} alt="etoile"/>
                </Box>
                <Box sx={{
                    width:{xs:130, md:180},
                    height:"auto",
                    position:"absolute",
                    bottom:0,
                    right:-3,
                    opacity:.35,
                    }}>
                    <img  src={Astro} style={{width:"100%", height:"100%"}} alt="astronaute"/>
                </Box>
                {isMobile && <Slogan/>}
                <Box sx={{
                    height:"100%",
                    position:"relative",
                    }}>
                    <Typography color="light.main" variant="h2" component="h1"
                    sx={{
                        px:{xs:2, md:4},
                        fontSize:{xs:"2rem", md:"2.75rem", lg:"3.75rem"},
                        position:"absolute",
                        top:{xs:"30%", md:"35%",},
                        left:0,
                        width:{xs:"100%", lg:"80%"},
                        textDecoration:"line-through",
                        textDecorationColor:theme.palette.darkSpace.main,
                        textDecorationThickness:{xs:2, md:3},
                    }}
                    >{title}</Typography>
                    <Typography
                    sx={{
                        ml:{xs:2, md:4},
                        pr:{xs:3, md:4},
                        position:"absolute",
                        bottom:50,
                        left:10,
                        width:{xs:"95%", lg:"80%"},
                        color:theme.palette.light.main,
                        "&:before":{
                            position:"absolute",
                            content:"''",
                            top:0,
                            left:0,
                            width:10,
                            height:10,
                            backgroundColor:theme.palette.light.main,
                            transform:"translate(-200%, 50%)"
                        }
                    }}
                    variant="body2" component="p"> 
                        {description}
                    </Typography>
                </Box>
            </Box>
        </CustomUpdateFollower>
    )
}

export default SecondaryLandingComponent;