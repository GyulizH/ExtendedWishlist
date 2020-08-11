import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { localState, saveState } from '../Utils/localStorage'

const persistedState = localState()

export const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => {
  saveState({
    combinations: store.getState().combinations,
  })
})

window.store = store
typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
  ? window.devToolsExtension()
  : (f) => f
