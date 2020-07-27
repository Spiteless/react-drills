
import React from 'react';
import Todo from "./Todo";

export default class List extends React.Component {
  render() {
    let list = this.props.todos.map((element, index) => {
      return <Todo key={index} task={element} />;
    });
    
    return(

        <div className = "todo-item">
            <ul>
            { list }
            </ul>
        </div>

        )
  }
}