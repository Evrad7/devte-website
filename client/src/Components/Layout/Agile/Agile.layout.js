
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
        <Title text="Une approche agile" icon="icon_flash.svg" color="light" textDecorationColor="dark"/>
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
                  body="Nos  équipes  s'ajustent
                  rapidement aux évolutions des besoins, aux retours clients, et aux imprévus."
                />
          </Grid>
    
          <Grid item xs={12} md={6} sx={{display:"flex", justifyContent:{xs:"center", md:"flex-start"}}}>
          <AgileItem 
                  positionHole="bottom left"
                  title="Itérations et incréments"
                  body="Votre projet est divisé en itérations courtes pour développer, tester et améliorer
                   continuellement les fonctionnalités."
                />
          </Grid>
    
          <Grid item xs={12} md={6} sx={{display:"flex", justifyContent:{xs:"center",md:"flex-end"}}}>
          <AgileItem
                  positionHole="top right"
                  title="Le client au centre du projet"
                  body="Nous vous intégrons  dans chaque étape du projet pour assurer l'alignement du produit avec vos objectifs."
                />
          </Grid>
    
          <Grid item xs={12} md={6} sx={{display:"flex", justifyContent:{xs:"center", md:"flex-start"}}}>
          <AgileItem
                  positionHole="top left"
                  title="Amélioration  continue agile"
                  body="Les retours nos permettent d'améliorer et optimiser inlassablement les qualités de votre produit."
                />
            </Grid>
        </Grid>
      </StyledContainer>
  );
}
