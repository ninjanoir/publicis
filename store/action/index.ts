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


export const deleteToCart = (isbn: string) => {
	const { DELETE_FROMCART } = types




	return {
		type: DELETE_FROMCART,
		payload: isbn,
	}
}



export const setPromo = (promo: {type: string; price: number}) => {


	const {SET_PROMO} = types


	return {
		type:SET_PROMO,
		payload: promo,
	}
}