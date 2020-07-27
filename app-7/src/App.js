import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo'
import NewTask from './Components/NewTask'
import List from './Components/List'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      userInput: "",
      todos: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.addItem = this.addItem.bind(this)
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
        <NewTask
          handleChange={this.handleChange}
          addItem={this.addItem}></NewTask>
        <List todos={this.state.todos}></List>
      </div>
    );
  }
}

export default App;
