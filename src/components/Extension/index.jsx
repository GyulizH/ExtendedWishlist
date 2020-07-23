import React from 'react'
import { connect } from 'react-redux'
import Modal from '../Modal'
const Extension = props => {
  return <div>
    {JSON.stringify(props)}
    {props.isModalOpen && <Modal />}
  
  </div>
}
const mapStateToProps = state => ({ isModalOpen: state.modalReducer.isModalOpen })
export default connect(mapStateToProps)(Extension)
