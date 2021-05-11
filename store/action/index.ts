import types from './actionTypes'




export const addToCart = product => {
	const { ADD_CART } = types

	return {
		type: ADD_CART,
		payload: product,
	}
}


export const deleteToCart = index => {
	const { DELETE_FROMCART } = types

	return {
		type: DELETE_FROMCART,
		payload: index,
	}
}