import type { NextApiRequest, NextApiResponse } from 'next'

type Products = Array<{
  name: string,
  price: number,
  description: string
}>

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Products>
) {
  res.status(200).json([
      {
          name: 'Fruit Cake Cake',
          price: 30,
          description: `This is cherry cake`
      }
  ])
}
