import React from 'react'
import './CombinationListItem.scss'
import Button, { BTN_NO_ICON } from '../Button'

const CombinationListItem = ({
  src,
  name,
  numberOfItems,
  totalCost,
  ...props
}) => {
  //href for a tag is needed
  return (
    <div className="Combination-Container" {...props}>
      <a>
        <div className="Combination-ImageContainer">
          <img src={src} />
        </div>
      </a>
      <div className="Combination-Info-Container">
        <div className="CombinationList-Item-Info">
          <p className="CombinationList-Item-Title">{name}</p>
          <p>Number of Items: {numberOfItems}</p>
          <p>Total Cost: {totalCost}</p>
        </div>
      </div>
      <div className="Combination-Actions">
        <Button className="Combination-Actions-Button" variant={BTN_NO_ICON}>
          GO TO COMBINATION DETAILS
        </Button>
        <Button className="Combination-Actions-Button" variant={BTN_NO_ICON}>
          GO TO CHECKOUT
        </Button>
        <Button className="Combination-Actions-Button" variant={BTN_NO_ICON}>
          DELETE COMBINATION
        </Button>
      </div>
    </div>
  )
}

export default CombinationListItem
