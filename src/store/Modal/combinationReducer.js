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
    const c = state.find((combination) => {
      return combination.id === action.id
    })
    let newArr = c.products
    newArr.push(action.product)
    let newC = { ...c, products: newArr }
    return [...state, newC]
  }

  return state
}
