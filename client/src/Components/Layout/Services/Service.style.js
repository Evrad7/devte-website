import { Box, styled } from "@mui/material";


const StyledBoxContainer=styled(Box, {shouldForwardProp:prop=>prop!=="matchesMd" && prop!=="top" && prop!=="right" && prop!=="bottom" && prop!=="left"})(({theme, matchesMd, top, right, bottom, left})=>({
    padding:matchesMd?"100px 50px":"40px 25px",
    position:"relative",
    "&:before":{
        position:"absolute",
        content:"''",
        top:0,
        left:matchesMd?(right?30:0):30,
        right:matchesMd?(left?30:0):0,
        backgroundColor:"#f9f9f938",
        background:`linear-gradient(to ${matchesMd?(left?"right":"left"):"left"}, transparent, #f9f9f938)`,
        height:matchesMd?(
            bottom?1.5:0):
            (top&&left?0:1.5),
    },
    "&:after":{
        position:"absolute",
        content:"''",
        left:matchesMd?0:10,
        top:matchesMd?(bottom?30:0):30,
        bottom:matchesMd?(top?30:0):30,
        backgroundColor:"#f9f9f938",
        background:`linear-gradient(to ${
            matchesMd?(top?"bottom":"top"):
                (top&&left?"bottom":
                    (bottom&&right?"top":"none"))},
                 transparent, #f9f9f938)`,
        width:matchesMd?(
            right?2:0):2,
    },
    "&.animate":{
        "& .image, & .title, & .body, & .btn":{
            opacity:1,
            transform:"translateY(0)",
        }
    }
    
}))

export {StyledBoxContainer}