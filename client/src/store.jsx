// import {configureStore} from '@reduxjs/toolkit'
import { combineReducers, applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productHomeReducer,
  // productDetailsReducer
} from './redux/productsReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  productHome: productHomeReducer,
  // productDetails: productDetailsReducer
})

const initialState = {}
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
