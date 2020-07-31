import { TOGGLE_MODAL } from './action'

const initialState = {
  isModalOpen: false,
  selectedProduct: {}
}

export const modalReducer = (state = initialState, action) => {
  console.log(action.product,"actiooonn")
  if (action.type === TOGGLE_MODAL) {
    return {
      ...state,
      isModalOpen: !state.isModalOpen,
      selectedProduct: action.product
    }
  }
  return state
}
