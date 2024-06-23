import React from 'react';
import Header from '../../Components/Layout/Header/Header.layout';
import Footer from '../../Components/Layout/Footer/Footer.layout';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container  from '@mui/material/Container';
import Log from "../../assets/img/log.png"
import Banner from "../../assets/img/banner.jpg"
import LandingComponent from '../../Components/Layout/LandingComponent/LandingComponent.layout';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import { MouseFollower, UpdateFollower } from 'react-mouse-follower';
import zIndex from '@mui/material/styles/zIndex';
import Separator from '../../Components/Layout/Separator/Separator.layout';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const HomePage = (props) => {
  // const {height}=useWindowDimensions()
    const theme=useTheme()
    return (
      <div>
          <MouseFollower  />
          <Header/>
          <Box sx={{
            top:0,
            left:0,
            right:0,
            bottom:0,
            position:"absolute",
            overflowX:"hidden",
            overflowY:"auto", 
            perspective:50,
            transformStyle:"preserve-3d",
            }}>
            <LandingComponent/> 
            <UpdateFollower style={{ position:"relative", zIndex:10000}} mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
              <Separator direction="top"/>
              <Box sx={{backgroundColor:theme.palette.light.main}}>

                  <Button color={"info"} variant="contained">Evrad 7 le meilleur</Button>
                <Footer/>

              <Box sx={{marginTop:"200px", height:400, backgroundColor:theme.palette.primary.main, display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
              <Separator direction="bottom"/>
              <Separator direction="top"/>


              </Box>
              
              
              </Box>
            </UpdateFollower>
          </Box>
           
         
         
                 
    </div>
     
    );
  
}

export default HomePage;

