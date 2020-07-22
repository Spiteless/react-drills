import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      userInput: "",
      todos: ["1","2","3","4"]
    }
  }

  handleChange(e) {
    let val = e.target.value
    this.setState({ userInput: val})
}

  addItem(e){
    let val = this.state.userInput
    console.log("val=", val)
    let newData = this.state.todos
    newData.push(val)
    this.setState({
      todos: newData,
    })

  }
  // addData(e){
  //   console.log(e)
  //   let newData = this.state.data
  //   newData.push(e)
  //   this.setState({
  //       data: newData
  //   })
// }



  render(){
    return (
      <div className="App">
        <h1>Todo List:</h1>
        <input onChange= { (e) => this.handleChange(e) }/>
        <button onClick= { (e) => { this.addItem(e) }} > Add </button>
        <Todo todos={this.state.todos}></Todo>
      </div>
    );
  }
}

export default App;
