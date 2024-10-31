
import React from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "./Pages/Home/Home.page";
import { ThemeProvider } from "@emotion/react";
import theme from "./context/Theme/Theme";
import { HeaderContextComponent } from "./context/HeaderContext";
import AboutPage from "./Pages/About/About.page";
import { IntersectionObserverContextProvider } from "./context/IntersectionObserverContext";
import WebDevlopmentPage from "./Pages/Services/WebDevelopment/WebDevelopment.page";
import MobileDevlopmentPage from "./Pages/Services/MobileDevlopment/MobileDevelopment.page";
import SystemAdministrationPage from "./Pages/Services/SystemAdministration/SystemAdministration.page";
import InfographicPage from "./Pages/Services/Infographic/Infographic.page";
import ServicesPage from "./Pages/Services/Services.page";
import { ServerContextProvider } from "./context/ServerContext";
import ContactPage from "./Pages/Contact/Contact.page";


  
const  App=({data})=>{
  const deserializedData=typeof data ==="object"?data:eval(`(${data})`)

  return (
    <ServerContextProvider isMobile={deserializedData.isMobile}>
      <ThemeProvider theme={theme} >
      <HeaderContextComponent>
          <IntersectionObserverContextProvider>
                <Routes>
                      <Route  path="/" element={<HomePage/>}/>
                      <Route  path="/services" element={<ServicesPage/>}>
                          <Route path="/services/developpement-web" element={<WebDevlopmentPage/>}/>
                          <Route path="/services/developpement-mobile" element={<MobileDevlopmentPage/>}/>
                          <Route path="/services/administration-systeme" element={<SystemAdministrationPage/>}/>
                          <Route path="/services/infographie" element={<InfographicPage/>}/>
                      </Route>
                      <Route  path="/about" element={<AboutPage/>}/>
                      <Route  path="/contact" element={<ContactPage/>}/>
                  </Routes>
          </IntersectionObserverContextProvider>
        </HeaderContextComponent>
    </ThemeProvider>
    </ServerContextProvider>
  )
    
}
  
export default App;

 


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA