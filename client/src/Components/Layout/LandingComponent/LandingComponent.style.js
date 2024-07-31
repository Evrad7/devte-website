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

const StyledLandingContainerBox=styled(Box, {shouldForwardProp:prop=>prop!=="isDesktop"})(({theme, isDesktop})=>({
  backgroundcolor:theme.palette.primary.main,
  backgroundImage:`radial-gradient(circle at bottom, ${theme.palette.primary.main} -2%, black 100%)`,
  top:0,
  width:"calc(100% + 20px)",
  left:0,
  position:"relative",
  height:"100%",
  overflow:"hidden",
  transform:"translateZ(-300px) scale(7)",
  // transform:"translateZ(-10px) scale(2)",
  zIndex:10000,
  transformStyle:"preserve-3d",
  perspectiveOriginX:"100%",

  "& .stars":{
        background:"rgba(128, 0, 128, 0) center / 200px 200px round",
        left: "-25vh",
        right:"-25vh",
        top:"-25vw",
        bottom:"-25vw",
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
        // animation:true?`${starAnimation} 130s 0s forwards linear infinite`:"none"
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
        backgroundPosition:"center",

        
    },
    "& .spaceship":{
        animation:`${spaceAnimation} .7s 0s  forwards linear running infinite alternate`,
    }
    
}))

export {StyledLandingContainerBox}