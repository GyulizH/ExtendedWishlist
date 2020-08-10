import {
  ADD_NEW_COMBINATION,
  TOGGLE_COMBINATION_CHECKBOX,
} from './combinationAction'

export const combinationReducer = (state = [], action) => {
  if (action.type === ADD_NEW_COMBINATION) {
    return [...state, action.combination]
  }

  if (action.type === TOGGLE_COMBINATION_CHECKBOX) {
    let selectedCombination = state.find(
      (combination) => combination.id === action.id
    )
    selectedCombination.checked = !selectedCombination.checked
    return [...state]
  }
  return state
}
