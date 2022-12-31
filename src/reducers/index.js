import appReducer from "./reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    app: appReducer
});

export default rootReducer;