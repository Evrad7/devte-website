import React, { useContext, useEffect, useRef } from 'react';
import Footer from '../../Components/Layout/Footer/Footer.layout';
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import Separator from '../../Components/Layout/Separator/Separator.layout';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { HeaderContext } from '../../context/HeaderContext';
import PageContainer from '../../Components/Layout/PageContainer/PageContainer.layout';
import CustomUpdateFollower from '../../Components/Layout/CustomUpdateFollower/CustomUpdateFollower.layout';
import { fonctionalities, technologies } from '../../services/data';
import Services from '../../Components/Layout/Services/Services.layout';
import GridDrowned from '../../Components/Layout/GridDrowned/GridDrowned.layout';
import SecondaryLandingComponent from '../../Components/Layout/SecondaryLandingComponent/SecondaryLandingComponent';
import Action from '../../Components/Layout/Action/Action.layout';
import Title from '../../Components/Layout/Title/Title.layout';
import RocketFlying from '../../Components/Layout/RocketFlying/RocketFlying.layout';
import ProjectForm from '../../Components/Layout/ProjectForm/PojectForm.layout';
import Crew from '../../Components/Layout/Crew/Crew.layout';
import CrewMember from '../../Components/Layout/CrewMember/CrewMember.layout';



const AboutPage = () => {
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
                    title="A PROPOS DE DEVTE"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, maxime. Autem tempore, minus sequi debitis eligendi
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                />
                  <Box  ref={descriptionRef}>
                    <Box className="main" sx={{background:theme.palette.light.main}}>
                        <Separator direction="top" translate/>
                    </Box>

                    <Box component="section" sx={{mt:10, mb:{xs:10, md:20}}}>
                        <Title text="Historique" icon="historic.svg" color="primary" justifyContent="flex-start"/>
                        <Typography component="p" sx={{
                            textAlign:"center",
                            px:{xs:2, sm:10, md:20, lg:40}
                        }}>
                            Eiusmod do ea occaecat commodo eiusmod ad adipisicing elit.
                             Irure reprehenderit nostrud ex dolor consequat dolore nisi fugiat. Do ut commodo id cillum 
                             duis ullamco. Eu incididunt sint anim sunt consectetur consequat. Aliqua ea enim adipisicing dolor
                              excepteur qui adipisicing culpa nulla non amet aute. Qui eu incididunt labore ea nisi anim deserunt
                               nulla mollit.
                        </Typography>
                    </Box>

                    <Box component="section" sx={{mb:5}}>
                          <Crew/>
                    </Box>

                    <Box component="section" sx={{my:10}}>
                          <CrewMember/>
                    </Box>

                    <Action/>

                   
                    <Box component={"section"} sx={{mt:0, mb:{xs:10, md:20}}}>
                          <CustomUpdateFollower  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
                            <GridDrowned items={allFonctionalities}/>
                          </CustomUpdateFollower>
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

export default AboutPage;

