import { TOGGLE_MODAL } from './action'

const initialState = {
  isModalOpen: false,
  selectedProduct: {}
}

export const modalReducer = (state = initialState, action) => {
  if (action.type === TOGGLE_MODAL) {
    return {
      ...state,
      isModalOpen: !state.isModalOpen,
      selectedProduct: action.product
    }
  }
  return state
}
