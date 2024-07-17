import React from "react";
import './experiences.css';
import MenuIcon from '@mui/icons-material/Menu';
import { CloudSync , Diversity1 } from "@mui/icons-material";
import { RunCircle , Grain } from "@mui/icons-material";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const Experiences =()=>{
    return(
        <div>
             <Grid  item xs={12}>
            <Grid container  justifyContent="center" spacing={2}>
            <Grid className='cont' item>
                <p className="ex" >EX</p> &nbsp;
              <Paper
                sx={{
                  border:'1px solid #003366',
                  textAlign:'center',
                  height: 'auto',
                  width: 300,
                  borderRadius: '10px',                 
                }}
              >
                  <div className="item">
                     <p className="txt">+ 20</p>
                     <p className="txt"> Projets <br/> accomplis </p>
                  </div>
             </Paper>
              <p className="perience">PERIENCES</p>
            </Grid>

            <Grid item>
            <p>.</p>
            <Grid className='cont2'>
              <p className="ex2" >EXPERIEN</p> &nbsp;
              <Paper
                sx={{
                    border:'1px solid #003366',
                    textAlign:'center',
                    height: 'auto',
                    width: 300,
                    borderRadius: '10px',
                }}
              >
                  <div className="item">
                     <p className="txt">+ 10</p>
                     <p className="txt"> Clients <br/> Satisfaits </p>
                  </div>
              </Paper>
              <p className="perience2">CES</p>
            </Grid>
            </Grid>

        </Grid>
      </Grid>

        </div>
    )
}

export default Experiences;