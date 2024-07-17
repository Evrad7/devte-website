import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import './services.css'
import MenuIcon from '@mui/icons-material/Menu';
import  useWindowDimensions from '../../../hooks/useWindowDimensions'
import { CloudSync , Diversity1 } from "@mui/icons-material";
import smokeImage from '../../../assets/img/fume.png';
import Infographie from '../../../assets/img/6.png';
import PC from '../../../assets/img/16.png';
import web from '../../../assets/img/29.svg';
import RocketIcon from '@mui/icons-material/Rocket';

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  
  const {width, height } = useWindowDimensions();

  /*console.log(height);
  console.log(width);*/

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
      <Grid container spacing={${spacing}}>
`;

  return (
    <div>
    <Grid className='back' >
      <Grid  sx={{ flexGrow: 1 }} container spacing={2} className='back-imge'>
       
      <Grid style={{padding:'60px 0px 20px 0px',margin:'auto',textAlign:'center',alignItems:'center',display:'flex'}}>
             <RocketIcon style={{fontSize:'50px',color:'white'}}/> &nbsp;
             <h1 className='txt-agil'>  DECOUVRE NOS SERVICES</h1>
      </Grid>

      <Grid  item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
              <Grid
                 item
                sx={{
                  textAlign:'center',
                  height: 'auto',
                  position: 'relative',
                  width: 650,       
                }}
              >
               <div style={{padding:'10px 20px 5px 20px'}}>
                  <img src={PC} width={230} height={100}/>
                  <h3 style={{color:'white'}}>Developpement des sites web et application web</h3>
                  <p style={{color:'white'}}> 
                       Très pratique pour composer des documents complexes, beaucoup
                        d’automatisation : références croisées, notes de bas de page, table des
                        d’automatisation : références croisées, notes de bas de page, table des
                        matières, des figures, bibliographie, index, mélange de plusieurs
                        langues, équations mathématiques, présentations.
                  </p>
               </div>
               <Button variant="contained" endIcon={<RocketIcon />}>
                  En savoir Plus
               </Button>
             </Grid>

              <Grid
               item
                sx={{
                  height: 'auto',
                  textAlign:'center',
                    width: 650, 
                }}
              >
              <div style={{padding:'10px 20px 5px 20px'}}>
                 <img src={Infographie} width={100} height={80}/>
                  <h3 style={{color:'white'}}>Developpement des application Mobile </h3>
                  <p style={{color:'white'}}> 
                       Très pratique pour composer des documents complexes, beaucoup
                        d’automatisation : références croisées, notes de bas de page, table des
                        d’automatisation : références croisées, notes de bas de page, table des
                        matières, des figures, bibliographie, index, mélange de plusieurs
                        langues, équations mathématiques, présentations.
                  </p>
               </div>
               <Button variant="contained" endIcon={<RocketIcon />}>
                  En savoir Plus
               </Button>
            </Grid>

        </Grid>
      </Grid>

      <Grid style={{paddingBottom:'100px'}} item xs={12}>
        <Grid container justifyContent="center"  spacing={spacing}>
              <Grid
              item
                sx={{
                  height: 'auto',
                  width: 650,
                  textAlign:'center',
                  
                }}
              >
              <div style={{padding:'40px 20px 5px 20px'}}>
                  <img src={Infographie} width={100} height={80}/>
                  <h3 style={{color:'white'}}>Administration systeme</h3>
                  <p style={{color:'white'}}> 
                       Très pratique pour composer des documents complexes, beaucoup
                        d’automatisation : références croisées, notes de bas de page, table des
                        d’automatisation : références croisées, notes de bas de page, table des
                        matières, des figures, bibliographie, index, mélange de plusieurs
                        langues, équations mathématiques, présentations.
                  </p>
               </div>
               <Button variant="contained" endIcon={<RocketIcon />}>
                  En savoir Plus
               </Button>
            </Grid>

              <Grid
                sx={{
                  height: 'auto',
                  textAlign:'center',
                  width: 650,
                }}
              >
              <div style={{padding:'40px 20px 5px 20px'}}>
                 <img src={PC} width={100} height={80}/>
                  <h3 style={{color:'white'}}>Infographie</h3>
                  <p style={{color:'white'}}> 
                       Très pratique pour composer des documents complexes, beaucoup
                        d’automatisation : références croisées, notes de bas de page, table des
                        d’automatisation : références croisées, notes de bas de page, table des
                        matières, des figures, bibliographie, index, mélange de plusieurs
                        langues, équations mathématiques, présentations.
                  </p>
               </div>
               <Button variant="contained" endIcon={<RocketIcon />}>
                  En savoir Plus
               </Button>
             </Grid>

        </Grid>
      </Grid>

  </Grid>
    </Grid>



    </div>
  );
}
