import { Box, styled } from "@mui/material";
import { styled } from "@mui/material";

const StyledDrawer=styled(Box, {shouldForwardProp:prop=>prop!=="transitionDuration"})(({theme, transitionDuration})=>({
    "& .curtain-left":{
        clipPath:"inset(0 50% 0 0)",
        transition:`all ${transitionDuration}s 0s ease`


    },
    "&.open .curtain-left":{
        left:0
    },

    "& .curtain-right":{
        clipPath:"inset(0 0 0 50%)",
        transition:`all ${transitionDuration}s 0s ease`

    },
    "&.open .curtain-right":{
        // animation:`${curtainRightAnimation} .65s 0s linear forwards`,
        right:0,

    }


}))






export {StyledDrawer}