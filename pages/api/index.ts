import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  foo: string
}

export default (req:NextApiRequest, res:NextApiResponse<Data>) => {
  res.status(200).json({ foo: 'bar' });
};
