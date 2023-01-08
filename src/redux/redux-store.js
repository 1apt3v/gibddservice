import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import driverReducer from "./driverReducer";
import inputReducer from "./inputReducer";
import penaltyReducer from "./penaltyReducer";
import statusDBReducer from "./statusDBReducer";


let reducers = combineReducers({
    inputReducer,
    driverReducer,
    penaltyReducer,
    statusDBReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store
