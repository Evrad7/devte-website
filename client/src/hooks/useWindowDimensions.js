import { useState, useEffect, useRef } from 'react';


export default function useWindowDimensions() {

      const prevHeight=useRef(0)

      // Cette variable va permettre d'annuler les IntersectionObserver pour les appareils mobiles  dont la barre de navigation
      //cause toujours problème malgré la définition d'un containeur personnalisé
      const [disableIntersectionObserver, setDisableIntersectionObserver]=useState(false)


      const getWindowDimensions=()=>{
        if (typeof window!=="undefined"){
          const { innerWidth: width, innerHeight: height } = window;
          // document.documentElement.style.setProperty("--vh", `${vh.current*0.01}px`)
          // console.log(!disableIntersectionObserver,  prevHeight.current!==0, height>prevHeight.current, "*************")
          // if(!disableIntersectionObserver && prevHeight.current!==0 && height>prevHeight.current){
          //     setDisableIntersectionObserver(true)
          // }
          // else{
          //   prevHeight.current=height
          // }
          return {
            width,
            height
          };
        }
        else{
          return {width:0, height:0}
        }
      
      }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {...windowDimensions, disableIntersectionObserver};
}