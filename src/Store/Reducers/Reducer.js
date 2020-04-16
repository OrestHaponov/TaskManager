import {combineReducers} from "redux";
import Login from "./Login";
import Registration from "./Registration";
import UserList from "./UserList";

export default combineReducers({
    Registration,Login,UserList   
})