import axios from "axios";

export const setProducts = (data) => {
    return { type: 'SET_PRODUCTS', payload: data }
}

export const startSetProducts = () => {
    return (dispatch) => {
        axios.get('http://localhost:3005/products')
            .then(response => {
                if (response.data[0]._id) {
                    dispatch(setProducts(response.data))
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