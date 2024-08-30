import React from 'react';
import { useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookInIcon from '@mui/icons-material/Facebook';
import Logo from '../../../assets/img/logo_white.png'
import Divider  from '@mui/material/Divider';
import Maps from '../Maps/Maps.layout'
import Globe from '../../../assets/img/globe.svg'
import { Margin } from '@mui/icons-material';

const Footer = () => {

    const theme=useTheme()
  const classes = {
    root: {
      flexGrow: 1,
      background: '#003366',
      color: 'white',
      padding: theme.spacing(3),
      position: 'relative'
    },
    globe:{
      position: 'absolute',
      bottom: 0,
      left: '35%',
      width:'300px',
      height:'300px'
    },
    logo: {
      maxWidth: 200,
      maxHeight: 200,
    },
    socialIcons: {
      marginTop: theme.spacing(2),
    },
  }

  return (
    <Paper sx={classes.root} square>
       <br/>
      <Grid container spacing={3}>
        {/* Premier bloc avec le logo et du texte */}
        <Grid item xs={12} sm={6} md={3}>
          <img src={Logo} alt="Logo" style={classes.logo} />
          <p> Le train du developpement et de l'innovation technologique a votre porter. pour vos projet.et de l'innovation technologique a votre porter et de l'innovation technologique a votre porter </p>
         
          <br/>
        </Grid>

        {/* Deuxième bloc avec titre, texte et lien */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Our Services </Typography>
 
            <br />
            <p> Web Design</p>
            <p> UX Design</p>
            <p> Mobile Ux</p>
            <p> Infographie</p>
            <p> Web developpement</p>
            <p> Mobile developpement</p>

        </Grid>

        {/* Troisième bloc avec titre, texte et lien */}
        <Grid item xs={3} sm={3} md={3} >
            <br />
            <br />
            <h3>Join Us </h3>

            <p> 
               <a style={{display:'flex',alignItems:'center',color:'white',textDecoration:'none'}} href=''>
                 <GitHubIcon style={{color:'white',fontSize:'30px' }} />
                 <label>opencollective.com/devtecommunity</label>
               </a>
            </p>

            <p> 
               <a style={{display:'flex',alignItems:'center',color:'white',textDecoration:'none'}} href=''>
                 <WhatsAppIcon style={{color:'white',fontSize:'30px' }} />
                 <label> +237 698745478/698745214</label>
               </a>
            </p>

            <p> 
               <a style={{display:'flex',alignItems:'center',color:'white',textDecoration:'none'}} href=''>
                 <LinkedInIcon style={{color:'white',fontSize:'30px' }} />
                 <label>LinkedIn/devteStartup</label>
               </a>
            </p>

            <p> 
               <a style={{display:'flex',alignItems:'center',color:'white',textDecoration:'none'}} href=''>
                 <FacebookInIcon style={{color:'white',fontSize:'30px' }} />
                 <label>facebook.com/devtecommunity</label>
               </a>
            </p>

        </Grid>

        <Grid xs={12} item sm={6} md={3} >
          <Maps/>
        </Grid>
      </Grid>
                 
       
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <Grid style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
         <p>copyriht ©DevTe 2023</p>
         <p>Douala-Cameroun</p>
       </Grid>
       <img style={classes.globe} src={Globe}/>

    </Paper>
  );
};

export default Footer;
