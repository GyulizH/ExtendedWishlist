export const TOGGLE_MODAL = 'TOGGLE MODAL'

export const toggleModal = (product) => {
  return {
    type: TOGGLE_MODAL,
    product,
  }
}
