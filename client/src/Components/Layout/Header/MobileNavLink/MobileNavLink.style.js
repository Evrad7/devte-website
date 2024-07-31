
import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";


const StyledMobileNavLink=styled(NavLink, {shouldForwardProp:prop=>prop!=="isTouchScreen" && prop!=="matchesSm"})(({theme, isTouchScreen, matchesSm})=>({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    width:"100%",
    paddingLeft:15,
    paddingRight:15,
    paddingTop:matchesSm?10:5,
    paddingBottom:matchesSm?10:5,
    borderRadius:10,
    textDecoration:"none",
    color:theme.palette.light.main, 
    marginRight:10,
    marginLeft:10,
    
    
    "&.hover, &.active":{
        border:`0.01px solid ${theme.palette.light.main}`,
        "&:before":{
        flexGrow:1,
        opacity:.5,
        marginRight:17,
    },
    "&.active":{
        background:theme.palette.light.main,
        color:theme.palette.primary.main,
        "&:before, &:after": {
            background:theme.palette.primary.main,

         }
    },
        "&:after":{
            flexGrow:1,
            opacity:.8,
            marginLeft:17,
        },

    },
    "&:before, &:after":{
        width:0,
        height:1,
        background:theme.palette.light.main,
        content:"''",
        transition:!isTouchScreen?"all .5s 0s ease":"none",
        opacity:0
    },

}))

export {StyledMobileNavLink}