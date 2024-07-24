import React, { useContext } from 'react';
import Container  from '@mui/material/Container';
import GridHexagon from '../../Components/Layout/GridHexagon/GridHexagon.layout';
import { technoligies, fonctionalities } from '../../services/data';
import { Box, Typography } from '@mui/material';
import GridDrowned from '../../Components/Layout/GridDrowned/GridDrowned.layout';
import Header from '../../Components/Layout/Header/Header.layout';
import Quote from '../../Components/Layout/Quote/Quote.layout';
import ServiceDetails from '../../Components/Layout/ServiceDetails/ServiceDetails.layout';
import { useTheme } from '@emotion/react';
import HomeCrew from '../../Components/Layout/HomeCrew/HomeCrew.layout';
import PageContainer from '../../Components/Layout/PageContainer/PageContainer.layout';
import Agile from '../../Components/Layout/Agile/Agile.layout';
import useWindowDimensions from '../../hooks/useWindowDimensions';



const HomePageTest = (props) => {
  // on filtre toutes les technoligies de la page d'accueil
  const allTechnoligies=technoligies.filter(item=>item.all)
  const allFonctionalities=fonctionalities.filter(item=>item.all)
  const theme=useTheme();
  const {height, disableIntersectionObserver}=useWindowDimensions()
  // on filtre toutes les technoligies utilisées pour le developpement web
  // const allTechnoligies=technoligies.filter(item=>item.web)

  // on filtre toutes les technoligies utilisées pour le developpement mobile
  // const allTechnoligies=technoligies.filter(item=>item.mobile)

  // on filtre toutes les technoligies utilisées pour l'administration système
  // const allTechnoligies=technoligies.filter(item=>item.admin)

  // on filtre toutes les technoligies utilisées pour l'inphographie'
  // const allTechnoligies=technoligies.filter(item=>item.infogaphy)
    const serviceData=[
      {
        title:"Analyse et Conception",
        photo:"analyse_et_conception.png",
        description:`Irure laborum nisi exercitation cillum eiusmod consequat eu consectetur duis incididunt
        cillum in elit. Minim ad deserunt duis Lorem qui pariatur ex aliqua. Ad ea est laborum duis ipsum id. 
        Sit veniam amet Lorem enim ad nisi aute et minim. Officia incididunt cupidatat
        nulla aliqua esse aliquip consectetur elit commodo et fugiat laborum velit pariatur.`,
      
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
  
    return (
      <PageContainer>
        <Box maxWidth="xxl" sx={{backgroundColor:theme.palette.light.main, px:0, py:10}}>
          <Box sx={{ height:200, background:theme.palette.light.main}}></Box>
          <h1>{height}--{disableIntersectionObserver?"true":"false"}</h1>

          <Box sx={{ height:1000, background:theme.palette.light.main}}></Box>

            <Agile/>
            <Box sx={{ height:1000, background:theme.palette.light.main}}></Box>

            {/* <GridHexagon items={allTechnoligies}/>          */}
            <GridDrowned items={allFonctionalities}/>
            <Box sx={{mt:5}}></Box>

            
            <HomeCrew/>
            <Box sx={{ height:1000, background:theme.palette.light.main}}></Box>

            {/* <Quote 
              name="TSOATA Evrad" 
              role="CO-FONDATEUR DEVTE"
              // name="TIOJIO Romain" 
              // role="CEO DEVTE"
              photo="dev.png" 
              text="Fugiat do nisi do irure nulla amet sint Lorem occaecat laboris exercitation deserunt. 
                Ut ad non aute aute eiusmod elit voluptate laboris ipsum elit exercitation amet sunt."
               /> */}
            <Box sx={{height:10, width:"100%", background:"red"}}></Box>
            <ServiceDetails data={serviceData}/>
            {/* <Box sx={{ height:1000, background:theme.palette.light.main}}></Box> */}

        </Box>   
      </PageContainer> 
    );
  
}

export default HomePageTest;

