import React, { Component } from "react";

class NewTask extends Component {
  constructor() {
    super();

    this.state = {
    };

  }

  render() {
      const {handleChange, addItem} = this.props
    return (
        <div>
            <input onChange= { (e) => handleChange(e) }/>
            <button onClick= { (e) => { addItem(e) }} > Add </button>
        </div>
    )
  }
}

export default NewTask;