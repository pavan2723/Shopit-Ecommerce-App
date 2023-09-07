import * as types from "./actionTypes";
import axios from "axios";


const getElectronicsDataRequest = ()=>{
    return(
        {
            type:types.GET_ELECTRONICS_DATA_REQUEST
        }
    )
}

const getElectronicsData = (queryParms)=>(dispatch)=>{
    dispatch(getElectronicsDataRequest);
    return axios(`http://localhost:8080/electronics`,queryParms).then(r=>{
        dispatch({
            type:types.GET_ELECTRONICS_DATA_SUCCESS, 
            payload:r.data
        })
    })
    .catch(e=>{
        dispatch({
            type:types.GET_ELECTRONICS_DATA_FAILURE
        })
    })
}

export {getElectronicsDataRequest,getElectronicsData}