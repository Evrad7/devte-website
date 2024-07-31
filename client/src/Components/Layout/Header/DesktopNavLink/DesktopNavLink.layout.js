import { useTheme } from "@emotion/react";
import { Box, Button, List, ListItem } from "@mui/material";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { StyledSubMenuNavLink } from "./DesktopNavLink.style";


const DesktopNavLink=({navItem, color, activeColor, backgroundColor})=>{

    const theme=useTheme()
        return (
                <Button  sx={{
                   height:"100%",
                   "&:hover":{
                    backgroundClor:"red",
                    "& .submenu":{
                        opacity:1,
                        left:0,
                        width:500,
                        "& ul":{
                            py:2,
                    }
                    }
                }
                }}>
                    <NavLink ref={navItem} to={navItem.link}  
                            style={({ isActive, isPending, isTransitioning }) => {
                            return {
                            color:isActive?activeColor:color,
                            textDecoration:"none",
                            backgroundColor:isActive?color:"transparent",
                            paddingLeft:15,
                            paddingRight:15,
                            paddingTop:5,
                            paddingBottom:5,
                            borderRadius:10,
                            transition:"all .5s 0s ease",
                            };
                        }}>
                        {navItem.name}
                    </NavLink>

                    {navItem.items && <Box className="submenu"
                        sx={{
                            zIndex:theme.zIndex.modal,
                            width:0,
                            position:"absolute",
                            m:0,
                            top:74,
                            left:-200,
                            height:"auto",
                            opacity:0,
                            overflow:"hidden",
                            "& a":{
                                color:`${backgroundColor!=="transparent"?activeColor:color} !important`,
                            },
                            transition:"opacity .4s 0s ease, left .4s 0s ease",
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
                                // background:backgroundColor==="transparent"?color:activeColor,
                                background:theme.palette.primary.main,
                                boxShadow:theme.shadows[15],
                                borderBottomRightRadius:10,
                                borderBottomLeftRadius:10,
                                opacity:.99

                            },
                            py:0,
                            px:2,
    
                            mt:"2px",

                           
                            }}>
                                {navItem.items.map((elt, index)=>(
                                    <ListItem key={index}>
                                        <StyledSubMenuNavLink  to={elt.link}>{elt.name}</StyledSubMenuNavLink>
                                    </ListItem>
                                ))}
                        </List>
                    </Box> }
                     </Button>
        )
       
    }
  
export default DesktopNavLink