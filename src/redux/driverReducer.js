const SET_DRIVER_VALUE = "SET_DRIVER_VALUE"
const SET_DRIVER_CLEAR_VALUE = "SET_DRIVER_CLEAR_VALUE"

const initialState = {
    driver: {}
}

const driverReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DRIVER_VALUE: {
            return {
                ...state,
                driver: action.payload
            }
        }
        case SET_DRIVER_CLEAR_VALUE: {
            return {
                ...state,
                driver: {}
            }
        }
        default: {
            return state
        }
    }
}



// Action Creator
export const setDriverValueAC = (data) => {
    return { type: SET_DRIVER_VALUE, payload: data }
}
export const setDriverClearValueAC = () => {
    return { type: SET_DRIVER_CLEAR_VALUE }
}


// Interface Action Creator
export const setDriverValue = (data) => {
    return setDriverValueAC(data)
}
export const setDriverClearValue = () => {
    return setDriverClearValueAC()
}

export default driverReducer