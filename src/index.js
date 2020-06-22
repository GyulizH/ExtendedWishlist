import React from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

// class App extends React.Component{
//
//     render()
//
//     {
//         setTimeout(function(){
//             console.log(document.getElementsByClassName("product-image product-image__plp"),"list item")
//         },5000)
//         return (
//             <div>
//                 <div>NEDEN OLMUYOR</div>
//             </div>
//         );
//     }
// };
//
// setTimeout(function(){
//     const app = document.createElement('div');
//     app.className = "product-image product-image__plp"
//     document.body.append(app);
//     ReactDOM.render(<App />, app);
// },5000)

//document.body.insertBefore(newDiv, currentDiv);
       window.onload = function () {
           let elms = document.getElementsByClassName("product-list__item three")
              if (elms.length > 0) {
                for (let i = 0; i < elms.length; i++) {
                    let btn1 = document.createElement("button")
                    btn1.innerHTML = "Combination"
                    btn1.style.zIndex = "999"
                    btn1.onclick = function () {
                        let show = true

                        function hideModal() {
                            show = false
                           console.log("clicked")
                        }

                        ReactDOM.render(
                            <Modal show={show} handleClose={hideModal}/>, document.getElementById("root"));
                    }
                    btn1.className = "open-combination-modal"
                    elms[i].appendChild(btn1)
                }
            }
       }
 function getElements() {
     console.log("heyyy")
     let elms = document.getElementsByClassName("product-list__item three")

        if (elms.length > 0) {
            for (let i = 0; i < elms.length; i++) {
               if (elms[i].getElementsByClassName("open-combination-modal").length === 0) {
                    let btn1 = document.createElement("button")
                    btn1.innerHTML = "Combination"
                    btn1.style.zIndex = "999"
                    btn1.onclick = function () {
                        let show = true

                        function hideModal() {
                            show = false
                            console.log("clicked")
                        }

                        ReactDOM.render(
                            <Modal show={show} handleClose={hideModal}/>, document.getElementById("root"));
                    }
                    btn1.className = "open-combination-modal"
                     elms[i].appendChild(btn1)
                }
            }
        }
    }
   getElements()
   window.addEventListener("scroll",getElements)



