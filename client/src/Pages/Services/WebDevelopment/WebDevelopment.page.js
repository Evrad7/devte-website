import React, { useContext, useEffect, useRef } from 'react';
import Footer from '../../../Components/Layout/Footer/Footer.layout';
import { Box, Grid } from '@mui/material';
import { useTheme } from '@emotion/react';
import Separator from '../../../Components/Layout/Separator/Separator.layout';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { HeaderContext } from '../../../context/HeaderContext';
import PageContainer from '../../../Components/Layout/PageContainer/PageContainer.layout';
import CustomUpdateFollower from '../../../Components/Layout/CustomUpdateFollower/CustomUpdateFollower.layout';
import Quality from '../../../Components/Layout/Quality/Quality.layout';
import { fonctionalities, technologies } from '../../../services/data';
import Services from '../../../Components/Layout/Services/Services.layout';
import GridDrowned from '../../../Components/Layout/GridDrowned/GridDrowned.layout';
import GridHexagon from '../../../Components/Layout/GridHexagon/GridHexagon.layout';
import SecondaryLandingComponent from '../../../Components/Layout/SecondaryLandingComponent/SecondaryLandingComponent';
import ServiceDetails from '../../../Components/Layout/ServiceDetails/ServiceDetails.layout';
import Action from '../../../Components/Layout/Action/Action.layout';
import Title from '../../../Components/Layout/Title/Title.layout';
import Quote from '../../../Components/Layout/Quote/Quote.layout';
import RocketFlying from '../../../Components/Layout/RocketFlying/RocketFlying.layout';
import ProjectForm from '../../../Components/Layout/ProjectForm/PojectForm.layout';



const HomePage = () => {
  const {isDesktop}=useWindowDimensions()
    const theme=useTheme()
    const {observe, unObserve, observeMobile}=useContext(HeaderContext)
    const descriptionRef=useRef(null)
    const serviceRef=useRef(null)
    const projectFormRef=useRef(null)

   const allFonctionalities=fonctionalities.filter(item=>item.web)
  const allTechnoligies=technologies.filter(item=>item.web)

    const detailsServiceData=[
      {
        title:"Analyse et Conception",
        photo:"analyse_et_conception.png",
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
                    title="DEVELOPPEMENT DES SITES ET  APPLICATIONS WEB"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, maxime. Autem tempore, minus sequi debitis eligendi
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                />
                  <Box  ref={descriptionRef}>
                    <Box className="main" sx={{background:theme.palette.light.main}}>
                        <Separator direction="top" translate/>
                    </Box>

                    <Box component="section" sx={{mt:10, mb:{xs:10, md:20}}}>
                        <ServiceDetails data={detailsServiceData}/>
                    </Box>

                    <Action/>

                    
                    <Box component="section"  sx={{mt:{xs:10, md:15}, mb:0}}>
                      <Title text="Services associés selon vos besoins" icon="icon_flash_primary.svg" color="primary" mb={{xs:5, md:10}} />
                      <Grid  sx={{pl:{xs:2.7, md:5}, pr:1, my:10}} container columnSpacing={{xs:10, lg:10}} rowSpacing={{xs:7, md:5}} justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={6} lg={3} sx={{display:"flex", justifyContent:{xs:"center", sm:"flex-end", ml:"center"}}}>
                              <Quality
                                title="Hebergement"
                                icon="hosting.svg"
                                body="Très pratique pour composer des documents complexes, beaucoup
                                        d’automatisation : références croisées, notes de bas de page, table des" />
                            </Grid>
                            <Grid 
                                item xs={12}  sm={6} lg={3}
                                sx={{display:"flex",justifyContent:{xs:"center", sm:"flex-start", lg:"center"},}}>
                              <Quality
                                  title="Maintenance"
                                  icon="maintenance.svg"
                                body="Très pratique pour composer des documents complexes, beaucoup
                                        d’automatisation : références croisées, notes de bas de page, table des" />
                            </Grid>
                            <Grid item xs={12}  sm={6} lg={3} sx={{display:"flex", justifyContent:{xs:"center", sm:"flex-end", ml:"center"}}}>
                            <Quality
                              title="Analyse SEO"
                              icon="seo.svg"
                              body="Très pratique pour composer des documents complexes, beaucoup
                                      d’automatisation : références croisées, notes de bas de page, table des" />
                            </Grid>

                            <Grid item xs={12}  sm={6} lg={3} sx={{display:"flex", justifyContent:{xs:"center", sm:"flex-start", lg:"center"}}}>
                            <Quality
                              title="Audit"
                              icon="audit.svg"
                              body="Très pratique pour composer des documents complexes, beaucoup
                                      d’automatisation : références croisées, notes de bas de page, table des" />
                            </Grid>
                      </Grid>
                    </Box>
                    
                    <Box component="section" sx={{mt:15,  mb:{xs:10, md:15}}}>
                      <Quote 
                        name="TSOATA Evrad" 
                        role="CO-FONDATEUR DEVTE"
                        photo="dev.png" 
                        text="Fugiat do nisi do irure nulla amet sint Lorem occaecat laboris exercitation deserunt. 
                          Ut ad non aute aute eiusmod elit voluptate laboris ipsum elit exercitation amet sunt."
                      />
                    </Box>

                    <Box component={"section"} sx={{mt:0, mb:{xs:10, md:20}}}>
                          <CustomUpdateFollower  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
                            <GridDrowned items={allFonctionalities}/>
                          </CustomUpdateFollower>
                    </Box>

                    <Action/>

                    <Box  component={"section"} sx={{mt:{xs:10, md:15}, mb:0}}>
                      <CustomUpdateFollower  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
                        <GridHexagon items={allTechnoligies}/>         
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

export default HomePage;

