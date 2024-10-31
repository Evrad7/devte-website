import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import Service from './Service.layout';
import { useTheme } from '@emotion/react';
import FlashIcon from "../../../assets/img/titles/icon_flash.svg"
import { Star} from '@mui/icons-material';
import Title from '../Title/Title.layout';

export default function Services() {
  const theme=useTheme()

  const servicesData=[
    {
      link:"/services/developpement-web",
      title:"Developpement des sites et applications web",
      image:"developpement_web.svg",
      body:`Un bon business necessite un bon site web.
              gagner en visibilité en digitalisant votre business et en automatisant
              vos processus, cetta vous fera gagner en temps. nous mettons a votre 
              disposition des plateforme moderne et de qualité adapté a vos différente activité.`
    },

    {
      link:"/services/developpement-mobile",
      title:"Developpement des applications mobiles",
      image:"developpement_mobile.svg",
      body:`Passer a la vitesse superieur avec nos solution moible.
              Dans un monde ou les smartphone sont omniprésente, nous vous aidons
              a exploiter tout le potenciel du mobile en mattant a votre disposition des applications
              flexible , fiable , securisé , ergonomique et adapter et vos besoins.`
    },
    
    {
      link:"/services/administration-systeme",
      title:"Administration système",
      image:"administration_systeme.svg",
      body:`Gerer une infrastructure informatique est crusiale pour assuser la continuité
              de son activité .Pour cela , Nous vous proposons donc des services complet
              d'administrations système couvrant la surveillance , la maintenace et l'optimisation 
              de vos serveur , base de bonnées et réseaux`
    },
    
    {
      link:"/services/infographie",
      title:"Infographie",
      image:"infographie.png",
      body:`l'image est crusial pour une bonne communication . nous nous chargons 
              de sublimer votre identité visuelle a travers des créations originales et professionnels. 
              que ce soit des support publicitaires , flyers ou bien des interfaces web.  `
    },
    
  ]

  return (
      <Box sx={{
        backgroundColor:theme.palette.primary.main,
        background:theme.palette.primary.gradientToBottom,
        pt:{xs:2.5, md:10},
      }}>
          <Title  text="Découvrez nos services" icon="icon_rocket.svg" color="light" mb={0}/>
          <Grid container position="relative" >
              <Star sx={{display:{xs:"none",md:"block"}, position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, 25%)" }} color="info" />
              <Grid item xs={12} md={6}>
                  <Service
                    link={servicesData[0].link} 
                    title={servicesData[0].title}
                    image={servicesData[0].image}
                    body={servicesData[0].body}
                    position={{top:true, right:false, bottom:false, left:true}}
                    />
              </Grid>
              <Grid item xs={12} md={6}>
                  <Service
                    link={servicesData[1].link} 
                    title={servicesData[1].title}
                    image={servicesData[1].image}
                    body={servicesData[1].body}
                    position={{top:true, right:true, bottom:false, left:false}}
                    />
              </Grid>
              <Grid item xs={12} md={6}>
                <Service
                  link={servicesData[2].link} 
                  title={servicesData[2].title}
                  image={servicesData[2].image}
                  body={servicesData[2].body}
                  position={{top:false, right:false, bottom:true, left:true}}
                  />
              </Grid>
              <Grid item xs={12} md={6}>
                <Service
                  link={servicesData[3].link} 
                  title={servicesData[3].title}
                  image={servicesData[3].image}
                  body={servicesData[3].body}
                  position={{top:false, right:true, bottom:true, left:false}}
                  />
              </Grid>

          </Grid>
      </Box>
  );
}
