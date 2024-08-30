
import CustomUpdateFollower from "../CustomUpdateFollower/CustomUpdateFollower.layout"

const SimpleLinkFollower=({children})=>{
    return  <CustomUpdateFollower className="update-follower" style={{"display":"inline"}} 
                mouseOptions={{visible:false}}
                >
                {children}
        </CustomUpdateFollower>

}

export default SimpleLinkFollower