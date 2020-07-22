import React from 'react';

export default class LoginPage extends React.Component {
    constructor(){
        super();
        this.state = {
            username: "",
            userpass: "",
        }
    }

    submitLogin(input) {
        window.alert(this.state.username + " " + this.state.userpass)
    }

    handleChange(e) {
        let id = e.target.id
        let val = e.target.value


        console.log(id, typeof id, val, typeof val)

        if (id === "username") {this.setState({"username": val})}
        if (id === "userpass") {this.setState({"userpass": val})}
        console.log(`${this.state.username}, ${this.state.userpass}`)
    }   

render(){
    // let displayLogin = [this.state.username, this.state.userpass].map(el => (
    //     <h3>{el}</h3>
    // ))
    
    return (
        <div>
            Username: <input id="username" onChange= { (e) => this.handleChange(e) }/>
            Password: <input id="userpass" onChange= { (e) => this.handleChange(e) }/>
            
            <button onClick= { () => { this.submitLogin() }}>Login</button>
            {/* { displayLogin } */}
        </div>
      )
    }
}
