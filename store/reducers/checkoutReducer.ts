import types from '../action/actionTypes'

const { SET_PROMO } = types

const checkoutReducer = (state: { type: string; price: number } = { type: '', price: 0 }, action) => {
	
    
    switch (action.type) {


		case SET_PROMO:

			return  {...action.payload}

		default:
			return state
	}
}

export default checkoutReducer
