import { NextApiRequest, NextApiResponse } from 'next'

//dev utils pour retourner la promotion 

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const url = `https://henri-potier.techx.fr/books/${req.query.isbns}/commercialOffers`

	if (req.method === 'GET') {
		try {
			const response = await fetch(url)

			const data = await response.json()

			res.status(200).send(data)
		} catch (error) {
			res.status(500).send('something went wrong')

			console.error(error)
		}
	} else {
		throw new Error('only request GET allow')
	}
}
