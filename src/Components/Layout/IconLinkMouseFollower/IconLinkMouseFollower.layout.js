import { useTheme } from "@emotion/react"
import { Box } from "@mui/material"
import { useRef } from "react"
import { UpdateFollower } from "react-mouse-follower"

const IconLInkMouseFollower=({children})=>{
    const theme=useTheme()
    const ref=useRef(null)
    return <UpdateFollower 
                style={{display:"inline"}}
                mouseOptions={{customPosition:ref,
                mixBlendMode: 'difference',
                backgroundColor:theme.palette.light.main,
                scale:2.7,
                }}>
            <Box ref={ref}  sx={{position:"relative"}}>
            {children}
        </Box>
    </UpdateFollower>

}

export default IconLInkMouseFollower