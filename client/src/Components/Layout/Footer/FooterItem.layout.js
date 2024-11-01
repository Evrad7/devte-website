import { useTheme } from "@emotion/react";
import { Star } from "@mui/icons-material";
import { Box } from "@mui/material";

const FooterItem = ({column, children}) => {
    const theme=useTheme()
    let backgroundXs="#f9f9f938"
    if(column==0){
        backgroundXs="linear-gradient(to bottom,transparent, #f9f9f938)"
    }
    else if(column==3){
        backgroundXs="linear-gradient(to bottom, #f9f9f938, transparent)"
    }
    return (  
        <Box>
            <Box sx={{
                 position:"absolute",
                 top:-50,
                 right:{xs:"100%", sm:-10},
                 display:{xs:"flex", sm:column!=3?"flex":"none"},
                 flexDirection:"column",
                 alignItems:"center",
                 height:{xs:"100%", sm:350, md:column==1?250:460},
            }}>
                <Star sx={{
                    visibility:{xs:column==0?"hidden":"visible", sm:"visible"}
                }}
                
                color="info"/>
                <Box  sx={{
                    width:1.3,
                    background:{xs:backgroundXs, sm:"linear-gradient(to bottom, #f9f9f938, transparent)"},
                    my:2,
                    height:"100%"
                }}>
                

                </Box>
            </Box>
            <Box  sx={{
                    display:{xs:column!=3?"block":"none", sm:"none"},
                    position:"absolute",
                    bottom:39,
                    left:0,
                    height:2,
                    width:"100%",
                    background:"linear-gradient(to right, #f9f9f938, transparent)",
                    ml:2,
                }}></Box>
            <Box className="footer-item" >
                {children}
            </Box>
        </Box>
    );
}
 
export default FooterItem;