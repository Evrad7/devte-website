import Grid from '@mui/material/Grid';
import { Box, useMediaQuery } from '@mui/material';
import Robot from '../../../assets/img/robot_head.svg';
import TextField from '@mui/material/TextField';
import Astro from '../../../assets/img/astro.png'
import Title from '../Title/Title.layout';
import { useTheme } from '@emotion/react';
import { StyledFormContainer } from './ProjectForm.style';
import AnimatedWaveButton from '../AnimatedWaveButton/AnimatedWaveButton.layout';
import Background from "../../../assets/img/line_style.svg"
import { useContext, useEffect, useRef, useState } from 'react';
import { IntersectionObserverContext } from '../../../context/IntersectionObserverContext';
import CustomUpdateFollower from '../CustomUpdateFollower/CustomUpdateFollower.layout';
export default function ProjectForm() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [pays, setPays] = useState('');
  const [message, setMessage] = useState('');

  


  const handleSubmit =  async () => {

    if (nom !='' && email !='' && telephone!='' && pays != '' && message != '' ) {
      
      try {
        const messages ='Username :'+nom+' \n Email :'+email+' \n phone :'+telephone+' \n Pays :'+pays+' \n Message:' +message; 
       const response = await fetch('https://formspree.io/f/xaygyqrw', {
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
         setTelephone('');
         setEmail('');
         setMessage('');
         setPays('');
         alert('VOTRE COMMENTAIRE A ETE ENVOYER AVEC SUCCES!! \n DEVTE vous remercie')
       } else {
         // Une erreur s'est produite lors de l'envoi du commentaire
         console.log('Erreur lors de l\'envoi du commentaire');
         alert('Une erreur est survenu !! veiller ressayer')
       }
     } catch (error) {
       console.log(error);
     }

    } else {
      alert('veillez remplire tous les champs ')
    }
 
  };

  
  const theme=useTheme()
  const matchesMd=useMediaQuery(theme=>theme.breakpoints.up("md"))

  const {observe, unObserve}=useContext(IntersectionObserverContext)
    const ref=useRef(null)
  
      useEffect(()=>{
          observe(ref.current)
          return ()=>{
              const currentRef=ref.current
              unObserve(currentRef)
  
          }
      })
  return (
    <Box id="start-project">
      <Title text="Commençons votre pojet" color="primary" mb={2} textAlign="center"/>
      <CustomUpdateFollower mouseOptions={{scale:0}}>
        <StyledFormContainer  ref={ref} matchesMd={matchesMd} sx={{
          px:{xs:1, md:10, lg:20},
          position:"relative",
          "& .robot":{
            transform:"translate(-50%, -150%)",
            transition:"opacity 1.3s .2s cubic-bezier(0.5, 0, 0, 1), transform 1.3s .2s cubic-bezier(0.5, 0, 0, 1)",
            opacity:0,
          },
          "&.animate":{
            "& .robot":{
              transform:"translate(-50%, -89%)",
              opacity:1,
            },
            "& .MuiGrid-container":{
              transform:"translate(0)",
              opacity:1,
            }
          }
        }}>
          <img className="robot" src={Robot} alt="robot" style={{
            width:'70px',height:'75px',
            position:"absolute",
            top:0,
            left:"50%",
            }}/>
          
          <Grid  container   columnSpacing={{xs:0, md:5}} rowSpacing={4}
              sx={{backgroundColor:theme.palette.primary.main,
                    pl: {xs:1, md:2.5},
                    pr: {xs:1, md:5},
                    py:{xs:2, md:4},
                    mt:10,
                    position:"relative",
                    backgroundImage:`url(${Background})`,
                    backgroundPosition:"center",
                    backgroundSize:"cover",
                    borderTopLeftRadius:20,
                    borderTopRightRadius:20,
                    transform:"translateY(50%)",
                    opacity:0,
                    transition:"opacity 1.3s .2s cubic-bezier(0.5, 0, 0, 1), transform 1.3s .2s cubic-bezier(0.5, 0, 0, 1)",
                    }} >
            <img src={Astro} width={matchesMd?180:130}  alt="astronaute" style={{
              position:"absolute",
              bottom:0, right:0,
              opacity:.35,


            }}/>
            <Grid
                xs={12} md={6}
                item
                sx={{
                  textAlign:'center',
                  height: 'auto',
                  position: 'relative',
                  width: 650,       
                }}
              ><TextField value={nom} color="primary"  variant="filled" label="Nom *"  onChange={(e)=>setNom(e.target.value)}   fullWidth />

            </Grid>

              <Grid item xs={12} md={6}
                sx={{
                  height: 'auto',
                  textAlign:'center',
                    width: 650, 
                }}
              >
              <TextField value={telephone} variant="filled" label="Télephone *"  onChange={(e)=>setTelephone(e.target.value)}   fullWidth />
            </Grid>

              <Grid item  xs={12} md={6}
                sx={{
                  textAlign:'center',
                  height: 'auto',
                  position: 'relative',
                  width: 650,       
                }}
              >
              <TextField value={email} variant="filled" label="Email *" onChange={(e)=>setEmail(e.target.value)}  fullWidth />
            </Grid>

              <Grid item xs={12} md={6}
                sx={{
                  height: 'auto',
                  textAlign:'center',
                    width: 650, 
                }}
              >
                  <TextField value={pays} variant="filled" label="Pays *" onChange={(e)=>setPays(e.target.value)}  fullWidth />
            </Grid>
      
            <Grid  item xs={12}>
              <TextField  value={message} variant="filled" label="Description de votre projet ..." onChange={(e)=>setMessage(e.target.value)}  multiline fullWidth rows={7}  />
            </Grid>

            <Grid item xs={12} style={{width:"100%",textAlign:'center',padding:'40px 0px 40px 0px'}}>
                  <AnimatedWaveButton  onClick={()=>handleSubmit()}  text="Envoyer" color="info"/>
            </Grid>

        </Grid>

        </StyledFormContainer>
 
      </CustomUpdateFollower>





    </Box>
  );
}