// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {NextApiRequest, NextApiResponse} from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const url = 'https://henri-potier.techx.fr/books'
  // res.status(200).json({ name: 'John Doe' })



  try {
    const response = await fetch(url)

    const data = await response.json()

    res.status(200).send(data)
    
  } catch (error) {

    console.error(error)
    
  }



}
