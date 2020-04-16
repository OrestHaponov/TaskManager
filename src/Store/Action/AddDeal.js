import {HANDLE_CHANGE,ADD_DEAL,CLEAR_ALL,DELETE_DEAL,SHOW_ALL_DEALS,SHOW_ACTIVE_DEALS,SHOW_COMPLETED_DEALS,DONE,CLEAR_COMPLETED,TOGGLE,RETURN_DEAL} from "./ActionTypes"

// FUNCTIONAL TO ADD DEALS
 
export function handleChange(value){
    return{
        type: HANDLE_CHANGE,
        value
    }
}

export function typeDeal(deal,dealsListActive){
    return (dispatch) =>{
    const deals = {}
    deals["text"] = deal;
    deals["isDone"] = false;
    deals["id"] = Math.floor(Math.random() * 1000) + 1;
        if(deal == "" || deal == " "){
            alert("Please type deal");
        }else{
            dispatch(addDeal(deals));
            dealsListActive.push(deals)
        }
    }
} 

export function addDeal(deals){
    return{
        type: ADD_DEAL,
        deals
    }
} 

// FUNCTIONAL WITHS ADDED DEALS
    //DELETE DEAL
    export function deleteDeals(deals,dealId){
        return(dispatch) =>{
            const newDeals = deals.filter(deleteElement=>deleteElement.id != dealId);
            dispatch(deleteDeal(newDeals));
        }
    }
    
    export function deleteDeal(newDeals){
        return{
            type: DELETE_DEAL,
            newDeals
        }
    }

    //DONE DEAL
    export function doneDeals(deals,dealId,dealsListCompleted){
        return(dispatch) =>{
            deals.map(value=>{
                if(value.id === dealId){
                    value.isDone = !value.isDone
                }
            })
            const active = deals.filter(active=>active.isDone === false);
            const allCompleted = dealsListCompleted.concat(deals);
            const completed = allCompleted.filter(completed=>completed.isDone === true);
            const filterCompleted = completed.filter(function (item, pos) {return completed.indexOf(item) == pos});
            dispatch(doneDeal(deals,active,filterCompleted));
        }
    }
    
    export function doneDeal(deals,active,filterCompleted){
        return{
            type: DONE,
            deals,active,filterCompleted
        }
    }
    
    export function returnToAll(dealsListCompleted,dealId,deals){
        return(dispatch) =>{
            let deal = null;
            dealsListCompleted.map(value=>{
                if(value.id === dealId){
                    value.isDone = false;
                    deal = [value];
                }
            })
            const newDeals = deals.concat(deal);
            const filteredDeals = newDeals.filter(function (item, pos) {return newDeals.indexOf(item) == pos});
            console.log(filteredDeals)
            dealsListCompleted = dealsListCompleted.filter(deleteElement=>deleteElement.id != dealId);
            dispatch(returnDeal(filteredDeals,dealsListCompleted))
        }
    }
    
    export function returnDeal(filteredDeals,dealsListCompleted){
        return{
            type: RETURN_DEAL,
            filteredDeals,dealsListCompleted
        }
    }
// FUNCTIONAL SHOW DIFFERENT DEALS (ALL, ACTIVE, COMPLETED)
    // ALL DEALS

    export function showAllDeals(){
        return{
            type: SHOW_ALL_DEALS
        }
    }

    export function showActiveDeals(){
        return{
            type: SHOW_ACTIVE_DEALS
        }
    }

    export function showCompletedDeals(){
        return{
            type: SHOW_COMPLETED_DEALS
        }
    }

    //CLEAR DEALS (ALL,ACTIVE,COMPLETED)
        export function clearAll(){
            return{
                type: CLEAR_ALL
            }
        }

        export function clearCompleted(){
            return{
                type: CLEAR_COMPLETED
            }
        }

//TOOGLE DEALS

export function toggle(){
    return{
        type: TOGGLE
    }
}