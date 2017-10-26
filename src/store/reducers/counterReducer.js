import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    RESET_COUNTER,
} from '../actions/counterActions'

const INITIAL_STATE = {
    count: 0,
}

export const counterReducer = (state = INITIAL_STATE, action) => {
    const reducer = {
        [INCREMENT_COUNTER]: () => ({
            ...state,
            count: state.count + 1,
        }),
        [DECREMENT_COUNTER]: () => ({
            ...state,
            count: state.count - 1
        }),
        [RESET_COUNTER]: () => ({
            ...state,
            count: INITIAL_STATE.count
        })
    }

    return action.type in reducer ? reducer[action.type]() : state;
}

export default counterReducer