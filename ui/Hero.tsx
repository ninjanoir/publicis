import {useDispatch} from 'react-redux'


import {Props} from '../ui/Card'


import {addToCart} from '../store/action/index'

const Hero = (props: Props) => {


const dispatch = useDispatch()


const handleAddToCart = product => {

    return dispatch(addToCart(product))
}

	return (
<div className="min-w-screen flex items-center p-5 lg:p-10 overflow-hidden relative">
    <div className="w-full max-w-6xl rounded bg-white p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative">
                    <img src={props.cover} className="w-3/4 max-h-full relative z-10" alt="" />
                    <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">{props.title}</h1>
                    <p className="text-sm">
                        {props.synopsis.map((s, i) => (
                            <p key={`${s+i}`}>{s}</p>
                        ))}...
                       <a href={`/product/${props.isbn}`} className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">MORE <i className="mdi mdi-arrow-right"></i></a></p>
                </div>
                <div>
                    <div className="inline-block align-bottom mr-5">
                        <span className="text-2xl leading-none align-baseline">€</span>
                        <span className="font-bold text-5xl leading-none align-baseline">{props.price}</span>
                        <span className="text-2xl leading-none align-baseline">.00</span>
                    </div>
                    <div className="inline-block align-bottom">
                        <button onClick={() => handleAddToCart(props)} className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i> ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
	)
}

export default Hero
