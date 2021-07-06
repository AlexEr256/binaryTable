import {createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import binaryTableReducer from './binaryTable/reducer';
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    binaryTableReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));


export default store;