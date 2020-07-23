import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import Modal from '../Modal'
const Extension = props => {
    useEffect(() => {
       console.log(props.isModalOpen)
    }, [props.isModalOpen]);

    return (
      <div>
    {props.isModalOpen && (<Modal/>)}
     </div>)
}
const mapStateToProps = state => ({ isModalOpen: state.modalReducer.isModalOpen })
export default connect(mapStateToProps)(Extension)
