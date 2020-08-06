import { ADD_NEW_COMBINATION } from './combinationAction'

export const combinationReducer = (state = [], action) => {
  if (action.type === ADD_NEW_COMBINATION) {
    return [...state, action.combination]
  }
  return state
}
