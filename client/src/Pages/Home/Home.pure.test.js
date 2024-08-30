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
import { fonctionalities, qualities, technoligies } from '../../services/data';
import Services from '../../Components/Layout/Services/Services.layout';
import GridDrowned from '../../Components/Layout/GridDrowned/GridDrowned.layout';
import GridHexagon from '../../Components/Layout/GridHexagon/GridHexagon.layout';
import Agile from '../../Components/Layout/Agile/Agile.layout';
import HomeCrew from '../../Components/Layout/HomeCrew/HomeCrew.layout';
import SecondaryLandingComponent from '../../Components/Layout/SecondaryLandingComponent/SecondaryLandingComponent';



const HomePage = () => {
  const {isDesktop}=useWindowDimensions()
    const theme=useTheme()
    const {observe, unObserve, observeMobile}=useContext(HeaderContext)
    const bodyRef=useRef(null)
    const footerRef=useRef(null)
    const serviceRef=useRef(null)
    const fonctionalitiesRef=useRef(null)
    const technologiesRef=useRef(null)
    const agileRef=useRef(null)
    const homeCrewRef=useRef(null)

    const allFonctionalities=fonctionalities.filter(item=>item.all)
  const allTechnoligies=technoligies.filter(item=>item.all)




    useEffect(()=>{
      if(isDesktop){
        // observe(bodyRef.current, "primary")
        observe(footerRef.current, "light")     
        observe(serviceRef.current, "light")  
        observe(technologiesRef.current, "primary")
        observe(fonctionalitiesRef.current, "primary")
        observe(agileRef.current, "light")
        observe(homeCrewRef.current, "primary")
      }
      else{
        //  observeMobile(bodyRef.current)
      }
      return ()=>{
        if(isDesktop){
          // const currentBodyRef=bodyRef
          const currentFooterRef=footerRef
          const currentSericeRef=serviceRef
          const currentTechnologiesRef=technologiesRef
          const currentFonctionalitiesRef=fonctionalitiesRef
          const currentAgileRef=agileRef
          const currentHomeCrewRef=homeCrewRef

          // unObserve(currentBodyRef.current)
          unObserve(currentFooterRef.current)
          unObserve(currentSericeRef.current)
          unObserve(currentTechnologiesRef.current)
          unObserve(currentFonctionalitiesRef.current)
          unObserve(currentAgileRef.current)
          unObserve(currentHomeCrewRef.current)
        }
        else{
          // const currentBodyRef=bodyRef
          // unObserve(currentBodyRef.current)

        }
      }
    }, [observe, unObserve, isDesktop])

    return (
      <PageContainer hideHeader={isDesktop?true:false}>
            <CustomUpdateFollower className="update-follower" style={{ position:"relative", zIndex:theme.zIndex.fab}} mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
                <SecondaryLandingComponent 
                    title="DEVELOPPEMENT DES SITES ET  APPLICATIONS WEB"
                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, maxime. Autem tempore, minus sequi debitis eligendi
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                />
            <Box className="main" sx={{background:theme.palette.light.main}}>
                <Separator direction="top" translate/>
            </Box>

                
              {/* {qualities[0].svg} */}


                      <Grid sx={{pl:{xs:2, md:5}, pr:1, my:10}} container columnSpacing={{xs:10, lg:10}} rowSpacing={{xs:7, md:5}} justifyContent="center" alignItems="center">
                          <Grid item xs={12} sm={5} lg={4} sx={{display:"flex", justifyContent:"center"}}>
                            <Quality
                              title="Digitalisation"
                              icon="digitalization"
                              body="Très pratique pour composer des documents complexes, beaucoup
                                      d’automatisation : références croisées, notes de bas de page, table des" />
                          </Grid>
                          <Grid 
                              item xs={12}  sm={5} lg={4}
                              sx={{display:"flex",
                                    justifyContent:"center",
                                    transform:{lg:"translateY(25%)"}
                                    }}>
                            <Quality
                                title="Innovation"
                                icon="innovation"
                              body="Très pratique pour composer des documents complexes, beaucoup
                                      d’automatisation : références croisées, notes de bas de page, table des" />
                          </Grid>
                          <Grid item xs={12}  sm={5} lg={4} sx={{display:"flex", justifyContent:"center"}}>
                            
                          <Quality
                            title="Flexibilité"
                            icon="flexibility"
                            body="Très pratique pour composer des documents complexes, beaucoup
                                    d’automatisation : références croisées, notes de bas de page, table des" />
                          </Grid>
                      </Grid>

                      <Box ref={serviceRef} component={"section"} sx={{my:15}}>
                        <CustomUpdateFollower  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.light.main}}>
                          <Services/>
                        </CustomUpdateFollower>
                      </Box>  



                      <Box ref={technologiesRef} component={"section"} sx={{my:15}}>
                        <CustomUpdateFollower  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
                          <GridHexagon items={allTechnoligies}/>         
                        </CustomUpdateFollower>
                      </Box>    


                       <Box ref={fonctionalitiesRef} component={"section"} sx={{my:15}}>
                        <CustomUpdateFollower  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
                          <GridDrowned items={allFonctionalities}/>
                        </CustomUpdateFollower>
                      </Box>

                    

                      <Box ref={agileRef} component={"section"} sx={{my:15}}>
                        <CustomUpdateFollower  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
                          <Agile/>
                        </CustomUpdateFollower>
                      </Box>


                       <Box ref={homeCrewRef} component={"section"} sx={{my:15}}>
                        <CustomUpdateFollower  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
                          <HomeCrew/>
                        </CustomUpdateFollower>
                      </Box>
         

                      <Box ref={footerRef}>
                        <Footer/>
                      </Box>
                      <Box sx={{height:200}}></Box>

                      <Box sx={{marginTop:"200px", height:400, backgroundColor:theme.palette.primary.main, display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                        <Separator direction="bottom"/>
                        <Separator direction="top"/>
                      </Box>
                  






                  
                      <Grid sx={{pl:{xs:2, md:5}, pr:1, my:10}} container columnSpacing={{xs:10, lg:10}} rowSpacing={{xs:7, md:5}} justifyContent="center" alignItems="center">
                          <Grid item xs={12} sm={5} lg={4} sx={{display:"flex", justifyContent:"center"}}>
                            <Quality
                              title="Digitalisation"
                              icon="digitalization"
                              body="Très pratique pour composer des documents complexes, beaucoup
                                      d’automatisation : références croisées, notes de bas de page, table des" />
                          </Grid>
                          <Grid 
                              item xs={12}  sm={5} lg={4}
                              sx={{display:"flex",
                                    justifyContent:"center",
                                    transform:{lg:"translateY(25%)"}
                                    }}>
                            <Quality
                                title="Innovation"
                                icon="innovation"
                              body="Très pratique pour composer des documents complexes, beaucoup
                                      d’automatisation : références croisées, notes de bas de page, table des" />
                          </Grid>
                          <Grid item xs={12}  sm={5} lg={4} sx={{display:"flex", justifyContent:"center"}}>
                            
                          <Quality
                            title="Flexibilité"
                            icon="flexibility"
                            body="Très pratique pour composer des documents complexes, beaucoup
                                    d’automatisation : références croisées, notes de bas de page, table des" />
                          </Grid>
                      </Grid>

                      <Box ref={serviceRef} component={"section"} sx={{my:15}}>
                        <CustomUpdateFollower  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.light.main}}>
                          <Services/>
                        </CustomUpdateFollower>
                      </Box>  



                      <Box ref={technologiesRef} component={"section"} sx={{my:15}}>
                        <CustomUpdateFollower  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
                          <GridHexagon items={allTechnoligies}/>         
                        </CustomUpdateFollower>
                      </Box>    


                     

                    

                      <Box ref={agileRef} component={"section"} sx={{my:15}}>
                        <CustomUpdateFollower  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
                          <Agile/>
                        </CustomUpdateFollower>
                      </Box>


                       <Box ref={homeCrewRef} component={"section"} sx={{my:15}}>
                        <CustomUpdateFollower  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
                          <HomeCrew/>
                        </CustomUpdateFollower>
                      </Box>
                      <Box ref={footerRef}>
                        <Footer/>
                      </Box>
                      <Box sx={{height:200}}></Box>

                      <Box sx={{marginTop:"200px", height:400, backgroundColor:theme.palette.primary.main, display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                        <Separator direction="bottom"/>
                        <Separator direction="top"/>
                      </Box>
              </CustomUpdateFollower>
    </PageContainer>
     
    );
  
}

export default HomePage;

