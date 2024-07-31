
import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "./Pages/Home/Home.page";
import { ThemeProvider } from "@emotion/react";
import theme from "./context/Theme/Theme";
import HomePageTest from "./Pages/Home/HomePage.test";
import { HeaderContextComponent } from "./context/HeaderContext";
import AboutPage from "./Pages/About/About.page";
import HomePureTest from "./Pages/Home/Home.pure.test";
import { IntersectionObserverContextProvider } from "./context/IntersectionObserverContext";
import WebDevlopmentPage from "./Pages/Services/WebDevelopment/WebDevelopment.page";
import MobileDevlopmentPage from "./Pages/Services/MobileDevlopment/MobileDevelopment.page";
import CloudSolutionsPage from "./Pages/Services/CloudSolutions/CloudSolutions.page";
import InfographyPage from "./Pages/Services/Inphography/Inphography.page";
import ServicesPage from "./Pages/Services/Services.page";


  
const  App=()=>(
    <ThemeProvider theme={theme}>
      <HeaderContextComponent>
          <IntersectionObserverContextProvider>
                <Routes>
                    <Route  path="/" element={<HomePage/>}/>
                    <Route  path="/services" element={<ServicesPage/>}>
                        <Route path="/services/developpement-web" element={<WebDevlopmentPage/>}/>
                        <Route path="/services/developpement-mobile" element={<MobileDevlopmentPage/>}/>
                        <Route path="/services/solutions-cloud" element={<CloudSolutionsPage/>}/>
                        <Route path="/services/infographie" element={<InfographyPage/>}/>
                    </Route>
                    <Route  path="/about" element={<AboutPage/>}/>
                    <Route  path="/contact" element={<HomePageTest/>}/>
                    <Route  path="/test" element={<HomePureTest/>}/>         
                </Routes>
          </IntersectionObserverContextProvider>
        </HeaderContextComponent>
    </ThemeProvider>
  )
  
export default App;

 


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA