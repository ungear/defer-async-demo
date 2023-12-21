// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  var delay = req.query.delay || 0;
  setTimeout(() => {
    res.status(200).send('console.log("!")')
  }, delay * 1000)
  
}
