import { Box, keyframes, styled } from "@mui/material";
import landSpace from "../../../assets/img/space_land.png"


const spaceAnimation=keyframes`
    0% {
        transform:translateY(-7px);
    }
    100% {
        transform: translateY(0);
    }
    
`

const starAnimation=keyframes`
 0%{
  transform:rotate(0deg) ;
 },
 100%{
  transform:rotate(360deg);
 }
`

const StyledLandingContainerBox=styled(Box, {shouldForwardProp:prop=>prop!=="isDesktop" && prop!=="height" && prop!=="height"})(({theme, isDesktop, height})=>({
  backgroundColor:theme.palette.primary.main,
  backgroundImage:`radial-gradient(circle at bottom, ${theme.palette.primary.main} -2%, black 100%)`,
  top:-75,
  width:"calc(100% + 20px)",
  left:0,
  position:isDesktop?"relative":"static",
  // position:"relative",

  // position:"relative",
  height:isDesktop?`calc(100vh)`:(height?`${height+50}px`:`calc(100vh - 40px)`),
  overflow:"hidden",
  transform:isDesktop?"translateZ(-400px) scale(9.02)":"none",
  // transform:"translateZ(-400px) scale(9.02)",

  // transform:"translateZ(-10px) scale(2)",
  zIndex:theme.zIndex.fab,
  transformStyle:"preserve-3d",
  perspectiveOrigin:"100%",

  "& .stars":{
        background:"rgba(128, 0, 128, 0) center / 200px 200px round",
        left: isDesktop?"-25vh":0,
        right:isDesktop?"-25vh":0,
        top:isDesktop?"-25vw":0,
        bottom:isDesktop?"-25vw":0,
        position: "absolute",
        backgroundImage:
        `radial-gradient(
          1px 1px at 25px 5px, 
          white, 
          rgba(255, 255, 255, 0)
        ),
        radial-gradient(
          1px 1px at 50px 25px, 
          white, 
          rgba(255, 255, 255, 0)
        ),
        radial-gradient(
          1px 1px at 125px 20px, 
          white, 
          rgba(255, 255, 255, 0)
        ),
        radial-gradient(
          1.5px 1.5px at 50px 75px, 
          white, 
          rgba(255, 255, 255, 0)
        ),
        radial-gradient(
          2px 2px at 15px 125px, 
          white, 
          rgba(255, 255, 255, 0)
        ),
        radial-gradient(
          2.5px 2.5px at 110px 80px, 
          white, 
          rgba(255, 255, 255, 0)
        )`,
        animation:isDesktop?`${starAnimation} 130s 0s forwards linear infinite`:"none"
    },
    "& .land":{
        position:"absolute",
        background:"transparent",
        bottom:0,
        right:0, 
        left:0,
        height:60,
        backgroundImage:`url(${landSpace})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"0px 0px",

        
    },
    "& .spaceship":{
        animation:isDesktop?`${spaceAnimation} .7s 0s  forwards linear running infinite alternate`:"none",
    }
    
}))

export {StyledLandingContainerBox}