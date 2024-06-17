import React from "react";
import { Box, styled } from '@mui/material';
import './GridTitle.css'
import  useWindowDimensions from '../../../hooks/useWindowDimensions'
import Astro from '../../../assets/img/astro.png'
import Etoile from '../../../assets/img/etoile.png'


const GridTitle =() =>{

    const {width, height } = useWindowDimensions();

    return(
        <div className='main'>
            <div className="root">
                <img className="etoile" src={Etoile} width={180} height={100}/>
                <img className="astro" src={Astro} width={120} height={130}/>
               <p className="txt-title">La base du developpement et de l'innovation</p>
               <div className="content">
                  <h1 className="txt-item">DEVELOPPEMENT DES SITE <br></br> APPLICATION WEB ET MOBILE</h1>
                  <p className="txt-description">
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, maxime. Autem tempore, minus sequi debitis eligendi fugiat maiores nostrum, quasi dolorum hic iure, inventore a sed error incidunt porro repellendus!
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  </p>
                  
               </div>
            </div>
        </div>
    )
}

export default GridTitle;