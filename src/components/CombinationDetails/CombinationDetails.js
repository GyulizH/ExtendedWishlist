import React from 'react'
import { connect, Provider } from 'react-redux'

import './CombinationDetails.scss'
import Button, { BTN_NO_ICON } from '../Button'
import ReactDOM from 'react-dom'
import { store } from '../../store'
import Extension from '../Extension'

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
      combination: {
        id: 1597761526335,
        name: 'new combination 1',
        products: [
          {
            name: 'ESSENTIAL FLEECE HOODIE MET LOGO',
            price: '€ 99,90',
            image: [
              'https://tommy-europe.scene7.com/is/image/TommyEurope/WW0WW26410_YBR_main_listing?$thumb$',
              'https://tommy-europe.scene7.com/is/image/TommyEurope/WW0WW26410_YBR_hover?$thumb@2x$',
            ],
            id: -1665714636,
          },
          {
            name: 'ESSENTIAL FLEECE HOODIE MET LOGO',
            price: '€ 99,90',
            image: [
              'https://tommy-europe.scene7.com/is/image/TommyEurope/WW0WW26410_YBR_main_listing?$thumb$',
              'https://tommy-europe.scene7.com/is/image/TommyEurope/WW0WW26410_YBR_hover?$thumb@2x$',
            ],
            id: -1665714636,
          },
          {
            name: 'ESSENTIAL FLEECE HOODIE MET LOGO',
            price: '€ 99,90',
            image: [
              'https://tommy-europe.scene7.com/is/image/TommyEurope/WW0WW26410_YBR_main_listing?$thumb$',
              'https://tommy-europe.scene7.com/is/image/TommyEurope/WW0WW26410_YBR_hover?$thumb@2x$',
            ],
            id: -1665714636,
          },
          {
            name: 'ESSENTIAL FLEECE HOODIE MET LOGO',
            price: '€ 99,90',
            image: [
              'https://tommy-europe.scene7.com/is/image/TommyEurope/WW0WW26410_YBR_main_listing?$thumb$',
              'https://tommy-europe.scene7.com/is/image/TommyEurope/WW0WW26410_YBR_hover?$thumb@2x$',
            ],
            id: -1665714636,
          },
          {
            name: 'ESSENTIAL FLEECE HOODIE MET LOGO',
            price: '€ 99,90',
            image: [
              'https://tommy-europe.scene7.com/is/image/TommyEurope/WW0WW26410_YBR_main_listing?$thumb$',
              'https://tommy-europe.scene7.com/is/image/TommyEurope/WW0WW26410_YBR_hover?$thumb@2x$',
            ],
            id: -1665714636,
          },
        ],
      },
    }
  }

  //put canvas in a different component, maybe draw canvas elsewhere
  componentDidMount() {
    const combinationId = this.props.match.params.combinationId
    let currentCombination = this.props.combinations.find(
      ({ id }) => id.toString() === combinationId
    )
    this.setState({
      currentCombination: this.convertProductPictures(currentCombination),
    })
    this.clearWishlist()
    document.getElementsByClassName('wishlist__listing--title')[0].innerText =
      currentCombination.name
    this.drawCanvas()
  }

  // trying to clean the wishlist elements not working
  clearWishlist = () => {
    let wishlistItems = document.getElementsByClassName('wishlist-item')
    for (let item of wishlistItems) {
      console.log(item, 'item')
      item.innerHTML = ' '
      console.log(item)
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
        let newImgUrl = img.replace('$listing$', '$thumb$')
        product.image[index] = newImgUrl
      })
    }
    return { ...combination }
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
  render() {
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

const mapStateToProps = (state) => ({
  combinations: state.combinations,
})

export default connect(mapStateToProps, null)(CombinationDetails)
