const Product = ({ product }) => {


	console.log(product)

return (
	<div>
		hello
	</div>
)

}

export async function getStaticPaths() {
	// Call an external API endpoint to get posts
	const res = await fetch('http://localhost:3000/api/fetchBooks')
	const posts = await res.json()

	// Get the paths we want to pre-render based on posts
	const paths = posts.map(post => ({
		params: { isbn: post.isbn },
	}))

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
	const res = await fetch(`http://localhost:3000/api/fetchBooks`)

	const data = await res.json()


    let product = data.find(el => el.isbn === params.isbn)


	if(!product) {

		product = {}

	}

	console.log(product)


	return {
		props: {
			product,
		},
	}
}

export default Product
