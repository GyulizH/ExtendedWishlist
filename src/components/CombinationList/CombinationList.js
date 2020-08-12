import React from 'react'

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
          img: null,
        },
        {
          name: 'Combination 2',
          id: '35',
          totalCost: '134 €',
          numberOfItems: '4',
          img: null,
        },
      ],
    }
  }

  render() {
    return (
      <div className="CombinationList-Wrapper">
        <div className=".Combination-Container">
          <a>
            <div className=".Combination-ImageContainer">
              <img />
            </div>
          </a>
          <div className=".Combination-Info-Container">
            <div className=".CombinationList-Item-Info">
              <p>NAME</p>
              <p>NUMBER OF ITEMS</p>
              <p>TOTAL COST</p>
            </div>
          </div>
          <div className=".Combination-Actions">
            <button>GO TO COMBINATION DETAILS</button>
            <button>GO TO CHECKOUT</button>
          </div>
        </div>
      </div>
    )
  }
}

export default CombinationList
