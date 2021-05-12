import Head from 'next/head'
import Navigation from '../ui/Navigation'

import renderSlice from '../utils/renderSlice'

import { useState } from 'react'

import {useRouter} from 'next/router'

import Hero from '../ui/Hero'
import Card from '../ui/Card'
import Footer from '../ui/Footer'

export default function Home({ data }) {
	const [hero, setHero] = useState({
		isbn: 'c30968db-cb1d-442e-ad0f-80e37c077f89',
		title: 'Henri Potier et la Coupe de feu',
		price: 29,
		cover: 'https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp3.jpg?alt=media',
		synopsis: [
			"Juste avant d'assister à la coupe du Monde de Quidditch opposant les équipes d'Irlande et de Bulgarie, Henri Potier fait un rêve étrange dans lequel il est témoin du meurtre d'un vieux jardinier moldu par Voldemort, alors que le jardinier surprenait une conversation au sujet de Henri.",
		]
	})

	const router = useRouter()



	return (
		<div className='flex flex-col overflow-x-hidden'>
			<Head>
				<title>Henri potier | livres Best Promo</title>
				<meta
					name='description'
					content='Henry potier, le hero formidable'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<header className='mx-auto relative w-screen overflow-x-hidden'>
				<Navigation />

				<Hero {...hero} />
			</header>

			<main className='container mx-auto py-12'>
				<h2>La collection Harry Potier</h2>
				<div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-6'>
					{data.map((book: {}, index) => (
						<div key={index}>
							<Card {...book} />
						</div>
					))}
				</div>
			</main>

			<Footer />
		</div>
	)
}

export async function getStaticProps(context) {
	const res = await fetch('http://localhost:3000/api/fetchBooks')

	const data = await res.json()

	return {
		props: {
			data,
		},
	}
}
