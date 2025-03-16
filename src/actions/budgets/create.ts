import { FastifyReply, FastifyRequest } from 'fastify';
import Budget, { BudgetStatus } from '../../models/budget';

type Request = FastifyRequest <{
  Body: {
    client_id: number,
    short_description: string,
    description: string,
    price: number,
    status: BudgetStatus | undefined
  }
}>;

export default async (
  {body: {client_id, short_description, description, price, status}}: Request,
  reply: FastifyReply
) => 
  Budget.query()
    .insert({client_id, short_description, description, price, status})
    .then(budget => reply.send(budget))
    .catch(error => reply.send(error));