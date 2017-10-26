// import "babel-polyfill" only uncomment this if strictly necessary
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Store from './store/createStore'
import Counter from './containers/CounterContainer'
import './styles/main.scss'

const store = Store()
const MOUNT_NODE = document.getElementById('root')

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <div style={{height: "100%"}}>
                <Counter />
            </div>
        </Provider>,
        MOUNT_NODE
    )
}

render()
