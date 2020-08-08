import React from 'react';
import "./Modal.scss"
import {TOGGLE_MODAL} from "../../store/Modal/action";
import { connect } from 'react-redux'
import Button, {BTN_WITH_PLUS_ICON,BTN_NO_ICON,BTN_WITH_CROSS_ICON} from "../Button";
import {addNewCombination} from "../../store/Modal/combinationAction";
import Editable from "../Editable/Editable";


class Modal extends React.Component{
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this)
        this.state = {
            isAddNewCombination : false,
            combinationTitle:''
        }
    }
//do I need this?
    componentDidUpdate(prevProps) {
        if (prevProps.combinationList !== this.props.combinationList) {
        }
    }

//I might need to order combinations by id meaning date
    sendNewCombinationForm= (e) => {
        let newCombination = {
            id:Date.now(),
            name:this.state.combinationTitle,
            product: this.props.selectedProduct
        }
           this.props.addNewCombination(newCombination)
        this.setState({isAddNewCombination: false})

        e.preventDefault()
    }

    closeModal(){
        this.props.closeModal()
    }

    openAddNewCombinationBox = () => {
        this.setState({isAddNewCombination: true})
    }
    addEditableCombinationField = () => {
        return(
                <Editable
                    text={this.state.combinationTitle}
                    type="text"
                    isNew={true}
                >
                    <form onSubmit={this.sendNewCombinationForm}>
                        <input
                            type="text"
                            onChange={e => {this.setState({combinationTitle : e.target.value})}}
                        />
                    </form>
                </Editable>
        )
    }

    //add go to combination button to each combination
    //redux and onsubmit onchange
    //onclickling outside the input field return to the old name
    render() {
        return(
            <div>
            <div onClick={this.closeModal} className="mask"></div>
            <div className="WishListModal">
                  <div className="WishListModal--Content">
                      <div>
                      {this.props.combinationList.length> 0 &&
                      <div className="WishListModal-Header">
                          <label className="WishListModal--Title">ADD TO... </label>
                          <Button  className="WishList-Close-Button" onClick={this.closeModal} variant={BTN_WITH_CROSS_ICON}></Button>
                      </div>}
                      <ul className="WishListModal-List">
                      {this.props.combinationList.map(combination => {
                          return (
                              <li className="WishList-Combination-List-Item" key={combination.id}>
                                  <label className="checkboxContainer">
                                      <input
                                          type="checkbox"
                                      />
                                      <span className="checkmark"></span>
                                      {combination.name}
                                  </label>
                              </li>
                          )
                      })}
                      </ul>
                      <div>
                          {this.state.isAddNewCombination? this.addEditableCombinationField():
                              <Button
                                  variant={BTN_WITH_PLUS_ICON}
                                  onClick={this.openAddNewCombinationBox}
                                  className="WishList-Plus-Button"
                              >
                                  Add New Combination
                              </Button>}
                      </div>
                      </div>
                  </div>
            </div>
            </div>
            )
    }
}

const mapDispatchToProps= dispatch => {
    return {
        closeModal : () => dispatch({type: TOGGLE_MODAL}),
        addNewCombination: (combination) => dispatch(addNewCombination(combination))
    }
}

const mapStateToProps = state => ({
    isModalOpen: state.modal.isModalOpen,
    selectedProduct:state.modal.selectedProduct,
    combinationList: state.combinations
})

export default connect(mapStateToProps,mapDispatchToProps)(Modal)

