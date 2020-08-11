import {
  ADD_NEW_COMBINATION,
  TOGGLE_COMBINATION_CHECKBOX,
} from './combinationAction'

const initialState = {
  combinations: [],
  checkBoxListForSelectedItem: [],
}

export const combinationReducer = (state = initialState, action) => {
  if (action.type === ADD_NEW_COMBINATION) {
    return [...state, action.combination]
  }

  if (action.type === TOGGLE_COMBINATION_CHECKBOX) {
    console.log('hey')
    initialState.checkBoxListForSelectedItem.map((item, list) => {
      console.log(Object.keys(item), action.selectedCheckBoxes)
      if (Object.keys(item) === Object.keys(action.selectedCheckBoxes)) {
        item[action.selectedCheckBoxes] = action.selectedCheckBoxes
        return state
      } else {
        item[action.selectedCheckBoxes] = action.selectedCheckBoxes
        return state
      }
    })
  }
  return state
}
