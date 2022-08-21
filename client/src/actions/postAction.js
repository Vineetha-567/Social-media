
// import * as PostApi from '../api/PostRequest.js'
import * as PostApi from '../api/PostRequest.js'
export const getTimelinePosts = (id)=> async(dispatch)=>{
    dispatch({type: "RETREIVING_START"})

    try {
        const {data} = await PostApi.getTimelinePosts(id);
        dispatch({type: "RETREVING_ SUCCESS", data: data})
    } catch (error) {
        dispatch({type: "RETREIVING_FAIL"})
        
    }
}

