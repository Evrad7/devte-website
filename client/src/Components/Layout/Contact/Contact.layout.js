import React from 'react';
import { Box, Link, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useContext, useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import LocationOn from '@mui/icons-material/LocationOn';
import { Phone ,MailOutline, WhatsApp, GitHub, LinkedIn, Facebook, Email} from '@mui/icons-material';
import AnimatedWaveButton from '../AnimatedWaveButton/AnimatedWaveButton.layout';
import CustomUpdateFollower from '../CustomUpdateFollower/CustomUpdateFollower.layout';
import LinearProgress from '@mui/material/LinearProgress';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import send from '../../../assets/img/send.gif'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Contact = () => {

  const [nom, setNom] =  useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(true);
  const [succes, setSucces] = useState(false);
  

  const [open, setOpen] = React.useState(false);

   const handleClose = () =>{
    setOpen(false);
   }


  const handleSubmit =  async (e) => {
    e.preventDefault()
    setOpen(true);
    if (nom !='' && email !='' && message != '' ) {
      setResponse(true)
      try {
        const messages ='Username :'+nom+' \n Email :'+email+' \n Message:' +message; 
       const response = await fetch('https://formspree.io/f/xpwaqdjg', {
         method: 'POST',
          headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({messages}),
       });
  
       if (response.ok) {
         // Le commentaire a été envoyé avec succès
         setNom('');
         setEmail('');
         setMessage('');
         setSucces(true)
       } else {
         // Une erreur s'est produite lors de l'envoi du commentaire
         console.log('Erreur lors de l\'envoi du commentaire');
         alert('Une erreur est survenu !! veiller ressayer')
       }
     } catch (error) {
       console.log(error);
     }

    } else {
      setResponse(false)
    }
 
  };

  const theme=useTheme()
  const matchesMd=useMediaQuery(theme=>theme.breakpoints.up("md"))
  const classes = {

    items: {
        margin:'auto',
        display:'flex',
        backgroundColor:theme.palette.primary.main,
        borderRadius:'5px',
        alignItems:'center',
        px:2,
        py:1.5,
        minHeight:125,

      }
  }
  return (
    <>
      <Box px={{xs:1, md:10}} >
        <Grid container spacing={3} justifyContent="center" alignItems="flex-start" >
          <Grid container item xs={12}   lg={6} columnSpacing={4} rowSpacing={{xs:2, md:4,}}> 
              <Grid item  xs={12} md={6}>
                  <Box  sx={classes.items}>
                    <Phone color="light" fontSize={matchesMd?"large":"small"} /> 
                    <Box sx={{ml:1}}>
                        <Typography component="span"  display="block" mb={1} variant="body1" color="light.main">{telPhones.France}</Typography>
                        <Typography component="span" display="block"   variant="body1" color="light.main">{telPhones.Cameroun}</Typography>
                    </Box>
                  </Box>
              </Grid>

              <Grid item  xs={12} md={6}>
                <Box  sx={{...classes.items, ml:1}}>
                    <Box >
                        <Box sx={{display:"flex"}}>
                            <LinkedIn color="light" fontSize="small"/>
                            <Link  aria-label="Github Whatsapp" href={socialNetworkLinks.linkedin}  target="_blank" ml={1} display="block" mb={1}  variant="body1" color="light.main">LinkedIn community</Link>
                        </Box>
                        <Box sx={{display:"flex"}}>
                            <Facebook color="light" fontSize="small"/>
                            <Link aria-label="Groupe Devte Whatsapp" href={socialNetworkLinks.facebook} target="_blank" ml={1} display="block" mb={1}  variant="body1" color="light.main">Facebook community</Link>
                        </Box>
                    </Box>
                </Box>

              </Grid>

              <Grid item  xs={12} md={6}>
                <Box  sx={classes.items}>
                  <LocationOn color="light"  fontSize={matchesMd?"large":"small"} />
                  <Box sx={{ml:1}}>
                        <Typography display="block" mb={1} component="span" variant="body1" color="light.main">Douala / Cameroun</Typography>
                        <Typography display="block"  component="span" variant="body1" color="light.main"> Paris / France</Typography>
                    </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                  <Box  sx={classes.items}>
                    <Box >
                        <Box sx={{display:"flex"}}>
                            <GitHub color="light" fontSize="small"/>
                            <Link  aria-label="Github Whatsapp" href={socialNetworkLinks.github}  target="_blank" ml={1} display="block" mb={1}  variant="body1" color="light.main">Github community</Link>
                        </Box>
                        <Box sx={{display:"flex"}}>
                            <WhatsApp color="light" fontSize="small"/>
                            <Link aria-label="Groupe Devte Whatsapp" href={socialNetworkLinks.whatsapp} target="_blank" ml={1} display="block" mb={1}  variant="body1" color="light.main">Whatsapp community</Link>
                        </Box>
                        <Box sx={{display:"flex"}}>
                            <Email color="light" fontSize="small"/>
                            <Link aria-label="Groupe Devte Whatsapp" href={socialNetworkLinks.email} target="_blank" ml={1} display="block" mb={1}  variant="body1" color="light.main">Email</Link>
                        </Box>
                    </Box>
                  </Box>
                  
              </Grid>
             
             
           

          </Grid>
        
          <Grid item xs={12} sx={{
            paddingRight:'20px',
            "& .MuiFormControl-root":{
              borderRadius:6,
              mb:1
            }
          
          }}  sm={12} lg={6}
          >
            <form>
              
              <TextField variant="filled" value={nom} onChange={(e)=>setNom(e.target.value)}  label="Nom et prénom" fullWidth />
              <TextField variant="filled" value={email} onChange={(e)=>setEmail(e.target.value)} label="Adresse email" fullWidth />
              <TextField variant="filled" value={message} onChange={(e)=>setMessage(e.target.value)} label="Message" multiline rows={4} fullWidth />
              <Box sx={{display:"flex", justifyContent:"center"}}>
                <AnimatedWaveButton text="Envoyer"  onClick={(e)=>handleSubmit(e)} color="primary" size="large" />
              </Box>
            </form>
            
          </Grid>
        </Grid>




        
      <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {
          response===true?
            succes===true?
            <DialogContent>
                <DialogTitle>{"Message envoyer avec succès"}</DialogTitle>
              <DialogContentText id="alert-dialog-slide-description">
                 <img src={send} width={250} height={200}/>
              </DialogContentText>
            </DialogContent>
            :
              <DialogContent>
              <DialogTitle>{"Envoie du message en cours"}</DialogTitle>
             <DialogContentText id="alert-dialog-slide-description">
              Veillez patienter...
              <LinearProgress />
             </DialogContentText>
           </DialogContent>
         :
          <DialogContent>  
            <DialogTitle>{"Veillez renseignez tous les champs"}</DialogTitle>
            <DialogContentText id="alert-dialog-slide-description">
              Merci de remplir tout vos information
            </DialogContentText>
          </DialogContent>
        }
        


        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
      </Box>
{/* 
      <Grid style={{width:'100%',height:'500px'}} >
          <Maps/>
      </Grid> */}
    </>
  );
};

export default Contact;
