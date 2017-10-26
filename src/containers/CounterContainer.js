import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
    incrementCounter,
    decrementCounter,
    resetCounter,
} from '../store/actions/counterActions'
import Counter from '../components/counter/Counter'

const mapStateToProps = state => ({
    count: state.counter.count,
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        incrementCounter,
        decrementCounter,
        resetCounter,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)