const SET_PENALTY = 'SET_PENALTY'
const CLEAR_PENALTY = 'CLEAR_PENALTY'

const initialState = {
    penalty: []
}


const penaltyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PENALTY: {
            return {
                ...state,
                penalty: action.payload.penalty
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

export const setPenaltyAC = (penalty) => ({ type: SET_PENALTY, payload: { penalty: penalty } })
export const clearPenaltyAC = () => ({ type: CLEAR_PENALTY })

export const setPenalty = (penalty) => setPenaltyAC(penalty)
export const clearPenalty = () => clearPenaltyAC()


export default penaltyReducer