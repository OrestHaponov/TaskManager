import {HANDLE_CHANGE_TASK,ADD_USER_DEALS,DONE,CLEAR_INPUT} from "./ActionTypes";

// FUNCTIONAL TO ADD DEALS

export function handleChangeTask(valueTask){
    return{
        type: HANDLE_CHANGE_TASK,
        valueTask
    }
}

export function addTask(task,users,userName){
    return(dispatch) =>{
        event.preventDefault();
        users.map(value =>{
            if (value.name === userName){
                let deal = {}
                deal["text"] = task;
                deal["isDone"] = false;
                deal["id"] = Math.floor(Math.random() * 1000) + 1;
                value.deals.push(deal);
            }
        })
        dispatch(clearInput())
        dispatch(clearUsers())
        dispatch(addUserDeal(users))
    }
}

export function clearUsers(){
    return{
        type: CLEAR_USERS
    }
}

export function addUserDeal(newUsers){
    return{
        type: ADD_USER_DEALS,
        newUsers
    }
}
export function clearInput(){
    return{
        type: CLEAR_INPUT
    }
}
