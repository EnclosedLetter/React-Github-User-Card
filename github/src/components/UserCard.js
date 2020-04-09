import React from "react";

function UserCard(props){
    console.log(props)
    return (
        <div>
                <h2>{props.data.user.name}</h2>
                <img src={props.data.user.avatar_url}/>
                <p>Handle: {props.data.user.login} </p>
                <p>Followers: {props.data.user.followers} </p>
                
        </div>
    )
}
export default UserCard;
