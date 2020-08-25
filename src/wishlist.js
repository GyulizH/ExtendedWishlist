import React from 'react'
import ReactDOM from 'react-dom'
import CombinationList from './components/CombinationList/CombinationList'
import CombinationDetails from './components/CombinationDetails/CombinationDetails'
import { store } from './store'
import { Provider } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'

const combinationList = document.createElement('div')

window.onload = function () {
  combinationList.className = 'wishlist--combinationlist-wrapper'
  combinationList.innerHTML = 'hey there how are you'
  let nodes = document.querySelectorAll('.wishlist__listing > *')
  let arr = Array.from(nodes)
  // document.body.getElementsByClassName("wishlist__listing")[0].innerHTML = " "
  // Array.prototype.insert = function ( index, item ) {
  // this.splice( index, 0, item );
  // }
  // arr.insert(2,combinationList)
  // arr.forEach(function(item){
  // document.getElementsByClassName("wishlist__listing")[0].appendChild(item.cloneNode(true));
  // });
  // document
  //   .getElementsByClassName('wishlist__listing')[0]
  //   .appendChild(combinationList)
  let toBeInsertedBefore = document.getElementsByClassName(
    'wishlist__listing'
  )[0]
  toBeInsertedBefore.insertBefore(
    combinationList,
    toBeInsertedBefore.childNodes[3]
  )

  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Route path="/" exact component={CombinationList}></Route>
        <Route
          path="/:combinationId"
          exact
          component={CombinationDetails}
        ></Route>
      </HashRouter>
    </Provider>,
    combinationList
  )
}

// function findGoToCombinationButton(e) {
//   if (e.target.innerHTML === 'GO TO COMBINATION DETAILS') {
//     ReactDOM.render(
//       <div>
//         <CombinationDetails />
//       </div>,
//       document.getElementById('root')
//     )
//   }
// }

// window.addEventListener('click', findGoToCombinationButton)
