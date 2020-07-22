import { configureStore } from '@reduxjs/toolkit'
import thunk from 'react-thunk'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

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

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

