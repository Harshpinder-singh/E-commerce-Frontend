import axios from 'axios'
import { startSetItems } from './cartAction'


export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}
export const removeUser = () => {
    return {
        type: 'REMOVE_USER'
    }
}

export const startSetUser = (formData) => {
    return (dispatch) => {
        //axios login call here and save token to localstorage
        axios.post('http://localhost:3005/login', formData)
            .then(response => {
                if (response.data._id) {
                    localStorage.setItem('token', response.data.token)
                    dispatch(setUser(response.data))
                    dispatch(startSetItems())
                }
                else {
                    window.alert(response.data)
                }
            })
            .catch(err => {
                console.log('err', err)
            })

    }
}

//logout thunk
export const startRemoveUser = () => {
    return (dispatch) => {
        axios.delete('http://localhost:3005/logout', { headers: { 'x-auth': localStorage.getItem('token') } })
            .then(response => {
                if (response.data.notice) {
                    localStorage.clear()
                    dispatch(removeUser())

                }
                else {
                    window.alert('something went wrong')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
}