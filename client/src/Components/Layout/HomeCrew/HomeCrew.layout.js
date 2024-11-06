import { useTheme } from "@emotion/react"
import {Box, Button, Container, Grid, ImageList, ImageListItem, Typography} from  "@mui/material"
import AnimatedWaveButton from "../AnimatedWaveButton/AnimatedWaveButton.layout"
import { Link } from "react-router-dom"
import { useContext, useEffect, useRef } from "react"
import { IntersectionObserverContext } from "../../../context/IntersectionObserverContext"
import Title from "../Title/Title.layout"

const HomeCrew =()=>{
    const theme=useTheme()
    const ref=useRef(null)
    const {observe, unObserve} =useContext(IntersectionObserverContext)


    useEffect(()=>{
        observe(ref.current)
        return ()=>{
            const currentRef=ref.current
            unObserve(currentRef)
        }
    }, [])

    const itemData=[
        {
            name:"TIOJIO Romain",
            role:"Developpeur fullstack",
            photo:"dev2.png"
        },
        {
            name:"FEUDJIO Rochinel",
            role:"Developpeur frontend",
            photo:"dev3.png"
        },
        {
            name:"TSOATA EVRAD",
            role:"Devops fullstack",
            photo:"dev1.png"
        },
     
    
    ]
    const descriptionDevelopper=(data)=>(
       <Box component="ul" sx={{opacity:.8, pl:1,mb:0, position:"absolute", bottom:10, left:10, color:theme.palette.light.main, listStyleType:"square"}}>
            <Typography varient="body1" component="li" sx={{fontSize:{xs:12, sm:10}}}>{data.role}</Typography>
            <Typography varient="body2" component="h6" sx={{fontSize:{xs:12, sm:10}}}>{data.name}</Typography>

       </Box>
    )
    return (
        <>  
            <Box 
                sx={{display:{xs:"block", lg:"flex"},
                     justifyContent:"center",
                     "& > div:nth-of-type(1)":{
                        transform:{md:"translateX(100px)"},
                     },
                     "& > div:nth-of-type(2)":{
                        transform:"translate(-100px, 100%)",
                        display:{xs:"none", md:"flex"}
                     }
                     }}>
                <Title text="Une équipe d'experts" color="primary" animationTextDirection="right" />
                <Title text="Une équipe d'experts" color="primary" />
            </Box>
            <Box ref={ref} sx={{
            mx:"auto",
            "&.animate":{
                "& .img-1, & .img-2, & .img-3, & .txt":{
                    opacity:1,
                    transform:"translate(0, 0)",
                }
            }
            
            }}>
            <Grid container spacing={2} alignItems="center" columnSpacing={1} justifyContent="center" >
                <Grid item container xs={12} md={6} columnSpacing={.5}  justifyContent={{xs:"center", sm:"flex-start", lg:"center"}}>
                    <Grid item xs={6}  sm={8} sx={{display:"flex", justifyContent:"flex-end", alignItems:"flex-end"}}>
                        <Box className="img-1"
                             sx={{
                                width:{xs:"95%", sm:"60%"},
                                position:"relative",
                                opacity:0,
                                transform:"translateY(-50%)",
                                transition:"opacity .9s 0s cubic-bezier(0.5, 0, 0, 1), transform .9s 0s cubic-bezier(0.5, 0, 0, 1)",
                                }}>
                            <img src={require(`../../../assets/img/crew/${itemData[0].photo}`)} alt={itemData[0].name} style={{width:"100%", height:"100%"}} />
                            {descriptionDevelopper(itemData[0])} 
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4}  sx={{display:"flex", justifyContent:"flex-start", alignItems:"flex-end"}}>
                        <Box className="img-2"
                             sx={{
                                width:{xs:"100%", sm:"85%"},
                                transform:"translateY(50%)",
                                position:"relative",
                                opacity:0,
                                transform:"translateX(50%)",
                                transition:"opacity .9s 0s cubic-bezier(0.5, 0, 0, 1), transform .9s 0s cubic-bezier(0.5, 0, 0, 1)",

                                }}>
                            <img src={require(`../../../assets/img/crew/${itemData[1].photo}`)} alt={itemData[1].name} style={{width:"100%", height:"100%"}}/>
                            {descriptionDevelopper(itemData[1])} 
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={8} sx={{display:"flex", justifyContent:"flex-end", alignItems:"flex-start"}}>
                        <Box className="img-3"
                             sx={{
                                width:{xs:"85%", sm:"45%", position:"relative"},
                                opacity:0,
                                transform:"translateY(50%)",
                                transition:"opacity .9s 0s cubic-bezier(0.5, 0, 0, 1), transform .9s 0s cubic-bezier(0.5, 0, 0, 1)",

                                }}>
                            <img src={require(`../../../assets/img/crew/${itemData[2].photo}`)} alt={itemData[2].name} style={{width:"100%", height:"100%"}}/> 
                            {descriptionDevelopper(itemData[2])}  
                        </Box>
                    </Grid>

                </Grid>
                <Grid className="txt" item xs={12} md={6}
                    sx={{
                        opacity:0,
                        transform:"translateY(-50%)",
                        transition:"opacity .9s 0s cubic-bezier(0.5, 0, 0, 1), transform .9s 0s cubic-bezier(0.5, 0, 0, 1)",

                    }}>
                    <Typography sx={{px:1}} variant="body1" component="p" textAlign="center" px={{xs:2, md:10}} mr={{xs:"auto", md:10}}>
                    Notre équipe est composée de passionnés du numérique, experts en développement 
                    web et mobile, et dédiés à créer des solutions performantes et innovantes. Chaque 
                    membre apporte son savoir-faire unique, qu'il s'agisse de développement, de gestion 
                    de projet ou de design, pour garantir des projets réussis et adaptés aux besoins de 
                    nos clients. Nous croyons en une collaboration étroite, une communication transparente 
                    et une approche agile pour offrir des produits de haute qualité. Ensemble, nous transformons 
                    vos idées en solutions concrètes et durables.
                    </Typography>
                    <Box sx={{textAlign:"center", pt:2}}>
                        <Link to="/about">
                            <AnimatedWaveButton text="En savoir plus" color="primary"/>
                        </Link>
                    </Box>
                </Grid>
           
        </Grid>
        </Box>
       
        </>
       
    )
}

export default HomeCrew