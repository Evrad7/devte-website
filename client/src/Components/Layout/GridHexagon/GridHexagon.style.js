import { Box, styled } from '@mui/material';
import { HexGrid, Hexagon, Text } from 'react-hexgrid';



const StyledHexagon=styled(Hexagon)(({theme})=>({
    fill:"#ffffff",
    stroke:theme.palette.primary.main,
    strokeWidth:0.6,
    transition:".3s 0s ease",
    "&:hover":{
        fill:theme.palette.primary.main,
        cursor:"pointer"
        
    },
    "&:hover text":{
        fill:theme.palette.light.main,
    },
    "& svg":{
        fill:"inital",
        stroke:"initial",
        strokeWidth:"initial",
        
    }
}))
const StyledText=styled(Text, {shouldForwardProp:prop=>prop!=="size"})(({theme, size})=>({
    fontSize:size>45?16:9.7,
    fill:theme.palette.dark.main,
    stroke:"none",
}))

const StyledBoxHexagon=styled(Box)(()=>({
    position:"relative",

}))
const StyledHexGrid=styled(HexGrid, {shouldForwardProp:prop=>prop!=="size"})(({size})=>({
    "& > g ":{
        "-webkit-transform":"translateX(50%)",
    },
    
    "&  g.tech":{
        fill:"initial",
        stroke:"initial",
        "-webkit-transform":`translate(-${size/4}px, -${size/2}px) scale(${size/70})`,

    },
   
    
}))
export {StyledHexagon, StyledText, StyledBoxHexagon, StyledHexGrid}