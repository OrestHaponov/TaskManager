import {HANDLE_CHANGE,ADD_DEAL,DONE,CLEAR_ALL,DELETE_DEAL,SHOW_ALL_DEALS,SHOW_ACTIVE_DEALS,SHOW_COMPLETED_DEALS,CLEAR_COMPLETED,TOGGLE,RETURN_DEAL} from "../Action/actionTypes";

const initialState ={
    value: "",
    deals: [],
    dealsListActive: [],
    dealsListCompleted: [],
    showAll: true,
    showActive: false,
    showCompleted: false,
    stateToggle: false,
    OrestaDeals: []
}

export default function toDoList(state = initialState, action){
    switch(action.type){
        // FUNCTIONAL TO ADD DEALS 
        case HANDLE_CHANGE:
            return { 
                ...state, value: action.value.target.value
            }
        case ADD_DEAL:
            return { 
                ...state, deals: [...state.deals, action.deals], value: ""
            }
        // FUNCTIONAL WITHS ADDED DEALS
            //DELETE DEAL
            case DELETE_DEAL:
                return { 
                    ...state, deals: action.newDeals
                }
            //DONE DEAL
            case DONE:
                return {
                    ...state, deals: action.deals, dealsListActive: action.active, dealsListCompleted: action.filterCompleted 
                }
            case RETURN_DEAL:
                return {
                    ...state, deals: action.filteredDeals,dealsListActive: action.filteredDeals,dealsListCompleted: action.dealsListCompleted 
                }
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
        //CLEAR DEALS (ALL,ACTIVE,COMPLETED)
            case CLEAR_ALL:
                return { 
                    ...state, deals: [], dealsListActive: []
                }    
            case CLEAR_COMPLETED:
                return { 
                    ...state, dealsListCompleted: []
                } 
        //TOGGLE DEALS
            case TOGGLE:
                return { 
                    ...state, stateToggle: !state.stateToggle
                }  
        default:
            return state
    }
}