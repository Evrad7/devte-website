import { Box, styled } from "@mui/material";


const StyledFormContainer=styled(Box, {shouldForwardProp:prop=>prop!=="matchesMd"})(({theme, matchesMd})=>({
    "& .MuiInputBase-multiline":{
        background:`${theme.palette.light.main} !important`, 
    },
    "&  .MuiGrid-item":{
        "& input, & .MuiInputBase-multiline":{
            borderTopLeftRadius:6,
            borderTopRightRadius:6,
            borderBottomLeftRadius:matchesMd?6:0,
            borderBottomRightRadius:matchesMd?6:0
        },
        "&:nth-child(2n) input":{
            borderTopRightRadius:matchesMd?0:6,
            borderBottomRightRadius:0,
        },
        "&:nth-child(2n+1) input":{
            borderTopLeftRadius:matchesMd?0:6,
            borderBottomLeftRadius:0,
        }
        
    },
    "& input, & textarea":{
        background:theme.palette.light.main,
    }
    
}))

export {StyledFormContainer}