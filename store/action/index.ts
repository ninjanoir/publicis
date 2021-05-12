import types from './actionTypes'

import {Props} from '../../ui/Card'




export const addToCart = (product: Props) => {
	const { ADD_CART } = types


	console.log('form add to cart action',product)

	return {
		type: ADD_CART,
		payload: product ,
	}
}


export const deleteToCart = index => {
	const { DELETE_FROMCART } = types

	return {
		type: DELETE_FROMCART,
		payload: index,
	}
}