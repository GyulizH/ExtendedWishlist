import { combineReducers } from 'redux'
import { modalReducer } from './Modal/reducer'
import { combinationReducer } from './Modal/combinationReducer'

export default combineReducers({
  modal: modalReducer,
  combinations: combinationReducer,
})
