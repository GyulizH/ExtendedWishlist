import React from 'react'
import { connect } from 'react-redux'
import Modal from '../Modal'
const Extension = props => {
  console.log(props,"modaaal")
  return <div>{props.isModalOpen && <Modal />}</div>
}
const mapStateToProps = state => ({ ...state })
export default connect(mapStateToProps)(Extension)
