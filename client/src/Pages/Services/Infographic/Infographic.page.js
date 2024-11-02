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
import Services from '../../../Components/Layout/Services/Services.layout';
import GridHexagon from '../../../Components/Layout/GridHexagon/GridHexagon.layout';
import SecondaryLandingComponent from '../../../Components/Layout/SecondaryLandingComponent/SecondaryLandingComponent';
import Action from '../../../Components/Layout/Action/Action.layout';
import Title from '../../../Components/Layout/Title/Title.layout';
import Quote from '../../../Components/Layout/Quote/Quote.layout';
import RocketFlying from '../../../Components/Layout/RocketFlying/RocketFlying.layout';
import ProjectForm from '../../../Components/Layout/ProjectForm/PojectForm.layout';
import { technologies } from '../../../services/data';
import InfographicServiceDetails from '../../../Components/Layout/InfographicServiceDetails/InfographicServiceDetails.layout';



const InfographicPage = () => {
  const {isDesktop}=useWindowDimensions()
    const theme=useTheme()
    const {observe, unObserve, observeMobile}=useContext(HeaderContext)
    const mainBodyRef=useRef(null)
    const serviceRef=useRef(null)
    const projectFormRef=useRef(null)

  const allTechnoligies=technologies.filter(item=>item.infographic)

    useEffect(()=>{
      if(isDesktop){
        observe(mainBodyRef.current, "primary")
        observe(serviceRef.current, "light")  
        observe(projectFormRef.current, "primary")
      }
      else{
         observeMobile(mainBodyRef.current)
      }
      return ()=>{
        if(isDesktop){
          const currentBodyRef=mainBodyRef
          const currentSericeRef=serviceRef
          const currentProjectFormRef=projectFormRef

          unObserve(currentBodyRef.current)
          unObserve(currentSericeRef.current)
          unObserve(currentProjectFormRef.current)
        }
      
      }
    }, [observe, unObserve, isDesktop])

    return (
      <PageContainer>
            <CustomUpdateFollower className="update-follower" style={{background:theme.palette.light.main}} mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
                <SecondaryLandingComponent 
                    title="DESIGN D'INFOGRAPHIE"
                    description="Donnez une identité visuelle unique à votre marque grâce à nos services d'infographie 
                    sur mesure. Captivez votre audience avec des designs créatifs et percutants !"
                />
                  <Box  ref={mainBodyRef}>
                    <Box className="main" sx={{background:theme.palette.light.main}}>
                        <Separator direction="top" translate/>
                    </Box>
                    <Title text="Transformons vos idées" color="primary"/> 

                    <Box sx={{mb:20}} component="section">
                      <InfographicServiceDetails/>  
                    </Box>


                    <Box component="section"  sx={{mt:{xs:10, md:15}, mb:0}}>
                      <Title text="Services associés selon vos besoins" icon="icon_flash_primary.svg" color="primary" mb={{xs:5, md:10}} />
                      <Grid  sx={{pl:{xs:2.7, md:5}, pr:1, my:10}} container columnSpacing={{xs:10, lg:10}} rowSpacing={{xs:7, md:5}} justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={6} sx={{display:"flex", justifyContent:{xs:"center", sm:"flex-end"}}}>
                              <Quality
                                title="Impressions"
                                icon="printing.svg"
                                body="Très pratique pour composer des documents complexes, beaucoup
                                        d’automatisation : références croisées, notes de bas de page, table des" />
                            </Grid>
                            <Grid 
                                item xs={12}  sm={6}
                                sx={{display:"flex",justifyContent:{xs:"center", sm:"flex-start"}}}>
                              <Quality
                                  title="Annimations"
                                  icon="animation.svg"
                                body="Très pratique pour composer des documents complexes, beaucoup
                                        d’automatisation : références croisées, notes de bas de page, table des" />
                            </Grid>
                         
                      </Grid>
                    </Box>
                    

                    <Action/>

                    <Box  component={"section"} sx={{mt:{xs:10, md:15}, mb:{xs:5, md:10}}}>
                      <CustomUpdateFollower  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
                        <GridHexagon items={allTechnoligies}/>         
                      </CustomUpdateFollower>
                    </Box>  
              
                    <Box component="section" sx={{mt:15,  mb:{xs:10, md:15}}}>
                      <Quote 
                        name="TSOATA Evrad" 
                        role="CO-FONDATEUR DEVTE"
                        photo="dev1.png" 
                        text="Fugiat do nisi do irure nulla amet sint Lorem occaecat laboris exercitation deserunt. 
                          Ut ad non aute aute eiusmod elit voluptate laboris ipsum elit exercitation amet sunt."
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

export default InfographicPage;

