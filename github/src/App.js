import React from 'react';
import './App.css';
import CardList from "./components/CardList";
import axios from "axios"

class App extends React.Component{

  constructor(){
    super();
    this.state={ //this will always be an object
      user: [], //our user data
      followers: [], //our followers data
    }
  }

  componentDidMount(){ //it's going to run the block of code, lifecycle methods are like useEffect, you will run your axios call here
  axios
    .get("https://api.github.com/users/enclosedletter")
    .then(response => {
        this.setState({
          user: response.data
        })
    })
    .catch(err => console.error(err))
  axios
    .get("https://api.github.com/users/enclosedletter/followers")
    .then(response => {
        this.setState({
          followers: response.data
        })
    })
    .catch(err => console.error(err))
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <h1>Github User Info</h1>
        <CardList data={this.state} />
      </div>
    )
  }
}

export default App;