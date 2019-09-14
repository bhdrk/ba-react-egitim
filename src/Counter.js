import React from 'react'

export default class Counter extends React.Component {

    state = {
        number: 0
    }

    constructor(props){
        super(props);
        this.dec = this.dec.bind(this);
        this.inc = this.inc.bind(this);
    }

    inc() {
        this.setState({
            number: this.state.number + 1
        })
    }

    dec() {
        this.setState({
            number: this.state.number - 1
        })
    }

    render() {
        console.log('RENDER...')
        return (
            <div>
                <div>COUNT: {this.state.number} </div>
                <button onClick={this.dec}>-</button>
                <button onClick={this.inc}>+</button>
            </div>
        )
    }
}
