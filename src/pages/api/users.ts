import { NextApiRequest, NextApiResponse } from 'next';
export default async (_request: NextApiRequest, response: NextApiResponse): Promise<any> => {
  const users = [{ id: 1, name: 'Felipe Fadoni' }];
  return response.status(200).json(users);
};
