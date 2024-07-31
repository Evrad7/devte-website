import { Box, keyframes, styled } from "@mui/material";


const animationCurtainLeft=keyframes`
    0%{
        left:-100%;
    }
    0.1%{
        left:-50%;

    }
    100%{
        left:0;

    }
`

const animationCurtainRight=keyframes`
    0%{
        right:-100%;
    }
    0.1%{
        right:-50%;
    }
    100%{
        right:0;
    }
`

const StyledCurtainDrawer=styled(Box, {shouldForwardProp:prop=>prop!=="theme" && prop!=="transitionDuration"})(({theme, transitionDuration})=>(
    {

        // "&.back":{
        //     zIndex:-1
        // },

        "& .curtain-left":{
            position:"absolute",
            top:0, height:"100%",
            width:"100%", left:"-50%",
            backgroundImage:theme.palette.primary.gradientToBottom,
            backgroundColor:theme.palette.primary.main,
            clipPath:"inset(0 50% 0 0)",
            zIndex:1500,
            transition:"all .5s 0s ease",
            "&.animate":{
                // animation:`${animationCurtainLeft} ${transitionDuration}s 0s cubic-bezier(0.42, 0, 0.58, 1) forwards`,
                left:0,
            }
        }, 
        "& .curtain-right":{
            position:"absolute", top:0, height:"100%", width:"100%", right:"-50%",
            backgroundImage:theme.palette.primary.gradientToBottom,
            // backgroundColor:theme.palette.primary.main,
            background:"red",
            clipPath:"inset(0 0 0 50%)",
            zIndex:1500,
            transition:"all .5s 0s ease",
            "&.animate":{
                // animation:`${animationCurtainRight} ${transitionDuration}s 0s cubic-bezier(0.42, 0, 0.58, 1) forwards`,
                right:0,
            }
        },
        
        // "&.open .curtain-left":{
        //     left:0,
        // },
        // "&.open .curtain-right":{
        //     right:0,
        // },
        "& .curtain.animate":{
            
        }



    }
))

export {StyledCurtainDrawer}