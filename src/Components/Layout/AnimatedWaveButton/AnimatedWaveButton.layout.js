import { Button } from "@mui/material"
import SimpleLinkFollower from "../SimpleLinkFollower/SimpleLinkFollower.layout"
import { useTheme } from "@emotion/react"


const AnimatedWaveButton=({text, color, rounded, size})=>{
    const theme=useTheme()
    return (
        <SimpleLinkFollower>
            <Button
            variant="contained"
            sx={{
                background:color==="light"?theme.palette.light.main:theme.palette.primary.main,
                // color:theme.palette.getContrastText(theme.palette.light.main)
                color:color==="light"?theme.palette.primary.main:theme.palette.light.main,
                marginTop:{xs:1, md:2},
                minWidth:{xs:150, md:250},
                fontWeight:"600",
                borderRadius:rounded?15:1,
                height:size==="large"?{xs:35, md:50}:{xs:35, lg:40},
                position:"relative",
                overflow:"hidden",
                boxShadow:"none",
                borderColor:"light"?theme.palette.primary.main:theme.palette.light.main,
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
                    background:color==="light"?theme.palette.light.main:theme.palette.primary.main,


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