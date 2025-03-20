import { FastifyRequest } from 'fastify';
import Budget from '../../models/budget';

type Request = FastifyRequest <{
  Params: {
    id: number
  }
}>;

export default async (
  {params: {id}}: Request,
) => Budget.query().deleteById(id);