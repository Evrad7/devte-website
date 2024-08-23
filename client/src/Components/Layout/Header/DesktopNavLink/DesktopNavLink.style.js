
import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";


const StyledSubMenuNavLink=styled(NavLink, {shouldForwardProp:prop=>prop!=="color"})(({theme, color})=>({
    display:"flex",
    alignItems:"center",
    width:"100%",
    paddingLeft:15,
    paddingRight:15,
    paddingTop:5,
    paddingBottom:5,
    borderRadius:10,
    textDecoration:"none",
    color:color,
    transformOrigin:"100%",
    
    "&:hover, &.active":{
        "&:before":{
        width:25,
        opacity:.8,
        marginRight:17,
    },
        "&:after":{
            width:"auto",
            flexGrow:1,
            opacity:.8,
            marginLeft:17,
        },

    },
    "&:before, &:after":{
        width:0,
        height:2,
        background:color,
        content:"''",
        transition:"all .5s 0s ease",
        opacity:0
    },

}))

export {StyledSubMenuNavLink}