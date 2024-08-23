import { useTheme } from "@emotion/react";
import { Box, ListItem, ListItemButton, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";
import { StyledMobileNavLink } from "./MobileNavLink.style";
import { useEffect, useRef } from "react";



const MobileNavLink=({navItem, index})=>{
    const theme=useTheme()
    const ref=useRef(null)
    const rendered=useRef(false)
    const isTouchScreen='ontouchstart' in document.documentElement
    const matchesSm=useMediaQuery(theme=>theme.breakpoints.up("sm"))


    useEffect(()=>{
        const events=isTouchScreen?["touchstart", "touchend"]:["mouseenter","mouseleave"]
        if(!rendered.current){
            ref.current.addEventListener(events[0], (e)=>{
                // console.log(`a[index='${e.target.getAttribute("index")}']`, "++++++++++++")
                document.querySelectorAll(`a[index='${e.target.getAttribute("index")}']`).forEach(elt => {
                    elt.classList.add("hover")
                });
            })

            ref.current.addEventListener(events[1], (e)=>{
                document.querySelectorAll(`a[index='${e.target.getAttribute("index")}']`).forEach(elt => {
                    elt.classList.remove("hover")
                });
            })
        }
        else{
            rendered.current=true
        }
       
    }, [])
    return(
        <ListItem disablePadding sx={{ justifyContent:"center", marginTop:2}}>
            <Box  sx={{ textAlign: 'center', display:"flex", justifyContent:"center", width:"100%"}}>
                <StyledMobileNavLink ref={ref} index={`menu-item-${index}`}  to={navItem.link}  isTouchScreen={isTouchScreen} matchesSm={matchesSm} >
                    {navItem.name}
                </StyledMobileNavLink>
            </Box>
        </ListItem>
    )
}
export default MobileNavLink

