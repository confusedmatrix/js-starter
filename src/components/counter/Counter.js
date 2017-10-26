import React from 'react'

import CounterButtons from './CounterButtons'

export class Counter extends React.Component {
    render() {
        return (
            <div>
                <h1>Counter</h1>
                {this.props.count}
                <CounterButtons
                    increment={this.props.incrementCounter}
                    decrement={this.props.decrementCounter}
                    reset={this.props.resetCounter} />
            </div>
        )
    }
}

export default Counter