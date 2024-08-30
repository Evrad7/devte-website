import { Box, styled } from "@mui/material";
import squareSeparatorTop from "../../../assets/img/carre_separateur_top.svg"
import squareSeparatorBottom from "../../../assets/img/carre_separateur_bottom.svg"





const ContainerSeparatorStyled=styled(Box, {shouldForwardProp:prop=>prop!=="direction" && prop!="translate"})(({theme, direction, translate})=>({
    position:"relative",
    zIndex:99,
    display:"flex",
    flex:"colmun",
    justifyContent:"end",
    transform:translate?`translateY(${direction==="top"?"-":""}35px)`:"none",
    "&:after":{
        position:"absolute",
        content:"''",
        width:"100%",
        top:direction==="top"?"78%":-2,
        bottom:direction==="top"?-2:"78%",
        backgroundColor:theme.palette.light.main
    },
    "& > div":{
        backgroundImage:direction==="top"?`url(${squareSeparatorTop})`:`url(${squareSeparatorBottom})`,
        backgroundRepeat:"repeat-x",
        backgroundPosition:direction==="top"?"center bottom":"center top",
        height:45,
        backgroundColor:"transparent",
        width:"100%",
    },

    "& .line-separator":{
        position:"absolute",
        width:"100%",
        left:0,
        height:1.4,
        backgroundColor:theme.palette.light.main,
        zIndex:-1,
        top:direction==="top"?"70%":"27%",
        border:`solid 1px ${theme.palette.secondary.main}`,

    },
   

})
    
    
)

export {ContainerSeparatorStyled}