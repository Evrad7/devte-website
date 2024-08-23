import { useTheme } from "@emotion/react"
import { Box, Typography } from "@mui/material"
import { useContext } from "react"
import { HeaderContext } from "../../../context/HeaderContext"

const Slogan=()=>{
    const theme=useTheme()
    const {background}=useContext(HeaderContext)
    return (
        <Box sx={{
            position:"absolute",
            width:"100%",
            textAlign:{xs:"center", md:"start"},
            top:{xs:70, md:80},
            zIndex:theme.zIndex.appBar,
            opacity:.8,
            pr:1,
            pl:{md:4},
            display:background!=="light" && background!=="primary"?"block":"none"
            }}>
            <Typography variant="subtitle1"
            sx={{
              fontSize:".9rem",
              color:theme.palette.light.main}} >Votre agence de developpement web & mobile</Typography>
      </Box>
    )
}

export default Slogan