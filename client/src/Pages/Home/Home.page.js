import React, { useContext, useEffect, useRef } from 'react';
import Footer from '../../Components/Layout/Footer/Footer.layout';
import { styled } from '@mui/material/styles';
import LandingComponent from '../../Components/Layout/LandingComponent/LandingComponent.layout';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import Separator from '../../Components/Layout/Separator/Separator.layout';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { HeaderContext } from '../../context/HeaderContext';
import PageContainer from '../../Components/Layout/PageContainer/PageContainer.layout';
import CustomUpdateFollower from '../../Components/Layout/CustomUpdateFollower/CustomUpdateFollower.layout';
import Header from '../../Components/Layout/Header/Header.layout';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const HomePage = () => {
  const {isDesktop}=useWindowDimensions()
    const theme=useTheme()
    const {observe, unObserve, observeMobile}=useContext(HeaderContext)
    const bodyRef=useRef(null)
    const footerRef=useRef(null)
    const serviceRef=useRef(null)

    useEffect(()=>{
      if(isDesktop){
        observe(bodyRef.current, "primary")
        observe(footerRef.current, "light")     
        observe(serviceRef.current, "light")   
      }
      else{
         observeMobile(bodyRef.current)
      }
      return ()=>{
        if(isDesktop){
          const currentBodyRef=bodyRef
          const currentFooterRef=footerRef
          const currentSericeRef=serviceRef
          unObserve(currentBodyRef.current)
          unObserve(currentFooterRef.current)
          unObserve(currentSericeRef.current)
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
              <Box className="main"  ref={bodyRef} >
                  {isDesktop && <Separator direction="top" translate/>}
                  <Box sx={{background:theme.palette.light.main}}>
                      <Typography sx={{mx:{xs:1, md:10, lg:20}, py:15, textAlign:"center"}} variant="body1" component="p">
                          In ipsum voluptate deserunt ad magna eiusmod sint do. Ea occaecat ea esse dolor minim non duis Lorem consequat qui pariatur. Dolor exercitation id quis culpa ullamco esse incididunt sint mollit sint nostrud consequat. Deserunt magna labore duis enim. Laboris officia nulla velit consequat excepteur. Sunt elit enim commodo duis minim sint irure dolor adipisicing minim cillum qui proident.
                      </Typography>
                      <Box sx={{height:300,  opacity:.2}} ></Box>

                      <CustomUpdateFollower className="update-follower" style={{ position:"relative", zIndex:10000}} mouseOptions={{zIndex:10000, backgroundColor:theme.palette.light.main}}>
                        <Box ref={serviceRef} sx={{height:800, background:theme.palette.primary.gradientToTop, mb:10}} >
                          <Typography color="light" variant="h1">Les Services BIG</Typography>   
                        </Box>
                      </CustomUpdateFollower>

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

