
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import { ThemeProvider } from "@emotion/react";
import theme from "./context/Theme/Theme";
import HomePageTest from "./Pages/Home/HomePage.test";


  
const  App=()=>(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
            <Route  path="/" element={<HomePage/>}/>
            <Route  path="/services" element={<HomePage/>}/>
            <Route  path="/about" element={<HomePage/>}/>
            <Route  path="/contact" element={<HomePageTest/>}/>
            <Route path="/test" element={<HomePageTest/>}/>         
        </Routes>
    </BrowserRouter>
    </ThemeProvider>
  
 
  )
  
export default App;

 


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA