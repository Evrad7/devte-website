import { Box, styled, Typography, useScrollTrigger } from '@mui/material';
import  useWindowDimensions from '../../../hooks/useWindowDimensions'
import Astro from '../../../assets/img/astro.png'
import Star from '../../../assets/img/star.png'
import Slogan from "../Slogan/Slogan.layout"
import { useTheme } from "@emotion/react";
import { useContext, useEffect, useRef, useState } from 'react';
import { HeaderContext } from '../../../context/HeaderContext';
import CustomUpdateFollower from '../CustomUpdateFollower/CustomUpdateFollower.layout';
import { IntersectionObserverContext } from '../../../context/IntersectionObserverContext';


const SecondaryLandingComponent =({title, description}) =>{
    const {isMobile, isDesktop}=useWindowDimensions()
    const theme=useTheme()
    const {observe, unObserve}=useContext(IntersectionObserverContext)

    const ref=useRef()
    const imagesState=useRef([false, false])
    const [loaded, isLoaded]=useState(false)
    const onLoad=(index)=>{
        imagesState.current[index]=true
        if (imagesState.current.reduce((p, c)=>p&&c)){
            isLoaded(true)
        }
    }

    useEffect(()=>{
        observe(ref.current)
        return ()=>{
            const currentRef=ref.current
            unObserve(currentRef)
        }
    })


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
            <Box ref={ref} sx={{
                background:theme.palette.darkSpace.main,
                height:600,
                position:"relative",
                ".star": {
                    opacity:loaded?1:0,
                    transform:loaded?"translate(0, 0) rotate(0deg) scale(1)":"translate(200px, 50px) rotate(190deg) scale(0)",
                },
                ".astro": {
                    opacity:loaded?1:0,
                },
                ".title, .description, img":{
                    opacity:0,
                    transition:"transform 1s 0s  cubic-bezier(0.5, 0, 0, 1), opacity 1s 0s  cubic-bezier(0.5, 0, 0, 1)",
                },
                ".title":{
                    transform:"translateX(-50%)",
                },
                ".description":{
                    transform:"translateX(50%)",
                },
                "&.animate":{
                    ".title, .description":{
                        opacity:1,
                        transform:"translateX(0)"
                    },
                }
            }}>
                <Box sx={{
                    width:100,
                    height:"auto",
                    position:"absolute",
                    top:75,
                    right:175
                    }}>
                    <img className="star" onLoad={()=>onLoad(0)}  src={Star} style={{width:"100%", height:"100%"}} alt="etoile"/>
                </Box>
                <Box sx={{
                    width:{xs:130, md:180},
                    height:"auto",
                    position:"absolute",
                    bottom:0,
                    right:-3,
                    opacity:.35,
                    }}>
                    <img className="astro" onLoad={()=>onLoad(1)}  src={Astro} style={{width:"100%", height:"100%"}} alt="astronaute"/>
                </Box>
                {isMobile && <Slogan/>}
                <Box sx={{
                    height:"100%",
                    position:"relative",
                    }}>
                    <Typography className="title" color="light.main" variant="h2" component="h1"
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
                    <Typography className="description" sx={{
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
                    variant="body1" component="p"> 
                        {description}
                    </Typography>
                </Box>
            </Box>
        </CustomUpdateFollower>
    )
}

export default SecondaryLandingComponent;