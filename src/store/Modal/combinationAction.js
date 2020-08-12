export const ADD_NEW_COMBINATION = 'ADD NEW COMBINATION'
export const ADD_PRODUCT_TO_COMBINATION = 'ADD PRODUCT TO COMBINATION'

//edit and delete actions will come
export const addNewCombination = (combination) => {
  return {
    type: ADD_NEW_COMBINATION,
    combination,
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
