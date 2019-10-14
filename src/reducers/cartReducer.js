
export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            return [...action.payload]
        }
        case 'SET_ITEMS': {
            return [...action.payload]
        }
        case 'REMOVE_ITEMS': {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}

