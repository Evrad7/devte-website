import { Grid, styled , keyframes} from "@mui/material";


const verticalPoured=keyframes`
    from{
        clip-path: inset(-5px -5px -5px -5px);
    }
    to{
        clip-path: inset(100% 0px 0 0);
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
// eslint-disable-next-line no-unused-vars
const horizontalRightPoured=keyframes`
    from{
        clip-path: inset(0 0 0 0%);
    }
    to{
        clip-path: inset(0 0 0 100%);

    }
`




const StyledGridItem=styled(Grid, {shouldForwardProp:prop=>prop!=="matchesMd" && prop!=="leftEdge" && prop!=="topEdge" && prop!=="rightEdge" && prop!=="bottomEdge" })(({theme, topEdge, rightEdge, bottomEdge, leftEdge, matchesMd})=>({
    // paddingLeft:topEdge&&rightEdge?"6px !important":"default",
    // paddingTop:bottomEdge&&rightEdge?"8px !important":"default",
    position:"relative",
    paddingRight:leftEdge&&!matchesMd?"6px !important":"initial",
    paddingLeft:rightEdge&&!matchesMd?"12px !important":"initial",
    

    "&  .item-detail":{
        borderTopLeftRadius:((rightEdge&&bottomEdge) || (topEdge&&rightEdge&&!matchesMd))?20:0,
        borderTopRightRadius:leftEdge&&bottomEdge?20:0,
        borderBottomRightRadius:((topEdge&&leftEdge) || (bottomEdge&&leftEdge&&!matchesMd))?20:0,
        borderBottomLeftRadius:topEdge&&rightEdge?20:0,

        "& > div":{
            transition:".5s 0s linear",
            opacity:0,
            transform:leftEdge?"translateX(-25%)":"translateX(25%)",
            "&.animate-intersection-observer":{
                transform:matchesMd?(topEdge?"translateY(0)":"translateY(0)"):leftEdge?"translateX(0)":"translateX(0)",
                opacity:1
            }
        },
      
    },
    "& .vertical--bar":{
        position:"absolute",
        top:!matchesMd?(leftEdge?0:12):leftEdge&&bottomEdge?-15:0,
        height:!matchesMd?"100%":"calc(100% + 30px)",
        width:20,
        right:!rightEdge?(matchesMd?-14:-9):"initial",
        left:rightEdge?"7px":"initial",
        display:!rightEdge?"block":matchesMd?"none":"block",
        transform:bottomEdge&&leftEdge&&matchesMd?"translateY(29px)":"initial", 
        backgroundColor:theme.palette.light.main,
        // backgroundColor:"green",
        animation:`${verticalPoured} 1s 0s  forwards linear paused`,
        zIndex:"97",
        border:"none",
    },
    "& > div.horizontal--bar":{
        position:"absolute",
        top:"-5px",
        height:"18px",
        right:"0",
        backgroundColor:theme.palette.light.main,
        // backgroundColor:"purple",
        display:topEdge&&leftEdge?"none":(rightEdge&&topEdge?(matchesMd?"none":"block"):"block"),
        transform:bottomEdge&&leftEdge&&matchesMd?"translateX(-5x)":(bottomEdge&&rightEdge&&matchesMd?"translateX(5px)":"initial"), 
        width:"100%",
        zIndex:"98",
        animation:matchesMd?(
            leftEdge?`${horizontalLeftPoured} 1s 1s forwards linear paused`:`${horizontalRightPoured} 1s 1s forwards linear paused`
            ):(rightEdge?`${horizontalLeftPoured} 1s 1s forwards linear paused`:`${horizontalRightPoured} 1s 1s forwards linear paused`),
        border:"initial"



    },
}))

const StyledHorizontalBar=styled("div")(({theme})=>({

}))

const StyledVerticalBar=styled("div")(({theme})=>({
    
}))

export {StyledGridItem, StyledHorizontalBar, StyledVerticalBar}