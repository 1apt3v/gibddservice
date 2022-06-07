const SET_INPUT_VALUE = "SET_INPUT_VALUE"

const initialState = {
    value: ""
}

const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INPUT_VALUE: {
            return {
                ...state,
                value: action.payload
            }
        }
        default: {
            return state
        }
    }
}



// Action Creator
export const setInputValueAC = (value) => {
    return { type: SET_INPUT_VALUE, payload: value }
}


// Interface Action Creator
export const setInputValue = (value) => {
    return setInputValueAC(value)

}

export default inputReducer