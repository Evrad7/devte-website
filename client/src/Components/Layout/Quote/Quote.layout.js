import { useTheme } from "@emotion/react"
import { Box, Typography } from "@mui/material"

const Quote=({name, role, photo, text})=>{
    const theme=useTheme()
    return ( 
    <Box sx={{px:1}}>
        <Box sx={{
        mx:"auto",
        maxWidth:900,
        backgroundImage:theme.palette.primary.gradientToTop,
        backgroundColor:theme.palette.primary.main,
        px:{xs:5, md:7},
        pt:{xs:22, md:18},
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-end",
        alignItems:"center",
        borderTopLeftRadius:25,
        borderTopRightRadius:25,

        }}>
        <Box sx={{
            backgroundColor:theme.palette.primary.main,
            display:"flex",
            flexDirection:"column",
            justifyContent:"end",
            px:{xs:2, md:4},
            pb:{xs:7, md:4},
            pt:{xs:7, md:12},
            position:"relative",
            maxWidth:400
            }}>
            <Box sx={{
                position:"absolute",
                top:0,
                left:{xs:"50%", md:0},
                width:{xs:175, md:175},
                height:{xs:175, md:175},
                borderRadius:"50%",
                backgroundColor:theme.palette.light.main,
                transform:{xs:"translate(-50%, -75%)", md:"translate(-40%, -50%)"},
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                border:`solid 2px ${theme.palette.secondary.main}`
            }}>
                <img src={require(`../../../assets/img/${photo}`)} alt={`${name} ${role}`} style={{width:50, height:75}}/>
                <Typography variant="subtitle1" component="span" sx={{color:theme.palette.primary.main, fontSize:12, fontWeight:"600"}}>{name}</Typography>
                <Typography variant="subtitle2" component="span" sx={{color:theme.palette.dark.main,  fontSize:12, fontWeight:"500"}}>{role}</Typography>

            </Box>
            <Typography variant="subtitle1"
             sx={{color:theme.palette.light.main, textAlign:"center"}}>
                {text}
            </Typography>
        </Box>

    </Box>
    </Box>
    )
}

export default Quote