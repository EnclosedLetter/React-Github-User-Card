import React from "react";
import UserCard from "./UserCard"

function Followers(props){
    console.log(props)
    return (
        <div>
                <h2>{props.data.name}</h2>
                <img src={props.data.avatar_url}/>
                <p>Handle: {props.data.login} </p>
                <p>Followers: {props.data.followers} </p>
                
        </div>
    )
}
export default Followers;
