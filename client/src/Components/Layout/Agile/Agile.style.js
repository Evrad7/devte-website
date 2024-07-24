import { Box, styled } from "@mui/material";
import bigSmokeImg from "../../../assets/img/big_smoke.png"
import verticalSmoke from "../../../assets/img/vertical_smoke.png"


const StyledContainer=styled(Box, {shouldForwardProp:prop=>prop!=="theme" && prop!="matchesMd"})(({theme, matchesMd})=>({
 backgroundColor:theme.palette.primary.main,
 background:`${theme.palette.primary.gradientToTop}` ,
 paddingTop:100,
 paddingBottom:100,
 paddingRight:10,
 paddingLeft:10,

"& .MuiGrid-container":{
   paddingTop:50,
   paddingBottom:50,

   "&:before":{
    position:"absolute",
    top:0,
    left:0,
    width:"100%",
    height:"100%",
    content:"''",
    background:!matchesMd?`url(${verticalSmoke})`:`url(${bigSmokeImg})`,
    backgroundRepeat:"no-repeat",
    backgroundPosition:!matchesMd?"100% 0%":"100% 60%",
    backgroundSize:!matchesMd?"100% 100%":"100% auto",
   //  transform:!matchesMd?"rotate(65deg) translateY(65%)":"none",
 },
},
 

}))


export {StyledContainer}


