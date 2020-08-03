import { ADD_NEW_COMBINATION } from './combinationAction'

export const combinationReducer = (state = [], action) => {
  console.log(action.combination, 'combinationReducer')
  if (action.type === ADD_NEW_COMBINATION) {
    return [...state, action.combination]
  }
  return state
}
