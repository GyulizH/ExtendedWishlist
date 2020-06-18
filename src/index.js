//import React from "react";
import ReactDOM from "react-dom";

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

function putHTMLElements () {
    let newDiv = document.createElement("div")
    let newContent = document.createTextNode("HI thereeee")
    newDiv.style.backgroundColor = "red"
    newDiv.appendChild(newContent)

    let btn = document.createElement("button")
    btn.style.zIndex = "999"
    btn.innerHTML = "Combination"
    console.log(typeof document.getElementsByClassName("wishlist__toggle--container"))
    console.log(document.getElementsByClassName("wishlist__toggle--container"))
    if (document.getElementsByClassName("wishlist__toggle--container") !== undefined) {
        let currentDiv = document.getElementsByClassName("wishlist__toggle--container")[0].parentNode
        console.log(document.getElementsByClassName("product-image product-image__plp")[0], "yoloo")
        document.getElementsByClassName("image-list__item image-list__item--secondary")[0].appendChild(newDiv)
        document.getElementsByClassName("product-image product-image__plp")[0].appendChild(btn)
    }
}

putHTMLElements()
// setTimeout(function () {
//     let newDiv = document.createElement("div")
//     let newContent = document.createTextNode("HI thereeee")
//     newDiv.style.backgroundColor = "red"
//     newDiv.appendChild(newContent)
//
//     let btn = document.createElement("button")
//     btn.style.zIndex = "999"
//     btn.innerHTML = "Combination"
//     if(document.getElementsByClassName("wishlist__toggle--container")){
//         let currentDiv = document.getElementsByClassName("wishlist__toggle--container")[0].parentNode
//         console.log( document.getElementsByClassName("product-image product-image__plp")[0],"yoloo")
//         document.getElementsByClassName("image-list__item image-list__item--secondary")[0].appendChild(newDiv)
//         document.getElementsByClassName("product-image product-image__plp")[0].appendChild(btn)
//     }
//     console.log("bak buraya ikinci kere")
// },500)


