export const flagReducer = (state = false, action) => {
    switch (action.type) {
        case 'TRUE': {
            return true
        }
        default: {
            return false
        }
    }
}