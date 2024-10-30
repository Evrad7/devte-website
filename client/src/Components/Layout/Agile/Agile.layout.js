
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './Styles.css'
import { useTheme } from '@emotion/react';
import { StyledContainer } from './Agile.style';
import AgileItem from './AgileItem.layout';
import AgileImg from "../../../assets/img/agile.svg"
import { Typography, useMediaQuery } from '@mui/material';
import { useContext, useEffect, useRef } from 'react';
import { HeaderContext } from '../../../context/HeaderContext';
import FocusMouseFollower from '../FocusMouseFollower/FocusMouseFollower.layout';
import Title from "../Title/Title.layout";


export default function Agile() {
  const theme=useTheme()
  const matchesMd=useMediaQuery(theme=>theme.breakpoints.up("md"))
  const {observe:observeHeader, unObserve:unObserveHeader}=useContext(HeaderContext)

  const ref=useRef(null)
  const imgAgileRef=useRef(null)
  useEffect(()=>{
      observeHeader(ref.current, "light")
      return ()=>{
        const currentRef=ref
        unObserveHeader(currentRef.current)
      }
  }, [observeHeader, unObserveHeader])
  return (
      <StyledContainer ref={ref}  matchesMd={matchesMd}>
        <Title text=" tiojio Une approche agile" icon="icon_flash.svg" color="light" textDecorationColor="dark"/>
        <Grid container justifyContent="center" columnSpacing={{xs:3, md:12}} rowSpacing={{xs:4, md:12}} position="relative">
        <FocusMouseFollower scale={18}>
          <Box ref={imgAgileRef} className="intersection-observer"
            sx={{
                display:{xs:"none", md:"block"},
                position:"absolute", left:"50%",
                top: "50%",
                transform:"translateX(-25%) translateY(-25%)",
                transition: "1s 0s ease",
                "&.animate":{
                  transform:"translateX(-25%) translateY(-25%) rotate(360deg)"
                }
                }}
               
                >
            <img src={AgileImg} style={{width:200}} alt="Approche agile"/>
          </Box>
        </FocusMouseFollower>

          
          {/* <Grid style={{padding:'60px 0px 20px 0px',margin:'auto',textAlign:'center',alignItems:'center',display:'flex'}}>
                  <ElectricBoltIcon style={{fontSize:'50px',color:'white'}}/>
                  <h1 className='txt-agile'>UNE APPROCHE AGILE</h1>
          </Grid> */}
          <Grid item xs={12} md={6} sx={{
            display:"flex",
            justifyContent:{xs:"center",md:"flex-end",
            }}}>
            <AgileItem 
                  positionHole="bottom right"
                  title="Adaptabilité et flexibilité"
                  body=" Nous nous adaptons rapidement aux changements. En suivant une approche itérative, 
                  les équipes sont en mesure de revoir leurs priorités et d’ajuster le développement 
                  en fonction de l’évolution des besoins, des feedbacks clients, ou des imprévus."
                />
          </Grid>
    
          <Grid item xs={12} md={6} sx={{display:"flex", justifyContent:{xs:"center", md:"flex-start"}}}>
          <AgileItem 
                  positionHole="bottom left"
                  title="Itération et incrément"
                  body="Nous découpons le projet en cycles courts, appelés itérations, permettant 
                  de développer et tester des fonctionnalités étape par étape. Cette méthode assure une 
                  amélioration continue et une adaptation rapide aux besoins changeants, tout en livrant un produit de qualité."
                />
          </Grid>
    
          <Grid item xs={12} md={6} sx={{display:"flex", justifyContent:{xs:"center",md:"flex-end"}}}>
          <AgileItem
                  positionHole="top right"
                  title="Collaboration étroite avec le client"
                  body="Pour nos projet, le client est intégré au processus. Grâce à des échanges 
                  réguliers et transparents, le client peut apporter des retours constants, garantissant 
                  que le produit final correspond précisément à ses attentes et aux exigences du marché."
                />
          </Grid>
    
          <Grid item xs={12} md={6} sx={{display:"flex", justifyContent:{xs:"center", md:"flex-start"}}}>
                <AgileItem
                  positionHole="top left"
                  title="Amélioration continue et rétrospective"
                  body="À la fin de chaque itération, une rétrospective est effectuée pour identifier 
                  les points à améliorer et renforcer les processus. Cette dynamique d’auto-évaluation 
                  assure un apprentissage constant et optimise la performance de l’équipe sur le long terme."
                />
            </Grid>
        </Grid>
      </StyledContainer>
  );
}
