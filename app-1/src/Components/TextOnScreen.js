import React, {Component} from 'react';

export default  class TextOnScreen extends Component {
    constructor(){
        super();
        this.state = {
            message: 'Type something!',
        }
    }

    handleChange(e){
        this.setState({
            message: e.target.value
        })
        console.log(this.state)
    }

    render(){
        return (
            <div>
                <h1> { this.state.message } </h1>
                <input onChange={(e) => this.handleChange(e)}/>
            </div>
    )}
}

