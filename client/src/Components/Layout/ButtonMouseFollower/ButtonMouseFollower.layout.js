import { useTheme } from "@emotion/react"
import { Box } from "@mui/material"
import { useEffect, useRef } from "react"
import { UpdateFollower } from "react-mouse-follower"


const ButtonMouseFollower=({children})=>{

    const theme=useTheme()
    useEffect(()=>{
       mouseEnterHandler()
    }, [])
    const mouseEnterHandler=()=>{
        if (ref.current.querySelector("a.active")){
        let mouseFollowerElt=document.getElementById("mouse-follower")
        if (mouseFollowerElt){
            mouseFollowerElt.style.display="none"
        }
        }

    }

    const mouseLeaveHandler=()=>{
        if (ref.current.querySelector("a.active")){
            let mouseFollowerElt=document.getElementById("mouse-follower")
            if(mouseFollowerElt){
                mouseFollowerElt.style.display="block"
            }
            }
    }
    const ref=useRef(null)
    return <UpdateFollower className="mouse-follower"
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                mouseOptions={{customPosition:ref,
                mixBlendMode: 'difference',
                backgroundColor:theme.palette.light.main,
                scale:4,
                }}>
        <Box ref={ref}  sx={{position:"relative"}}>
            {children}
        </Box>
    </UpdateFollower>
}

export default ButtonMouseFollower