import {TOGGLE_USER_LIST} from "../Action/ActionTypes";

const initialState ={
    open: false
}

export default function toDoList(state = initialState, action){
    switch(action.type){
        case TOGGLE_USER_LIST:
            return { 
                ...state, open: !state.open
            }
        default:
            return state
    }
}