import React from "react";
import './qualite.css';
import MenuIcon from '@mui/icons-material/Menu';
import { CloudSync , Diversity1 } from "@mui/icons-material";
import { RunCircle , Grain } from "@mui/icons-material";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const Qualité =()=>{
    return(
        <div>
             <Grid  item xs={12}>
            <Grid container justifyContent="center" spacing={6}>
            <Grid item>
              <Paper
                sx={{
                  border:'2px solid #003366',
                  textAlign:'center',
                  height: 'auto',
                  width: 300,
                  borderRadius: '10px',
                  position: 'relative'
                 
                }}
              >
                  <div className="item">
                    <div className="icon">
                         <CloudSync style={{fontSize:'50px',color:'#003366'}}/>&nbsp;&nbsp;&nbsp;
                         <h3 style={{color:'#003366'}}>DIGITALISATION</h3>
                    </div>
                </div>

                 <p className="title"> 
                       Très pratique pour composer des documents complexes, beaucoup
                        d’automatisation : références croisées, notes de bas de page, table des
                        matières, des figures, bibliographie, index, mélange de plusieurs
                        langues, équations mathématiques, présentations.
                  </p>
             </Paper>
            </Grid>

            <Grid item>
              <Paper
                sx={{
                    border:'2px solid #003366',
                    textAlign:'center',
                    height: 'auto',
                    width: 300,
                    borderRadius: '10px',
                    position: 'relative'
                }}
              >
              <div className="item">
                    <div className="icon">
                         <Grain style={{fontSize:'50px',color:'#003366'}}/> &nbsp;&nbsp;&nbsp;
                         <h3 style={{color:'#003366'}}>INNOVATION</h3>
                    </div>
                </div>

                 <p className="title"> 
                       Très pratique pour composer des documents complexes, beaucoup
                        d’automatisation : références croisées, notes de bas de page, table des
                        matières, des figures, bibliographie, index, mélange de plusieurs
                        langues, équations mathématiques, présentations.
                  </p>
             </Paper>
            </Grid>

            <Grid item>
              <Paper
                sx={{
                    border:'2px solid #003366',
                    textAlign:'center',
                    height: 'auto',
                    width: 300,
                    borderRadius: '10px',
                    position: 'relative'
                }}
              >
               <div className="item">
                    <div className="icon">
                         <Diversity1 style={{fontSize:'50px',color:'#003366'}}/>&nbsp;&nbsp;&nbsp;
                         <h3 style={{color:'#003366'}}>FLEXIBILITE</h3>
                    </div>
                </div>

                 <p className="title"> 
                       Très pratique pour composer des documents complexes, beaucoup
                        d’automatisation : références croisées, notes de bas de page, table des
                        matières, des figures, bibliographie, index, mélange de plusieurs
                        langues, équations mathématiques, présentations.
                  </p>
             </Paper>
            </Grid>

        </Grid>
      </Grid>

        </div>
    )
}

export default Qualité;