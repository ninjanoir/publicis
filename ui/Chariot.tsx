import { Component } from 'react'
import { connect } from 'react-redux'
import { setPromo } from '../store/action/index'

import OrderLine from './OrderLine'

import { Props } from '../ui/Card'

import { calculator } from './../utils/calculator'

type Checkout = { type: string; price: number }

class Chariot extends Component<{ cart: Props[]; checkout: Checkout}> {
	state = {
		cart: this.props.cart,
		checkout: this.props.checkout
		
	}





	updateCheckout(cart){

		console.log('cart', cart)

		const {dispatch} = this.props

		// this.setState({ ...this.state, checkout: state })


		if(cart.length < 1){

			dispatch(setPromo({type: '', price: 0}))


		}else{

			const promo = calculator(cart)

			promo
				.then(response => {
					dispatch(setPromo(response[0]))
				})
				.catch(err => console.log(err))

		}





	}

	componentDidMount() {


		console.log('componentDidMount')

		this.setState({ ...this.state, cart: this.props.cart },() => this.updateCheckout(this.state.cart) )



	}

	componentDidUpdate(prevProps, prevState) {


		const {dispatch} = this.props


		if(prevProps.cart !== this.props.cart){

		const promo = calculator(this.props.cart)


		promo
		.then(response => {
			dispatch(setPromo(response[0]))
		})
		.catch(err => console.log(err))



		this.setState({ ...this.state, cart: this.props.cart })


		}else{

			console.log('no need to update')
		}


	}

	render() {
		const { cart, checkout } = this.props
		return (
			<div
				id='chariot'
				className='p-5 absolute z-50 w-64 top-12 right-0 -mr-60'>
				<div className='flex h-full justify-center'>
					<div className='relative shadow'>
						{cart.length > 0 &&
							cart.map((p, i) => {
								return (
									<p key={i}>
										<OrderLine {...p} />
									</p>
								)
							})}

						<div className='absolute w-full  rounded-b border-t-0 z-10'>
							<div className='shadow-xl w-64 bg-white'>
								<div className='p-4 justify-center flex relative z-50'>
									<button className='text-base  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-700 hover:text-teal-100 bg-teal-100 text-teal-700 border duration-200 ease-in-out border-teal-600 transition'>
										{this.state.cart.length < 1 ? `Prix Promo: €0` :`Prix Promo: €${checkout.price}`}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		cart: state.cart,
		checkout: state.checkout,
	}
}

// const mapDispatchToProps = () => {
// 	return {
// 	}
// }

export default connect(mapStateToProps)(Chariot)
