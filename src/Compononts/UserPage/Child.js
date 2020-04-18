import React from "react";
import {
  useParams
} from "react-router-dom";
import UserPage from "./UserPage"

export default function Child() {
    let {name} = useParams();
  return (
    <div>
        <h1> { name }'s list</h1>
        <UserPage userName={name}/>
    </div>
  );
}

