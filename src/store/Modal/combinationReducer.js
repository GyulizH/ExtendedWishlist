import {
  ADD_NEW_COMBINATION,
  ADD_PRODUCT_TO_COMBINATION,
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
      console.log(combination.id, parseInt(action.id, 10))
      return combination.id === parseInt(action.id, 10)
    })

    selectedCombination.products.push(action.product)
    return [...state]
  }

  return state
}
