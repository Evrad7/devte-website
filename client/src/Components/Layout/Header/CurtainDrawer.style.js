import { Box, keyframes, styled } from "@mui/material";



const StyledCurtainDrawer=styled(Box, {shouldForwardProp:prop=>prop!=="theme" && prop!=="transitionDuration"})(({theme, transitionDuration})=>(
    {

        "& .curtain":{
            position:"fixed",
            top:0,
            height:"100%",
            width:"100%",
            zIndex:1500,
            transition:"all .7s 0s ease",
            backgroundImage:theme.palette.primary.gradientToBottom,
            backgroundColor:theme.palette.primary.main,
        },

        "& .curtain-left":{
            left:"-50%",
            clipPath:"inset(0 50% 0 0)",
            "&.animate":{
                left:0,
            }
        }, 
        "& .curtain-right":{
            right:"-50%",
            clipPath:"inset(0 0 0 50%)",
            "&.animate":{
                right:0,
            }
        },
    


    }
))

export {StyledCurtainDrawer}