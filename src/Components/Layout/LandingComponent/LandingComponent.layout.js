import { useTheme } from "@emotion/react"
import { Box, Button, Typography, useMediaQuery } from "@mui/material"
import { StyledLandingContainerBox } from "./LandingComponent.style"
import { Link } from "react-router-dom"
import { MouseFollower, UpdateFollower } from "react-mouse-follower"
import SimpleLinkFollower from "../SimpleLinkFollower/SimpleLinkFollower.layout"
import AnimatedWaveButton from "../AnimatedWaveButton/AnimatedWaveButton.layout"
import TypingText from "../TypingText/TypingText.layout"

const LandingComponent=()=>{

    const theme=useTheme()
  const matchesMd=useMediaQuery(theme=>theme.breakpoints.up("md"))


    return (
        <StyledLandingContainerBox sx={{
              }}>
            <UpdateFollower  style={{height:"100%", position:"relative", transformStyle:"preserve-3d", zIndex:-1}}  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.light.main}} >
              <div className="stars"></div>
              <div className="land">
               {/* Drapeau */}
               <Box>
                    {/* Tige */}
                    <Box  sx={{
                            position:"absolute",
                            left:"40%",
                            top:{xs:"calc(6px - 15vh)" ,md:"calc(6px - 25vh)"},
                            content:"''",
                            width:2,
                            background:theme.palette.light.main,
                            height:{xs:"15vh", md:"25vh"},
                        }}>

                          {/* Tête */}
                    <Box sx={{
                           position:"absolute",
                            left:"50%",
                            top:-75,
                            content:"''",
                            width:3,
                            background:theme.palette.light.main,
                            height:75,
                            transform:"translateX(-50%)",
                     }}> 
                        <Box sx={{
                            position:"absolute",
                            top:-5,
                            left:"-50%",
                            content:"''",
                            background:theme.palette.light.main,
                            width:5,
                            height:5,
                            borderRadius:"50%"

                        }}>
                        </Box>
                        <Box sx={{
                            position:"absolute",
                            top:0,
                            left:"100%",
                            content:"''",
                            background:theme.palette.primary.main,
                            borderTop:`2px solid ${theme.palette.light.main}`,
                            borderBottom:`2px solid ${theme.palette.light.main}`,
                            borderRight:`2px solid ${theme.palette.light.main}`,
                            width:59,
                            height:41,
                            textAlign:"center",
                            borderRadius:("36% 64% 100% 0% / 19% 32% 68% 81% "),
                        }}>
                            <img src={require("../../../assets/img/white_logo_devte.png")} alt="devte" style={{width:"45px", height:"auto", position:"absolute", left:0, top:1}} />
                            

                        </Box>
                    </Box>

                    </Box>

                    
                    
                  
               </Box>
        
               <Box sx={{
                    position:"absolute",
                    top:{xs:-117, sm:-91,lg:-120},
                    left:{xs:"8%", sm:"11%", lg:"17%"},
                    width:{xs:86, sm:106, lg:135},
                    display:{xs:"none", sm:"block"},
                }}>
                    <img src={require("../../../assets/img/antenne_uml_devte.png")} alt="entenne uml devte" style={{width:"100%"}}/>
                </Box>

                {/* Navette Github */}
                <Box className="spaceship spaceship-1"  sx={{
                    position:"absolute",
                    top:{xs:-140, sm:-147},
                    left:{xs:"55%", sm:"47%"},
                    width:{xs:32, sm:41},
                
                }}>
                    <img src={require("../../../assets/img/navette_github_devte.png")} alt="navette github devte" style={{width:"100%"}}/>
                </Box>

                 {/* Navette Bitbucket */}
                 <Box  className="spaceship spaceship-2"  sx={{
                   position:"absolute",
                    top:{xs:-118, sm:-119},
                    left:{xs:"65%", sm:"55%"},
                    width:{xs:24, sm:33}
                }}>
                    <img src={require("../../../assets/img/navette_bitbucket_devte.png")} alt="navette bitbucket devte" style={{width:"100%"}}/>
                </Box>

                <Box sx={{
                    position:"absolute",
                    top:{xs:-63, sm:-67, lg:-95},
                    left:{xs:"0%",sm:"20%", lg:"25%"},
                    width:{xs:122, sm:130, lg:165}
                }}>
                    <img src={require("../../../assets/img/tente_devte.png")} alt="tente devte" style={{width:"100%"}}/>
                </Box>

                <Box sx={{
                    position:"absolute",
                    top:{xs:-97, sm:-112, lg:-112},
                    left:{xs:"23%", sm:"36%", lg:"40%"},
                    width:{xs:150, sm:162, lg:174},
                    zIndex:99,
                }}>
                    <img src={require("../../../assets/img/astronaute_devte.png")} alt="astronaute devte" style={{width:"100%"}}/>
                </Box>

                <Box sx={{
                    position:"absolute",
                    top:{xs:-62, sm:-62, lg:-72},
                    left:{xs:"47%", sm:"54%", lg:"51%"},
                    width:{xs:66, sm:66, lg:80},
                    display:{xs:"none", sm:"block"},
                }}>
                    <img src={require("../../../assets/img/navette_projet_devte.png")} alt="navette projet devte" style={{width:"100%"}}/>
                </Box>

                <Box sx={{
                    position:"absolute",
                    top:{xs:-73, sm:-92, lg:-84},
                    left:{xs:"58%", sm:"63%", lg:"58%"},
                    width:{xs:91, sm:101, lg:101}
                }}>
                    <img src={require("../../../assets/img/navette_projet_devte.png")} alt="navette projet devte" style={{width:"100%"}}/>
                </Box>

                <Box sx={{
                    position:"absolute",
                    top:{xs:-98, sm:-128, lg:-135},
                    left:{xs:"70%", sm:"70%", lg:"63%"},
                    width:{xs:120,sm:150, lg:162}
                }}>
                    <img src={require("../../../assets/img/navette_projet_devte.png")} alt="navette projet devte" style={{width:"100%"}}/>
                </Box>

              </div>
              {/* <Box sx={{
                position:"absolute",
                left:37,
                top:{xs:"42%", md:70},
                color:theme.palette.light.main,
                "&  a":{textDecoration:"none", color:theme.palette.light.main},
                fontSize:{xs:".8rem", md:"1rem"},
              }}>
               <TypingComponent
                texts={["Developpement des sites et applications web", "Developpement des applications mobiles", "Administration système", "Infographie"]}
                delay={60}
                />
              </Box> */}
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
                <UpdateFollower style={{"display":"inline"}} 
                mouseOptions={{scale:matchesMd?5:3, mixBlendMode:"exclusion", backgroundElement:(
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
                </UpdateFollower>
                 VOS PROJETS 
                 <TypingText
                    texts={["D'APPLICATIONS WEB", "D'APPLICATIONS MOBILES", "D'INFOGRAPHIE", "D'ADMINSTRATION SYSTEME"]}
                    delay={125}
                 />
                 </Typography>
               <AnimatedWaveButton text="ICI ET MAINTENANT" color="light" size="large" rounded={true}/>
              </Box>
            </UpdateFollower>
             
        </StyledLandingContainerBox>
    )
}
export default LandingComponent