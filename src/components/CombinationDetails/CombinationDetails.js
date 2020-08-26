import React from 'react'
import { connect, Provider } from 'react-redux'

import './CombinationDetails.scss'
import Button, { BTN_NO_ICON, BTN_WITH_CROSS_ICON } from '../Button'
import {
  addNewCombination,
  addProductToCombination,
  removeProductFromCombinationDetails,
} from '../../store/Modal/combinationAction'
import { TOGGLE_MODAL } from '../../store/Modal/action'

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
    // const combinationId = this.props.match.params.combinationId
    // let currentCombination = this.props.combinations.find(
    //   ({ id }) => id.toString() === combinationId
    // )
    this.convertProductPictures(this.props.currentCombination),
      this.clearWishList()
    let btn = document.createElement('button')
    btn.innerHTML = 'BACK'
    document.getElementsByClassName('wishlist__listing')[0].prepend(btn)
    document.getElementsByClassName(
      'wishlist__listing--title'
    )[0].innerText = this.props.currentCombination.name
    this.drawCanvas()
  }

  componentDidUpdate(prevProps) {
    // console.log(this.props.currentCombination,prevProps.currentCombination)
    if (this.props.currentCombination !== prevProps.currentCombination) {
      console.log('component did update')
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
    let context = canvas.getContext('2d')
    context.fillStyle = 'green'
    context.fillRect(0, 0, canvas.width, canvas.height)
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
    //Pozisyonu dogru hesapla ve gonder
    this.drawCombinationToCanvas(imgPositionX, imgPositionY, img)
  }

  drawCombinationToCanvas = (imgPositionX, imgPositionY, img) => {
    let myCanvas = document.getElementById('combinationCanvas')
    let context = myCanvas.getContext('2d')
    context.drawImage(img, imgPositionX, imgPositionY, img.width, img.height)
  }

  removeProductFromCombination = (combinationId, productId) => {
    console.log(combinationId, productId, 'combinationdetails')
    this.props.removeProduct(combinationId, productId)
  }
  render() {
    console.log(this.state.currentCombination, 'state')
    return (
      <div className="Combination-Details-Container">
        <div className="Combination-Details__Item-List-Wrapper">
          <div className="Combination-Details__Item-List-Header"></div>
          <div
            className={
              'Combination-Details__Item-List-Container' +
              (this.state.currentCombination > 4 ? '-Scroll' : null)
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
            width="300px"
            height="600px"
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
})

const mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (combinationID, productID) =>
      dispatch(removeProductFromCombinationDetails(combinationID, productID)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CombinationDetails)
