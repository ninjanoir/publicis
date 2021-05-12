
import types from '../action/actionTypes'

const {ADD_CART, DELETE_FROMCART} = types


const cartReducer = (state=[], action) => {

switch (action.type) {
    case ADD_CART:


    console.log(action.payload)
        
        return [...state, action.payload]

    case DELETE_FROMCART:
        
        return [...state, action.payload]

    default:
        return state
}

}

export default cartReducer