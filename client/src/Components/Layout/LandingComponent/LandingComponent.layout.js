import { useTheme } from "@emotion/react"
import { Box, Typography, useMediaQuery } from "@mui/material"
import { StyledLandingContainerBox } from "./LandingComponent.style"
import AnimatedWaveButton from "../AnimatedWaveButton/AnimatedWaveButton.layout"
import TypingText from "../TypingText/TypingText.layout"
import useWindowDimensions from "../../../hooks/useWindowDimensions"
import CustomUpdateFollower from "../CustomUpdateFollower/CustomUpdateFollower.layout"
import Slogan from "../Slogan/Slogan.layout"
import LandingImages from "./LandingImages.layout"


const LandingComponent=()=>{

  const theme=useTheme()
  const matchesMd=useMediaQuery(theme=>theme.breakpoints.up("md"))
  const {height, isDesktop}=useWindowDimensions()
  const onClickHandler=()=>{
    document.getElementById("start-project").scrollIntoView()
  }
    return (
    <StyledLandingContainerBox isDesktop={isDesktop}  height={height} sx={{}}>
      <CustomUpdateFollower className="mouse-follower"    style={{height:"100%", position:"relative", transformStyle:"preserve-3d", zIndex:-1}}  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.light.main}} >
        <div className="stars"></div>
        <LandingImages/>
        {!isDesktop && <Slogan/>}
        <Box sx={{
          position:"absolute",
          top:{xs:"25%", lg:"25%"},
          width:"100%",
          color:theme.palette.light.main,
          textAlign:{xs:"center", md:"center"},
          px:2.5,
        }}>
          <Typography sx={{fontSize:{xs:"1.5rem", lg:"2rem",
           textWrap:{lg:"nowrap"}}}} variant="h3" component="h1"  >
          FAITES
          <CustomUpdateFollower className="mouse-follower" style={{"display":"inline"}} 
          mouseOptions={{scale:matchesMd?4:3, mixBlendMode:"exclusion", backgroundElement:(
          <div style={{ width: '100%', height:"100%", background:"white" }}>
          {/* <img src="..." alt="..." /> */}
          </div>)
          }}>
              <Typography
                  sx={{fontFamily:"'Lucida Handwriting Std', 'Exo', sans-serif", fontSize:{xs:"1.5rem", lg:"2rem"}, mr:1.5}}
                  variant="h3" 
                  component="span"
              > DECOLLER
              </Typography> 
          </CustomUpdateFollower>
           VOS PROJETS 
           <TypingText
              texts={["D'APPLICATIONS WEB", "D'APPLICATIONS MOBILES", "D'INFOGRAPHIE", "D'ADMINSTRATION SYSTEME"]}
              delay={125}
           />
           </Typography>
         <AnimatedWaveButton onClick={onClickHandler} text="ICI ET MAINTENANT" color="light" size="large"  rounded />
        </Box>
      </CustomUpdateFollower>
       
  </StyledLandingContainerBox>

    )
}
export default LandingComponent