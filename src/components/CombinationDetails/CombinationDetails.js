import React from 'react'
import './CombinationDetails.scss'
import Button, { BTN_NO_ICON } from '../Button'

class CombinationDetails extends React.Component {
  constructor(props) {
    super(props)
    this.combinationCanvasRef = React.createRef()
    this.state = {
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
                  <div>
                    <img src={product.image[0]} />
                  </div>
                  {product.name}
                </div>
              )
            })}
          </div>
        </div>
        <div className="Combination-Details__Canvas-Wrapper">
          <canvas
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
