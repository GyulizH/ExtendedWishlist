import React from 'react';
import PropTypes from 'prop-types';
//import './Modal.scss'


class Modal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            state:this.props.show
        }
        this.closeModal = this.closeModal.bind(this)
    }

    closeModal(){
        this.setState({state:false})
        console.log("modal is open")
    }
    componentDidMount() {
        window.onload = function() {
            document.getElementsByClassName("product-list__item three")[0].addEventListener('click', this.openModal)

        }
    }

    render() {
        console.log(this.props)
        return(
            <div>
                    <div>This modal is open</div>
                    <button onClick={this.props.handleClose}> CLICK ME</button>
            </div>
            )
    }
}

export default Modal

//useeffects
