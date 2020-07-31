export const ADD_SELECTED_PRODUCT = 'ADD SELECTED PRODUCT'

export const addSelectedProduct = (product) => {
    console.log("addselected",product)
    return {
        type: ADD_SELECTED_PRODUCT,
        product
    }
}
