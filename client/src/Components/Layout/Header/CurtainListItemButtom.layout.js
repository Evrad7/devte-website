import { useTheme } from "@emotion/react"
import { ListItemButton } from "@mui/material"
import { useEffect, useRef, useState } from "react"


const CurtainListItemButton=({itemLinkId, children})=>{
    const ref=useRef(null)
    useEffect(()=>{
        ref.current.setAttribute("item-link-id", itemLinkId)
        ref.current.addEventListener(" ", ()=>{
            document.querySelectorAll(`[item-link-id='${ref.current.getAttribute("item-link-id")}']`).forEach(elt=>elt.classList.add("hover"))
        })
        ref.current.addEventListener("mouseleave", ()=>{
            document.querySelectorAll(`[item-link-id='${ref.current.getAttribute("item-link-id")}']`).forEach(elt=>elt.classList.remove("hover"))
        })
    }, [])
    const theme=useTheme()
    return (
        <ListItemButton ref={ref} sx={{
            textAlign: 'center', display:"flex", justifyContent:"center",
            "&:hover, &.hover":{
                background:theme.palette.light.main,
                "& a":{
                    color:`${theme.palette.primary.main} !important`,
                }
            },
            
        }}>
            {children}
        </ListItemButton>
    )
}
export default CurtainListItemButton