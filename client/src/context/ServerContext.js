import { createContext } from "react";

const ServerContext=createContext()

const ServerContextProvider=({isMobile, children})=>{
    return(
        <ServerContext.Provider value={{isMobile}}>
            {children}
        </ServerContext.Provider>
    )
}
export {ServerContext, ServerContextProvider}