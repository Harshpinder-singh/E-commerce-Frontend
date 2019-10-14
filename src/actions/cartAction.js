import axios from 'axios'
import { setTrue } from '../actions/flagAction'

export const addItem = (items) => {
    return { type: 'ADD_ITEM', payload: items }
}

export const setItems = (items) => {
    return { type: 'SET_ITEMS', payload: items }
}

export const removeItem = (items) => {
    return { type: 'SET_ITEMS', payload: items }
}

export const startSetItems = () => {
    return (dispatch) => {
        axios.get('http://localhost:3005/cart', { headers: { 'x-auth': localStorage.getItem('token') } })
            .then(response => {
                dispatch(setItems(response.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const startAddItem = (product) => {
    return (dispatch) => {
        axios.post('http://localhost:3005/cart', product, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                if (response.data[0]._id) {
                    dispatch(addItem(response.data))
                    setTimeout(() => { dispatch(setTrue()) }, 10)
                }
                else {
                    console.log(response.data)
                    window.alert('something went wrong')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

}

export const startRemoveItem = (cartId) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3005/cart/${cartId}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                if (response.data.length > 0) {
                    dispatch(removeItem(response.data))

                }
                else {
                    console.log(response.data)
                    window.alert('something went wrong')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

}