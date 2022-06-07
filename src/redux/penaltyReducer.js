const SET_PENALTY = 'SET_PENALTY'
const CLEAR_PENALTY = 'CLEAR_PENALTY'

const initialState = {
    penalty: [],
    driverId: ''
}


const penaltyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PENALTY: {
            return {
                ...state,
                penalty: action.payload.penalty,
                driverId: action.payload.driverId
            }
        }
        case CLEAR_PENALTY: {
            return {
                ...state,
                penalty: []
            }
        }
        default: {
            return state
        }
    }
}

export const setPenaltyAC = (penalty) => ({ type: SET_PENALTY, payload: { penalty: penalty.penalty, driverId: penalty.document.driverLicense.id } })
export const clearPenaltyAC = () => ({ type: CLEAR_PENALTY })

export const setPenalty = (penalty) => setPenaltyAC(penalty)
export const clearPenalty = () => clearPenaltyAC()


export default penaltyReducer