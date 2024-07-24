import { createTheme } from "@mui/material";

const theme=createTheme({
    typography: {
        fontFamily: [
          "'Exo'",
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
    palette:{
        primary:{
            main:"#10355b",
            gradientToBottom:"linear-gradient(to bottom, #10355B, #030b12)",
            gradientToTop:"linear-gradient(to top, #10355B, #030b12)",
        },
        secondary:{
            main:"#707070",
        },
        info:{
            "main":"#1d82bb",
            "dark":"#10355B"
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