import Head from 'next/head'


import Chariot from './../ui/Chariot'

interface Props {
	res: {
		isbn: string
		title: string
		price: number
		cover: string
		synopsis: string[]
	}[]
}

export default function Home({ data }) {

console.log(data)


	return (
		<div className="flex flex-col">
			<Head>
				<title>Henri potier | livres Best Promo</title>
				<meta
					name='description'
					content='Henry potier, le hero formidable'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<header className='container mx-auto'>
				<h1 className='text-5xl'>New Collection</h1>

        {/* Chariot */}
        <Chariot />
			</header>

			<main className=''>main</main>

			<footer>footer</footer>
		</div>
	)
}

export async function getStaticProps(context) {
	const res = await fetch('http://localhost:3000/api/fetchBooks')

	const data: Props = await res.json()

	return {
		props: {
			data,
		},
	}
}
