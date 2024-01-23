// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'ayoade kayode' })
}

// // api.js
// export const fetchCategories = async () => {
//   const response = await fetch('https://api.careerawesome.com/api/posts/category');
//   const categories = await response.json();
//   return categories;
// };
