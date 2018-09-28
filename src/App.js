import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      pictureURL: '',
      friends: [{ name: 'T$', pictureURL: 'http://http.cat/404' }]
    }, 
    this.updateName = this.updateName.bind(this);
    this.updatepictureURL = this.updatepictureURL.bind(this);
    this.addFriend=this.addFriend.bind(this);
  }
  updateName(event){
    console.log(event.target.value);
    this.setState({
      name: event.target.value,});
  }
  updatepictureURL(event){
    console.log(event.target.value);
    this.setState({
        pictureURL: event.target.value});
    }
        addFriend() {
          const newFriend = { name: this.state.name, pictureURL: this.state.pictureURL };
          // DO NOT MUTATE STATE DIRECTLY!!!
          // this.state.friends.push();
          const friendsCopy = this.state.friends.slice();
          friendsCopy.push(newFriend);
          this.setState({
             friends: friendsCopy,
             name: '', 
             pictureURL: '',
          });
        }
        
    
  
  render() {
    const name = this.state.name;
    const pictureURL = this.state.pictureURL;
    const friends =this.state.friends;

    console.log("this.state", this.state)
    return (
      <div>
         <button onClick= {this.addFriend}>Add Friend </button>
        <div> Name: <input value = {name} onChange={event => this.setState({name:event.target.value})} />{name}</div> 
        <div> picture URL: <input value = {pictureURL} onChange={this.updatepictureURL}/>{pictureURL}</div>
        <div>Friends: {friends.map(friend => {
          return <div>
            Name: {friend.name}{' '}
            Picture: <img src={friend.pictureURL} />
          </div>
        })}</div>

      
       
      </div>
    );
  }
}

export default App;
