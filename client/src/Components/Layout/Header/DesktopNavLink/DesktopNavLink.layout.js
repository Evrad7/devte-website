import { useTheme } from "@emotion/react";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import {useRef } from "react";
import { matchPath, NavLink, useLocation, useMatch } from "react-router-dom";
import { StyledSubMenuNavLink } from "./DesktopNavLink.style";
import { ExpandMore } from "@mui/icons-material";
import SimpleLinkFollower from "../../SimpleLinkFollower/SimpleLinkFollower.layout";
import ButtonLinkMouseFollower from "../../ButtonLinkMouseFollower/ButtonLinkMouseFollower.layout";
import ButtonMouseFollower from "../../ButtonMouseFollower/ButtonMouseFollower.layout";


const DesktopNavLink=({navItem, color, activeColor, background})=>{
    const ref=useRef(null)
    const location = useLocation();
    const match=matchPath({ path: navItem.link, end: false }, location.pathname)
    const isActive =navItem.items?match:match&&(navItem.link===location.pathname)
    const theme=useTheme()
        return (
            <Box sx={{
                height:"100%",
                display:"flex",
                alignItems:"center",
                marginRight:2.5,
                "&:hover, &:focus":{
                    "& .MuiSvgIcon-root":{
                        transform:"rotate(-180deg)",
                    },
                    "& .submenu":{
                        opacity:1,
                        left:0,
                        width:500,
                        "& ul":{
                            py:2,
                    }
                    }
                },
                "& .MuiSvgIcon-root":{
                        transition:"all .5s 0s ease",
                   },
                }}>
                <Button ref={ref} disableTouchRipple color={ background==="light"?"primary":"light"}
                 sx={{
                    p:0,
                    borderRadius:3
                 }} >
        <NavLink  to={navItem.link}  
            style={({ isActive, isPending, isTransitioning }) => {
            return {
            color:isActive?activeColor:color,
            textDecoration:"none",
            backgroundColor:isActive?color:"transparent",
            paddingLeft:10,
            paddingRight:10,
            paddingTop:5,
            paddingBottom:5,
            borderRadius:12,
            transition:"all .5s 0s ease",
            position:"relative",
            display:"flex",
            
            };}}
             onClick={navItem.items?(e)=>e.preventDefault():null}>
            {isActive?
                <ButtonMouseFollower><Typography variant="title1" component="span" sx={{marginLeft:.5,marginRight:.5}}>{navItem.name}</Typography></ButtonMouseFollower>:
                <ButtonLinkMouseFollower><Typography variant="title1" component="span" sx={{marginLeft:.5,marginRight:.5}}>{navItem.name}</Typography></ButtonLinkMouseFollower>

            }
            {navItem.items?<ExpandMore />:null} 
        </NavLink>
                    

                    {navItem.items && <Box className="submenu"
                        sx={{
                            zIndex:theme.zIndex.modal,
                            width:0,
                            position:"absolute",
                            m:0,
                            top:54,
                            left:-200,
                            height:"auto",
                            opacity:0,
                            overflow:"hidden",
                            borderRadius:1,
                            // "& a":{
                            //     color:`${backgroundColor!=="transparent"?activeColor:color} !important`,
                            // },
                            transition:"opacity .4s 0s ease, left .4s 0s ease",
                            borderBottomRightRadius:10,
                            borderBottomLeftRadius:10,
                        }}
                        >
                        <List  sx={{
                            position:"relative",
                            "&:before":{
                                position:"absolute",
                                content:"''",
                                top:0,
                                right:0,
                                bottom:0,
                                left:0,
                                background:activeColor,
                                boxShadow:theme.shadows[15],
                                opacity:.99
                            },
                            py:0,
                            px:2,
    
                            mt:"2px",

                           
                            }}>
                                {navItem.items.map((elt, index)=>(
                                    <SimpleLinkFollower key={index}>
                                        <ListItem >
                                            <StyledSubMenuNavLink color={color}  to={elt.link}>{elt.name}</StyledSubMenuNavLink>
                                        </ListItem>
                                    </SimpleLinkFollower>

                                ))}
                        </List>
                    </Box> }
                     </Button>
            </Box>
               
        )
       
    }
  
export default DesktopNavLink