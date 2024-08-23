import { useTheme } from "@emotion/react"
import CustomUpdateFollower from "../CustomUpdateFollower/CustomUpdateFollower.layout"


const FocusMouseFollower=({scale, children})=>{
    const theme=useTheme()
    return  <CustomUpdateFollower className="update-follower" style={{"display":"inline"}} 
                mouseOptions={{scale:scale, mixBlendMode:"difference", backgroundColor:"white"
                }}>
                {children}
        </CustomUpdateFollower>

}

export default FocusMouseFollower