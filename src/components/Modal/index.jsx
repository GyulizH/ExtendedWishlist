import React from 'react';
import { store } from '../../store/index'
import {TOGGLE_MODAL} from "../../store/Modal/action";
import { connect } from 'react-redux'


class Modal extends React.Component{
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this)
    }

    closeModal(){
        console.log("hey close modal")
        this.props.closeModal()
        window.location.reload()
    }

    render() {
        console.log("modal is opened")
        return(
            <div>
                    <div>This modal is open</div>
                    <button onClick={this.closeModal}> CLICK ME</button>
            </div>
            )
    }
}

const mapDispatchToProps= dispatch => {
    return {
        closeModal : () => dispatch({type: TOGGLE_MODAL})
    }
}

export default connect(null,mapDispatchToProps)(Modal)

//useeffects
