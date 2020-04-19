import {CLEAR_USERS,DONE,SHOW_ALL_DEALS,SHOW_ACTIVE_DEALS,SHOW_COMPLETED_DEALS,CLEAR_ALL,CLEAR_COMPLETED,RETURN_ALL} from "./ActionTypes";

//DONE DEAL
export function doneDeal(users,dealId,userName,doneDealsList){
    return(dispatch) =>{
        const user = users.filter(findNeedUser=>findNeedUser.name == userName);
        user.map(value=>{
            value.deals.map(value=>{
                if(value.id === dealId){
                    value.isDone = !value.isDone
                }
            })
            value.activeDeals = value.deals.filter(active=>active.isDone === false);
            const allCompleted = doneDealsList.concat(value.deals);
            value.doneDeals = allCompleted;
            value.doneDeals = value.doneDeals.filter(active=>active.isDone === true);
            value.doneDeals = value.doneDeals.filter(function (item, pos) {return value.doneDeals.indexOf(item) == pos});
        })
        dispatch(clearUsers())
        dispatch(done(users))
    }
}

export function clearUsers(){
    return{
        type: CLEAR_USERS
    }
}

export function done(users){
    return{
        type: DONE,
        users
    }
}

//RETURN TO ALL
export function returnToAll(dealsListCompleted,dealId,users,userName){
    return(dispatch) =>{
        let deal = null;
        dealsListCompleted.map(value=>{
            if(value.id === dealId){
                value.isDone = false;
                deal = [value];
            }
        })
        const user = users.filter(findUser=>(findUser.name == userName));
        user.map(value=>{
            value.deals = value.deals.concat(deal);
            value.deals = value.deals.filter(function (item, pos) {return value.deals.indexOf(item) == pos});
            value.doneDeals = value.doneDeals.filter(deleteDeal=>(deleteDeal.id != dealId));
            value.activeDeals = value.activeDeals.concat(deal);
            value.activeDeals = value.activeDeals.filter(function (item, pos) {return value.activeDeals.indexOf(item) == pos});
        })
        dispatch(clearUsers())
        dispatch(returnAll(users))
    }
}

export function returnAll(users){
    return{
        type: RETURN_ALL,
        users
    }
}
//DELETE DEAL
export function deleteDeal(users,dealId,userName){
    return(dispatch) =>{
        const user = users.filter(findNeedUser=>findNeedUser.name == userName);
        user.map(value=>{
            value.deals = value.deals.filter(deleteDeal => deleteDeal.id != dealId)
        })
        dispatch(clearUsers())
        dispatch(done(users))
    }
}

// FUNCTIONAL SHOW DIFFERENT DEALS (ALL, ACTIVE, COMPLETED)
    // ALL DEALS
    export function showAllDeals(){
        return{
            type: SHOW_ALL_DEALS
        }
    }
    // ACTIVE DEALS
    export function showActiveDeals(){
        return{
            type: SHOW_ACTIVE_DEALS
        }
    }
    // COMPLETED DEALS
    export function showCompletedDeals(){
        return{
            type: SHOW_COMPLETED_DEALS
        }
    }

// FUNCTIONAL CLEAR DIFFERENT DEALS (ALL, COMPLETED)
    // CLEAR ALL
    export function clearAllDeals(users,userName){
        return(dispatch) =>{
            const user = users.filter(findNeedUser=>findNeedUser.name == userName);
            user.map(value=>{
                value.deals = []
            })
            dispatch(clearUsers())
            dispatch(clearAll(users))
        }
    }

    export function clearAll(users){
        return{
            type: CLEAR_ALL,
            users
        }
    }

    // CLEAR COMPLETED
    export function clearCompletedDeals(users,userName){
        return(dispatch) =>{
            const user = users.filter(findNeedUser=>findNeedUser.name == userName);
            user.map(value=>{
                value.doneDeals = []
            })
            dispatch(clearUsers())
            dispatch(clearAll(users))
        }
    }

    export function clearCompleted(){
        return{
            type: CLEAR_COMPLETED
        }
    }