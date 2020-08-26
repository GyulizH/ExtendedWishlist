import { combineReducers } from 'redux'
import { modalReducer } from './Modal/reducer'
import { combinationReducer } from './Modal/combinationReducer'
import { canvasReducer } from './Modal/canvasReducer'

export default combineReducers({
  modal: modalReducer,
  combinations: combinationReducer,
  canvasItems: canvasReducer,
})
