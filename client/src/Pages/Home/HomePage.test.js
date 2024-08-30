import React from 'react';
import { technoligies, fonctionalities, qualities } from '../../services/data';
import { Box } from '@mui/material';
import GridDrowned from '../../Components/Layout/GridDrowned/GridDrowned.layout';
import GridHexagon from "../../Components/Layout/GridHexagon/GridHexagon.layout"
import ServiceDetails from '../../Components/Layout/ServiceDetails/ServiceDetails.layout';
import { useTheme } from '@emotion/react';
import HomeCrew from '../../Components/Layout/HomeCrew/HomeCrew.layout';
import PageContainer from '../../Components/Layout/PageContainer/PageContainer.layout';
import Agile from '../../Components/Layout/Agile/Agile.layout';
import { UpdateFollower } from 'react-mouse-follower';
import Quality from '../../Components/Layout/Quality/Quality.layout';
import Services from '../../Components/Layout/Services/Services.layout';
import SecondaryLandingComponent from '../../Components/Layout/SecondaryLandingComponent/SecondaryLandingComponent';
import Separator from '../../Components/Layout/Separator/Separator.layout';
import Experiences from '../../Components/Layout/Experiences/Experiences.layout';
import Contact from '../../Components/Layout/Contact/Contact.layout';
import ProjectForm from '../../Components/Layout/ProjectForm/PojectForm.layout';
import Quote from "../../Components/Layout/Quote/Quote.layout"



const HomePageTest = (props) => {
  // on filtre toutes les technoligies de la page d'accueil
  const allTechnoligies=technoligies.filter(item=>item.all)
  const allFonctionalities=fonctionalities.filter(item=>item.all)
  const theme=useTheme();
  // on filtre toutes les technoligies utilisées pour le developpement web
  // const allTechnoligies=technoligies.filter(item=>item.web)

  // on filtre toutes les technoligies utilisées pour le developpement mobile
  // const allTechnoligies=technoligies.filter(item=>item.mobile)

  // on filtre toutes les technoligies utilisées pour l'administration système
  // const allTechnoligies=technoligies.filter(item=>item.admin)

  // on filtre toutes les technoligies utilisées pour l'inphographie'
  // const allTechnoligies=technoligies.filter(item=>item.infogaphy)
    const detailsServiceData=[
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
        <UpdateFollower mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
          <SecondaryLandingComponent 
            title="DEVELOPPEMENT DES SITES ET  APPLICATIONS WEB"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, maxime. Autem tempore, minus sequi debitis eligendi
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          />
          <Box className="main" sx={{background:theme.palette.light.main}}>
            <Separator direction="top" translate/>
          </Box>
          
          <Box component="section" sx={{mb:15, mt:40}}>
            <ProjectForm/>
          </Box>
          {/* <HomeCrew/> */}

          <Box maxWidth="xxl" sx={{backgroundColor:theme.palette.light.main, }}>
            {/* <Box sx={{ height:1000, background:theme.palette.primary.main}}></Box> */}
            

            <Box sx={{ height:1000, background:theme.palette.light.main}}></Box>
            <ServiceDetails data={detailsServiceData}/>

              <Agile/>
              <Box sx={{ height:1000, background:theme.palette.light.main}}></Box>

              <GridHexagon items={allTechnoligies}/>         
              <GridDrowned items={allFonctionalities}/>
              <Box sx={{mt:5}}></Box>

              
              <HomeCrew/>
              <Box sx={{ height:1000, background:theme.palette.light.main}}></Box>
              <Services/>

              <Quote 
                name="TSOATA Evrad" 
                role="CO-FONDATEUR DEVTE"
                // name="TIOJIO Romain" 
                // role="CEO DEVTE"
                photo="dev.png" 
                text="Fugiat do nisi do irure nulla amet sint Lorem occaecat laboris exercitation deserunt. 
                  Ut ad non aute aute eiusmod elit voluptate laboris ipsum elit exercitation amet sunt."
                />
              {/* <Box sx={{height:10, width:"100%", background:"red"}}></Box> */}
              <Box sx={{ height:1000, background:theme.palette.light.main}}></Box>

          </Box> 
            
        </UpdateFollower>
        
      </PageContainer> 
    );
  
}

export default HomePageTest;

