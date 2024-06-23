import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FacebookIcon from "@mui/icons-material/Facebook"
import LindedInIcon from "@mui/icons-material/LinkedIn"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import InstagramIcon from "@mui/icons-material/Instagram"
import { NavLink , Link} from 'react-router-dom';
import { imageListClasses, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { StyledDrawer } from './Header.style';
import { UpdateFollower } from 'react-mouse-follower';
import ButtonMouseFollower from '../ButtonMouseFollower/ButtonMouseFollower.layout';
import IconLInkMouseFollower from '../IconLinkMouseFollower/IconLinkMouseFollower.layout';
import LogoMouseFollower from '../LogoMouseFollower/LogoMouseFollower.layout';



const navItems = [
  {name:"Accueil", link:"/"},
  {name:"Services", link:"/services"},
  {name:"A propos", link:"/about"},
  {name:"Contact", link:"/contact"}];


function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {width}=useWindowDimensions()
  const drawerWidth = width;
  const curtainTransitionTime=550
 
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => {
      if(prevState){
        setTimeout(()=>setMobileOpen(()=>false), curtainTransitionTime)
        closeCurtain()
        return prevState
      }
      return !prevState
    });
    if(!mobileOpen){
      openCurtain()
    }
    
  };

  const theme=useTheme()
  const matchesMd=useMediaQuery(theme=>theme.breakpoints.up("md"))
  
  const socialLinkItems=[
    {name:"facebook", link:"https://fecabook.com", icon:<FacebookIcon fontSize={matchesMd?"medium":"small"}/>},
    {name:"linkedin", link:"https://linkedin.com", icon:<LindedInIcon fontSize={matchesMd?"medium":"small"}/>},
    {name:"whatsapp", link:"https://whatsapp.com", icon:<WhatsAppIcon fontSize={matchesMd?"medium":"small"}/>},
    {name:"instagram", link:"https://instagram.com", icon:<InstagramIcon fontSize={matchesMd?"medium":"small"}/>},
  ]
  const socialLinks=(
    socialLinkItems.map((item, index)=>(
      <IconLInkMouseFollower key={index} >
        <Link to={item.link} >
          <IconButton aria-label={item.name} color="light" sx={{px:{xs:.4, sm:1}}} >
            {item.icon}
          </IconButton>
        </Link>
      </IconLInkMouseFollower>
      
    ))
)
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign:"center"}}>

        {/* Lien reseaux sociaux mobile */}
        <Box sx={{px:{sm:5, md:15, lg:25}, display:{xs:"flex", md:"none"}, position:"absolute", top:21, left:7}}>
          {socialLinks}
        </Box>

        {/* Logo en mode Mobile */}
        <Box>
          <Link to="/">
            <img src={require("../../../assets/img/white_logo_devte.png")} alt="devte" style={{width:matchesMd?100:85}} />
          </Link>
        </Box>
        
        {/* Button de fermeture mobile */}
        <IconButton
              size="large"
              color="light"
              aria-label="close drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{display: { md: 'none' }, position:"absolute", top:12, right:0}}
              >
              <CloseIcon color="light" />
            </IconButton>
      <Divider />
      <List>
      {navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton   sx={{ textAlign: 'center', display:"flex", justifyContent:"center"}}>
                <ButtonMouseFollower>
                  <NavLink to={item.link}  
                          style={({ isActive, isPending, isTransitioning }) => {
                          return {
                            color:isActive?theme.palette.primary.main:theme.palette.light.main,
                            textDecoration:"none",
                            backgroundColor:isActive?theme.palette.light.main:"transparent",
                            paddingLeft:15,
                            paddingRight:15,
                            paddingTop:5,
                            paddingBottom:5,
                            borderRadius:10
                          };
                        }}>
                        {item.name}
                    </NavLink>
                </ButtonMouseFollower>
              </ListItemButton>
            </ListItem>
             
             
            ))}
      </List>
    </Box>
  );


  //Fonctions qui ouvrent les deux compartiments du menu
  const openCurtain=()=>{
     document.querySelectorAll(".MuiDrawer-paper .curtain-left, .MuiDrawer-paper .curtain-right").forEach(function(elt){
      elt.classList.add("open")
     })
  }
  const closeCurtain=()=>{
    document.querySelectorAll(".MuiDrawer-paper .curtain-left, .MuiDrawer-paper .curtain-right").forEach(function(elt){
     elt.classList.remove("open")
    })
 }



  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <UpdateFollower mouseOptions={{zIndex:10000, backgroundColor:theme.palette.light.main}} >
           
      <Box sx={{ display: 'flex', position:"relative"}}>
      <Box sx={{
                position:"absolute",
                width:"100%",
                textAlign:{xs:"center", md:"start"},
                top:{xs:73, md:80},
                zIndex:1000,
                opacity:.8,
                px:3
            }}>
                <Typography variant="subtitle1"
                 sx={{
                  fontSize:".9rem",
                  color:theme.palette.light.main}} >La base du developpement et de l'innovation</Typography>
            </Box>
        <CssBaseline />
        <AppBar component="nav" sx={{backgroundColor:"transparent", boxShadow:"none"}} position="fixed" >
          <Toolbar sx={{pt:2, pb:{xs:0, md:2}}} style={{paddingLeft:0, paddingRight:0}}>

            {/* Liens du site en mode pc */}
            <Box sx={{flexGrow:1}} style={{paddingLeft:10}} >
              <Box sx={{display: { xs: 'none', md: 'block'}}}>
                {navItems.map((item, index) => (
                <Button  key={index}>
                <ButtonMouseFollower>
                    <NavLink to={item.link}  
                          style={({ isActive, isPending, isTransitioning }) => {
                          return {
                            color:isActive?theme.palette.primary.main:theme.palette.light.main,
                            textDecoration:"none",
                            backgroundColor:isActive?theme.palette.light.main:"transparent",
                            paddingLeft:15,
                            paddingRight:15,
                            paddingTop:5,
                            paddingBottom:5,
                            borderRadius:10
                          };
                        }}>
                        {item.name}
                    </NavLink>
                  </ButtonMouseFollower>
                
                </Button>
              
              
              ))}
              </Box>
              <Box sx={{px:{sm:5, md:15, lg:25}, display:{xs:"flex", md:"none"}}}>
                {socialLinks}
              </Box>
              <Divider sx={{backgroundColor:"light.main", opacity:".5",  width:"calc(50vw - 50vw / 3)", position:"absolute", bottom:0, left:0}}/>
            </Box>

            {/* Liens des reseau sociaux en mode pc */}
            <Box>
              <Box sx={{px:{sm:5, md:15, lg:25}, display:{xs:"none", md:"flex"}}}>
                {socialLinks}
              </Box>
              <IconButton
                size="large"
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{display: { md: 'none' }, position:"absolute", top:12, right:0}}
                >
                <MenuIcon />
              </IconButton>
              <Divider sx={{backgroundColor:"light.main", opacity:.5,width:"calc(50vw - 50vw / 3)", position:"absolute", bottom:0, right:0}}/>     
            </Box>
            
            {/* Logo */}
            <Box sx={{position:"absolute", top:{xs:0, md:12}, left:"50%", transform:"translateX(-50%)" }}>
              <LogoMouseFollower>
                <Link to="/">
                  <img src={require("../../../assets/img/white_logo_devte.png")} alt="devte" style={{width:matchesMd?100:85}} />
                </Link>
              </LogoMouseFollower>

            </Box>

          </Toolbar>
        </AppBar>

        {/* Menu en mode mobile */}
        <nav>
          <StyledDrawer
            anchor="left"
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            transitionDuration={0}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            curtainTransitionTime={curtainTransitionTime/1000}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper':
              { boxSizing: 'border-box', width: drawerWidth, overflow:"hidden",  backgroundColor:"transparent",
              position:"relative",
              },
            }}
            >
            <Box className="curtain-left" sx={{position:"absolute", top:0, height:"100%", width:"100%", left:"-50%", backgroundImage:theme.palette.primary.gradientToBottom, backgroundColor:theme.palette.primary.main}}>
              {drawer}
            </Box>
            <Box className="curtain-right" sx={{position:"absolute", top:0, height:"100%", width:"100%", right:"-50%", backgroundImage:theme.palette.primary.gradientToBottom, backgroundColor:theme.palette.primary.main}}>
              {drawer}
            </Box>
          </StyledDrawer>
        </nav>

      </Box>
    </UpdateFollower>

  );
}


export default DrawerAppBar;
