import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import {useRef, useState } from "react";
import Logo from "../Logo/Logo.layout";

const LandingImages = () => {
    const theme=useTheme()
    const imagesState=useRef([false, false, false, false, false, false, false, false])
    const ref=useRef(null)
    const [loaded, isLoaded]=useState(false)
    const onLoad=(index)=>{
        imagesState.current[index]=true
        if (imagesState.current.reduce((p, c)=>p&&c)){
            isLoaded(true)
        }
    }

    return (
        <Box ref={ref} 
             sx={{
                "img":{
                  transform:loaded?"translateY(0%)":"translateY(-100%)",
                  opacity:loaded?1:0,
                  transition:"transform 1s 0s  cubic-bezier(0.5, 0, 0, 1), opacity 1s 0s  cubic-bezier(0.5, 0, 0, 1)",
                },
                "#map":{
                  opacity:loaded?1:0,
                  transition:"transform 1s 0s  cubic-bezier(0.5, 0, 0, 1), opacity 1s 0s  cubic-bezier(0.5, 0, 0, 1)",
                },
             }}
        className="land">
        {/* Drapeau */}
        <Box>
            {/* Tige */}
            <Box  id="map"  sx={{
                    position:"absolute",
                    left:"40%",
                    top:{xs:"calc(-20px - 15vh)" ,md:"calc(10px - 25vh)"},
                    content:"''",
                    width:2,
                    background:theme.palette.light.main,
                    height:{xs:"20vh", md:"25vh"},
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
                     <Logo width="40%" height="auto" style={{transform:"translate(-6px, -2px)"}}/>
                    
                </Box>
            </Box>

            </Box>
        </Box>

        <Box sx={{
            position:"absolute",
            top:{xs:-117, sm:-85,lg:-103},
            left:{xs:"8%", sm:"11%", lg:"17%"},
            width:{xs:86, sm:106, lg:135},
            display:{xs:"none", sm:"block"},
        }}>
            <img  onLoad={()=>onLoad(0)} src={require("../../../assets/img/antenne_uml_devte.png")} alt="entenne uml devte" style={{width:"100%"}}/>
        </Box>

        {/* Navette Github */}
        <Box className="spaceship spaceship-1"  sx={{
            position:"absolute",
            top:{xs:-140, sm:-147},
            left:{xs:"55%", sm:"47%"},
            width:{xs:32, sm:41},
        
        }}>
            <img  onLoad={()=>onLoad(1)} src={require("../../../assets/img/navette_github_devte.png")} alt="navette github devte" style={{width:"100%"}}/>
        </Box>

        {/* Navette Bitbucket */}
        <Box  className="spaceship spaceship-2"  sx={{
            position:"absolute",
            top:{xs:-118, sm:-119},
            left:{xs:"65%", sm:"55%"},
            width:{xs:24, sm:33}
        }}>
            <img  onLoad={()=>onLoad(2)} src={require("../../../assets/img/navette_bitbucket_devte.png")} alt="navette bitbucket devte" style={{width:"100%"}}/>
        </Box>

        <Box sx={{
            position:"absolute",
            top:{xs:-56, sm:-67, lg:-85},
            left:{xs:"0%",sm:"20%", lg:"25%"},
            width:{xs:122, sm:130, lg:165}
        }}>
            <img  onLoad={()=>onLoad(3)} src={require("../../../assets/img/tente_devte.png")} alt="tente devte" style={{width:"100%"}}/>
        </Box>

        <Box sx={{
            position:"absolute",
            top:{xs:-97, sm:-112, lg:-112},
            left:{xs:"23%", sm:"36%", lg:"40%"},
            width:{xs:150, sm:162, lg:174},
            zIndex:99,
        }}>
            <img  onLoad={()=>onLoad(4)} src={require("../../../assets/img/astronaute_devte.png")} alt="astronaute devte" style={{width:"100%"}}/>
        </Box>

        <Box sx={{
            position:"absolute",
            top:{xs:-62, sm:-62, lg:-72},
            left:{xs:"47%", sm:"54%", lg:"51%"},
            width:{xs:66, sm:66, lg:80},
            display:{xs:"none", sm:"block"},
        }}>
            <img  onLoad={()=>onLoad(5)} src={require("../../../assets/img/navette_projet_devte.png")} alt="navette projet devte" style={{width:"100%"}}/>
        </Box>

        <Box sx={{
            position:"absolute",
            top:{xs:-73, sm:-92, lg:-84},
            left:{xs:"58%", sm:"63%", lg:"58%"},
            width:{xs:91, sm:101, lg:101}
        }}>
            <img  onLoad={()=>onLoad(6)} src={require("../../../assets/img/navette_projet_devte.png")} alt="navette projet devte" style={{width:"100%"}}/>
        </Box>

        <Box sx={{
            position:"absolute",
            top:{xs:-98, sm:-128, lg:-135},
            left:{xs:"70%", sm:"70%", lg:"63%"},
            width:{xs:120,sm:150, lg:162}
        }}>
            <img  onLoad={()=>onLoad(7)} src={require("../../../assets/img/navette_projet_devte.png")} alt="navette projet devte" style={{width:"100%"}}/>
        </Box>

    </Box>
   
     );
}
 
export default LandingImages;