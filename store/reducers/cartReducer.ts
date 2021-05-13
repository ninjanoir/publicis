
import types from '../action/actionTypes'

const {ADD_CART, DELETE_FROMCART} = types

import {Props} from '../../ui/Card'


const cartReducer = (state: Props[] = [] , action: { type: any; payload: string }) => {

switch (action.type) {
    case ADD_CART:
        
        return [...state, action.payload]

    case DELETE_FROMCART:

    const newState = state.filter(p => p.isbn !== action.payload)
        
        return [...newState]


    default:
        return state
}

}

export default cartReducer