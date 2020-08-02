import React from 'react';
import "./Modal.scss"
import {TOGGLE_MODAL} from "../../store/Modal/action";
import { connect } from 'react-redux'
import Button, {BTN_WITH_PLUS_ICON} from "../Button";
import {addNewCombination} from "../../store/Modal/combinationAction";
import {debounce} from 'lodash';
import Editable from "../Editable/Editable";


class Modal extends React.Component{
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this)
        this.state = {
            showForm : false,
            combinationTitle:''
        }
    }

    isEnterKey (event) {
        return event.key === 'Enter'
    }

    //stateten daha once kaydedilmis elementler gelmiyor
    componentDidUpdate(prevProps) {
        if (prevProps.combinationList !== this.props.combinationList) {
            console.log(this.props.combinationList,"componentdidupdate")
        }
    }

    //debounce calismiyor galiba,synthetic event olayi
    addNewCombination= (e) => {
        e.persist()
        this.setState({combinationTitle: e.target.value})
        let newCombination = {
            id:Date.now(),
            name:e.target.value,
            product: this.props.selectedProduct
        }
        if(this.isEnterKey(e) === true){
            e.currentTarget.blur()
           this.props.addNewCombination(newCombination)
        }
    }

    closeModal(){
        this.props.closeModal()
    }

    openForm = () => {
        this.setState({showForm:true})
    }
    showForm = () => {
        console.log("showform")
        return(
            <div>
                <Editable
                    text={this.state.combinationTitle}
                    type="text"
                    isNew={true}
                >
                    <input
                        type="text"
                        onKeyUp={this.addNewCombination}
                        value={this.state.combinationTitle}
                    />
                </Editable>
            </div>
        )
    }
    render() {
        return(
            <div>
            <div onClick={this.closeModal} className="mask"></div>
            <div className="WishListModal">
                <Button className="WishList-Plus-Button" variant={BTN_WITH_PLUS_ICON} onClick={this.openForm}> CLICK ME</Button>
                  <div className="WishListModal--Content">
                      {this.state.showForm ? this.showForm():null}
                      <div>This modal is open</div>
                  </div>
                <Button  className="WishList-Close-Button" onClick={this.closeModal}> CLICK ME</Button>
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
    isModalOpen: state.modalReducer.isModalOpen,
    selectedProduct:state.modalReducer.selectedProduct,
    combinationList: state.combinationReducer
})

export default connect(mapStateToProps,mapDispatchToProps)(Modal)

//useeffects
