import React from 'react'
import './CombinationListItem.scss'

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
          <p>{name}</p>
          <p>Number of Items: {numberOfItems}</p>
          <p>Total Cost: {totalCost}</p>
        </div>
      </div>
      <div className="Combination-Actions">
        <button>GO TO COMBINATION DETAILS</button>
        <button>GO TO CHECKOUT</button>
      </div>
    </div>
  )
}

export default CombinationListItem
