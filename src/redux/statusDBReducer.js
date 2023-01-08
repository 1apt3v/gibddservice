const STATUS_DELETING = 'STATUS_DELETING'
const CLEAR_STATUS = 'CLEAR_STATUS'

const initialState = {
    statusDeleting: null
}

const statusDBReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUS_DELETING: {
            return {
                ...state,
                statusDeleting: action.payload.status
            }
        }
        case CLEAR_STATUS: {
            return {
                ...state,
                statusDeleting: null
            }
        }

        default: {
            return state
        }
    }
}

const setStatusDeletingAC = (status) => ({ type: STATUS_DELETING, payload: { status } })
const setClearStatusAC = () => ({ type: CLEAR_STATUS })


export const setStatusDeleting = (status) => setStatusDeletingAC(status)
export const setClearStatus = () => setClearStatusAC()




export default statusDBReducer