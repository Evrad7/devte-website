import { useState, useEffect, useRef, useContext } from 'react';
import { isMobile as isMobileHelper} from '../utils/helpers/device';
import { ServerContext } from '../context/ServerContext';


export default function useWindowDimensions() {

      const {isMobile}=useContext(ServerContext)
      const getWindowDimensions=()=>{
        if (typeof window!=="undefined"){
          const { innerWidth: width, innerHeight: height } = window;
          const isDesktop=!isMobileHelper()
          return {
            width:width,
            height:height,
            isDesktop,
            isMobile:!isDesktop
          };
        }
        else{
          return {width:null, height:null, isMobile:isMobile, isDesktop:!isMobile}
        }
      
      }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    if(!isMobile){
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
    else{
      handleResize()
    }
    
  }, []);

  return {...windowDimensions};
}