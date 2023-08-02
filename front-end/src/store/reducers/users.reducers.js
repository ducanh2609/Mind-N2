export const user = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER':
            console.log('user', action.payload)
            return { ...action.payload }
        default:
            return state
    }
} 

