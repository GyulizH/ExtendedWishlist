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

const combinationStyleString = `
   .buttonDiv{
     position:absolute;
     top:10px;
     left:9px;
   }
   .buttonStyle{
   z-index:999;
   }
   .svgHanger{
   fill: #FDC646;
`

const svgParentStyle = {
  'width':'36px',
  'height': '36px'
}

const svgCircleStyle = {
  'fill':'#FFF',
  'cx':'18',
  'cy':'18',
  'r':'17'
}
function getElements() {
  const combinationBtnStyle = document.createElement('style')
  combinationBtnStyle.textContent = combinationStyleString
  document.body.append(combinationBtnStyle)

  let elms = document.getElementsByClassName('product-image product-image__plp')

  if (elms.length > 0) {
    for (let i = 0; i < elms.length; i++) {
      if (
        elms[i].getElementsByClassName('buttonStyle').length === 0
      ) {
        let btnDiv = document.createElement('div')
        btnDiv.classList.add('buttonDiv')
        let btn1 = document.createElement('button')
        //btn1.innerHTML = 'Combination'
        btn1.onclick = function () {
          store.dispatch({ type: TOGGLE_MODAL })
        }
        btn1.classList.add("buttonStyle")

        let buttonSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        buttonSvg.setAttribute('width',svgParentStyle['width'])
        buttonSvg.setAttribute('height',svgParentStyle['height'])

        let useElem = document.createElementNS('http://www.w3.org/2000/svg', 'use')
        useElem.setAttributeNS('http://www.w3.org/1999/xlink','href','src/Icons/clothes-hanger (1).svg')
        useElem.classList.add('svgHanger')
        buttonSvg.appendChild(useElem)

        let circleSvg = document.createElementNS("http://www.w3.org/2000/svg", "circle")
        circleSvg.setAttribute('fill',svgCircleStyle['fill'])
        circleSvg.setAttribute('cx',svgCircleStyle['cx'])
        circleSvg.setAttribute('cy',svgCircleStyle['cy'])
        circleSvg.setAttribute('r',svgCircleStyle['r'])
        buttonSvg.appendChild(circleSvg)
        btn1.appendChild(buttonSvg)
        btnDiv.appendChild(btn1)
        elms[i].append(btnDiv)
      }
    }
  }
}
getElements()
window.addEventListener('scroll', getElements)
