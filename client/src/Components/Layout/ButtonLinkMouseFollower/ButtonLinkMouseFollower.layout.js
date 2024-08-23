import { useTheme } from "@emotion/react"
import { Box } from "@mui/material"
import { useRef } from "react"
import CustomUpdateFollower from "../CustomUpdateFollower/CustomUpdateFollower.layout"


const ButtonLinkMouseFollower=({scale=2.7, children})=>{
    const theme=useTheme()
    const ref=useRef(null)

    return <CustomUpdateFollower className="mouse-follower" 
                style={{display:"inline"}}
                mouseOptions={{customPosition:ref,
                mixBlendMode: 'difference',
                backgroundColor:theme.palette.light.main,
                scale:scale,
                }}
                >
            <Box ref={ref}  sx={{position:"relative"}}>
            {children}
        </Box>
    </CustomUpdateFollower>

}

export default ButtonLinkMouseFollower