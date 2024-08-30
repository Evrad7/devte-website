import React from 'react';
import { useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOn from '@mui/icons-material/LocationOn';
import { Phone ,Mail ,MailOutline , MailLockOutlined ,} from '@mui/icons-material';
import FacebookInIcon from '@mui/icons-material/Facebook';
import Logo from '../../../assets/img/logo_white.png'
import Divider  from '@mui/material/Divider';
import Maps from '../Maps/Maps.layout'
import Globe from '../../../assets/img/globe.svg'
import { Margin } from '@mui/icons-material';

const Contact = () => {

    const theme=useTheme()
  const classes = {
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
      position: 'relative',
      margin:'auto',
      width:'90%'
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
    tite: {
      fontWeight:'bold',
      color:'white'
    },
    des: {
        color:'white'
      },
    btn: {
        fontWeight:'bold'
      },
    items: {
        margin:'auto',
        display:'flex',
        backgroundColor:'#003366',
        borderRadius:'5px',
        alignItems:'center',
        paddingLeft:'10px'
      }
  }

  return (
    <div>
          <h1 style={{textAlign:'center',color:'#003366'}} >Contact Us </h1>
          <h3 style={{textAlign:'center'}} > Le train du developpement et de l'innovation technologique a votre porter. pour vos projet.et de </h3>
        
       
       <Grid sx={classes.root} square>
       <br/>
       <Typography variant="h6">Contactez-nous</Typography>

      <Grid container spacing={3}>
        {/* Deuxième bloc avec titre, texte et lien */}
        <Grid item xs={12} sm={6}  md={3}> 
            <br />
            <Grid sx={classes.items}>
                <GitHubIcon style={{color:'white',fontSize:'40px' }} /> &nbsp;&nbsp;
                <div>
                    <p style={classes.tite}> Web Service</p>
                    <p style={classes.des}> Fast services</p>
                </div>
            </Grid>

            <br />
            <Grid sx={classes.items}>
                <Phone style={{color:'white',fontSize:'40px' }} /> &nbsp;&nbsp;
                <div>
                    <p style={classes.tite}> Phone</p>
                    <p style={classes.des}> +237 698745789/698745874</p>
                </div>
            </Grid>


        </Grid>

        {/* Troisième bloc avec titre, texte et lien */}
        <Grid item xs={12} sm={6}  md={3}> 
            <br />
            <Grid sx={classes.items}>
                <LocationOn style={{color:'white',fontSize:'40px' }} /> &nbsp;&nbsp;
                <div>
                    <p style={classes.tite}> Location</p>
                    <p style={classes.des}> Douala-Cameroun</p>
                </div>
            </Grid>

            <br />
            <Grid sx={classes.items}>
                <MailOutline style={{color:'white',fontSize:'40px' }} /> &nbsp;&nbsp;
                <div>
                    <p style={classes.tite}> Email</p>
                    <p style={classes.des}> devte.startup@gmail.com</p>
                </div>
            </Grid>


        </Grid>

        <Grid item xs={12} sx={{paddingRight:'20px'}} backgroundColor='white' sm={12} md={6}>
          <form>
            <TextField  style={{backgroundColor:'white',borderRadius:'10px',marginTop:'10px'}}label="Username" fullWidth />
            <TextField  style={{backgroundColor:'white',borderRadius:'10px',marginTop:'10px'}}label="Email" fullWidth />
            <TextField style={{backgroundColor:'white',borderRadius:'10px',marginTop:'10px'}} label="Message" multiline rows={4} fullWidth />
            <Button style={{marginTop:'10px',width:'100%'}} variant="contained"  >
              Envoyer
            </Button>
          </form>
          
        </Grid>
      </Grid>
                 
       <br></br>


    </Grid>

    <Grid style={{width:'100%',height:'500px'}} >
          <Maps/>
        </Grid>
    </div>
  );
};

export default Contact;
