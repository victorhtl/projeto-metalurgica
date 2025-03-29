import { FastifyReply, FastifyRequest } from 'fastify';
import Budget, { BudgetStatus } from '../../models/budget';

type Request = FastifyRequest <{
  Body: {
    short_description: string,
    description: string,
    price: number,
    status: BudgetStatus | undefined
  }
}>;

export default async (
  {body: { short_description, description, price, status}}: Request,
  reply: FastifyReply
) => 
  Budget.query()
    .insert({short_description, description, price, status})
    .then(budget => reply.send(budget))
    .catch(error => reply.send(error));