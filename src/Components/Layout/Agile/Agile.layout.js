import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import './Styles.css'
import MenuIcon from '@mui/icons-material/Menu';
import  useWindowDimensions from '../../../hooks/useWindowDimensions'
import { CloudSync , Diversity1 } from "@mui/icons-material";
import smokeImage from '../../../assets/img/fume.png';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { useTheme } from '@emotion/react';

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const theme=useTheme()
  const {width, height } = useWindowDimensions();


  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
      <Grid container spacing={${spacing}}>
`;

  return (
    <div>
    <Grid sx={{backgroundColor:theme.palette.primary.main, background:theme.palette.primary.gradient}}  container spacing={2} className='back-img'>
       
      {/* <Grid style={{padding:'60px 0px 20px 0px',margin:'auto',textAlign:'center',alignItems:'center',display:'flex'}}>
             <ElectricBoltIcon style={{fontSize:'50px',color:'white'}}/>
             <h1 className='txt-agile'>UNE APPROCHE AGILE</h1>
      </Grid> */}

      <Grid item>
        <Paper
          sx={{
            border:'1px solid #96b3d1',
            textAlign:'center',
            height: 'auto',
            position: 'relative',
            width: 300,
            borderRadius: '0 0 -10% 0',
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#003366' : '#003366',
          }}
        >
          <div style={{padding:'10px 25px 10px 25px'}}>
            <h3 style={{color:'white'}}>Approche Iterative</h3>
            <p style={{color:'white'}}> 
                  Très pratique pour composer des documents complexes, beaucoup
                  d’automatisation : références croisées, notes de bas de page, table des
                  matières, des figures, bibliographie, index, mélange de plusieurs
                  langues, équations mathématiques, présentations.
            </p>
          </div>
          <div className='circle'>
            <CloudSync style={{fontSize:'40px',color:'white'}}/>
          </div>
        </Paper>
      </Grid>

      <Grid item>
        <Paper
          sx={{
            border:'1px solid #96b3d1',
            height: 'auto',
            width: 300,
            textAlign:'center',
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#003366' : '#003366',
          }}
        >
        <div style={{padding:'10px 25px 10px 25px'}}>
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

      <Grid item>
        <Paper
          sx={{
            border:'1px solid #96b3d1',
            height: 'auto',
            width: 300,
            textAlign:'center',
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#003366' : '#003366',
          }}
        >
        <div style={{padding:'10px 25px 10px 25px'}}>
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
            border:'1px solid #96b3d1',
            height: 'auto',
            textAlign:'center',
            width: 300,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#003366' : '#003366',
          }}
        >
        <div style={{padding:'10px 25px 10px 25px'}}>
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



    </div>
  );
}
