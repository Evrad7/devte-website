import { useTheme } from "@emotion/react";
import { Box, Grid, Typography } from "@mui/material";
import InfographicServiceDetailsItem from "./InfographicServiceDetailsItem.layout";

const InfographicServiceDetails = () => {
    const theme=useTheme()
    return ( 
        <Box sx={{
            py:10,
            pr:1,
            pl:2,
            background:theme.palette.primary.main,
            backgroundImage:theme.palette.primary.gradientToBottom,
           
        }}>
           <Grid container  columnSpacing={1.5} rowSpacing={{xs:8, md:3}} sx={{
                opacity:.9,
                 position:"relative",
                "&:before":{
                    position:"absolute",
                    content:"''",
                    top:0,
                    left:{xs:0, md:"50%"},
                    width:10,
                    height:"100%",
                    background:theme.palette.info.main,
                    opacity:.7,
                    transform:"translateX(10%)",
                    borderRadius:10
                }
        }} 
            >
                <Grid   item xs={12} md={6} sx={{
                    }}>
                         <InfographicServiceDetailsItem
                            title="Billets" 
                            photo={"ticket.png"}
                            description="Minim ullamco ipsum culpa ipsum.
                                        Minim ullamco ipsum culpa ipsum.
                                        Minim ullamco ipsum culpa ipsum.
                                        Minim ullamco ipsum culpa ipsum.
                                        Minim ullamco ipsum culpa ipsum."
                            
                            sx={{
                                height:{xs:"auto", md:750},
                                display:"flex",
                                flexDirection:"column",
                                justifyContent:{xs:"flex-start", md:"flex-end"},
                                alignItems:{xs:"flex-start", md:"flex-end"},
                                textAlign:{xs:"left", md:"right"}
                            }}
                        />
                </Grid> 
                <Grid   item xs={12} md={6} sx={{
                    }}>
                        <InfographicServiceDetailsItem
                            title="Flyers" 
                            photo={"flyer.png"}
                            description="Minim ullamco ipsum culpa ipsum.
                                        Minim ullamco ipsum culpa ipsum.
                                        Minim ullamco ipsum culpa ipsum.
                                        Minim ullamco ipsum culpa ipsum.
                                        Minim ullamco ipsum culpa ipsum."
                            sx={{
                                display:"flex",
                                flexDirection:"column",
                            }}
                        />
                </Grid> 

                <Grid   item xs={12} md={6} sx={{
                     height:{xs:"auto", md:750},
                     display:"flex",
                     flexDirection:"column",
                     justifyContent:{xs:"flex-start", md:"flex-end"},
                     alignItems:{xs:"flex-start", md:"flex-end"},
                     textAlign:{xs:"left", md:"right"}
                    }}>
                     <InfographicServiceDetailsItem
                            title="Logos" 
                            photo={"logo.png"}
                            description="Minim ullamco ipsum culpa ipsum.
                                        Minim ullamco ipsum culpa ipsum.
                                        Minim ullamco ipsum culpa ipsum.
                                        Minim ullamco ipsum culpa ipsum.
                                        Minim ullamco ipsum culpa ipsum."
                            sx={{
                                height:{xs:"auto", md:750},
                                display:"flex",
                                flexDirection:"column",
                                justifyContent:{xs:"flex-start", md:"flex-end"},
                                alignItems:{xs:"flex-start", md:"flex-end"},
                                textAlign:{xs:"left", md:"right"}
                            }}
            />
                </Grid> 

                <Grid   item xs={12} md={6} sx={{
                   
                    }}>
                     <InfographicServiceDetailsItem
                            title="Etiquettes" 
                            photo={"label.png"}
                            description="Minim ullamco ipsum culpa ipsum.
                                        Minim ullamco ipsum culpa ipsum.
                                        Minim ullamco ipsum culpa ipsum.
                                        Minim ullamco ipsum culpa ipsum.
                                        Minim ullamco ipsum culpa ipsum."
                            sx={{
                                display:"flex",
                                flexDirection:"column",
                            }}
                        />
                </Grid> 
            </Grid> 
        </Box>
     );
}
 
export default InfographicServiceDetails;