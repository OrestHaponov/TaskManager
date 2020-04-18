import {CLEAR_USERS,DONE} from "./ActionTypes";

//DONE DEAL
export function doneDeal(users,dealId,userName){
    return(dispatch) =>{
        const user = users.filter(findNeedUser=>findNeedUser.name == userName);
        user.map(value=>{
            value.deals.map(value=>{
                if(value.id === dealId){
                    value.isDone = !value.isDone
                }
            })
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
