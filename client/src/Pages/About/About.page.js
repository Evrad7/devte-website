import React, { useContext, useEffect, useRef } from 'react';
import Footer from '../../Components/Layout/Footer/Footer.layout';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import Separator from '../../Components/Layout/Separator/Separator.layout';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { HeaderContext } from '../../context/HeaderContext';
import PageContainer from '../../Components/Layout/PageContainer/PageContainer.layout';
import CustomUpdateFollower from '../../Components/Layout/CustomUpdateFollower/CustomUpdateFollower.layout';
import Services from '../../Components/Layout/Services/Services.layout';
import SecondaryLandingComponent from '../../Components/Layout/SecondaryLandingComponent/SecondaryLandingComponent';
import Action from '../../Components/Layout/Action/Action.layout';
import Title from '../../Components/Layout/Title/Title.layout';
import RocketFlying from '../../Components/Layout/RocketFlying/RocketFlying.layout';
import ProjectForm from '../../Components/Layout/ProjectForm/PojectForm.layout';
import Crew from '../../Components/Layout/Crew/Crew.layout';
import CrewMember from '../../Components/Layout/CrewMember/CrewMember.layout';
import Agile from '../../Components/Layout/Agile/Agile.layout';
import Experiences from '../../Components/Layout/Experiences/Experiences.layout';



const AboutPage = () => {
  const {isDesktop}=useWindowDimensions()
    const theme=useTheme()
    const {observe, unObserve, observeMobile}=useContext(HeaderContext)
    const descriptionRef=useRef(null)
    const serviceRef=useRef(null)
    const projectFormRef=useRef(null)
    const agileRef=useRef(null)



    useEffect(()=>{
      if(isDesktop){
        observe(descriptionRef.current, "primary")
        observe(serviceRef.current, "light")  
        observe(projectFormRef.current, "primary")
        observe(agileRef.current, "light")
      }
      else{
         observeMobile(descriptionRef.current)
      }
      return ()=>{
        if(isDesktop){
          const currentDescriptionRef=descriptionRef
          const currentSericeRef=serviceRef
          const currentProjectFormRef=projectFormRef
          const currentAgileRef=agileRef

          unObserve(currentDescriptionRef.current)
          unObserve(currentSericeRef.current)
          unObserve(currentProjectFormRef.current)
          unObserve(currentAgileRef.current)

        }
      
      }
    }, [observe, unObserve, isDesktop])

    return (
      <PageContainer>
            <CustomUpdateFollower className="update-follower" style={{background:theme.palette.light.main}} mouseOptions={{zIndex:10000, backgroundColor:theme.palette.primary.main}}>
                <SecondaryLandingComponent 
                    title="A PROPOS DE DEVTE"
                    description="DEVTE est l'agence de développement web et mobile de référence, qui a su trouver sa place et s'imposer dans le monde digital. Ses experts sont toujours disponible pour vous écouter et vous aider à propulser vos projets."
                />
                  <Box  ref={descriptionRef}>
                    <Box className="main" sx={{background:theme.palette.light.main}}>
                        <Separator direction="top" translate/>
                    </Box>

                    <Box component="section" sx={{mt:10, mb:{xs:10, md:20}}}>
                        <Title text="Historique" icon="historic.svg" color="primary" justifyContent="flex-start"/>
                        <Typography variant="body1" component="p" sx={{
                            textAlign:"center",
                            px:{xs:2, sm:10, md:20, lg:40}
                        }}>
                          L'agence DEVTE a été créée en 2022 au Cameroun par un groupe d'experts passionnés du digital. Initialement spécialisée dans le développement web et mobile, elle a rapidement connu une ascension avec des antennes créées  dans d'autres pays et  de nouveaux services comme l'administration système et l'infographie. 
                          DEVTE croit que chaque individu possède une idée qui, bien cernée et implémentée convenablement, peut changer positivement le monde.
                            
                        </Typography>
                    </Box>

                    <Box component="section" sx={{mb:{xs:5, md:15}}}>
                          <Crew/>
                    </Box>

                    <Box component="section" >
                          <Title text="Découvrez nos experts" icon="icon_fonctionnalities.svg" color="primary" mb={{xs:5, md:13}}/>

                          <CrewMember 
                            name="TSOATA Evrad"
                            photo="dev1.png"
                            description="En tant qu'expert DevOps, je maîtrise le développement d'applications web et mobiles et mets en place des infrastructures pour automatiser leur déploiement et assurer une livraison continue."
                            linkedInLink="https://www.linkedin.com/in/evrad-loïc-tsoata-manfouo-38420a215"
                            portoFilioLink="/"
                            />

                          <CrewMember 
                            name="TIOJIO Romain"
                            photo="dev2.png"
                            description="Ma mission en tant que software enginer et projet manager est de me rassurer de fournir une solution adaptée au besoin spécifique de tout un chacun en respectant le rapport qualité - coût - délai"
                            linkedInLink="https://www.linkedin.com/in/tiojio/"
                            portoFilioLink="https://tiojio.github.io/Portfolio/"
                            inverse/>

                            
                          <CrewMember 
                            name="TSOATA Evrad"
                            photo="dev3.png"
                            description="Passionné par l'innovation numérique, je possède une solide expertise en génie logiciel. Mes compétences en développement me permettent de concevoir et de déployer des applications performantes. "
                            linkedInLink="linkedin.com/in/rochinel-feujio-540b602a5"
                            portoFilioLink="/"
                            />
                    </Box>

                    <Box ref={agileRef} component={"section"} sx={{my:15}}>
                      <CustomUpdateFollower  mouseOptions={{zIndex:10000, backgroundColor:theme.palette.light.main}}>
                        <Agile/>
                      </CustomUpdateFollower>
                    </Box>
               
                    <Action/>
                    
                    <Box component="section" sx={{mb:20, mt:15}}>
                      <Experiences/>
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

export default AboutPage;

