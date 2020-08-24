import React from 'react'
import './CombinationDetails.scss'
import Button, { BTN_NO_ICON } from '../Button'

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

  //put canvas in a different component
  componentDidMount() {
    const canvas = this.combinationCanvasRef.current
    let context = canvas.getContext('2d')
    context.fillStyle = 'green'
    context.fillRect(0, 0, canvas.width, canvas.height)
  }

  handleDragStart = (e, product) => {
    //e.preventDefault()
    this.dragItem.current = product
    this.dragNode.current = e.target
    this.dragNode.current.addEventListener('dragend', this.onDrop)
    this.setState({ dragging: true })
  }

  handleDragEnd = (e) => {
    this.setState({ dragging: false })
    this.dragNode.current.removeEventListener('dragend', this.handleDragEnd)
    this.dragItem.current = null
    this.dragNode.current = null
  }
  onDrop = (e) => {
    //e.preventDefault()
    const product = e.dataTransfer.getData('product')

    //e.target in kordinasyonlarini alip draw canvas yapacaksin
  }

  handleDragEnter = (e) => {
    let img = this.dragNode.current
    let imgPositionX = e.clientX
    let imgPositionY = e.clientY
    // this.drawCombinationToCanvas(imgPositionX, imgPositionY,img)
  }
  onDragOver = (e) => {
    e.preventDefault()
  }

  onDrop = (e) => {
    let img = this.dragNode.current
    let imgPositionX = e.clientX
    let imgPositionY = e.clientY
    this.drawCombinationToCanvas(imgPositionX, imgPositionY, img)
  }

  drawCombinationToCanvas = (imgPositionX, imgPositionY, img) => {
    let myCanvas = document.getElementById('combinationCanvas')
    let context = myCanvas.getContext('2d')
    context.drawImage(img, imgPositionX, imgPositionY, img.width, img.height)
    console.log(img, 'canvas')
  }
  render() {
    return (
      <div className="Combination-Details-Container">
        <div className="Combination-Details__Item-List-Wrapper">
          <div className="Combination-Details__Item-List-Header">
            {this.state.combination.name}
          </div>
          <div
            className={
              'Combination-Details__Item-List-Container' +
              (this.state.combination.products.length > 4 ? '-Scroll' : null)
            }
          >
            {this.state.combination.products.map((product) => {
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
                  {product.name}
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

export default CombinationDetails
