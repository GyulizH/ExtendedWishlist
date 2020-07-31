import {ADD_SELECTED_PRODUCT} from "./combinationAction";

export const combinationReducer = (state = [], action) => {
    console.log("combination reducer",action.product)
    if(action.type === ADD_SELECTED_PRODUCT) {
        return [
            ...state,
            action.product
        ]
    }
    return state
}
