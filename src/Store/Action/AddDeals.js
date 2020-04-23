import {HANDLE_CHANGE_TASK,ADD_USER_DEALS,CLEAR_INPUT} from "./ActionTypes";

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
        if(task == ""){
            alert("You have to type something");
        }else{
            users.map(value =>{
                if (value.name === userName){
                    let deal = {}
                    deal["text"] = task;
                    deal["isDone"] = false;
                    deal["edit"] = false;
                    deal["share"] = false;
                    deal["shareBy"] = "";
                    deal["id"] = Math.floor(Math.random() * 1000) + 1;
                    value.deals.push(deal);
                    value.activeDeals.push(deal);
                }
            })
            dispatch(clearInput())
            dispatch(addUserDeal(users))
        }
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
