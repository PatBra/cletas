import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productReducer, productDetailsReducer } from './reducers/product.Reducers';
import { authReducer } from './reducers/user.Reducers';

const reducer = combineReducers({
products: productReducer,
productsDetails: productDetailsReducer,
auth: authReducer
})

let initialState ={}

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;