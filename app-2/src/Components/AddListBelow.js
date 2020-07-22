import React, {Component} from 'react';

export default  class TextOnScreen extends Component {
    constructor(){
        super();
        this.state = {
            data: ["this","that","the other"],
            userInput: ''
        }
    }

    handleChange(val) {
        this.setState({ userInput: val})
    }

    addData(e){
        console.log(e)
        let newData = this.state.data
        newData.push(e)
        this.setState({
            data: newData
        })
    }

    render(){
        let mappedArray = this.state.data.map(el => (
            <div>
                <h3>{el}</h3>
            </div>
        ))

        return (
            <div>
                <h1> Things displayed below </h1>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick= { (e) => { this.addData(this.state.userInput) }}> Add to list </button>
                {mappedArray}
            </div>
    )}
}

