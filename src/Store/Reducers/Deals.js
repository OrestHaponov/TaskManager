import {SHOW_ALL_DEALS,SHOW_ACTIVE_DEALS,SHOW_COMPLETED_DEALS,HANDLE_CHANGE_EDIT,CHANGE_EDIT_VALUE,HANDLE_CHANGE_SHARE,CLEAR_SHARE_VALUE} from "../Action/ActionTypes";

const initialState ={
    showAll: true,
    showActive: false,
    showCompleted: false,
    valueEdit: "",
    valueShare: "",
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
        // CHANGE EDIT VALUE
        case CHANGE_EDIT_VALUE:
            return { 
                ...state, valueEdit: action.dealText
        }
        // VALUE INPUT EDIT DEAL
        case HANDLE_CHANGE_EDIT:
            return { 
                ...state, valueEdit: action.valueEdit.target.value
        }
        // VALUE INPUT SHARE DEAL
        case HANDLE_CHANGE_SHARE:
            return { 
                ...state, valueShare: action.valueShare.target.value
        }
        // CLEAR SHARE VALUE
        case CLEAR_SHARE_VALUE:
            return { 
                ...state, valueShare: ""
        }

        default:
            return state
    }
}