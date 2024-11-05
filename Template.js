

import { Visibility } from "@mui/icons-material";
import React from "react";

const  Template=({children})=>(
      <html lang="fr">
        <head>
          <meta charSet="utf-8" />
          <link rel="icon" href={require("./client/src/assets/img/favicon.png")} />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"  />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Web site created using create-react-app"/>
          {/* <link rel="apple-touch-icon" href="logo192.png" /> */}
          {/* <link rel="manifest" href="/manifest.json" /> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300..700;1,300..700&family=Exo:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
          <link href="https://fonts.cdnfonts.com/css/lucida-handwriting-std" rel="stylesheet" />
          <title>DEVTE</title>
        </head>
        <body 
        >
        <div
               id="root">{children}</div>
      </body>
    </html>    
    
  )
  
export default Template;
