export const ADD_NEW_COMBINATION = 'ADD NEW COMBINATION'

//edit and delete actions will come
export const addNewCombination = (combination) => {
  return {
    type: ADD_NEW_COMBINATION,
    combination,
  }
}
