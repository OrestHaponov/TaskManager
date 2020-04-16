import {HANDLE_CHANGE_NAME,HANDLE_CHANGE_EMAIL,HANDLE_CHANGE_PASS,ADD_USER} from "../Action/ActionTypes";

const initialState ={
    valueName: "",
    valueEmail: "",
    valuePass: "",
    register: false,
    users: []
}

export default function toDoList(state = initialState, action){
    switch(action.type){
        case HANDLE_CHANGE_NAME:
            return { 
                ...state, valueName: action.valueName.target.value
            }
        case HANDLE_CHANGE_EMAIL:
            return { 
                ...state, valueEmail: action.valueEmail.target.value
            }
        case HANDLE_CHANGE_PASS:
            return { 
                ...state, valuePass: action.valuePass.target.value
            }
        case ADD_USER:
            return { 
                ...state, users: [...state.users, action.user], valueName: "", valueEmail: "", valuePass: "",register: true
            }
        default:
            return state
    }
}