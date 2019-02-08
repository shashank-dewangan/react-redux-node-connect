import {createReducer, createStore, applyMiddleware} from 'redux'
import {productReducer} from './Products'
import thunk from 'thunk'
var reducer = createReducer(productReducer)
var middleWare = applyMiddleware(thunk)
var store = createStore(reducer, middleWare)

export default store;