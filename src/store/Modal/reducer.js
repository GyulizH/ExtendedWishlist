import { TOGGLE_MODAL } from './action'

const initialState = {
  isModalOpen: false,
}

export const modalReducer = (state = initialState, action) => {
  if (action.type === TOGGLE_MODAL) {
    console.log('toggle modal fired', initialState.isModalOpen)
    return {
      ...state,
      isModalOpen: !state.isModalOpen,
    }
  }
  return state
}
