import React from 'react'
import './CombinationListItem.scss'
import Button, { BTN_NO_ICON } from '../Button'

const CombinationListItem = ({
  src,
  name,
  numberOfItems,
  totalCost,
  id,
  link,
  ...props
}) => {
  //href for a tag is needed
  return (
    <div id={id} className="Combination-Container" {...props}>
      <a href={link}>
        <div className="Combination-ImageContainer">
          <img src={src} />
        </div>
      </a>
      <div className="Combination-Info-Container">
        <p className="CombinationList-Item-Title">{name}</p>
        <p className="CombinationListItem-Paragraph">
          Number of Items: {numberOfItems}
        </p>
        <p className="CombinationListItem-Paragraph">Total Cost: {totalCost}</p>
      </div>
    </div>
  )
}

export default CombinationListItem
