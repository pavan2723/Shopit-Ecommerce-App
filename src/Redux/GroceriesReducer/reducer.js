import * as types from "./actionTypes";

const initialState = {
    groceries:[],
    isLoading:false,
    isError:false
}

const reducer =(oldState=initialState,action)=>{
    const {type,payload} = action;
    switch(type)
    {
        case types.GET_GROCERIES_DATA_REQUEST:
            return{
                ...oldState,
                isLoading:true,
            }
        case types.GET_GROCERIES_DATA_SUCCESS:
            return{
                ...oldState,
                isLoading:false,
                groceries:payload
            }
        case types.GET_GROCERIES_DATA_FAILURE:
        return{
            ...oldState,
            isLoading:false,
            isError:true,
            }
        default:
            return oldState;
    }
    
}


export {reducer};