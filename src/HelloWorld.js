import React from 'react'

export default class HelloMessage extends React.Component {

    render() {
        const {name, number1, number2, operator} = this.props;
        return (
            <div>
                Hello {name} = {operator(number1, number2)}
            </div>
        );
    }
}
