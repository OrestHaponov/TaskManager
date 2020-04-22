import {CLEAR_USERS,DONE,SHOW_ALL_DEALS,SHOW_ACTIVE_DEALS,SHOW_COMPLETED_DEALS,CLEAR_ALL,CLEAR_COMPLETED,RETURN_ALL,SHOW_EDIT_FORM,HANDLE_CHANGE_EDIT,CHANGE_EDIT_VALUE,EDITED_DEALS,HANDLE_CHANGE_SHARE,SHOW_SHARE_FORM,SHARE,CLEAR_SHARE_VALUE} from "./ActionTypes";

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

//EDIT DEAL
    //SHOW EDIT FORM
    export function showEdit(users,userName,dealId,dealText){
        return(dispatch) =>{
            const user = users.filter(findNeedUser=>findNeedUser.name == userName);
            user.map(value=>{
                value.deals.map(value=>{
                    value.edit = false
                    value.share = false;
                    if(value.id == dealId){
                        value.edit = true;
                    }
                })
            })
            dispatch(clearUsers())
            dispatch(changeEditValue(dealText))
            dispatch(showEditForm(users))
        }
    }

    export function changeEditValue(dealText){
        return{
            type: CHANGE_EDIT_VALUE,
            dealText
        }
    }
    export function showEditForm(users){
        return{
            type: SHOW_EDIT_FORM,
            users
        }
    }

    //CHANGE DEAL TEXT
    
    export function editDealText(users,userName,dealId,valueEdit){
        return(dispatch) =>{
            event.preventDefault();
            if(valueEdit == ""){
                alert("You have to type something");
            }else{
                const user = users.filter(findNeedUser=>findNeedUser.name == userName);
                user.map(value=>{
                    value.deals.map(value=>{
                        if(value.id == dealId){
                            value.text = valueEdit
                            value.edit = false;
                        }
                    })
                })
                dispatch(clearUsers())
                dispatch(editedDeal(users))
            }
        }
    }

    export function hadleChangeEdit(valueEdit){
        return{
            type: HANDLE_CHANGE_EDIT,
            valueEdit
        }
    }

    export function editedDeal(users){
        return{
            type: EDITED_DEALS,
            users
        }
    }

//SHARE DEAL
    //SHOW SHARE FORM
    export function shareDeal(users,userName,dealId){
        return(dispatch) =>{
            const user = users.filter(findNeedUser=>findNeedUser.name == userName);
            user.map(value=>{
                value.deals.map(value=>{
                    value.share = false;
                    value.edit = false;
                    if(value.id == dealId){
                        value.share = true;
                    }
                })
            })
            dispatch(clearUsers())
            dispatch(showShareForm(users))
        }
    }

    export function showShareForm(users){
        return{
            type: SHOW_SHARE_FORM,
            users
        }
    }

    export function hadleChangeShare(valueShare){
        return{
            type: HANDLE_CHANGE_SHARE,
            valueShare
        }
    }

    //SHARE DEAL
    
    export function shareDealText(users,userName,dealId,valueShare){
        return(dispatch) =>{
            event.preventDefault();
            const user = users.filter(findNeedUser=>findNeedUser.name == userName);
            let deal = null
                user.map(value=>{
                    value.deals.map(value=>{
                        if(value.id == dealId){
                            value.share = false;
                            value.isDone = false;
                            deal = value;
                        }
                    })
                })
            if(valueShare == ""){
                alert("Please type user name");
            }else{
                let user = users.filter(findNeedUser=>findNeedUser.name == valueShare);
                if(user.length === 0){
                    alert("user is not defined");
                }else{
                    user.map(value=>{
                        value.deals.push(deal);
                        value.activeDeals.push(deal);
                        value.deals = value.deals.filter(function (item, pos) {return value.deals.indexOf(item) == pos});
                    })
                    dispatch(clearUsers())
                    dispatch(clearShareValue())
                    dispatch(share(users))
                }
            }
        }
    }

    export function clearShareValue(){
        return{
            type: CLEAR_SHARE_VALUE
        }
    }
    export function share(users){
        return{
            type: SHARE,
            users
        }
    }