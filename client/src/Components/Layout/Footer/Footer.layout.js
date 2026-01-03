import React, { useContext, useEffect, useRef } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import GithubIcon from "@mui/icons-material/GitHub"
import Globe from '../../../assets/img/globe.svg'
import FooterItem from './FooterItem.layout';
import Logo from '../Logo/Logo.layout';
import { navItems} from '../Header/Header.layout';
import { Link } from 'react-router-dom';
import ButtonMouseFollower from '../ButtonMouseFollower/ButtonMouseFollower.layout';
import CustomUpdateFollower from '../CustomUpdateFollower/CustomUpdateFollower.layout';
import Separator from '../Separator/Separator.layout';
import { socialNetworkLinks, telPhones } from '../../../services/infos';
import { ContactPhone, Email, Phone, PhoneAndroidOutlined } from '@mui/icons-material';
import FocusMouseFollower from '../FocusMouseFollower/FocusMouseFollower.layout';
import { IntersectionObserverContext } from '../../../context/IntersectionObserverContext';

const Footer = () => {
    const ref=useRef(null)
    const {observe, unObserve} =useContext(IntersectionObserverContext)
    const theme=useTheme()
    const matchesMd=useMediaQuery(theme=>theme.breakpoints.up("md"))
    const socialLinkItems=[
      {name:"linkedin", link:socialNetworkLinks.linkedin, icon:<LinkedInIcon color="light" />},
      {name:"github", link:socialNetworkLinks.instagram, icon:<GithubIcon color="light" />},
      {name:"facebook", link:socialNetworkLinks.facebook, icon:<FacebookIcon color="light" />},
      {name:"whatsapp", link:socialNetworkLinks.whatsapp, icon:<WhatsAppIcon color="light" />},
      {name:"email", link:socialNetworkLinks.email, icon:<Email color="light" />},

    ]


    useEffect(()=>{
      observe(ref.current)
      return ()=>{
          const currentRef=ref.current
          unObserve(currentRef)
      }
    }, [])

  return (
    <CustomUpdateFollower mouseOptions={{backgroundColor:theme.palette.light.main}}>
      <Box>
     <Separator translate={true}/>
     <Box ref={ref} sx={{
        position:"relative",
        overflow:"hidden",
          backgroundColor:theme.palette.primary.main,
          backgroundImage:theme.palette.primary.gradientToBottom,
          pr:{xs:1, md:4},
          pl:{xs:5, md:4},
          pt:{xs:10, sm:20},
          minHeight:550,
          "&:before":{
            content:"''",
            position:"absolute",
            top:0,
            bottom:0,
            left:0,
            right:0,
            textAlign:"center",
            // background:"red",
            opacity:".1!important",
            backgroundImage:`url(${Globe})`,
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center 170%",
            backgroundSize:{xs:"70% 61%", md:"60% 60%"},
          },
          "& .footer-item, &:before":{
            transition:"transform .7s 0s  cubic-bezier(0.5, 0, 0, 1), opacity .7s 0s  cubic-bezier(0.5, 0, 0, 1)",
            opacity:0,
            transform:"translateY(50%)",
          },
          "&.animate":{
            ".footer-item, &:before":{
              transform:{xs:"translateY(0)", md:"translateY(0)"},
              opacity:1,
            },
         
          },
          // pb:30
        }} >
          <Grid container columnSpacing={1}>
            
            <Grid item xs={12}  md={3} display="flex"sx={{
              display:{xs:"flex", sm:"none", md:"flex"},
              justifyContent:{xs:"flex-start", sm:"center"},
              position:"relative",
              pb:{xs:10, sm:0}
              
              }}   >
              <FooterItem column={0}>
                  <FocusMouseFollower scale={10}>
                    <Logo width={matchesMd?100:60} height={matchesMd?130:90} />
                  </FocusMouseFollower>
                  <Typography mt={2} component="p" variant="body1" color="light.main">
                    Des experts toujours disponibles pour vous écouter et vous aider à propulser vos projets.
                  </Typography>
              </FooterItem>
            </Grid>
                      
            <Grid item xs={12}  sm={4} md={3} sx={{
               display:"flex",
              justifyContent:{xs:"flex-start", sm:"center"},
              position:"relative",
              pb:{xs:10, sm:0}
            }} >
              <FooterItem column={1}>
                  <Typography variant="h5" component="h4" color="info.main">
                      SERVICES
                    </Typography> 
                    <Box component="ul" sx={{
                      listStyleType:"none",
                      pl:0,
                    }}>
                      {navItems[1].items.map((elt, i)=><Box key={i} component="li" mb={2}>
                          <ButtonMouseFollower style={{display:"inline"}}>
                            <Link style={{
                              color:theme.palette.light.main,
                              textDecoration:"none",
                              textTransform:"uppercase",
                            }}  to={elt.link}>{elt.name}
                            </Link>
                          </ButtonMouseFollower>
                        </Box>
                        
                        )}
                    </Box>
              </FooterItem>
            </Grid>

            <Grid item xs={12}   sm={4} md={3} sx={{
               display:"flex",
              justifyContent:{xs:"flex-start", sm:"center"},
              position:"relative",
              pb:{xs:10, sm:0}
            }}>
              <FooterItem column={2}>
                  <Typography variant="h5" component="h4" color="info.main">
                      MENU
                    </Typography> 
                    <Box component="ul" sx={{
                      listStyleType:"none",
                      pl:0,
                    }}>
                      {navItems.map((elt, i)=>
                      (elt.name!="Services")&&<Box key={i} component="li" mb={2}>
                          <ButtonMouseFollower  style={{display:"inline"}}>
                            <Link style={{
                              color:theme.palette.light.main,
                              textDecoration:"none",
                              textTransform:"uppercase",
                            }}  to={elt.link}>{elt.name}
                            </Link>
                          </ButtonMouseFollower>
                        </Box>
                        
                        )}
                    </Box>
              </FooterItem>
            </Grid>

            <Grid item xs={12}   sm={4} md={3} sx={{
               display:"flex",
              justifyContent:{xs:"flex-start", sm:"center"},
              position:"relative",
              pb:{xs:10, sm:0}
            }} >
              <FooterItem column={3}>
                    <Typography variant="h5" component="h4" color="info.main">
                      CONTACTS
                      </Typography> 
                      <Box component="ul" sx={{
                        listStyleType:"none",
                        pl:0,
                      }}>
                      {socialLinkItems.map((item, i)=><Box key={i} component="li" mb={2}>
                            <ButtonMouseFollower style={{display:"inline", display:"flex", alignItems:"center"}}>
                              {item.icon}
                              <Link style={{
                                color:theme.palette.light.main,
                                textDecoration:"none",
                                textTransform:"uppercase",
                                marginLeft:"10px"
                              }}  to={item.link}>{item.name}
                              </Link>
                            </ButtonMouseFollower>
                          </Box>
                          )}
                        <Box component="li" color="light.main" display="flex" alignItems="flex-start" >
                        <ContactPhone/>:&nbsp;
                        <Typography component="span" lineHeight={.5}>
                          <Typography fontSize={13} variant="body1" component={"span"}>{telPhones.France}</Typography> <br/>
                          <Typography fontSize={13}  variant="body1" component={"span"}>{telPhones.Cameroun}</Typography>
                        </Typography>  
                      
                        </Box>

                      </Box>
              </FooterItem>
            </Grid>

          </Grid>
          
          <Typography variant="body2" sx={{
            position:"absolute",
            bottom:0,
            left:0,
            right:0,
            display:"flex",
            justifyContent:"flex-end",
            color:theme.palette.light.main,
            px:3,
            opacity:.7,
          }}
          >
            Copyright ©DEVTE 2024
          </Typography>
          
        </Box>
      </Box>

     
    </CustomUpdateFollower>
 
  );
};

export default Footer;
