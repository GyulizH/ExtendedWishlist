import React from 'react'
import ReactDOM from 'react-dom'

const combinationList = document.createElement('div')

window.onload = function () {
   console.log("wishlist loaded")
   combinationList.className = "wishlist--combinationlist-wrapper"
   document.body.appendChild(combinationList)
   ReactDOM.render(
       <div>HEYYY WISHLIST</div>,
       combinationList
   )
}
