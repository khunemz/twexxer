import {combineReducers} from 'redux'
import tweetReducer from './tweetReducer'

// for this.props.contact
export default combineReducers({
    tweets: tweetReducer
});
