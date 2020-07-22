import React from 'react';
import { store } from '../../store/index'
import {TOGGLE_MODAL} from "../../store/Modal/action";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";


class Modal extends React.Component{
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this)
    }

    closeModal(){
        console.log("hey close modal")
        store.dispatch({ type: 'TOGGLE_MODAL' })
    }

    render() {
        return(
            <div>
                    <div>This modal is open</div>
                    <button onClick={this.closeModal}> CLICK ME</button>
            </div>
            )
    }
}



export default Modal

//useeffects
