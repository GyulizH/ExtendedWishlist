import { createReducer } from '@reduxjs/toolkit'
import {combineReducers} from "@reduxjs/toolkit";
import {modalReducer} from "./Modal/reducer";

// export default createReducer(
//   { isModalOpen: false },
//   {
//     TOGGLE_MODAL: (state, action) => {
//       return { ...state, isModalOpen: !state.isModalOpen }
//     },
//   }
// )

export default combineReducers({
    modalReducer
})
