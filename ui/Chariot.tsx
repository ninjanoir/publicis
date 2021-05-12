import { Component } from 'react'
import { connect } from 'react-redux'

import OrderLine from './OrderLine';

import {Props} from '../ui/Card'

class Chariot extends Component<{cart: Props[]}> {


	state = {
		cart: this.props.cart
	}

	componentDidMount() {
		console.log(this.props.cart)
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('prevProps', prevProps)
		console.log('prevState', prevState)

	}

	render() {


		const {cart} = this.props

		return (
			<div
				id='chariot'
				className='p-5 absolute z-50 w-64 top-0 right-0 transform translate-x-60'>
				<div className='flex h-full justify-center'>
					<div className='relative shadow'>

						{cart && cart.map((p, i) => {
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
										Checkout €36.66
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

	console.log(state.cart)
	return {
		cart: state.cart,
	}
}

const mapDispatchToProps = () => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps())(Chariot)
