import { UpdateFollower } from "react-mouse-follower"


const SimpleLinkFollower=({children})=>{
    return  <UpdateFollower style={{"display":"inline"}} 
                mouseOptions={{visible:false
                }}>
                {children}
        </UpdateFollower>

}

export default SimpleLinkFollower