import {
  ADD_NEW_COMBINATION,
  ADD_PRODUCT_TO_COMBINATION,
  REMOVE_PRODUCT_FROM_COMBINATION,
} from './combinationAction'

const initialState = {
  combinations: [],
}

export const combinationReducer = (state = [], action) => {
  if (action.type === ADD_NEW_COMBINATION) {
    return [...state, action.combination]
  }

  if (action.type === ADD_PRODUCT_TO_COMBINATION) {
    const selectedCombination = state.find((combination) => {
      return combination.id === parseInt(action.id, 10)
    })
    if (selectedCombination.products.indexOf(action.product) === -1)
      selectedCombination.products.push(action.product)
    return [...state]
  }

  if (action.type === REMOVE_PRODUCT_FROM_COMBINATION) {
    const selectedCombination = state.find((combination) => {
      return combination.id === parseInt(action.id, 10)
    })
    const findProduct = (obj) => {
      return obj.id === action.product.id
    }
    let combinationToBeRemoved = selectedCombination.products.findIndex(
      findProduct
    )
    console.log(combinationToBeRemoved)
    if (combinationToBeRemoved !== -1)
      selectedCombination.products.splice(combinationToBeRemoved, 1)
    return [...state]
  }

  return state
}
