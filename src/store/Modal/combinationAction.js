import { store } from '../index'
export const ADD_NEW_COMBINATION = 'ADD NEW COMBINATION'
export const ADD_PRODUCT_TO_COMBINATION = 'ADD PRODUCT TO COMBINATION'
export const REMOVE_PRODUCT_FROM_COMBINATION = 'REMOVE PRODUCT FROM COMBINATION'
export const REMOVE_COMBINATION = 'REMOVE COMBINATION'
export const REMOVE_PRODUCT_FROM_COMBINATION_DETAILS =
  'REMOVE PRODUCT FROM COMBINATION DETAILS'

//edit and delete actions will come

export const addNewCombination = (combination) => {
  return {
    type: ADD_NEW_COMBINATION,
    combination,
  }
}

export const removeCombination = (id) => {
  return {
    type: REMOVE_COMBINATION,
    id,
  }
}

export const addProductToCombination = (id) => {
  let product = store.getState().modal.selectedProduct
  return {
    type: ADD_PRODUCT_TO_COMBINATION,
    product,
    id,
  }
}
export const removeProductFromCombination = (id) => {
  let product = store.getState().modal.selectedProduct
  return {
    type: REMOVE_PRODUCT_FROM_COMBINATION,
    product,
    id,
  }
}

export const removeProductFromCombinationDetails = (
  combinationID,
  productID
) => {
  return {
    type: REMOVE_PRODUCT_FROM_COMBINATION_DETAILS,
    combinationID,
    productID,
  }
}
