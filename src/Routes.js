import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Compononts/Join/Login";
import Registration from "./Compononts/Join/Registration";
import Join from "./Compononts/Join/Join";
import UserPage from "./Compononts/UserPage/UserPage";

export default () => (
    <Switch>
        <Route path="/login" exact component={Login}/>
        <Route path="/registration" exact component={Registration}/>
        <Route path="/join" exact component={Join}/>
        <Route path="/:id" exact component={UserPage}/>
    </Switch>
);