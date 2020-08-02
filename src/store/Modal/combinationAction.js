export const ADD_NEW_COMBINATION = 'ADD NEW COMBINATION'

export const addNewCombination = (combination) => {
    return {
        type: ADD_NEW_COMBINATION,
        combination
    }
}
