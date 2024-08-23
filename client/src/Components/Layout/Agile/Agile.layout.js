
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './Styles.css'
import { useTheme } from '@emotion/react';
import { StyledContainer } from './Agile.style';
import AgileItem from './AgileItem.layout';
import AgileImg from "../../../assets/img/agile.svg"
import { Typography, useMediaQuery } from '@mui/material';
import FlashIcon from "../../../assets/img/icon_flash.svg"
import { useContext, useEffect, useRef } from 'react';
import { HeaderContext } from '../../../context/HeaderContext';
import FocusMouseFollower from '../FocusMouseFollower/FocusMouseFollower.layout';

export default function SpacingGrid() {
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
    <Box mouseOptions={{zIndex:10000, backgroundColor:theme.palette.light.main}}>
      <StyledContainer ref={ref}  component="section" matchesMd={matchesMd}>
        <Box sx={{display:"flex", justifyContent:"center"}}>
            <Box sx={{width:{xs:30, md:50}, marginRight:1.5}}>
              <img src={FlashIcon} alt="approche agile" style={{width:"100%"}}/>
            </Box>
          <Typography 
          sx={{color:theme.palette.light.main, fontSize:{xs:"1.7rem", md:"3rem"}, display:"inline"}}
          variant="h3" component="h2">UNE APPROCHE AGILE</Typography>
        </Box>
      
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
                  title="ADAPTATIVE"
                  body="Très pratique pour composer des documents complexes, beaucoup
                      d’automatisation : références croisées, notes de bas de page, table des
                      matières, des figures, bibliographie, index, mélange de plusieurs
                      langues, équations mathématiques, présentations.
                      Très pratique pour composer des documents complexes, beaucoup
                      d’automatisation : références croisées, notes de bas de page, table des
                      matières, des figures, bibliographie, index, mélange de plusieurs
                      langues, équations mathématiques, présentations."
                />
          </Grid>
    
          <Grid item xs={12} md={6} sx={{display:"flex", justifyContent:{xs:"center", md:"flex-start"}}}>
          <AgileItem 
                  positionHole="bottom left"
                  title="ADAPTATIVE"
                  body="Très pratique pour composer des documents complexes, beaucoup
                      d’automatisation : références croisées, notes de bas de page, table des
                      matières, des figures, bibliographie, index, mélange de plusieurs
                      langues, équations mathématiques, présentations.
                      Très pratique pour composer des documents complexes, beaucoup
                      d’automatisation : références croisées, notes de bas de page, table des
                      matières, des figures, bibliographie, index, mélange de plusieurs
                      langues, équations mathématiques, présentations."
                />
          </Grid>
    
          <Grid item xs={12} md={6} sx={{display:"flex", justifyContent:{xs:"center",md:"flex-end"}}}>
          <AgileItem
                  positionHole="top right"
                  title="ADAPTATIVE"
                  body="Très pratique pour composer des documents complexes, beaucoup
                      d’automatisation : références croisées, notes de bas de page, table des
                      matières, des figures, bibliographie, index, mélange de plusieurs
                      langues, équations mathématiques, présentations.
                      Très pratique pour composer des documents complexes, beaucoup
                      d’automatisation : références croisées, notes de bas de page, table des
                      matières, des figures, bibliographie, index, mélange de plusieurs
                      langues, équations mathématiques, présentations."
                />
          </Grid>
    
          <Grid item xs={12} md={6} sx={{display:"flex", justifyContent:{xs:"center", md:"flex-start"}}}>
                <AgileItem
                  positionHole="top left"
                  title="ADAPTATIVE"
                  body="Très pratique pour composer des documents complexes, beaucoup
                      d’automatisation : références croisées, notes de bas de page, table des
                      matières, des figures, bibliographie, index, mélange de plusieurs
                      langues, équations mathématiques, présentations.
                      Très pratique pour composer des documents complexes, beaucoup
                      d’automatisation : références croisées, notes de bas de page, table des
                      matières, des figures, bibliographie, index, mélange de plusieurs
                      langues, équations mathématiques, présentations."
                />
            </Grid>
        </Grid>
      </StyledContainer>
    </Box>


  );
}
