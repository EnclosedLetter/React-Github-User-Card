import React from "react";
import UserCard from "./UserCard";
import Followers from "./Followers"

function CardList(props){
    return (
        <div>
            <UserCard data={props.data}/>
            {props.data.followers.map(item => {
                return <Followers data={item} />
            })}
        </div>
    )
}

export default CardList;
