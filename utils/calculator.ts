
import { compare } from './compare'

/**
 *
 * @param state is the content of the cart
 * @returns amount of the checkout
 */

export const calculator = async (cart) => {
	const params: string[] = []


	try {
		if (cart.length > 0) {
			for (let index = 0; index < cart.length; index++) {
				let element: string = cart[index].isbn

				params.push(element)
			}

			if (params.length === cart.length) {
				const queryParams = params.join(',')

				const url = `http://localhost:3000/api/${queryParams}/commercialOffers`

				const res = await fetch(url)

				const discountList = await res.json()


				const bestPromo = compare(discountList, cart)

				bestPromo.sort(
					(a: { price: number }, b: { price: number }) => a.price - b.price
				)



				return bestPromo
			}
		} else {
			return
		}
	} catch (error) {
		console.log(error)
	}

	return
}
