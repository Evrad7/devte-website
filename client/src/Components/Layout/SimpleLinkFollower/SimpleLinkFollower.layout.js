
import { Box } from "@mui/material"
import { UpdateFollower } from "react-mouse-follower"

const SimpleLinkFollower=({children})=>{
    return  <UpdateFollower className="update-follower" style={{"display":"inline"}} 
                mouseOptions={{visible:false
                }}>
                {children}
        </UpdateFollower>

}

export default SimpleLinkFollower