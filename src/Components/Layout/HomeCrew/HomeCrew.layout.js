import { useTheme } from "@emotion/react"
import {Box, Button, Container, Grid, ImageList, ImageListItem, Typography} from  "@mui/material"
import AnimatedWaveButton from "../AnimatedWaveButton/AnimatedWaveButton.layout"
import { Link } from "react-router-dom"

const HomeCrew =()=>{
    const theme=useTheme()
    const itemData=[
        {
            name:"TSOATA EVRAD",
            role:"Developpeur fullstack",
            photo:"dev2.png"
        },
        {
            name:"TSOATA EVRAD",
            role:"Developpeur fullstack",
            photo:"dev3.png"
        },
        {
            name:"TSOATA EVRAD",
            role:"Developpeur fullstack",
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
        <Box sx={{mx:"auto"}}>
            <Grid container spacing={2} alignItems="center" columnSpacing={1} justifyContent="center" >
                <Grid item container xs={12} md={6} columnSpacing={.5} >
                    <Grid item xs={6}  sm={8} sx={{display:"flex", justifyContent:"flex-end", alignItems:"flex-end"}}>
                        <Box sx={{width:{xs:"95%", sm:"60%"}, position:"relative"}}>
                            <img src={require(`../../../assets/img/${itemData[0].photo}`)} alt={itemData[0].name} style={{width:"100%", height:"100%"}} />
                            {descriptionDevelopper(itemData[0])} 
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={4}  sx={{display:"flex", justifyContent:"flex-start", alignItems:"flex-end"}}>
                        <Box sx={{width:{xs:"100%", sm:"85%"}, transform:"translateY(50%)", position:"relative"}}>
                            <img src={require(`../../../assets/img/${itemData[1].photo}`)} alt={itemData[1].name} style={{width:"100%", height:"100%"}}/>
                            {descriptionDevelopper(itemData[1])} 
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={8} sx={{display:"flex", justifyContent:"flex-end", alignItems:"flex-start"}}>
                        <Box sx={{width:{xs:"85%", sm:"45%", position:"relative"}}}>
                            <img src={require(`../../../assets/img/${itemData[2].photo}`)} alt={itemData[2].name} style={{width:"100%", height:"100%"}}/> 
                            {descriptionDevelopper(itemData[2])}  
                        </Box>
                    </Grid>

                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography sx={{px:1}} variant="body1" component="p" textAlign="center">
                        Non magna commodo veniam pariatur veniam. Veniam voluptate amet commodo tempor
                        labore reprehenderit magna ut velit. Ut magna eu tempor est anim non irure.
                        Eiusmod reprehenderit nostrud laborum reprehenderit.
                        Non magna commodo veniam pariatur veniam. Veniam voluptate amet commodo tempor
                        labore reprehenderit magna ut velit. Ut magna eu tempor est anim non irure.
                        Eiusmod reprehenderit nostrud laborum reprehenderit.
                    </Typography>
                    <Box sx={{textAlign:"center", pt:2}}>
                        <Link to="/about">
                            <AnimatedWaveButton text="En savoir plus" color="primary"/>
                        </Link>
                    </Box>
                </Grid>
           
        </Grid>
        </Box>
       
    )
}

export default HomeCrew