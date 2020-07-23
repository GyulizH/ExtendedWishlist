import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import Extension from './components/Extension'
import { TOGGLE_MODAL } from './store/Modal/action'

const modalWrapper = document.createElement('div')
window.onload = function () {
  modalWrapper.className = 'wishlist--modal-wrapper'
  document.body.appendChild(modalWrapper)
  console.log(store, "store")
  ReactDOM.render(
    <Provider store={store}>
      <Extension />
    </Provider>,
    modalWrapper
  )
  getElements()
}
function getElements() {
  let elms = document.getElementsByClassName('product-list__product')

  if (elms.length > 0) {
    for (let i = 0; i < elms.length; i++) {
      if (
        elms[i].getElementsByClassName('open-combination-modal').length === 0
      ) {
        let btn1 = document.createElement('button')
        btn1.innerHTML = 'Combination'
        btn1.style.zIndex = '999'
        btn1.onclick = function () {
          store.dispatch({ type: TOGGLE_MODAL })
        }
        btn1.className = 'open-combination-modal'
        elms[i].appendChild(btn1)
      }
    }
  }
}
getElements()
window.addEventListener('scroll', getElements)
