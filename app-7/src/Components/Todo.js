import React from 'react'

class Todo extends React.Component{
    constructor(){
        super();
        }

    render(){
      const {task, key} = this.props
        
        return(
          <li> {task} </li>
        )
    }
}

export default Todo

