import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import './services.css'
import MenuIcon from '@mui/icons-material/Menu';
import  useWindowDimensions from '../../../hooks/useWindowDimensions'
import { CloudSync , Diversity1 } from "@mui/icons-material";


export default function Services() {
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
    <Grid className='back-color' >
       
      <Grid style={{padding:'60px 0px 20px 0px',width:'100%',textAlign:'center'}}>
             <h1 className='txt-agile'>UNE APPROCHE AGILE</h1>
      </Grid>

      <Grid  item xs={12}>
        <Grid container justifyContent="center" spacing={0}>
            <Grid item>
              <Paper
                sx={{
                  borderBottom:'1px solid #96b3d1',
                  textAlign:'center',
                  height: 'auto',
                  position: 'relative',
                  width: 300,
                  borderRadius: '0 0 -10% 0',
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#003366' : '#003366',
                }}
              >
               <div style={{padding:'0px 20px 5px 20px'}}>
                  <h3 style={{color:'white'}}>Approche Iterative</h3>
                  <p style={{color:'white'}}> 
                       Très pratique pour composer des documents complexes, beaucoup
                        d’automatisation : références croisées, notes de bas de page, table des
                        matières, des figures, bibliographie, index, mélange de plusieurs
                        langues, équations mathématiques, présentations.
                  </p>
               </div>
               <div className='start'>
                  <CloudSync style={{fontSize:'40px',color:'white'}}/>
               </div>
             </Paper>
            </Grid>

            <Grid item>
              <Paper
                sx={{
                  borderLeft:'1px solid #96b3d1',
                  height: 'auto',
                  width: 300,
                  textAlign:'center',
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#003366' : '#003366',
                }}
              >
              <div style={{padding:'0px 20px 5px 20px'}}>
                  <h3 style={{color:'white'}}>Approche Incremental</h3>
                  <p style={{color:'white'}}> 
                       Très pratique pour composer des documents complexes, beaucoup
                        d’automatisation : références croisées, notes de bas de page, table des
                        matières, des figures, bibliographie, index, mélange de plusieurs
                        langues, équations mathématiques, présentations.
                  </p>
               </div>
             </Paper>
            </Grid>

        </Grid>
      </Grid>

      <Grid style={{paddingBottom:'100px'}} item xs={12}>
        <Grid container justifyContent="center"  spacing={0}>
            <Grid item>
              <Paper
                sx={{
                  borderRight:'1px solid #96b3d1',
                  height: 'auto',
                  width: 300,
                  textAlign:'center',
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#003366' : '#003366',
                }}
              >
              <div style={{padding:'0px 20px 5px 20px'}}>
                  <h3 style={{color:'white'}}>ADAPTATIVE</h3>
                  <p style={{color:'white'}}> 
                       Très pratique pour composer des documents complexes, beaucoup
                        d’automatisation : références croisées, notes de bas de page, table des
                        matières, des figures, bibliographie, index, mélange de plusieurs
                        langues, équations mathématiques, présentations.
                  </p>
               </div>
             </Paper>
            </Grid>

            <Grid item>
              <Paper
                sx={{
                  borderTop:'1px solid #96b3d1',
                  height: 'auto',
                  textAlign:'center',
                  width: 300,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#003366' : '#003366',
                }}
              >
              <div style={{padding:'0px 20px 5px 20px'}}>
                  <h3 style={{color:'white'}}>MAIN dans la Main</h3>
                  <p style={{color:'white'}}> 
                       Très pratique pour composer des documents complexes, beaucoup
                        d’automatisation : références croisées, notes de bas de page, table des
                        matières, des figures, bibliographie, index, mélange de plusieurs
                        langues, équations mathématiques, présentations.
                  </p>
               </div>
             </Paper>
            </Grid>

        </Grid>
      </Grid>

    </Grid>
  );
}
