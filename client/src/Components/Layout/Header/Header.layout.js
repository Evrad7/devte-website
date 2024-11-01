import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Toolbar from '@mui/material/Toolbar';
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import { Link} from 'react-router-dom';
import {useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import { HeaderContext } from '../../../context/HeaderContext';
import { useContext, useEffect, useState } from 'react';
import CurtainDrawer from './CurtainDrawer.layout';
import DesktopNavLink from './DesktopNavLink/DesktopNavLink.layout';
import MobileNavLink from './MobileNavLink/MobileNavLink.layout';
import ButtonLinkMouseFollower from '../ButtonLinkMouseFollower/ButtonLinkMouseFollower.layout';
import CustomUpdateFollower from '../CustomUpdateFollower/CustomUpdateFollower.layout';
import FocusMouseFollower from "../FocusMouseFollower/FocusMouseFollower.layout"
import Slogan from '../Slogan/Slogan.layout';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import Logo from '../Logo/Logo.layout';
import { GitHub } from '@mui/icons-material';
import { socialNetworkLinks } from '../../../services/infos';



const navItems = [
  {name:"Accueil", link:"/"},
  {name:"Services", link:"/services", items: [
      {name:"Developpement web", link:"/services/developpement-web"},
      {name:"Developpement mobile", link:"/services/developpement-mobile"},
      {name:"Administration système", link:"/services/administration-systeme"},
      {name:"Infographie", link:"/services/infographie"},
  ]},
  {name:"A propos", link:"/about"},
  {name:"Contact", link:"/contact"}];

  
 
  
function Header(props) {
  const position=props.position?props.position:"fixed"
  const [mobileOpen, setMobileOpen] =useState(false);
  const {background, elevation}=useContext(HeaderContext)
  const theme=useTheme()
  const {isDesktop} =useWindowDimensions()
  
  

  var backgroundColor="transparent"
  var color=theme.palette.light.main
  var activeColor=theme.palette.primary.main

  if (background==="light" || !isDesktop){
    backgroundColor=theme.palette.light.main
    color=theme.palette.primary.main
    activeColor=theme.palette.light.main
  }
  else if (background==="primary" ){
    backgroundColor=theme.palette.primary.main
    color=theme.palette.light.main
    activeColor=theme.palette.primary.main
  }
  
  useEffect(()=>{})
  // else{
  //   backgroundColor="transparent"
  //   color=theme.palette.light.main
  // }
  
 
  const handleDrawerToggle =() => {
   setMobileOpen(!mobileOpen);
   
  };

  const matchesMd=useMediaQuery(theme=>theme.breakpoints.up("md"))
  
   const socialLinkItems=[
    {name:"linkedin", link:socialNetworkLinks.linkedin, icon:<LinkedInIcon fontSize={matchesMd?"medium":"small"}/>},
    {name:"github", link:socialNetworkLinks.github, icon:<GitHub fontSize={matchesMd?"medium":"small"}/>},
    {name:"facebook", link:socialNetworkLinks.facebook, icon:<FacebookIcon fontSize={matchesMd?"medium":"small"}/>},
    {name:"whatsapp", link:socialNetworkLinks.whatsapp, icon:<WhatsAppIcon fontSize={matchesMd?"medium":"small"}/>},
  ]
  const socialLinks=(_background)=>(
    socialLinkItems.map((item, index)=>(
      <ButtonLinkMouseFollower key={index} >
        <Link to={item.link} >
          <IconButton aria-label={item.name} color={_background==="primary"?"light":(_background==="light"?"primary":"light")} sx={{px:{xs:.4, sm:1}, transition:{md:"all .5s 0s ease"}}} >
            {item.icon}
          </IconButton>
        </Link>
      </ButtonLinkMouseFollower>
      
    ))
)
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign:"center"}}>
        {/* Lien reseaux sociaux mobile */}
        <Box  sx={{px:{sm:5, md:15, lg:25}, display:{xs:"flex", md:"none"}, position:"absolute", top:21, left:7}}>
          {socialLinks("primary")}
        </Box>

        {/* Logo en mode Mobile */}
        <Box>
          <Link to="/">
            <Logo color={theme.palette.light.main}/>
          </Link>
        </Box>
        
        {/* Button de fermeture mobile */}
        <IconButton
              size="large"
              color="light"
              aria-label="close drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{display: { lg: 'none' }, position:"absolute", top:12, right:11}}
              >
              <CloseIcon color="light" />
            </IconButton>
      <Divider />
      <List>
      {navItems.map((item, index) => (
                item.items?item.items.map((elt, i)=><MobileNavLink key={`${index}-${i}`} navItem={elt} index={`${index}-${i}`} />):
                    <MobileNavLink  key={index} navItem={item} index={index}/>
            ))}
      </List>
    </Box>
  );

  return (
       <>
        <CssBaseline />
            <AppBar component="nav" 
              sx={{
                backgroundColor:"transparent",
                transition:{md:"all .3s 0s linear"},
                boxShadow:theme.shadows[!isDesktop?4:elevation],
                transform:"translateY(-2px)",
                top:1,

                "&:before":{
                  position:"absolute",
                  content:"''",
                  top:0,
                  right:0,
                  bottom:0,
                  left:0,
                  background:backgroundColor,
                  opacity:!isDesktop?.875:.9,


                }
                
                }}
                position={position}
               
                 >
              <CustomUpdateFollower className="update-follower" mouseOptions={{zIndex:10000, backgroundColor:color}} >

              {isDesktop&&<Slogan background={background}/>}
              <Toolbar sx={{height:{xs:56, md:75}}} style={{paddingLeft:0, paddingRight:0}}>

                {/* Liens du site en mode pc */}
                <Box sx={{flexGrow:1, height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", pl:{xs:1, md:4}}}  >
                  <Box sx={{display: { xs: 'none', lg: 'flex'}, height:"100%"}}>
                    {navItems.map((item, index) => (
                      <DesktopNavLink key={index} navItem={item} color={color} activeColor={activeColor} background={background}/>
                  ))}
                  </Box>
                  <Box sx={{px:{sm:5, md:15, lg:25}, display:{xs:"flex", lg:"none"}}}>
                    {socialLinks(!isDesktop?"light":background)}
                  </Box>
                  <Divider sx={{display:backgroundColor==="transparent"?"inline":"none", backgroundColor:"light.main", opacity:".5",  width:"calc(50vw - 50vw / 3)", position:"absolute", bottom:0, left:0}}/>
                </Box>

                {/* Liens des reseau sociaux en mode pc */}
                <Box>
                  <Box sx={{px:{sm:5, md:15, lg:25}, display:{xs:"none", lg:"flex"}}}>
                    {socialLinks(!isDesktop?"light":background)}
                  </Box>
                  <IconButton
                    size="large"
                    color={(background==="light" || !isDesktop)?"primary":"light"}
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{display: { lg: 'none' }, position:"absolute", top:6, right:12}}
                    >
                    <MenuIcon />
                  </IconButton>
                  <Divider sx={{display:backgroundColor==="transparent"?"inline":"none", backgroundColor:"light.main", opacity:.5,width:"calc(50vw - 50vw / 3)", position:"absolute", bottom:0, right:0}}/>     
                </Box>
                
                {/* Logo */}
                <Box sx={{transition:"all .3s 0s linear",position:"absolute", top:{xs:"50%", md:background==="transparent"?"calc(50% + 8px)":"50%"}, left:"50%", transform:"translate(-50%, -50%)" }}>
                  <FocusMouseFollower scale={6}>
                    <Link to="/">
                      <Logo color={color}/>
                    </Link>
                  </FocusMouseFollower>

                </Box>

              </Toolbar>
            </CustomUpdateFollower>
          </AppBar>

        {/* Menu en mode mobile */}
        <nav>
          <CurtainDrawer
            open={mobileOpen}
            transitionDuration={0.6}>
            {drawer}
          </CurtainDrawer>
        </nav>
        </>


  );
}


export default Header;
export {navItems}
