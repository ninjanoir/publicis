import { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'

import Chariot from '../ui/Chariot'

const Navigation = () => {
	const [open, setOpen] = useState(false)
	const state = useSelector(state => state.cart)

	const toggle = () => {
		setOpen(!open)

		console.log(open)
	}

	useEffect(() => {
		const cart = document.querySelector('#chariot')

		if (open) {
			console.log(cart.classList)

			cart.classList.value =
				'p-5 absolute z-50 top-15 right-0 transform -translate-x-80 translate-y-12 md:transle-x-60 xs:translate-x-40'
		}

		return () => {}
	}, [open])

	return (
		<>
			<Chariot />

			<nav className='bg-white shadow mt-5'>
				<div className='container mx-auto px-6 py-3 md:flex md:justify-between md:items-center'>
					<div className='flex justify-between items-center'>
						<div>
							<a
								className='text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700'
								href='#'>
								Publicis
							</a>
						</div>

						{/* Mobile menu button */}
						<div className='flex md:hidden'>
							<button
								type='button'
								className='text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600'
								aria-label='toggle menu'>
								<svg
									viewBox='0 0 24 24'
									className='h-6 w-6 fill-current'>
									<path
										fillRule='evenodd'
										d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'></path>
								</svg>
							</button>
						</div>
					</div>

					{/* Mobile Menu open: "block", Menu closed: "hidden" */}
					<div className='md:flex items-center'>
						<div className='flex flex-col md:flex-row md:mx-6'>
							<a
								className='my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0'
								href='#'>
								Contact
							</a>
						</div>

						<div
							className='flex flex-row-reverse ml-2 w-full cursor-pointer'
							onClick={toggle}>
							<div slot='icon' className='relative'>
								<div className='absolute text-xs rounded-full -mt-1 -mr-2 px-1 font-bold top-0 right-0 bg-red-700 text-white'>
									{state.length}
								</div>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='100%'
									height='100%'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='feather feather-shopping-cart w-6 h-6 mt-2'>
									<circle cx='9' cy='21' r='1'></circle>
									<circle cx='20' cy='21' r='1'></circle>
									<path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6'></path>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navigation
