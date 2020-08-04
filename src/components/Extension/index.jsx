import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import Modal from '../Modal'
const Extension = props => {

    return (
      <div>
    {props.isModalOpen && (<Modal/>)}
     </div>)
}
const mapStateToProps = state => ({ isModalOpen: state.modal.isModalOpen })
export default connect(mapStateToProps)(Extension)
