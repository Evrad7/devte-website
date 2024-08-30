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
        observe(bodyRef.current, "primary")
        observe(footerRef.current, "light")     
        observe(serviceRef.current, "light")  
        observe(technologiesRef.current, "primary")
        observe(fonctionalitiesRef.current, "primary")
        observe(agileRef.current, "light")
        observe(homeCrewRef.current, "primary")
      }
      else{
         observeMobile(bodyRef.current)
      }
      return ()=>{
        if(isDesktop){
          const currentBodyRef=bodyRef
          const currentFooterRef=footerRef
          const currentSericeRef=serviceRef
          const currentTechnologiesRef=technologiesRef
          const currentFonctionalitiesRef=fonctionalitiesRef
          const currentAgileRef=agileRef
          const currentHomeCrewRef=homeCrewRef

          unObserve(currentBodyRef.current)
          unObserve(currentFooterRef.current)
          unObserve(currentSericeRef.current)
          unObserve(currentTechnologiesRef.current)
          unObserve(currentFonctionalitiesRef.current)
          unObserve(currentAgileRef.current)
          unObserve(currentHomeCrewRef.current)
        }
        else{
          const currentBodyRef=bodyRef
          unObserve(currentBodyRef.current)

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
  
            <CustomUpdateFollower className="update-follower" style={{ position:"relative", zIndex:theme.zIndex.fab}} mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
              <Box className="main"  ref={bodyRef} sx={{background:theme.palette.light.main}} >
                  {isDesktop&&<Separator direction="top" translate />}
                  <Box sx={{background:theme.palette.light.main}}>
                      <Typography sx={{mx:{xs:1, md:10, lg:20}, py:15, textAlign:"center"}} variant="body1" component="p">
                          In ipsum voluptate deserunt ad magna eiusmod sint do. Ea occaecat ea esse dolor minim non duis Lorem consequat qui pariatur. Dolor exercitation id quis culpa ullamco esse incididunt sint mollit sint nostrud consequat. Deserunt magna labore duis enim. Laboris officia nulla velit consequat excepteur. Sunt elit enim commodo duis minim sint irure dolor adipisicing minim cillum qui proident.
                      </Typography>
              {/* {qualities[0].svg} */}
                      <Box sx={{height:2000, background:"red"}}></Box>
                      <Box sx={{height:2000, background:"pink"}}></Box>
                      <Box sx={{height:2000, background:"yellow"}}></Box>
                      <Box sx={{height:2000, background:"green"}}></Box>
                  


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


                      
                      <Box sx={{height:2000, background:"cyan"}}></Box>
                      <Box sx={{height:2000, background:"magenta"}}></Box>
                      <Box sx={{height:2000, background:"blue"}}></Box>



                     

                       
                    

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
                  
                  
                  </Box>
                </Box>
            
              </CustomUpdateFollower>
            </Box>
    </PageContainer>
     
    );
  
}

export default HomePage;
