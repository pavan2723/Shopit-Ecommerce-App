import * as types from "./actionTypes";
import axios from "axios";


const getFashionDataRequest = ()=>{
    return(
        {
            type:types.GET_FASHION_DATA_REQUEST
        }
    )
}

const getFashionData = (queryParms)=>(dispatch)=>{
    dispatch(getFashionDataRequest);
    return axios(`http://localhost:8080/collection`,queryParms).then(r=>{
        dispatch({
            type:types.GET_FASHION_DATA_SUCCESS, 
            payload:r.data
        })
    })
    .catch(e=>{
        dispatch({
            type:types.GET_FASHION_DATA_FAILURE
        })
    })
}

export {getFashionDataRequest,getFashionData}