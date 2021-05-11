import { Component } from 'react'

interface Test {
	articles: {}[]
	test: number
}

export default class Chariot extends Component<{}, Test> {
	constructor(props: Test) {
		super(props)

		this.state = {
			articles: [],
			test: 0,
		}
	}

	componentDidMount() {
		console.log(this.state)
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('prevProps', prevProps)
		console.log('prevState', prevState)
	}

	render() {
		return (
			<div className='container flex flex-col bg-blue-50 min-h-full max-w-lg'>
				



				<div className="container text-center">
				<button
					className='px-10 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 max-w-xs'
					onClick={() =>
						this.setState(prevState => ({
							...prevState,
							test: prevState.test + 1,
						}))
					}>
					{this.state.test}
				</button>
				</div>

			</div>
		)
	}
}
