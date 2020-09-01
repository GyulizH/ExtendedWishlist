import {
  ADD_NEW_COMBINATION_TO_CANVAS,
  ADD_PRODUCT_TO_CANVAS,
  DELETE_PRODUCT_FROM_CANVAS,
  DELETE_COMBINATION_CANVAS,
} from './canvasAction'

//delete combination from canvas when combination is deleted
export const canvasReducer = (state = [], action) => {
  console.log(state, 'state')
  if (action.type === ADD_NEW_COMBINATION_TO_CANVAS) {
    let checkIfCombinationExists = state.find((combination) => {
      return combination?.id === action.combination.id
    })
    if (checkIfCombinationExists === undefined) {
      console.log('buraya girilmemeli')
      return [...state, action.combination]
    }
  }
  if (action.type === ADD_PRODUCT_TO_CANVAS) {
    let findCombination = state.find((combination) => {
      return (combination.id = action.combinationID)
    })

    let products = findCombination.products

    let checkProductExist = products.findIndex((product) => {
      return product.product.id === action.canvasItem.product.id
    })
    if (checkProductExist === -1) {
      products.push(action.canvasItem)
      return [...state]
    }
  }

  if (action.type === DELETE_PRODUCT_FROM_CANVAS) {
    let selectedCombination = state.find((combination) => {
      return (combination.id = action.combinationID)
    })

    const findProduct = (obj) => {
      return obj.product.id === action.productID
    }
    let combinationToBeRemoved = selectedCombination.products.findIndex(
      findProduct
    )
    //index ini isme koy
    if (combinationToBeRemoved !== -1)
      selectedCombination.products.splice(combinationToBeRemoved, 1)
    return [...state]
  }

  if (action.type === DELETE_COMBINATION_CANVAS) {
    let newState = state.filter(
      (combination) => combination.id === parseInt(action.combinationID, 10)
    )
    return [...newState]
  }

  return state
}
