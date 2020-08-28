import React from 'react'
import { connect, Provider } from 'react-redux'

import './CombinationDetails.scss'
import Button, { BTN_NO_ICON, BTN_WITH_CROSS_ICON } from '../Button'
import { removeProductFromCombinationDetails } from '../../store/Modal/combinationAction'

import {
  addProductToCanvas,
  deleteProductFromCanvas,
} from '../../store/Modal/canvasAction'

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
    console.log(this.props.canvasItems, 'component did mount')
    this.convertProductPictures(this.props.currentCombination),
      this.clearWishList()
    let btn = document.createElement('button')
    btn.innerHTML = 'BACK'
    document.getElementsByClassName('wishlist__listing')[0].prepend(btn)
    document.getElementsByClassName(
      'wishlist__listing--title'
    )[0].innerText = this.props.currentCombination.name
    this.drawCanvas()
    this.drawItemsOnCanvas()
  }

  componentDidUpdate(prevProps) {
    if (this.props.canvasItems !== prevProps.canvasItems) {
      console.log(this.props.canvasItems, 'componentdidMount')
      //this.drawItemsOnCanvas()
    }
    if (this.props.currentCombination !== prevProps.currentCombination) {
      //console.log('component did update')
      this.convertProductPictures(this.props.combinations)
    }
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
    context.canvas.height = 600 - 27.375 - 20
    context.fillStyle = 'white'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  }

  drawItemsOnCanvas = () => {
    console.log(this.props.canvasItems, 'draw canvas items')
    if (this.props.canvasItems.products.length > 0) {
      for (let item of this.props.canvasItems.products) {
        console.log(item, 'item')
        let myCanvas = document.getElementById('combinationCanvas')
        let context = myCanvas.getContext('2d')
        let img = document.createElement('img')
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
    let x = imgPositionX - canvasPositionX
    let y = imgPositionY - canvasPositionY

    let canvasImg = {
      width: 96,
      height: 138,
      positionX: x,
      positionY: y,
      img: this.dragNode.current,
    }
    let canvasItem = {
      image: canvasImg,
      product: this.dragItem.current,
    }
    let findItem = this.props.canvasItems.products.find((product) => {
      return product.product.id === canvasItem.product.id
    })
    console.log(findItem, 'findItem')
    if (findItem === undefined) {
      this.drawCombinationToCanvas(x, y, img)
      this.props.addProductToCanvas(
        canvasItem,
        this.props.currentCombination.id
      )
    }
  }

  drawCombinationToCanvas = (imgPositionX, imgPositionY, img) => {
    let myCanvas = document.getElementById('combinationCanvas')
    let context = myCanvas.getContext('2d')
    context.drawImage(
      img,
      imgPositionX,
      imgPositionY,
      img.width * 1.5,
      img.height * 1.5
    )
  }

  handleMouseDown = (e) => {
    console.log('hey')
  }
  removeProductFromCombination = (combinationId, productId) => {
    this.props.removeProduct(combinationId, productId)
    this.props.deleteProductFromCanvas(combinationId, productId)
  }
  render() {
    // console.log(this.state.currentCombination, 'state')
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
            {this.state.currentCombination?.products?.map((product) => {
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
                  >
                    <img src={product.image[0]} id={product.id} />
                  </div>
                  <span>{product.name}</span>
                  <Button
                    className="Combination-Details__List-Item-Button"
                    onClick={() =>
                      this.removeProductFromCombination(
                        this.state.currentCombination.id,
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
          <Button
            className="Combination-Details__Canvas-Button"
            variant={BTN_NO_ICON}
          >
            GO TO CHECKOUT
          </Button>
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
