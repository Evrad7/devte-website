import { useTheme } from "@emotion/react"
import { Box } from "@mui/material"
import { useRef } from "react"
import { UpdateFollower } from "react-mouse-follower"


const FocusMouseFollower=({scale, children})=>{
    const theme=useTheme()
    return  <UpdateFollower className="update-follower" style={{"display":"inline"}} 
                mouseOptions={{scale:scale, mixBlendMode:"difference", backgroundColor:"white"
                }}>
                {children}
        </UpdateFollower>

}

export default FocusMouseFollower