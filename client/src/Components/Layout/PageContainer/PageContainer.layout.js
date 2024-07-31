import { MouseFollower, useControlOptions } from "react-mouse-follower"
import Header from "../Header/Header.layout"
import { useEffect } from "react"
import { isMobile } from "../../../utils/helpers/device"
import { Box } from "@mui/material"


const PageContainer=({children})=>{
    const isDesktop=!isMobile()
    return(
        <>
            {/* {isDesktop &&<MouseFollower/>} */}
            <Header/>
            <Box sx={{
                overflowX:"hidden", position:"absolute", overflowY:"auto", top: 0, right:0, bottom:0, left:0
            }}>
                {children}
            </Box>
        </>
    )
}
export default PageContainer