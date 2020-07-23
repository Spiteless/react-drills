import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo'
import List from './Components/List'
import NewTask from './Components/NewTask'

class App extends React.Component {
  constructor(){
    super();
    // this.state = {
    //   todo-items: [1,2,3,4]
    // }
    this.state = {
      userInput: "",
      todos: ["1","2","3","4"]
    }
  }

  redner(){
    return (
      <div className="App">
        beef
        {/* <Todo></Todo> */}
        {/* <NewTask></NewTask> */}
        <List/>

      </div>
    );
  }
}

export default App;

//App
  //handles all interactions
//
  //components/NewTask
    //Responsible for adding to todo items

  //components/Todo
    //holds todo items
  //component/List
    //lists todo items

/* #6
Create an app that displays a to-do list. You will need two components, the `App` component and a `Todo` component. The `App` component should be responsible for getting new tasks and storing the list of tasks. The `Todo` component should be responsible for displaying the individual tasks from the `App` component. The `App` component should create a list of 'Todo' components passing down a `task` into the `Todo` component as a prop and display the list.

#7
Create an app similiar to question #6, except this time add a new third component called `NewTask`. `NewTask` should be responsible for adding a new task to a `task array` on the `App` component. Also add a new fourth component called `List`. `List` should be responsible for display the tasks inside of a `task array` on the `App` component in a list-like fashion.

*/