import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {store} from './store/index.js'
import Extension from './components/Extension'
import {TOGGLE_MODAL} from './store/Modal/action'

const modalWrapper = document.createElement('div')
window.onload = function () {
    modalWrapper.className = 'wishlist--modal-wrapper'
    document.body.appendChild(modalWrapper)
    ReactDOM.render(
        <Provider store={store}>
            <Extension/>
        </Provider>,
        modalWrapper
    )
    getElements()
}

const combinationStyleString = `
   .buttonDiv{
     position:absolute;
     top:10px;
     left:9px;
     z-index:2;
   }
   .buttonStyle{
   z-index:999;
   }
   .svgHanger{
   fill: #FDC646;
`

function getElements() {
    const combinationBtnStyle = document.createElement('style')
    combinationBtnStyle.textContent = combinationStyleString
    document.body.append(combinationBtnStyle)
    // let elms = document.querySelector("product-list__items").children
    // console.log( document.querySelector(".product-list__items").children[0].appendChild(<div>hey</div>))

    let elms = document.querySelector('.product-list__items').children
    console.log(elms, 'elms')
    if (elms.length > 0) {
        for (let i = 0; i < elms.length; i++) {
            if (elms[i].getElementsByClassName('buttonStyle').length === 0) {
                let btnDiv = document.createElement('div')
                btnDiv.classList.add('buttonDiv')
                let btn1 = document.createElement('button')
                btn1.onclick = function (e) {
                    if (!e) e = window.e
                    e.cancelBubble = true
                    e.preventDefault()
                    e.stopPropagation()
                    store.dispatch({type: TOGGLE_MODAL})
                }
                btn1.classList.add('buttonStyle')
                btn1.innerHTML = `<svg width="36px" height="36px">
 <g fill="white" fill-rule="evenodd">
 <circle 
  fill="FFF"
  cx="18"
  cy="18"
  r="17"
 >
 </circle>
  <svg id="Capa_1" enable-background="new 0 0 512 512" height="25" viewBox="0 0 512 512" fill= "black" width="25" xmlns="http://www.w3.org/2000/svg"><path id="XMLID_1906_" d="m485.119 345.819-214.119-124.081v-9.232c0-10.528 6.008-20.321 15.68-25.557 21.791-11.795 34.743-34.514 33.803-59.29-1.272-33.491-28.499-60.723-61.983-61.994-17.718-.68-34.497 5.716-47.247 17.989-12.758 12.282-19.784 28.798-19.784 46.504 0 8.284 6.716 15 15 15s15-6.716 15-15c0-9.478 3.761-18.317 10.59-24.892 6.821-6.566 15.796-9.993 25.302-9.623 17.905.68 32.463 15.243 33.144 33.154.504 13.277-6.434 25.45-18.105 31.769-19.368 10.484-31.4 30.386-31.4 51.94v9.232l-214.119 124.081c-16.581 9.609-26.881 27.485-26.881 46.651 0 29.729 24.182 53.914 53.906 53.914h404.188c29.724 0 53.906-24.187 53.906-53.915 0-19.166-10.3-37.041-26.881-46.65zm-27.025 70.565h-404.188c-13.182 0-23.906-10.729-23.906-23.915 0-8.502 4.568-16.431 11.923-20.692l214.077-124.057 214.077 124.057c7.354 4.262 11.923 12.19 11.923 20.693 0 13.186-10.724 23.914-23.906 23.914z"/></svg>
 </g> 
</svg>`

                btnDiv.appendChild(btn1)
                let insertedBefore = elms[i].firstChild
                elms[i].insertBefore(btnDiv, insertedBefore)
            }
        }
    }
}

getElements()
window.addEventListener('scroll', getElements)
