import React, { useContext, useEffect, useRef } from 'react';
import Footer from '../../Components/Layout/Footer/Footer.layout';
import { styled } from '@mui/material/styles';
import LandingComponent from '../../Components/Layout/LandingComponent/LandingComponent.layout';
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import Separator from '../../Components/Layout/Separator/Separator.layout';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { HeaderContext } from '../../context/HeaderContext';
import PageContainer from '../../Components/Layout/PageContainer/PageContainer.layout';
import CustomUpdateFollower from '../../Components/Layout/CustomUpdateFollower/CustomUpdateFollower.layout';
import Header from '../../Components/Layout/Header/Header.layout';
import Quality from '../../Components/Layout/Quality/Quality.layout';
import { fonctionalities, qualities, technologies } from '../../services/data';
import Services from '../../Components/Layout/Services/Services.layout';
import GridDrowned from '../../Components/Layout/GridDrowned/GridDrowned.layout';
import GridHexagon from '../../Components/Layout/GridHexagon/GridHexagon.layout';
import Agile from '../../Components/Layout/Agile/Agile.layout';
import HomeCrew from '../../Components/Layout/HomeCrew/HomeCrew.layout';
import Action from '../../Components/Layout/Action/Action.layout';
import Experiences from '../../Components/Layout/Experiences/Experiences.layout';
import RocketFlying from '../../Components/Layout/RocketFlying/RocketFlying.layout';
import ProjectForm from '../../Components/Layout/ProjectForm/PojectForm.layout';




const HomePage = () => {
  const {isDesktop}=useWindowDimensions()
    const theme=useTheme()
    const {observe, unObserve, observeMobile}=useContext(HeaderContext)
    const descriptionRef=useRef(null)
    const footerRef=useRef(null)
    const serviceRef=useRef(null)
    const fonctionalitiesRef=useRef(null)
    const technologiesRef=useRef(null)
    const agileRef=useRef(null)
    const homeCrewRef=useRef(null)

   const allFonctionalities=fonctionalities.filter(item=>item.all)
   const allTechnoligies=technologies.filter(item=>item.all)




    useEffect(()=>{
      if(isDesktop){
        observe(descriptionRef.current, "primary")
        observe(footerRef.current, "light")     
        observe(serviceRef.current, "light")  
        observe(technologiesRef.current, "primary")
        observe(fonctionalitiesRef.current, "primary")
        observe(agileRef.current, "light")
        observe(homeCrewRef.current, "primary")
      }
      else{
         observeMobile(descriptionRef.current)
      }
      return ()=>{
        if(isDesktop){
          const currentdescriptionRef=descriptionRef
          const currentFooterRef=footerRef
          const currentSericeRef=serviceRef
          const currentTechnologiesRef=technologiesRef
          const currentFonctionalitiesRef=fonctionalitiesRef
          const currentAgileRef=agileRef
          const currentHomeCrewRef=homeCrewRef

          unObserve(currentdescriptionRef.current)
          unObserve(currentFooterRef.current)
          unObserve(currentSericeRef.current)
          unObserve(currentTechnologiesRef.current)
          unObserve(currentFonctionalitiesRef.current)
          unObserve(currentAgileRef.current)
          unObserve(currentHomeCrewRef.current)
        }
        else{
          const currentdescriptionRef=descriptionRef
          unObserve(currentdescriptionRef.current)

        }
      }
    }, [observe, unObserve, isDesktop])

    return (
      <PageContainer hideHeader={isDesktop?true:false}>
          <Box   sx={{
            top:0,
            left:0,
            right:0,
            bottom:0,
            position:isDesktop?"absolute":"static",
            overflowX:isDesktop?"hidden":"unset",
            overflowY:isDesktop?"auto":"unset", 
            perspective:isDesktop?50:"none",
            }}
            >
            {isDesktop&&<Header position="sticky"/>}
            <LandingComponent/> 
  
            <CustomUpdateFollower className="update-follower" style={{ position:"relative", zIndex:theme.zIndex.fab, background:theme.palette.light.main}} mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
                <Box className="first-section"  ref={descriptionRef} sx={{background:theme.palette.light.main}} >
                  {isDesktop&&<Separator direction="top" translate />}

                      <Typography sx={{mx:{xs:1, md:10, lg:20}, py:15, textAlign:"center"}} variant="body1" component="p">
                         Bienvenue chez DEVTE .
                          Nous sommes spécialisés dans la conception de solution informatiques sur mesure en fonction de vos besoins . nous vous accompagnons ainsi dans la digitalisation de vos activités a l'aide des technologies de pointe. Faites décoller vos projet ici et maintenant .
                      </Typography>
                      <Grid component="section" sx={{pl:{xs:2, md:5}, pr:1, my:10}} container columnSpacing={{xs:10, lg:10}} rowSpacing={{xs:7, md:5}} justifyContent="center" alignItems="center">
                          <Grid item xs={12} sm={5} lg={4} sx={{display:"flex", justifyContent:"center"}}>
                            <Quality
                              title="Digitalisation"
                              icon="digitalization.svg"
                              body="Piler important pour rester competitif dans le monde du numerique,
                                      il vous facilite l'acces au données et et a pour but d'automatisation  vos processus" />
                          </Grid>
                          <Grid 
                              item xs={12}  sm={5} lg={4}
                              sx={{display:"flex",
                                    justifyContent:"center",
                                    transform:{lg:"translateY(25%)"}
                                    }}>
                            <Quality
                                title="Innovation"
                                icon="innovation.svg"
                              body="C'est le coeur de tous ce que nous faisons . Innover Pour
                                      anticipé les besoins futur , dans un monde en constante évolution technologique  " />
                          </Grid>
                          <Grid item xs={12}  sm={5} lg={4} sx={{display:"flex", justifyContent:"center"}}>
                            
                          <Quality
                            title="Flexibilité"
                            icon="flexibility.svg"
                            body="Le flexibilité est essentielle dans un monde ou les besoins evolue rapidement ,
                                    chez DEVTE , vous adaptons nos services et solutions a vos besoins spécifiques" />
                          </Grid>
                      </Grid>
                </Box>

                <Box ref={serviceRef} component={"section"} sx={{mt:15, mb:{xs:10, md:20}}}>
                  <CustomUpdateFollower  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.light.main}}>
                    <Services/>
                  </CustomUpdateFollower>
                </Box>  

                <Box ref={fonctionalitiesRef} component={"section"} sx={{mt:0, mb:{xs:10, md:20}}}>
                  <CustomUpdateFollower  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
                    <GridDrowned items={allFonctionalities}/>
                  </CustomUpdateFollower>
                </Box>

                <Action/>

                <Box ref={technologiesRef} component={"section"} sx={{mt:{xs:10, md:15}, mb:0}}>
                  <CustomUpdateFollower  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
                    <GridHexagon items={allTechnoligies}/>         
                  </CustomUpdateFollower>
                </Box>    


                <Box ref={agileRef} component={"section"} sx={{my:15}}>
                  <CustomUpdateFollower  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.light.main}}>
                    <Agile/>
                  </CustomUpdateFollower>
                </Box>


                  <Box ref={homeCrewRef} component={"section"} sx={{my:15}}>
                  <CustomUpdateFollower  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
                    <HomeCrew/>
                  </CustomUpdateFollower>
                </Box>
                
                <RocketFlying/>
                
                <ProjectForm/>

                <Box component="section" sx={{mb:15, mt:15}}>
                  <Experiences/>
                </Box>

                <Box ref={footerRef}>
                  <Footer/>
                </Box>
              </CustomUpdateFollower>
            </Box>
    </PageContainer>
     
    );
  
}

export default HomePage;

