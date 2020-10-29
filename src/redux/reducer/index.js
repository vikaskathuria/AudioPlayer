import { combineReducers } from 'redux';
import { loginReducers } from './allReducer';


export default combineReducers({
login:loginReducers
})