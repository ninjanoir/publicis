
import { applyDiscount } from './applyDiscount'

/**
 * 
 * @param offers list of discounts
   @returns  All discounts amount
 */

export const compare = (lists, cart) => {

    

	let totalAmount: number = 0

	let promos: {price: number; type: string}[] = []

	for (let index = 0; index < cart.length; index++) {
		let price = cart[index].price

		totalAmount += price
	}

	for (let j = 0; j < lists.offers.length; j++) {
		const currentPromo = lists.offers[j]

		let promo = applyDiscount(currentPromo, totalAmount)

		promos.push(promo)
	}

	if (promos.length === lists.offers.length) {

		return promos
	}

}
