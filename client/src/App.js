
import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "./Pages/Home/Home.page";
import { ThemeProvider } from "@emotion/react";
import theme from "./context/Theme/Theme";
import HomePageTest from "./Pages/Home/HomePage.test";
import { IntersectionObserverContextComponent } from "./context/IntersectionObserverContext";
import { HeaderContextComponent } from "./context/HeaderContext";
import AboutPage from "./Pages/About/About.page";


  
const  App=()=>(
    <ThemeProvider theme={theme}>
      <HeaderContextComponent>
          <IntersectionObserverContextComponent>
                <Routes>
                    <Route  path="/" element={<HomePage/>}/>
                    <Route  path="/services" element={<HomePage/>}/>
                    <Route  path="/about" element={<AboutPage/>}/>
                    <Route  path="/contact" element={<HomePageTest/>}/>
                    <Route  path="/test" element={<HomePageTest/>}/>         
                </Routes>
          </IntersectionObserverContextComponent>
        </HeaderContextComponent>
    </ThemeProvider>
  )
  
export default App;

 


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA