import {
    applyMiddleware,
    compose,
    createStore,
} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/reducers'

const INITIAL_STATE = {}

const store = () => {
    let middleware = [
        thunk,
        // other middlewares go here
    ]

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        rootReducer,
        INITIAL_STATE,
        composeEnhancers(applyMiddleware(...middleware)),
    )
}

export default store