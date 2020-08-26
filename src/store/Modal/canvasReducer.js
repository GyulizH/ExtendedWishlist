import {
  ADD_NEW_COMBINATION_TO_CANVAS,
  ADD_PRODUCT_TO_CANVAS,
} from './canvasAction'

//delete combination from canvas when combination is deleted
export const canvasReducer = (state = [], action) => {
  console.log(state, 'state')
  if (action.type === ADD_NEW_COMBINATION_TO_CANVAS) {
    let checkIfCombinationExists = state.find((combination) => {
      return (combination.id = action.combinationID.toString())
    })
    if (checkIfCombinationExists === undefined)
      return [...state, action.combinationID]
  }
  if (action.type === ADD_PRODUCT_TO_CANVAS) {
    return [...state, action.canvasItem]
  }

  return state
}
