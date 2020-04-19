import {SHOW_ALL_DEALS,SHOW_ACTIVE_DEALS,SHOW_COMPLETED_DEALS} from "../Action/ActionTypes";

const initialState ={
    showAll: true,
    showActive: false,
    showCompleted: false,
}

export default function toDoList(state = initialState, action){
    switch(action.type){
        //SHOW DEALS (ALL,ACTIVE,COMPLETED)
        case SHOW_ALL_DEALS:
            return { 
                ...state, showAll: true, showActive: false, showCompleted: false,
            }
        case SHOW_ACTIVE_DEALS:
            return { 
                ...state, showAll: false, showActive: true, showCompleted: false,
            }
        case SHOW_COMPLETED_DEALS:
            return { 
                ...state, showAll: false, showActive: false, showCompleted: true,
        }
        default:
            return state
    }
}