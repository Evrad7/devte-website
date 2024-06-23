import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import SimpleLinkFollower from "../SimpleLinkFollower/SimpleLinkFollower.layout";

const TypingComponentList=({texts, delay, next})=>{
    const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexTexts, setCurrentIndexTexts]=useState(0)
   
    useEffect(() => {
        if(currentIndexTexts<texts.length){
            if(currentIndex >= texts[currentIndexTexts].length){
                setCurrentIndexTexts(prevIndex=>prevIndex+1)
                setCurrentIndex(()=>0)
                setCurrentText(()=>"")
            }
            else{
                const timeout = setTimeout(() => {
                  setCurrentText(prevText => prevText + texts[currentIndexTexts][currentIndex]);
                  setCurrentIndex(prevIndex => prevIndex + 1);
                }, delay);
            
                return () => clearTimeout(timeout);
              }
        }
      
        
      }, [currentIndex, currentIndexTexts, delay, texts]);

    let currentOpacity=0.95
    if(texts[currentIndexTexts]){
        currentOpacity=0+currentText.length/texts[currentIndexTexts].length*.95

    }
    return (
        <ul style={{listStyleType:"square", padding:0}}>
          {texts.map((elt, index)=>{
            if(index<currentIndexTexts){
                return  <li  key={index}  style={{opacity:.95}} ><Link to="/">
                <SimpleLinkFollower>{texts[index]}</SimpleLinkFollower>
                </Link></li>

            }
            else if(index===currentIndexTexts){
                return <li  key={index}  ><Link to="/" style={{opacity:currentOpacity}}>{currentText} |</Link></li>
            }
            else{
                return <li   key={index} ><Link to="/"></Link></li>
            }
          })}
        </ul>

      

    )
}

export default TypingComponentList