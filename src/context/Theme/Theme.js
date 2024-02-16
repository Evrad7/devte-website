import { createTheme } from "@mui/material";

const theme=createTheme({
    palette:{
        primary:{
            main:"#10355b",
            gradient:"linear-gradient(to bottom, #10355B, #030b12)",
        },
        secondary:{
            main:"#707070",
        },
        info:{
            "main":"#1d82bb",
        },
        dark:{
            main:"#0f0f0f"
        },
        light:{
            main:"#f9f9f9",
        },
        darkSpace:{
            main:"#1d212d"
        },
        
    }
})

export default theme