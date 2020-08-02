import { combineReducers } from 'redux'
import { modalReducer } from './Modal/reducer'
import {combinationReducer} from "./Modal/combinationReducer";


export default combineReducers({
  modalReducer,
  combinationReducer
})

//console.log(store.getState(),"storreee")
