import { combineReducers } from "redux";
import UserReducer  from "./userReducer";

const rootReducer = combineReducers({
    UserLogin: UserReducer
});

export default rootReducer;