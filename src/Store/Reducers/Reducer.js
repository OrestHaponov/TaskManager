import {combineReducers} from "redux";
import Login from "./Login";
import Registration from "./Registration";
import UserList from "./UserList";
import AddDeals from "./AddDeals";
import Deals from "./Deals";

export default combineReducers({
    Registration,Login,UserList,AddDeals,Deals
})