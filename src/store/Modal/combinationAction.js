export const ADD_NEW_COMBINATION = 'ADD NEW COMBINATION'

export const addNewCombination = (combination) => {
    console.log(combination,"actionn")
    return {
        type: ADD_NEW_COMBINATION,
        combination
    }
}
