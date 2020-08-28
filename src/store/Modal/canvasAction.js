export const ADD_NEW_COMBINATION_TO_CANVAS = 'ADD NEW COMBINATION TO CANVAS'
export const ADD_PRODUCT_TO_CANVAS = 'ADD PRODUCT TO CANVAS'
export const DELETE_PRODUCT_FROM_CANVAS = 'DELETE PRODUCT FROM CANVAS'
export const DELETE_COMBINATION_CANVAS = 'DELETE COMBINATION CANVAS'

export const addNewCombinationToCanvas = (combination) => {
  return {
    type: ADD_NEW_COMBINATION_TO_CANVAS,
    combination,
  }
}

export const addProductToCanvas = (canvasItem, combinationID) => {
  return {
    type: ADD_PRODUCT_TO_CANVAS,
    canvasItem,
    combinationID,
  }
}

export const deleteProductFromCanvas = (combinationID, productID) => {
  return {
    type: DELETE_PRODUCT_FROM_CANVAS,
    combinationID,
    productID,
  }
}

export const deleteCombinationCanvas = (combinationID) => {
  return {
    type: DELETE_COMBINATION_CANVAS,
    combinationID,
  }
}
