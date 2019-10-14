import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { setUser } from './actions/userActions'
import { startSetProducts } from './actions/productActions'
import { startSetItems } from './actions/cartAction'
import { setItems } from './actions/cartAction'
import configureStore from './store/configureStore'
import axios from 'axios';

const store = configureStore()
const ele = <Provider store={store}>
    <App />
</Provider>
store.dispatch(startSetProducts())
if (localStorage.getItem('token')) {
    axios.get('http://localhost:3005/account', { headers: { 'x-auth': localStorage.getItem('token') } })
        .then(response => {
            store.dispatch(setUser(response.data))
        })
        .catch(err => {
            console.log(err)
        })
    axios.get('http://localhost:3005/cart', { headers: { 'x-auth': localStorage.getItem('token') } })
        .then(response => {

            store.dispatch(setItems(response.data))
        })
        .catch(err => {
            console.log(err)
        })
}





ReactDOM.render(ele, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
