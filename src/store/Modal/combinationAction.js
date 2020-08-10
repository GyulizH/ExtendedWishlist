export const TOGGLE_COMBINATION_CHECKBOX = 'TOGGLE COMBINATION CHECKBOX'

export const ADD_NEW_COMBINATION = 'ADD NEW COMBINATION'

//edit and delete actions will come
export const addNewCombination = (combination) => {
  return {
    type: ADD_NEW_COMBINATION,
    combination,
  }
}

export const toggleCombinationCheckbox = (id) => {
  return {
    type: TOGGLE_COMBINATION_CHECKBOX,
    id,
  }
}
