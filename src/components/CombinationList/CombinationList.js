import React from 'react'
import { connect } from 'react-redux'
import CombinationListItem from '../CombinationListItem/CombinationListItem'
import Button, { BTN_NO_ICON } from '../Button'
import {
  addNewCombination,
  addProductToCombination,
  removeCombination,
  removeProductFromCombination,
} from '../../store/Modal/combinationAction'
import {  Link } from 'react-router-dom'
import { BrowserRouter, Route } from 'react-router-dom'

class CombinationList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wishListCombinations: [],
      wishListCombinationImages: [],
      currentImage: 0,
    }
  }
  componentDidUpdate(prevProps) {
    // if (prevState.wishListCombinations !== this.state.wishListCombinations) {
    //   console.log("i am changed")
    // }
    if (prevProps.combinations !== this.props.combinations) {
      this.makeCombinationImagesList(this.props.combinations)
      this.makeAllWishListCombinations(this.props.combinations)
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
    // console.log(this.props.combinations,"combinations")
    return (
      <div className="CombinationList-Wrapper">
        {this.state.wishListCombinations.map((item) => {
          return (
            <div className="CombinationList-Item_Wrapper" id={item.id}>
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
                link={`https://nl.tommy.com/${item.name}`}
              />
              <div className="Combination-Actions">
                <Link to={`${item.id}`} refresh="true">
                <Button
                    id={item.id}
                  className="Combination-Actions-Button"
                  variant={BTN_NO_ICON}
                >
                  GO TO COMBINATION DETAILS
                </Button>
                </Link>
                <Button
                    id={item.id}
                  className="Combination-Actions-Button"
                  variant={BTN_NO_ICON}
                >
                  GO TO CHECKOUT
                </Button>
                <Button
                  id={item.id}
                  onClick={(e) => this.props.removeCombination(e.target.id)}
                  className="Combination-Actions-Button"
                  variant={BTN_NO_ICON}
                >
                  DELETE COMBINATION
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  combinations: state.combinations,
})

const mapDispatchToProps = (dispatch) => {
  return {
    removeCombination: (id) => dispatch(removeCombination(id)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CombinationList)
