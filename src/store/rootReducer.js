import { createReducer } from '@reduxjs/toolkit'

export default createReducer(
  { isModalOpen: false },
  {
    TOGGLE_MODAL: (state, action) => {
      return { ...state, isModalOpen: !state.isModalOpen }
    },
  }
)
