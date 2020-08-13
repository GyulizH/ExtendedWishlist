import React from 'react'
import CombinationListItem from '../CombinationListItem/CombinationListItem'

class CombinationList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          name: 'Combination 1',
          id: '34',
          totalCost: '100 €',
          numberOfItems: '5',
          src:
            'https://tommy-europe.scene7.com/is/image/TommyEurope/WW0WW27462_DW5_main_listing?$thumb$',
        },
        {
          name: 'Combination 2',
          id: '35',
          totalCost: '134 €',
          numberOfItems: '4',
          src:
            'https://tommy-europe.scene7.com/is/image/TommyEurope/WW0WW27462_DW5_main_listing?$thumb$',
        },
      ],
    }
  }

  render() {
    return (
      <div className="CombinationList-Wrapper">
        {this.state.list.map((item) => {
          return (
            <CombinationListItem
              name={item.name}
              id={item.id}
              totalCost={item.totalCost}
              numberOfItems={item.numberOfItems}
              src={item.src}
            />
          )
        })}
      </div>
    )
  }
}

export default CombinationList
