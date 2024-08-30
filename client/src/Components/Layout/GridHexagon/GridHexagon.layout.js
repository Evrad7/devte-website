import { Box } from "@mui/material";
import React, { useContext, useEffect, useRef } from "react";
import {  Layout } from 'react-hexgrid';
import { StyledHexGrid, StyledHexagon, StyledText} from "./GridHexagon.style";
import useMediaQuery from "@mui/material/useMediaQuery";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import Title from "../Title/Title.layout";
import { IntersectionObserverContext } from "../../../context/IntersectionObserverContext";







const GridHexagon=({items})=>{
    const {width}=useWindowDimensions()
    const ref=useRef(null)
    const {observe, unObserve} =useContext(IntersectionObserverContext)


    useEffect(()=>{
        observe(ref.current)
        return ()=>{
            const currentRef=ref.current
            unObserve(currentRef)
        }
    }, [])
    
    const matchesBreakpoint1=useMediaQuery("(max-width:700px)")
    const matchesBreakpoint2=useMediaQuery("(max-width:500px)")
    const matchesBreakpoint3=useMediaQuery("(max-width:428px)")
    const matchesBreakpoint4=useMediaQuery("(max-width:360px)")
    const matchesBreakpoint5=useMediaQuery("(max-width:310px)")
    var maxItems=0
    var numberItemReducing=3
    var maxNumberInLine=9
    if (matchesBreakpoint5){
        maxNumberInLine=5
        numberItemReducing=1
        maxItems=16
    }
    else if (matchesBreakpoint4){
        maxNumberInLine=5
        numberItemReducing=1
       maxItems=16
    }
    else if (matchesBreakpoint3){
        maxNumberInLine=5
        numberItemReducing=1
        maxItems=16

    }
    else if(matchesBreakpoint2){
        maxNumberInLine=6
        numberItemReducing=1
    }
    else if (matchesBreakpoint1){
        maxNumberInLine=7
        numberItemReducing=1
    }
    const xSize=parseInt((width)/(maxNumberInLine*1.78))
    const ySize=xSize
  
    if (maxItems){
        items=items.filter(item=>!item.optional).slice(0, maxItems-1)
    }
    const startWithEvenItems=maxNumberInLine%2===0
    var r=0, q=0, c=0, odd=0
    if ((items.length)<maxNumberInLine){
        maxNumberInLine=items.length
    }
    const Hexagons=items.map((item, i)=>{     
        
        if (c>1 && c%(maxNumberInLine)===0){
            maxNumberInLine-=numberItemReducing
            r+=1
            c=0
            if(r%2!==0)odd+=1
            if ((items.length-i)<maxNumberInLine){
                maxNumberInLine=items.length-i
            }
        }
        if(startWithEvenItems && r%2!==0 ){
            q=parseInt(-maxNumberInLine/2)+c-odd
        }
        else if(r===4){
            q=parseInt(-maxNumberInLine/2)+c-2
        }
        else if (r>1){
            q=parseInt(-maxNumberInLine/2)+c-1
        }
        else{
            q=parseInt(-maxNumberInLine/2)+c

        }
        c++
        return(
            <StyledHexagon q={q} r={r} s={0} >
                {item.svg}
                <StyledText size={xSize} y={(ySize/2)}>{item.name}</StyledText>
            </StyledHexagon>
        )
    }   
) 
    return (
        <>
          <Title text="Nos technologies" icon="icon_technologies.svg" color="primary" />
          <Box ref={ref} 
           sx={{
             "&.animate svg > g > g":{
                opacity:1,
             }
           }}
           >
            <StyledHexGrid size={xSize}  width="100%"  height={ySize*((r+1)*2.1)} viewBox={`0 0 100 ${ySize*((r+1)*2.1)}`}>
                <Layout style={{transform:"translateX(50%)"}} size={{ x:xSize , y:ySize }} flat={false} spacing={1.025} origin={{ x:startWithEvenItems?35:0, y: ySize+4}}>
                    {Hexagons}
                </Layout>
            </StyledHexGrid>
          </Box>
          
        </>
          
    )
}

export default GridHexagon




