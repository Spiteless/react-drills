import React from 'react'

class Todo extends React.Component{
    constructor(){
        super();
        this.state = {
            
        }
    }

    render(){
        let todolist = this.props.todos.map( (el) => (
            <li> {el} </li>
        ))
        return(

    <div className = "todo-item">
        <ul>
        { todolist }
        </ul>
    </div>

        )
    }
}

export default Todo

