import React from 'react';
import "./Modal.scss"
import {TOGGLE_MODAL} from "../../store/Modal/action";
import { connect } from 'react-redux'
import Button, {BTN_WITH_PLUS_ICON} from "../Button";
import {addSelectedProduct} from "../../store/Modal/combinationAction";


class Modal extends React.Component{
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this)
        this.addSelectedProduct = this.addSelectedProduct.bind(this)
    }

    closeModal(){
        this.props.closeModal()
    }

    addSelectedProduct(){
        console.log(this.props.selectedProduct.price,"modaldayiz")
       this.props.addProduct(this.props.selectedProduct)
    }

    render() {
        return(
            <div>
            <div className="mask"></div>
            <div className="WishListModal">
                <Button className="WishList-Plus-Button" variant={BTN_WITH_PLUS_ICON} onClick={this.addSelectedProduct}> CLICK ME</Button>
                  <div className="WishListModal--Content">
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
        addProduct: (product) => dispatch(addSelectedProduct(product))
    }
}

const mapStateToProps = state => ({
    isModalOpen: state.modalReducer.isModalOpen,
    selectedProduct:state.modalReducer.selectedProduct
})

export default connect(mapStateToProps,mapDispatchToProps)(Modal)

//useeffects
