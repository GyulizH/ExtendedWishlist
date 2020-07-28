import React from 'react';
import "./Modal.scss"
import {TOGGLE_MODAL} from "../../store/Modal/action";
import { connect } from 'react-redux'


class Modal extends React.Component{
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this)
    }

    closeModal(){
        this.props.closeModal()
    }

    render() {
        return(
            <div>
            <div className="mask"></div>
            <div className="WishListModal">
                  <div className="WishListModal--Content">
                      <div>This modal is open</div>
                      <button onClick={this.closeModal}> CLICK ME</button>
                  </div>
            </div>
            </div>
            )
    }
}

const mapDispatchToProps= dispatch => {
    return {
        closeModal : () => dispatch({type: TOGGLE_MODAL})
    }
}

const mapStateToProps = state => ({ isModalOpen: state.modalReducer.isModalOpen })

export default connect(mapStateToProps,mapDispatchToProps)(Modal)

//useeffects
