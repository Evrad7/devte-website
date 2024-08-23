import { useTheme } from "@emotion/react"
import CustomUpdateFollower from "../CustomUpdateFollower/CustomUpdateFollower.layout"


const ButtonMouseFollower=({children})=>{

    const theme=useTheme()
   
    return <CustomUpdateFollower className="mouse-follower"
                mouseOptions={{
                scale:0,
                }}
                >
                
                 {children}
    </CustomUpdateFollower>
}

export default ButtonMouseFollower