import React, { useContext, useEffect, useRef } from 'react';
import Footer from '../../Components/Layout/Footer/Footer.layout';
import { Box} from '@mui/material';
import { useTheme } from '@emotion/react';
import Separator from '../../Components/Layout/Separator/Separator.layout';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { HeaderContext } from '../../context/HeaderContext';
import PageContainer from '../../Components/Layout/PageContainer/PageContainer.layout';
import CustomUpdateFollower from '../../Components/Layout/CustomUpdateFollower/CustomUpdateFollower.layout';
import { fonctionalities, technologies } from '../../services/data';
import Services from '../../Components/Layout/Services/Services.layout';
import SecondaryLandingComponent from '../../Components/Layout/SecondaryLandingComponent/SecondaryLandingComponent';
import Action from '../../Components/Layout/Action/Action.layout';
import Quote from '../../Components/Layout/Quote/Quote.layout';
import RocketFlying from '../../Components/Layout/RocketFlying/RocketFlying.layout';
import ProjectForm from '../../Components/Layout/ProjectForm/PojectForm.layout';
import Contact from '../../Components/Layout/Contact/Contact.layout';



const ContactPage = () => {
  const {isDesktop}=useWindowDimensions()
    const theme=useTheme()
    const {observe, unObserve, observeMobile}=useContext(HeaderContext)
    const descriptionRef=useRef(null)
    const serviceRef=useRef(null)
    const projectFormRef=useRef(null)

   const allFonctionalities=fonctionalities.filter(item=>item.mobile)
  const allTechnoligies=technologies.filter(item=>item.mobile)

    const detailsServiceData=[
      {
        title:"Analyse et Conception",
        photo:"analyse_et_conception_mobile.svg",
        description:`Irure laborum nisi exercitation cillum eiusmod consequat eu consectetur duis incididunt
        cillum in elit. Minim ad deserunt duis Lorem qui pariatur ex aliqua. Ad ea est laborum duis ipsum id. `,
      
      },
      {
        title:"Expérience UI/UX",
        photo:"experience_ux_ui.png",
        description:`Irure laborum nisi exercitation cillum eiusmod consequat eu consectetur duis incididunt
        cillum in elit. Minim ad deserunt duis Lorem qui pariatur ex aliqua. Ad ea est laborum duis ipsum id. 
        `, 
    
      },
      {
        title:"Developpement",
        photo:"developpement.png",
        description:`Irure laborum nisi exercitation cillum eiusmod consequat eu consectetur duis incididunt
        cillum in elit. Minim ad deserunt duis Lorem qui pariatur ex aliqua. Ad ea est laborum duis ipsum id. 
        Sit veniam amet Lorem enim ad nisi aute et minim. Officia incididunt cupidatat.`,
      },
      {
        title:"Tests",
        photo:"tests.png",
        description:`Irure laborum nisi exercitation cillum eiusmod consequat eu consectetur duis incididunt
        cillum in elit. Minim ad deserunt duis Lorem qui pariatur ex aliqua. Ad ea est laborum duis ipsum id. 
        Sit veniam amet Lorem enim ad nisi aute et minim. Officia incididunt cupidatat`,
      }
    ]


    useEffect(()=>{
      if(isDesktop){
        observe(descriptionRef.current, "primary")
        observe(serviceRef.current, "light")  
        observe(projectFormRef.current, "primary")
      }
      else{
         observeMobile(descriptionRef.current)
      }
      return ()=>{
        if(isDesktop){
          const currentDescriptionRef=descriptionRef
          const currentSericeRef=serviceRef
          const currentProjectFormRef=projectFormRef

          unObserve(currentDescriptionRef.current)
          unObserve(currentSericeRef.current)
          unObserve(currentProjectFormRef.current)
        }
      
      }
    }, [observe, unObserve, isDesktop])

    return (
      <PageContainer>
            <CustomUpdateFollower className="update-follower" style={{background:theme.palette.light.main}} mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
                <SecondaryLandingComponent 
                    title="RESTONS EN CONTACT"
                    description="Restez connecté à DEVTE pour nourrir l'innovation et saisir chaque opportunité d'impact, en transformant vos idées en réalités concrètes."

                />
                  <Box  ref={descriptionRef}>
                    <Box className="main" sx={{background:theme.palette.light.main}}>
                        <Separator direction="top" translate/>
                    </Box>

                    <Box component="section" sx={{mt:{xs:1, md:10}, mb:{xs:7, sm:12, lg:20}}}>
                        <Contact/>
                    </Box>
                    <Action/>
               
                    
                    <Box component="section" sx={{mt:15,  mb:{xs:10, md:15}}}>
                      <Quote 
                        name="TSOATA Evrad" 
                        role="CO-FONDATEUR DEVTE"
                        photo="evrad7.png" 
                        text="DEVTE croit que chaque individu possède une idée qui, bien cernée et implémentée convenablement, peut changer positivement le monde."
                      />
                    </Box>
             
                  </Box>
                 
                  <Box ref={serviceRef} component={"section"} sx={{mt:0, mb:{xs:10, md:20}}}>
                        <CustomUpdateFollower  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.light.main}}>
                          <Services/>
                        </CustomUpdateFollower>
                  </Box>  
                      
                  <RocketFlying/>

                  <Box ref={projectFormRef} sx={{mb:{xs:10, md:15}}}>
                    <ProjectForm />
                  </Box>    

                  <Box >
                    <Footer/>
                  </Box>
                
              </CustomUpdateFollower>
    </PageContainer>
     
    );
  
}

export default ContactPage;

