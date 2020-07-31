import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
console.log('extension loaded')
// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: [
//    // store => next => action => {
//    //   console.log(store, action)
//    //   next()
//    // },
//     //    composeWithDevTools(),
//   ],
// })

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
window.store = store
console.log(store.getState(), "storeee")
