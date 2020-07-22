import React from 'react'

class ImageComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            imgsrc: ""
        }
    }

    murry() {
        // return require('https://www.fillmurray.com/640/360.jpg'); 
              return (<img 
    src="https://www.fillmurray.com/640/360.jpg"
    alt="new"
    />)
} 

    render(){
        return (
            <div>
                {this.murry()}
            </div>
        )
    }
}

export default ImageComponent