import React from 'react'
import { connect } from 'react-redux'
import CombinationListItem from '../CombinationListItem/CombinationListItem'

class CombinationList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wishListCombinations: [],
      wishListCombinationImages: [],
      currentImage: 0,
    }
  }
  componentDidUpdate(prevState) {
    if (prevState.wishListCombinations !== this.state.wishListCombinations) {
    }
  }
  componentDidMount() {
    this.makeCombinationImagesList(this.props.combinations)
    this.makeAllWishListCombinations(this.props.combinations)
    setInterval(this.switchImages, 1000)
  }

  makeCombinationImagesList = (combinations) => {
    let combImgs = []
    for (let combination of combinations) {
      let id = combination.id
      let combinationImages = {}
      combinationImages[id] = []
      for (let product of combination.products) {
        for (let img of product.image) {
          let thumbSrc = img.replace('$listing$', '$thumb$')
          combinationImages[id].push(thumbSrc)
        }
      }
      combImgs.push(combinationImages)
    }
    this.setState({ wishListCombinationImages: combImgs })
    return combImgs
  }
  makeAllWishListCombinations = (objArr) => {
    let combImgs = this.makeCombinationImagesList(objArr)
    let newObjArr = []
    for (let obj of objArr) {
      newObjArr.push(this.makeWishListCombination(obj))
    }
    newObjArr.forEach(function (element) {
      element.imageList =
        combImgs[newObjArr.indexOf(element)][element.id.toString()]
    })
    this.setState({ wishListCombinations: newObjArr })
  }
  makeWishListCombination = (obj) => {
    let costArr = []
    for (let product of obj.products) {
      let onlyThePrice = parseFloat(
        product.price.replace(/^\D+/g, '').replace(/,/g, '.')
      )
      costArr.push(onlyThePrice)
    }
    let reducedCost = costArr.reduce((acc, curr) => {
      return acc + curr
    })
    let thumbnail = obj.products[0].image[0].replace('$listing$', '$thumb$')
    let newObj = {
      name: obj.name,
      id: obj.id,
      numberOfItems: obj.products.length,
      totalCost: `€ ${reducedCost}`,
      src: thumbnail,
    }

    for (let imgItem of this.state.wishListCombinationImages) {
      if (newObj.id === imgItem.id) {
        newObj.srcList = imgItem.srcs
      }
    }
    return newObj
  }

  switchImages = () => {
    if (this.state.currentImage < 10) {
      this.setState({
        currentImage: this.state.currentImage + 1,
      })
    } else {
      this.setState({
        currentImage: 0,
      })
    }
    return this.currentImage
  }

  render() {
    return (
      <div className="CombinationList-Wrapper">
        {this.state.wishListCombinations.map((item) => {
          return (
            <CombinationListItem
              name={item.name}
              id={item.id}
              totalCost={item.totalCost}
              numberOfItems={item.numberOfItems}
              src={
                item.imageList[this.state.currentImage]
                  ? item.imageList[this.state.currentImage]
                  : item.imageList[0]
              }
            />
          )
        })}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  combinations: state.combinations,
})
export default connect(mapStateToProps, null)(CombinationList)
