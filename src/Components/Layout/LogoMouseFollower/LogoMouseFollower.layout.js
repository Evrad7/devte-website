import { useTheme } from "@emotion/react"
import { Box } from "@mui/material"
import { useRef } from "react"
import { UpdateFollower } from "react-mouse-follower"


const LogoMouseFollower=({children})=>{
    const theme=useTheme()
    return  <UpdateFollower style={{"display":"inline"}} 
                mouseOptions={{scale:6, mixBlendMode:"difference", backgroundColor:"white"
                }}>
                {children}
        </UpdateFollower>

}

export default LogoMouseFollower