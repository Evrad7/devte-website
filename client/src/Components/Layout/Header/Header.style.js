import { Drawer, keyframes, styled } from "@mui/material";


const StyledDrawer=styled(Drawer, {shouldForwardProp:prop=>prop!=="curtainTransitionTime"})(({theme, curtainTransitionTime})=>({
    "& .curtain-left":{
        clipPath:"inset(0 50% 0 0)",
        transition:`all ${curtainTransitionTime}s 0s ease`


    },
    "& .curtain-left.open":{
        left:0
    },

    "& .curtain-right":{
        clipPath:"inset(0 0 0 50%)",
        transition:`all ${curtainTransitionTime}s 0s ease`

    },
    "& .curtain-right.open":{
        // animation:`${curtainRightAnimation} .65s 0s linear forwards`
        right:0

    }


}))

export {StyledDrawer}