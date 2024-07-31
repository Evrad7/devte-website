
import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";


const StyledSubMenuNavLink=styled(NavLink)(({theme})=>({
    display:"flex",
    alignItems:"center",
    width:"100%",
    paddingLeft:15,
    paddingRight:15,
    paddingTop:5,
    paddingBottom:5,
    borderRadius:10,
    textDecoration:"none",
    
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
        background:theme.palette.light.main,
        content:"''",
        transition:"all .5s 0s ease",
        opacity:0
    },

}))

export {StyledSubMenuNavLink}