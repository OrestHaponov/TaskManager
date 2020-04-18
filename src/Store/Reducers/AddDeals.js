import {HANDLE_CHANGE_TASK,CLEAR_INPUT} from "../Action/ActionTypes";

const initialState ={
    valueTask: ""
}

export default function toDoList(state = initialState, action){
    switch(action.type){
        //VALUE INPUT
        case HANDLE_CHANGE_TASK:
            return { 
                ...state, valueTask: action.valueTask.target.value
            }
        //CLEAR INPUT
        case CLEAR_INPUT:
            return { 
                ...state, valueTask: ""
            }
        default:
            return state
    }
}