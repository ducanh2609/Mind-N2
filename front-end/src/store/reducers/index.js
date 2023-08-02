import { combineReducers } from "redux";
import { user } from './users.reducers'
import { countReducer } from "./count.reducers";
const allReducer = combineReducers({
    user, countReducer
})

export default allReducer