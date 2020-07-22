import {TOGGLE_MODAL} from "./action";

const initialState= {
    isModalOpen:false
}

export const modalReducer = (state=initialState,action) => {
    if(action.type === TOGGLE_MODAL){
        return{
            ...state,
            ...action.payload
        }
    }
    return state
}
