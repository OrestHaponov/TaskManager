import {HANDLE_CHANGE_EMAIL_LOGIN,HANDLE_CHANGE_PASS_LOGIN,CLEAR_LOGIN_FORM} from "../Action/ActionTypes";

const initialState ={
    valueEmailLogin: "",
    valuePassLogin: "",
}

export default function toDoList(state = initialState, action){
    switch(action.type){
        case HANDLE_CHANGE_EMAIL_LOGIN:
            return { 
                ...state, valueEmailLogin: action.valueEmailLogin.target.value
            }
        case HANDLE_CHANGE_PASS_LOGIN:
            return { 
                ...state, valuePassLogin: action.valuePassLogin.target.value
            }
        case CLEAR_LOGIN_FORM:
            return { 
                ...state, valueEmailLogin: "", valuePassLogin: ""
            }
        default:
            return state
    }
}