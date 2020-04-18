   
import React from "react";
import "./app.scss";
import "../fonts/fonts.scss";
import Routes from "../Routes.js";
import Join from "../Compononts/Join/Join";
import UserList from "../Compononts/UsersList/UsersList";
import UserPage from "../Compononts/UserPage/UserPage";

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="app">
                <UserList />
                {/* <UserPage /> */}
                <Join />
                <Routes />
            </div>
        );
    }
}

export default App;
