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

export function handleSubmitUser(valueName,valueEmail,valuePass,users){
    return(dispatch) =>{
        event.preventDefault();
        let register = true;
        let existName = false;
        let existEmail = false;
        if(valueName == ""){
            alert("please type name");
        }else if (valueEmail == ""){
            alert("Please type email");
        }else if (valuePass == ""){
            alert("Please type password")
        }else{
        users.map(value=>{ 
            if(valueName == value.name){
                register = false;
                existName = true;
            }else if(valueEmail == value.email){
                register = false;
                existEmail = true;
            }
        })
        if(existName){
            alert("This name is already exist, please change it");
        }
        if(existEmail){
            alert("This email is already register, please change it");
        }
        if(register){
            const user={};
            user["name"] = valueName;
            user["email"] = valueEmail;
            user["pass"] = valuePass;
            user["id"] = Math.floor(Math.random() * 1000) + 1;
            user["deals"] = [];
            user["activeDeals"] = [];
            user["doneDeals"] = [];
            dispatch(addUser(user));
            window.location.href = "/";
        }
    }
  }
}

export function addUser(user){
    return{
        type: ADD_USER,
        user
    }
}
