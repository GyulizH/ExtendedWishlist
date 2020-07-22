export const TOGGLE_MODAL = 'TOGGLE MODAL'


export const toggleModal = (isOpen) =>{
    console.log("hey thereee")
    return {
        type: TOGGLE_MODAL,
        payload: !isOpen
    }
}
