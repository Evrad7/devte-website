  import {Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

  const TypingText=({texts, delay, next})=>{
      const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndexTexts, setCurrentIndexTexts]=useState(0)
    const [direction, setDirection]=useState(1)
    const {isDesktop} =useWindowDimensions()

 
      useEffect(() => {
        // if(isDesktop){
        if(true){
          if(currentIndexTexts<texts.length){
            if(currentIndex > texts[currentIndexTexts].length){
                setCurrentIndex(prevIndex=>prevIndex-1)
                setDirection(()=>-1)
            }
            else if(currentIndex < 0){
              setDirection(()=>1)
              setCurrentIndex(()=>0)
              if(currentIndexTexts>=texts.length-1){
                setCurrentIndexTexts(()=>0)
              }
              else{
                setCurrentIndexTexts(prevIndex=>prevIndex+1)
              }
            }
              else{
                const timeout = setTimeout(() => {
                  setCurrentText(prevText =>texts[currentIndexTexts].slice(0, currentIndex));
                  setCurrentIndex(prevIndex => prevIndex + direction);
                }, delay);
            
                return () => clearTimeout(timeout);
              }
           
        }
        }
        
        }, [currentIndex, currentIndexTexts, delay, texts, direction, currentText]);

      let currentOpacity=1
      currentOpacity=0+currentText.length/texts[currentIndexTexts].length
      return (
         <>
          {true&&<Typography variant="h3" component="span"
          sx={{
            opacity:currentOpacity,
            fontSize:{xs:"1.5rem", lg:"2rem"}, ml:1.5,
            textAlign:{xs:"center", lg:"start"},
            textWrap:"nowrap",
            display:{xs:"block", lg:"inline-block"},
            mt:{xs:1.5, lg:"auto"}
            }}>
              {currentText}|
          </Typography>}
         </>
          
      )
  }

  export default TypingText