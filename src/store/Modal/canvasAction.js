export const ADD_NEW_COMBINATION_TO_CANVAS = 'ADD NEW COMBINATION TO CANVAS'
export const ADD_PRODUCT_TO_CANVAS = 'ADD PRODUCT TO CANVAS'

export const addNewCombinationToCanvas = (combinationID) => {
  return {
    type: ADD_NEW_COMBINATION_TO_CANVAS,
    combinationID,
  }
}

export const addProductToCanvas = (canvasItem, combinationID) => {
  return {
    type: ADD_PRODUCT_TO_CANVAS,
    canvasItem,
    combinationID,
  }
}
