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
       let user = users.filter(findUser=>(findUser.email == valueEmailLogin && findUser.pass == valuePassLogin));
       user.map(value =>{
            dispatch(userLogin(value.name));
       })
       if (user.length != 0){
            window.location.href = "/";
       }else{
           alert("Wrong email or password");
       }
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

