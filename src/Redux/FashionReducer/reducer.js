import * as types from "./actionTypes";

const initialState = {
    fashion:[],
    isLoading:false,
    isError:false
}

const reducer =(oldState=initialState,action)=>{
    const {type,payload} = action;
    switch(type)
    {
        case types.GET_FASHION_DATA_REQUEST:
            return{
                ...oldState,
                isLoading:true,
            }
        case types.GET_FASHION_DATA_SUCCESS:
            return{
                ...oldState,
                isLoading:false,
                fashion:payload
            }
        case types.GET_FASHION_DATA_FAILURE:
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