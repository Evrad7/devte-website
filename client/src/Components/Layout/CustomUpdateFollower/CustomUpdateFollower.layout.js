import { UpdateFollower } from "react-mouse-follower"
import { Box } from "@mui/material"
import useWindowDimensions from "../../../hooks/useWindowDimensions"


const CustomUpdateFollower=({mouseOptions, style, className, onMouseEnter, onMouseLeave, onClick, children, })=>{
    const {isDesktop}=useWindowDimensions()
    return isDesktop?<UpdateFollower mouseOptions={mouseOptions} style={style} className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
        {children}
    </UpdateFollower>:
    <Box style={style} className={className}>{children}</Box>
        
}
export default CustomUpdateFollower