import { Grid, Paper, styled,keyframes  } from "@mui/material";

const verticalPoured=keyframes`
    from{
        clip-path: inset(0 0 0 0);
    }
    to{
        clip-path: inset(100% 0 0 0);
    }
`

const horizontalLeftPoured=keyframes`
 from{
        clip-path: inset(0 0 0 0);
    }
    to{
        clip-path: inset(0 100% 0 0);

    }
`
const horizontalRightPoured=keyframes`
    from{
        clip-path: inset(0 0 0 0%);
    }
    to{
        clip-path: inset(0 0 0 100%);

    }
`


const StyledGridItem=styled(Grid, 
    {shouldForwardProp:prop=>prop!=="matchesSm" && prop!=="matchesMd" && prop!=="leftEdge" && prop!=="topEdge" && prop!=="rightEdge" && prop!=="bottomEdge"})(({theme, matchesSm, matchesMd, leftEdge, topEdge, rightEdge, bottomEdge })=>({
        paddingTop:topEdge?"0px !important":"default",
        position:"relative",
        "& > div.paper":{
            backgroundColor:theme.palette.light.main,
            height:matchesMd?"70px":`${matchesSm?"40px":"30px"}`,
            boxShadow:"none",
            border:`0px solid ${theme.palette.secondary.main}`,
            borderRadius:matchesMd?"25px":`${matchesSm?"15px":"10px"}`,
            borderLeft:leftEdge?"none":"default",
            borderTop:topEdge?"none":"default",
            borderRight:rightEdge?"none":"default",
            borderBottom:bottomEdge?"none":"default",
            borderTopLeftRadius:leftEdge||topEdge?"0px":"default",
            borderBottomLeftRadius:leftEdge||bottomEdge?"0px":"default",
            borderTopRightRadius:rightEdge||topEdge?"0px":"default",
            borderBottomRightRadius:bottomEdge||rightEdge?"0px":"default",
            padding: "10px 5px",
            display:"flex",
            flexDirection:matchesSm?"row":"column",
            justifyContent:"center",
            alignItems:"center",
            fontSize:".8rem",
            zIndex:"1000",
            
        },
        "& > div.vertical-bar":{
            position:"absolute",
            top:topEdge?"0px":"12px",
            height:topEdge?"calc(100% + 12px)":"100%",
            // bottom:matchesMd?"-12px":"-10px",
            width:matchesMd?"60px":"32px",
            right:matchesMd?"-36px":"-20px",
            backgroundColor:theme.palette.light.main,
            // backgroundColor:"red",
            animation:`${verticalPoured} 1s 0s  forwards linear`,
            zIndex:"97",
            


        },
        "& > div.horizontal-bar-l":{
            position:"absolute",
            top:"0px",
            height:"12px",
            right:"0",
            backgroundColor:theme.palette.light.main,
            // backgroundColor:"purple",
            width:"100%",
            zIndex:"98",
            animation:`${horizontalLeftPoured} 1.5s 0s forwards linear`,



        },
        "& > div.horizontal-bar-r":{
            position:"absolute",
            left:"0",
            top:"0px",
            height:"12px",
            backgroundColor:theme.palette.light.main,
            // backgroundColor:"blue",
            width:"100%",
            zIndex:"99",
            animation:`${horizontalRightPoured} 1.5s 0s forwards  linear`,

            

        },
    
    
}))

const StyledGridContainer=styled(Grid)(({theme})=>({
    backgroundColor:theme.palette.primary.main,
    backgroundImage:theme.palette.primary.gradient,
    // backgroundColor:"pink",

}))



const StyledPaper=styled(Paper)(({theme})=>({
    position:"relative",
    // "&:before":{
    //     content:"''",
    //     position:"absolute",
    //     width:"6px",
    //     top:"0",
    //     bottom:"0",
    //     left:"-6px",
    //     backgroundColor:theme.palette.light.main,
    //     // borderRadius:"25px",
    //     // animation:`${verticalPoured} 2s .3s infinite linear`,
    // },
    // "&:after":{
    //     content:"''",
    //     position:"absolute",
    //     width:"6px",
    //     bottom:"0",
    //     top:"0",
    //     right:"-6px",
    //     backgroundColor:theme.palette.light.main,
    //     // animation:`${verticalPoured} 2s .3s infinite linear`,
    //     // borderRadius:"25px",

    // },
    
}))

const StyledHorizontalBar=styled("div")(({theme})=>({
   

}))
const StyledVerticalBar=styled("div")(({theme})=>({
    
}))

export {StyledGridItem, StyledGridContainer, StyledPaper, StyledHorizontalBar, StyledVerticalBar}