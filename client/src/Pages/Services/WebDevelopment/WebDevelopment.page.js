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
import { fonctionalities, technologies } from '../../../services/data';
import Services from '../../../Components/Layout/Services/Services.layout';
import GridDrowned from '../../../Components/Layout/GridDrowned/GridDrowned.layout';
import GridHexagon from '../../../Components/Layout/GridHexagon/GridHexagon.layout';
import SecondaryLandingComponent from '../../../Components/Layout/SecondaryLandingComponent/SecondaryLandingComponent';
import ServiceDetails from '../../../Components/Layout/ServiceDetails/ServiceDetails.layout';
import Action from '../../../Components/Layout/Action/Action.layout';
import Title from '../../../Components/Layout/Title/Title.layout';
import Quote from '../../../Components/Layout/Quote/Quote.layout';
import RocketFlying from '../../../Components/Layout/RocketFlying/RocketFlying.layout';
import ProjectForm from '../../../Components/Layout/ProjectForm/PojectForm.layout';



const HomePage = () => {
  const {isDesktop}=useWindowDimensions()
    const theme=useTheme()
    const {observe, unObserve, observeMobile}=useContext(HeaderContext)
    const descriptionRef=useRef(null)
    const serviceRef=useRef(null)
    const projectFormRef=useRef(null)

   const allFonctionalities=fonctionalities.filter(item=>item.web)
  const allTechnoligies=technologies.filter(item=>item.web)

    const detailsServiceData=[
      {
        title:"Analyse et Conception",
        photo:"analyse_et_conception.png",
        description:`Nous commençons chaque projet par une analyse approfondie de vos besoins et de vos objectifs. 
        Grâce à une phase de conception rigoureuse, nous élaborons des solutions personnalisées qui répondent précisément 
        aux enjeux de votre activité. Notre approche garantit une de solutions performantes et évolutives. `,
      
      },
      {
        title:"Expérience UI/UX",
        photo:"experience_ux_ui.png",
        description:`Notre équipe de designers UI/UX crée des interfaces intuitives et attrayantes, pensées pour offrir une expérience 
        utilisateur optimale. Nous concevons des parcours fluides, adaptés à votre audience, pour maximiser l’engagement et la satisfaction des utilisateurs.
        `, 
    
      },
      {
        title:"Developpement",
        photo:"developpement.png",
        description:`Experts en développement web et mobile, nous transformons vos idées en applications performantes et sécurisées. 
        En utilisant les technologies les plus récentes, nous réalisons des solutions robustes et évolutives, adaptées à vos besoins actuels et futurs.`,
      },
      {
        title:"Tests",
        photo:"tests.png",
        description:`Nous nous engageons à livrer des produits de haute qualité. Avant chaque lancement, nous effectuons une série de tests rigoureux 
        pour assurer la fiabilité, la sécurité et les performances de votre solution. Notre processus de contrôle qualité garantit un produit sans défaut, prêt à l’emploi`,
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
                    title="DEVELOPPEMENT DES SITES ET  APPLICATIONS WEB"
                    description="Transformez vos idées en solutions digitales performantes : des services de développement web sur-mesure, fiables et innovants."
                />
                  <Box  ref={descriptionRef}>
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
                            <Grid item xs={12} sm={6} lg={3} sx={{display:"flex", justifyContent:{xs:"center", sm:"flex-end", ml:"center"}}}>
                              <Quality
                                title="Hebergement"
                                icon="hosting.svg"
                                body="Profitez d'un hébergement fiable et sécurisé pour assurer la disponibilité optimale de 
                                votre site web, avec une infrastructure flexible et performante adaptée à vos besoins." />
                            </Grid>
                            <Grid 
                                item xs={12}  sm={6} lg={3}
                                sx={{display:"flex",justifyContent:{xs:"center", sm:"flex-start", lg:"center"},}}>
                              <Quality
                                  title="Maintenance"
                                  icon="maintenance.svg"
                                body="Nous assurons la maintenance régulière de vos plateformes pour garantir leur stabilité, 
                                leur sécurité et des mises à jour en continu, tout en prévenant les risques d'interruption de service." />
                            </Grid>
                            <Grid item xs={12}  sm={6} lg={3} sx={{display:"flex", justifyContent:{xs:"center", sm:"flex-end", ml:"center"}}}>
                            <Quality
                              title="Analyse SEO"
                              icon="seo.svg"
                              body="Boostez votre visibilité en ligne avec une analyse SEO complète de votre site. Nous identifions les 
                              opportunités d’optimisation pour améliorer votre positionnement dans les résultats de recherche" />
                            </Grid>

                            <Grid item xs={12}  sm={6} lg={3} sx={{display:"flex", justifyContent:{xs:"center", sm:"flex-start", lg:"center"}}}>
                            <Quality
                              title="Audit"
                              icon="audit.svg"
                              body="Notre audit technique et fonctionnel approfondi permet de diagnostiquer les forces et faiblesses 
                              de votre site. Nous vous fournissons des recommandations concrètes pour une performance et une expérience utilisateur optimales." />
                            </Grid>
                      </Grid>
                    </Box>
                    
                    <Box component="section" sx={{mt:15,  mb:{xs:10, md:15}}}>
                      <Quote 
                        name="TIOJIO ROMAIN" 
                        role="FONDATEUR DEVTE"
                        photo="dev2.jpg" 
                        text="Donnez vie à votre vision numérique avec nos solutions web sur mesure. Que vous 
                        soyez une start-up ou une entreprise établie, nous créons ensemble des outils innovants 
                        pour propulser votre succès en ligne."/>
                    </Box>

                    <Box component={"section"} sx={{mt:0, mb:{xs:10, md:20}}}>
                          <CustomUpdateFollower  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
                            <GridDrowned items={allFonctionalities}/>
                          </CustomUpdateFollower>
                    </Box>

                    <Action/>

                    <Box  component={"section"} sx={{mt:{xs:10, md:15}, mb:0}}>
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

export default HomePage;

