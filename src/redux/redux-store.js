import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import driverReducer from "./driverReducer";
import inputReducer from "./inputReducer";
import penaltyReducer from "./penaltyReducer";

let reducers = combineReducers({
    inputReducer,
    driverReducer,
    penaltyReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store
