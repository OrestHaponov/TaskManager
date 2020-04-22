import {LOGOUT} from "./ActionTypes";

export function out(){
    return(dispatch) =>{
        dispatch(logout())
        window.location.href = "/";
    }
}

export function logout(){
    return{
        type: LOGOUT
    }
}



