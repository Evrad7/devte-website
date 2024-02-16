import React from 'react';
import Container  from '@mui/material/Container';
import GridHexagon from '../../Components/Layout/GridHexagon/GridHexagon.layout';
import { technoligies } from '../../services/data';
import { Box } from '@mui/material';
import GridDrowned from '../../Components/Layout/GridDrowned/GridDrowned.layout';


const HomePageTest = (props) => {
  // on filtre toutes les technoligies de la page d'accueil
  const allTechnoligies=technoligies.filter(item=>item.all)

  // on filtre toutes les technoligies utilisées pour le developpement web
  // const allTechnoligies=technoligies.filter(item=>item.web)

  // on filtre toutes les technoligies utilisées pour le developpement mobile
  // const allTechnoligies=technoligies.filter(item=>item.mobile)

  // on filtre toutes les technoligies utilisées pour l'administration système
  // const allTechnoligies=technoligies.filter(item=>item.admin)

  // on filtre toutes les technoligies utilisées pour l'inphographie'
  // const allTechnoligies=technoligies.filter(item=>item.infogaphy)

  
    return (
      <Container maxWidth="xxl" sx={{backgroundColor:"light.main", px:0, py:10, height:"100vh"}} style={{paddingLeft:0, paddingRight:0}}>
            {/* <GridHexagon items={allTechnoligies}/>          */}
            <GridDrowned/>
      </Container>
     
    );
  
}

export default HomePageTest;

