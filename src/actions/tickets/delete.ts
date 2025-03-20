import { FastifyRequest } from 'fastify';
import Ticket from '../../models/ticket';

type Request = FastifyRequest <{
  Params: {
    id: number
  }
}>;

export default async (
  {params: {id}}: Request,
) => Ticket.query().deleteById(id);