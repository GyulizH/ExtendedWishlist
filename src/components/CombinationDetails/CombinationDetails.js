import React from 'react'
import { connect, Provider } from 'react-redux'

import './CombinationDetails.scss'
import Button, { BTN_NO_ICON, BTN_WITH_CROSS_ICON } from '../Button'
import { removeProductFromCombinationDetails } from '../../store/Modal/combinationAction'

import {
  addProductToCanvas,
  deleteProductFromCanvas,
} from '../../store/Modal/canvasAction'
import { Link } from 'react-router-dom'

class CombinationDetails extends React.Component {
  constructor(props) {
    super(props)
    this.combinationCanvasRef = React.createRef()
    this.dragItem = React.createRef()
    this.dragNode = React.createRef()
    this.dragOverItem = React.createRef()
    this.canvasRef = React.createRef()
    this.state = {
      dragging: false,
      currentCombination: {},
    }
  }

  //put canvas in a different component, maybe draw canvas elsewhere
  componentDidMount() {
    this.convertProductPictures(this.props.currentCombination),
      this.clearWishList()
    let btn = document.createElement('button')
    btn.innerHTML = 'BACK'
    document.getElementsByClassName('wishlist__listing')[0].prepend(btn)
    document.getElementsByClassName(
      'wishlist__listing--title'
    )[0].innerText = this.props.currentCombination.name
    this.drawCanvas()
    //
    //this.drawItemsOnCanvas(this.props.canvasItems)
    let wishlistItems = document.getElementsByClassName('wishlist__listing')[0]

    const config = { attributes: true, childList: true, subtree: true }
    const observer = new MutationObserver(this.callBackForMutationObserver)
    observer.observe(wishlistItems, config)
  }

  componentDidUpdate(prevProps) {
    if (this.props.canvasItems !== prevProps.canvasItems) {
      //console.log(this.props.canvasItems, 'componentdidMount')
      //this.drawItemsOnCanvas()
    }
    if (this.props.currentCombination !== prevProps.currentCombination) {
      //console.log('component did update')
      this.convertProductPictures(this.props.combinations)
    }
  }

  //if i refresh combination details page it will delete everything inside
  callBackForMutationObserver = (mutationList, observer) => {
    for (let mutation of mutationList) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (
            node.nodeName === 'DIV' &&
            mutation.target.className === 'wishlist-item'
          ) {
            console.log(mutation.target.className)
            mutation.target.innerHTML = ''
          } else if (node.nodeName === 'HR') {
            observer.disconnect()
          }
        })
      }
    }
    observer.disconnect()
  }
  // trying to clean the wishlist elements not working
  clearWishList = () => {
    let wishlistItems = document.getElementsByClassName('wishlist-item')
    for (let item of wishlistItems) {
      item.innerHTML = ' '
    }
  }

  drawCanvas = () => {
    const canvas = this.combinationCanvasRef.current
    let combinationDetailsListWrapperX = document
      .getElementsByClassName('Combination-Details__Item-List-Wrapper')[0]
      .getBoundingClientRect().width
    let wishListWrapperX = document
      .getElementsByClassName('wishlist__listing')[0]
      .getBoundingClientRect().width
    let context = canvas.getContext('2d')
    context.canvas.width = wishListWrapperX - combinationDetailsListWrapperX
    canvas.style.width = `${
      wishListWrapperX - combinationDetailsListWrapperX
    }px`
    context.canvas.height = 600 - 27.375 - 20
    context.fillStyle = 'white'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  }
  //.replace('$thumb$', '$listing$')
  drawItemsOnCanvas = () => {
    console.log(this.props.canvasItems, 'draw canvas items')
    if (this.props.canvasItems.products.length > 0) {
      for (let item of this.props.canvasItems.products) {
        console.log(item, 'item')
        let myCanvas = document.getElementById('combinationCanvas')
        let context = myCanvas.getContext('2d')
        let img = document.createElement('img')
        console.log('bu yenii')
        img.src = item?.product.image[0]

        context.drawImage(
          img,
          item?.image?.positionX,
          item?.image?.positionY,
          item?.image?.width * 1.5,
          item?.image?.height * 1.5
        )
      }
    }
  }

  convertProductPictures = (combination) => {
    for (let product of combination.products) {
      product.image.forEach((img) => {
        let index = product.image.indexOf(img)
        if (img.includes('$listing$')) {
          let newImgUrl = img.replace('$listing$', '$thumb$')
          product.image[index] = newImgUrl
        }
      })
    }
    this.setState({ currentCombination: { ...combination } })
    //return { ...combination }
  }

  handleDragStart = (e, product) => {
    this.dragItem.current = product
    this.dragNode.current = e.target
    this.dragNode.current.addEventListener('dragend', this.handleDragEnter)
    this.setState({ dragging: true })
  }

  handleDragEnd = (e) => {
    this.setState({ dragging: false })
    this.dragNode.current.removeEventListener('dragend', this.handleDragEnd)
    this.dragItem.current = null
    this.dragNode.current = null
  }

  handleDragEnter = (e) => {
    e.preventDefault()
  }
  onDragOver = (e) => {
    e.preventDefault()
  }

  onDrop = (e) => {
    let img = this.dragNode.current
    let imgPositionX = e.clientX
    let imgPositionY = e.clientY
    const canvas = this.combinationCanvasRef.current
    let canvasPositionX = canvas.getBoundingClientRect().left
    let canvasPositionY = canvas.getBoundingClientRect().top
    let x = imgPositionX - canvasPositionX - img.width / 2
    let y = imgPositionY - canvasPositionY - img.height / 2

    let src = this.dragNode.current.src
    let canvasImg = {
      width: img.width,
      height: img.height,
      positionX: x,
      positionY: y,
      img: src,
    }

    console.log(src)
    let canvasItem = {
      image: canvasImg,
      product: this.dragItem.current,
    }

    let findItem = this.props.canvasItems.products.find((product) => {
      return product.product.id === canvasItem.product.id
    })

    //if (findItem === undefined) {
    this.drawCombinationToCanvas(x, y, canvasImg)
    this.props.addProductToCanvas(canvasItem, this.props.currentCombination.id)
    //}
  }

  drawCombinationToCanvas = (imgPositionX, imgPositionY, img) => {
    let myCanvas = document.getElementById('combinationCanvas')
    let context = myCanvas.getContext('2d')
    let newImg = document.createElement('img')
    newImg.src = img.img

    console.log(newImg.height, newImg.width, 'only image')
    context.drawImage(newImg, imgPositionX, imgPositionY, img.width, img.height)
  }

  handleMouseDown = (e) => {
    console.log('hey')
  }
  removeProductFromCombination = (combinationId, productId) => {
    this.props.removeProduct(combinationId, productId)
    this.props.deleteProductFromCanvas(combinationId, productId)
  }
  render() {
    return (
      <div className="Combination-Details-Container">
        <div className="Combination-Details__Item-List-Wrapper">
          <div className="Combination-Details__Item-List-Header"></div>
          <div
            className={
              'Combination-Details__Item-List-Container' +
              (this.state.currentCombination?.products?.length > 4
                ? '-Scroll'
                : null)
            }
          >
            {this.props.currentCombination?.products?.map((product) => {
              return (
                <div className="Combination-Details__List-Item" id={product.id}>
                  <div
                    draggable
                    onDragStart={(e) => {
                      this.handleDragStart(e, product)
                    }}
                    onDragEnter={(e) => {
                      this.handleDragEnter(e)
                    }}
                    id={product.id}
                  >
                    <img src={product.image[0]} id={product.id} />
                  </div>
                  <span>{product.name}</span>
                  <Button
                    className="Combination-Details__List-Item-Button"
                    onClick={() =>
                      this.removeProductFromCombination(
                        this.props.currentCombination.id,
                        product.id
                      )
                    }
                    variant={BTN_WITH_CROSS_ICON}
                  ></Button>
                </div>
              )
            })}
          </div>
        </div>
        <div className="Combination-Details__Canvas-Wrapper">
          <canvas
            ref={this.canvasRef}
            id="combinationCanvas"
            onDragOver={this.onDragOver}
            onDragEnter={(e) => {
              this.handleDragEnter(e)
            }}
            onDrop={(e) => {
              this.onDrop(e)
            }}
            ref={this.combinationCanvasRef}
            onMouseDown={this.handleMouseDown}
            className="Combination-Details__Canvas-Style"
          ></canvas>
          <div>
            <Link to="/" refresh="true">
              <Button
                className="Combination-Details__Canvas-Button"
                variant={BTN_NO_ICON}
              >
                GO TO COMBINATION LIST
              </Button>
            </Link>
            <Button
              className="Combination-Details__Canvas-Button"
              variant={BTN_NO_ICON}
            >
              GO TO CHECKOUT
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentCombination: state.combinations.find(
    ({ id }) => id.toString() === ownProps.match.params.combinationId
  ),
  canvasItems: state.canvasItems.find(
    ({ id }) => id.toString() === ownProps.match.params.combinationId
  ),
})

const mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (combinationID, productID) =>
      dispatch(removeProductFromCombinationDetails(combinationID, productID)),
    addProductToCanvas: (canvasItem, combinationID) =>
      dispatch(addProductToCanvas(canvasItem, combinationID)),
    deleteProductFromCanvas: (combinationID, productID) =>
      dispatch(deleteProductFromCanvas(combinationID, productID)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CombinationDetails)
