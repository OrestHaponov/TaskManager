import {HANDLE_CHANGE_NAME,HANDLE_CHANGE_EMAIL,HANDLE_CHANGE_PASS,ADD_USER,ADD_USER_DEALS,CLEAR_USERS,DONE,CLEAR_ALL,CLEAR_COMPLETED,RETURN_ALL,SHOW_EDIT_FORM,EDITED_DEALS,SHOW_SHARE_FORM,SHARE} from "../Action/ActionTypes";

const initialState ={
    valueName: "",
    valueEmail: "",
    valuePass: "",
    register: false,
    users: [],
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
        // ADD USER DEALS
        case ADD_USER_DEALS:
            return { 
                ...state, users: action.newUsers
            }
        // CLEAR USERS
        case CLEAR_USERS:
            return { 
                ...state, users: action.newUsers
            }
        // DONE
        case DONE:
            return { 
                ...state, users: action.users
            }
        //CLEAR DEALS (ALL,COMPLETED)
        case CLEAR_ALL:
            return { 
                ...state, users: action.users
            }
        case CLEAR_COMPLETED:
            return { 
                ...state, users: action.users
            }
        //RETURN ALL
        case RETURN_ALL:
            return { 
                ...state, users: action.users
            }
        //SHOW EDIT FORM
        case SHOW_EDIT_FORM:
            return { 
                ...state, users: action.users
            }
        //SHOW EDITED DEALS
        case EDITED_DEALS:
            return { 
                ...state, users: action.users
            }
        //SHOW SHARE DEALS
        case SHOW_SHARE_FORM:
            return { 
                ...state, users: action.users
            }
        //SHARE
        case SHARE:
            return { 
                ...state, users: action.users
            }
        default:
            return state
    }
}