import React, { useContext, useEffect, useRef, lazy } from 'react';
import Footer from '../../../Components/Layout/Footer/Footer.layout';
import { Box, Grid } from '@mui/material';
import { useTheme } from '@emotion/react';
import Separator from '../../../Components/Layout/Separator/Separator.layout';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { HeaderContext } from '../../../context/HeaderContext';
import PageContainer from '../../../Components/Layout/PageContainer/PageContainer.layout';
import CustomUpdateFollower from '../../../Components/Layout/CustomUpdateFollower/CustomUpdateFollower.layout';
import Quality from '../../../Components/Layout/Quality/Quality.layout';
import { fonctionalities, technologies } from '../../../services/data';
import Services from '../../../Components/Layout/Services/Services.layout';
import GridDrowned from '../../../Components/Layout/GridDrowned/GridDrowned.layout';
import SecondaryLandingComponent from '../../../Components/Layout/SecondaryLandingComponent/SecondaryLandingComponent';
import ServiceDetails from '../../../Components/Layout/ServiceDetails/ServiceDetails.layout';
import Action from '../../../Components/Layout/Action/Action.layout';
import Title from '../../../Components/Layout/Title/Title.layout';
import Quote from '../../../Components/Layout/Quote/Quote.layout';
import RocketFlying from '../../../Components/Layout/RocketFlying/RocketFlying.layout';
import ProjectForm from '../../../Components/Layout/ProjectForm/PojectForm.layout';
import { Suspense } from 'react';
const GridHexagon=lazy(()=>import("../../../Components/Layout/GridHexagon/GridHexagon.layout"));



const MobileDevelopmentPage = () => {
  const {isDesktop}=useWindowDimensions()
    const theme=useTheme()
    const {observe, unObserve, observeMobile}=useContext(HeaderContext)
    const descriptionRef=useRef(null)
    const serviceRef=useRef(null)
    const projectFormRef=useRef(null)

   const allFonctionalities=fonctionalities.filter(item=>item.mobile)
  const allTechnoligies=technologies.filter(item=>item.mobile)

    const detailsServiceData=[
      {
        title:"Analyse et Conception",
        photo:"analyse_et_conception_mobile.svg",
        description:`Nous commençons par une analyse approfondie de vos idées et de vos objectifs. 
        Nos experts collaborent étroitement avec vous pour définir les fonctionnalités essentielles 
        et concevoir une architecture solide. Nous veillons à ce que chaque détail soit pris en compte 
        afin de garantir une base solide pour votre application. `,
      
      },
      {
        title:"Expérience UI/UX",
        photo:"experience_ux_ui.png",
        description:`Une fois la conception établie, nous mettons notre expertise en expérience utilisateur 
        (UI/UX) à votre service. Nous créons des interfaces attrayantes et intuitives qui garantissent une 
        navigation fluide et agréable. L’objectif est d’offrir une expérience utilisateur optimale qui capte 
        l’attention de vos utilisateurs et les incite à revenir.. 
        `, 
    
      },
      {
        title:"Developpement",
        photo:"developpement.png",
        description:`Nos développeurs utilisent les dernières technologies et frameworks pour créer des 
        applications mobiles robustes et performantes. Que ce soit pour iOS ou Android, nous nous assurons 
        que votre application fonctionne parfaitement sur tous les appareils, offrant ainsi une expérience
         homogène à vos utilisateurs.`,
      },
      {
        title:"Tests",
        photo:"tests.png",
        description:`Avant le lancement, nous effectuons des tests rigoureux pour garantir la qualité et la 
        fiabilité de votre application. Chaque fonctionnalité est soigneusement vérifiée pour s'assurer qu'elle 
        fonctionne comme prévu, et nous nous engageons à corriger tout problème potentiel avant la mise en production.

`,
      }
    ]


    useEffect(()=>{
      if(isDesktop){
        observe(descriptionRef.current, "primary")
        observe(serviceRef.current, "light")  
        observe(projectFormRef.current, "primary")
      }
      else{
         observeMobile(descriptionRef.current)
      }
      return ()=>{
        if(isDesktop){
          const currentDescriptionRef=descriptionRef
          const currentSericeRef=serviceRef
          const currentProjectFormRef=projectFormRef

          unObserve(currentDescriptionRef.current)
          unObserve(currentSericeRef.current)
          unObserve(currentProjectFormRef.current)
        }
      
      }
    }, [observe, unObserve, isDesktop])

    return (
      <PageContainer>
            <CustomUpdateFollower className="update-follower" style={{background:theme.palette.light.main}} mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
                <SecondaryLandingComponent 
                    title="DEVELOPPEMENT DES APPLICATIONS MOBILES"
                    description="nous offrons des services de développement mobile complets, adaptés à vos besoins 
                    spécifiques. Notre approche se décline en quatre étapes clés."
                />
                  <Box  ref={descriptionRef}>
                    <Box className="main" sx={{background:theme.palette.light.main}}>
                        <Separator direction="top" translate/>
                    </Box>

                    <Box component="section" sx={{mt:{xs:0, md:10}, mb:{xs:10, md:20}}}>
                        <ServiceDetails data={detailsServiceData}/>
                    </Box>

                    <Action/>

                    
                    <Box component="section"  sx={{mt:{xs:10, md:15}, mb:0}}>
                      <Title text="Services associés selon vos besoins" icon="icon_flash_primary.svg" color="primary" mb={{xs:5, md:10}} />
                      <Grid  sx={{pl:{xs:2.7, md:5}, pr:1, my:10}} container columnSpacing={{xs:10, lg:10}} rowSpacing={{xs:7, md:5}} justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={6} sx={{display:"flex", justifyContent:{xs:"center", sm:"flex-end"}}}>
                              <Quality
                                title="Hebergement"
                                icon="hosting.svg"
                                body="Assurez la présence de vos applications mobiles sur toutes les plateformes de téléchargement populaires, 
                                afin de maximiser leur visibilité." />
                            </Grid>
                            <Grid 
                                item xs={12}  sm={6}
                                sx={{display:"flex",justifyContent:{xs:"center", sm:"flex-start"}}}>
                              <Quality
                                  title="Maintenance"
                                  icon="maintenance.svg"
                                body="Laissez-nous gérer la maintenance de vos plateformes. Nous garantissons la stabilité, la sécurité, les mises 
                                  à jour continues et la disponibilité." />
                            </Grid>
                         
                      </Grid>
                    </Box>
                    
                    <Box component="section" sx={{mt:15,  mb:{xs:10, md:15}}}>
                      <Quote 
                        name="TSOATA Evrad" 
                        role="CO-FONDATEUR DEVTE"
                        photo="evrad7.png" 
                        text="Aujourd'hui, les téléphones sont devenus presque une extension de nous-mêmes.
                        Le développement mobile est ainsi, plus que jamais, essentiel."
                      />
                    </Box>

                    <Box component={"section"} sx={{mt:0, mb:{xs:10, md:20}}}>
                          <CustomUpdateFollower  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
                            <GridDrowned items={allFonctionalities}/>
                          </CustomUpdateFollower>
                    </Box>

                    <Action/>

                    <Box  component={"section"} sx={{mt:{xs:10, md:15}, mb:0}}>
                      <CustomUpdateFollower  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
                        <Suspense>
                          <GridHexagon items={allTechnoligies}/>         
                        </Suspense>
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

export default MobileDevelopmentPage;

