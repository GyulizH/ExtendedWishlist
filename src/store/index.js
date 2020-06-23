import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = configureStore({
  reducer: rootReducer,
  middleware: [
   // store => next => action => {
   //   console.log(store, action)
   //   next()
   // },
    //    composeWithDevTools(),
  ],
})

export default store
