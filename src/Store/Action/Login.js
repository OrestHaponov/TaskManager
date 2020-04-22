import {HANDLE_CHANGE_EMAIL_LOGIN,HANDLE_CHANGE_PASS_LOGIN,CLEAR_LOGIN_FORM,LOGIN} from "../Action/ActionTypes";

export function handleChangeEmailLogin(valueEmailLogin){
    return{
        type: HANDLE_CHANGE_EMAIL_LOGIN,
        valueEmailLogin
    }
}

export function handleChangePassLogin(valuePassLogin){
    return{
        type: HANDLE_CHANGE_PASS_LOGIN,
        valuePassLogin
    }
}

export function login(valueEmailLogin,valuePassLogin,users){
    return(dispatch) =>{
       event.preventDefault();
       let userName = null;
       users.map(value =>{
           if(value.email == valueEmailLogin && value.pass == valuePassLogin){
               userName = value.name;
               window.location.href = "/";
           }
       })
       dispatch(userLogin(userName));
    }
}

export function userLogin(userName){
    return{
        type: LOGIN,
        userName
    }
}
export function clearLoginForm(){
    return{
        type: CLEAR_LOGIN_FORM
    }
}

