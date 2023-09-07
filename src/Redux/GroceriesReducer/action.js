import * as types from "./actionTypes";
import axios from "axios";
const getGroceriesDataRequest = ()=>{
    return(
        {
            type:types.GET_GROCERIES_DATA_REQUEST
        }
    )
}

const getGroceriesData =(queryParams)=>(dispatch)=>{
    dispatch(getGroceriesDataRequest);
    return axios(`http://localhost:8080/groceries`,queryParams).then(r=>{
        dispatch({
            type:types.GET_GROCERIES_DATA_SUCCESS, 
            payload:r.data
        })
    })
    .catch(e=>{
        dispatch({
            type:types.GET_GROCERIES_DATA_FAILURE
        })
    })
}

export {getGroceriesDataRequest,getGroceriesData}