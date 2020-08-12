import React from 'react'
import ReactDOM from 'react-dom'
import CombinationList from "./components/CombinationList/CombinationList";

const combinationList = document.createElement('div')

window.onload = function () {
  combinationList.className = 'wishlist--combinationlist-wrapper'
  combinationList.innerHTML = "hey there how are you"
  // let nodes = document.querySelectorAll(".wishlist__listing > *")
  // let arr = Array.from(nodes)
  // // document.body.getElementsByClassName("wishlist__listing")[0].innerHTML = " "
  // Array.prototype.insert = function ( index, item ) {
  //   this.splice( index, 0, item );
  // }
  // arr.insert(2,combinationList)
  // arr.forEach(function(item){
  //   document.getElementsByClassName("wishlist__listing")[0].appendChild(item.cloneNode(true));
  // });
  document.getElementsByClassName('wishlist__listing')[0].appendChild(combinationList)
   ReactDOM.render(<CombinationList/>, combinationList)
}
