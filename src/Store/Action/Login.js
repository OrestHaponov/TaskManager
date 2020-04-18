import {HANDLE_CHANGE_EMAIL_LOGIN,HANDLE_CHANGE_PASS_LOGIN,CLEAR_LOGIN_FORM} from "../Action/ActionTypes";
import { useHistory } from "react-router-dom";

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
       let history = useHistory();
       users.map(value =>{
           if(value.email == valueEmailLogin && value.pass == valuePassLogin){
            history.push("/");
           }else{
               alert("Wrong email or password")
           }
       })
    }
}

export function clearLoginForm(){
    return{
        type: CLEAR_LOGIN_FORM
    }
}

