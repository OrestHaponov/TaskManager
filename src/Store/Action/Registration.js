import {HANDLE_CHANGE_NAME,HANDLE_CHANGE_EMAIL,HANDLE_CHANGE_PASS,ADD_USER} from "./ActionTypes";

export function handleChangeName(valueName){
    return{
        type: HANDLE_CHANGE_NAME,
        valueName
    }
}

export function handleChangeEmail(valueEmail){
    return{
        type: HANDLE_CHANGE_EMAIL,
        valueEmail
    }
}

export function handleChangePass(valuePass){
    return{
        type: HANDLE_CHANGE_PASS,
        valuePass
    }
}

export function handleSubmitUser(valueName,valueEmail,valuePass){
    return(dispatch) =>{
        event.preventDefault();
        const user={}
        user["name"] = valueName;
        user["email"] = valueEmail;
        user["pass"] = valuePass;
        user["id"] = Math.floor(Math.random() * 1000) + 1;
        user["deals"] = [

            
        ];
        dispatch(addUser(user))
        window.location.href = "/"
    }
}

export function addUser(user){
    return{
        type: ADD_USER,
        user
    }
}
