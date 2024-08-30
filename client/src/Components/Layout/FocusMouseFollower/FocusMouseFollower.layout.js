import CustomUpdateFollower from "../CustomUpdateFollower/CustomUpdateFollower.layout"


const FocusMouseFollower=({scale, backgroundColor="white", children})=>{
    return  <CustomUpdateFollower className="update-follower" style={{"display":"inline"}} 
                mouseOptions={{scale:scale, mixBlendMode:"difference", backgroundColor:backgroundColor
                }}>
                {children}
        </CustomUpdateFollower>

}

export default FocusMouseFollower