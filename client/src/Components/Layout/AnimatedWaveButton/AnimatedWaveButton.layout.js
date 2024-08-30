import { Button } from "@mui/material"
import SimpleLinkFollower from "../SimpleLinkFollower/SimpleLinkFollower.layout"
import { useTheme } from "@emotion/react"
import { Link } from "react-router-dom"


const AnimatedWaveButton=({text, color, rounded, size, href, onClick})=>{
    const theme=useTheme()
    const backgroundColor=theme.palette[color].main
    return (
        <SimpleLinkFollower>
            <Button onClick={onClick} component={href?Link:null} to={href}
            variant="contained"
            sx={{
                background:backgroundColor,
                // color:theme.palette.getContrastText(theme.palette.light.main)
                color:color==="light"?theme.palette.primary.main:theme.palette.light.main,
                marginTop:{xs:1, md:2},
                width:{xs:250, md:250},
                fontWeight:"600",
                borderRadius:rounded?15:1,
                height:size==="large"?{xs:35, md:50}:{xs:35, lg:40},
                position:"relative",
                overflow:"hidden",
                boxShadow:"none",
                "&:after":{
                    position:"absolute",
                    content:`"${text}"`,
                    width:"150%",
                    top:"-200%",
                    left:"-25%",
                    height:"200%",
                    background:color==="light"?theme.palette.primary.main:theme.palette.light.main,
                    color:color==="light"?theme.palette.light.main:theme.palette.primary.main,
                    borderRadius:"50%",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    // opacity:.5,
                    transition:"top .5s 0s ease",
                },
                "&:hover:after":{
                    top:"-50%",
                },
                "&:before":{
                    position:"absolute",
                    content:`"${text}"`,
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    top:0,
                    left:0,
                    width:"100%",
                    height:"100%",
                    transition:"top .5s 0s ease",
                    background:backgroundColor,


                },
                "&:hover:before":{
                    top:"100%"
                }
            }}
             >
        </Button>
    </SimpleLinkFollower>
   
    )

}

export default AnimatedWaveButton