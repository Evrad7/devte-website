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
import ServiceDetails from '../../../Components/Layout/ServiceDetails/ServiceDetails.layout';
import Action from '../../../Components/Layout/Action/Action.layout';
import Title from '../../../Components/Layout/Title/Title.layout';
import Quote from '../../../Components/Layout/Quote/Quote.layout';
import RocketFlying from '../../../Components/Layout/RocketFlying/RocketFlying.layout';
import ProjectForm from '../../../Components/Layout/ProjectForm/PojectForm.layout';
import { technologies } from '../../../services/data';



const SystemAdministration = () => {
  const {isDesktop}=useWindowDimensions()
    const theme=useTheme()
    const {observe, unObserve, observeMobile}=useContext(HeaderContext)
    const mainBodyRef=useRef(null)
    const serviceRef=useRef(null)
    const projectFormRef=useRef(null)

  const allTechnoligies=technologies.filter(item=>item.admin)

    const detailsServiceData=[
      {
        title:"Installation et configuration des systèmes",
        photo:"installation_et_configuration_des_systemes.png",
        description:`Notre équipe d'experts se charge de l'installation et de la configuration de vos systèmes 
        d'exploitation, serveurs et applications. Nous veillons à ce que votre infrastructure soit parfaitement 
        adaptée à vos besoins, garantissant ainsi une performance optimale et une intégration fluide avec vos outils existants. `,
      
      },
      {
        title:"Sauvegarde et restauration des données",
        photo:"sauvegarde_et_restauration.png",
        description:`Ne laissez pas la perte de données compromettre votre activité. Nous mettons en place des solutions de 
        sauvegarde robustes pour protéger vos informations critiques. En cas de problème, notre service de restauration des 
        données vous assure un retour rapide à la normale, minimisant ainsi les interruptions de service
        `, 
    
      },
      {
        title:"Assistance technique et resolution des pannes serveur",
        photo:"assistance_technique.png",
        description:`En cas de défaillance, notre équipe est disponible pour fournir une assistance technique rapide 
        et efficace. Nous diagnostiquons et résolvons les pannes serveurs pour garantir la continuité de vos opérations. Grâce à notre support 24/7, vous pouvez compter sur nous à tout moment.`,
      },
      {
        title:"Sécurité",
        photo:"securite.png",
        description:`Protégez vos systèmes contre les menaces informatiques avec nos solutions de sécurité avancées. 
        Nous mettons en œuvre des mesures proactives, telles que des pare-feu, des antivirus et des audits de sécurité, 
        pour protéger vos données et assurer la conformité avec les normes de sécurité.`,
      }
    ]


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
                    title="ADMINISTRATION SYSTEME"
                    description="Optimisez la performance de votre infrastructure avec nos solutions d'administration système sur mesure. Confiez-nous la gestion de vos systèmes, pour vous concentrer sur l'innovation."
                />
                  <Box  ref={mainBodyRef}>
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
                            <Grid item xs={12} sm={6} sx={{display:"flex", justifyContent:{xs:"center", sm:"flex-end"}}}>
                              <Quality
                                title="Formation et sensibilisations"
                                icon="training.svg"
                                body="Développez les compétences de votre équipe grâce à nos sessions de formation personnalisées. Sensibilisez vos collaborateurs aux enjeux de la sécurité informatique pour une meilleure protection de vos données." />
                            </Grid>
                            <Grid 
                                item xs={12}  sm={6}
                                sx={{display:"flex",justifyContent:{xs:"center", sm:"flex-start"}}}>
                              <Quality
                                  title="Gestion du support technique"
                                  icon="technical_support_management.svg"
                                body="Assurez la continuité de votre activité avec notre service de support technique réactif et efficace. Bénéficiez d'une assistance dédiée pour résoudre rapidement tous vos problèmes informatiques." />
                            </Grid>
                         
                      </Grid>
                    </Box>
                    
                    <Box component="section" sx={{mt:15,  mb:{xs:10, md:15}}}>
                      <Quote 
                        name="TIOJIO ROMAIN" 
                        role="FONDATEUR DEVTE"
                        photo="dev2.jpg" 
                        text="Transformez votre vision en réalité avec notre expertise en solutions numériques. Nous sommes déterminés à propulser votre entreprise vers l’avenir grâce à des technologies innovantes et sur mesure."
                      />
                    </Box>

                    <Action/>

                    <Box  component={"section"} sx={{mt:{xs:10, md:15}, mb:{xs:5, md:10}}}>
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

export default SystemAdministration;

