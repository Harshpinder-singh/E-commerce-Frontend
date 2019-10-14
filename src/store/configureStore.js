import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { userReducer } from "../reducers/userReducer";
import { productsReducer } from '../reducers/productsReducer'
import { cartReducer } from '../reducers/cartReducer'
import { flagReducer } from '../reducers/flagReducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const configureStore = () => {


    const store = createStore(combineReducers({
        user: userReducer,
        products: productsReducer,
        cart: cartReducer,
        flag: flagReducer
    }), composeEnhancers(
        applyMiddleware(thunk)
    ))
    return store

}

export default configureStore