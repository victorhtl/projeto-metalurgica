import { FastifyReply, FastifyRequest } from 'fastify';
import Budget, { BudgetStatus } from '../../models/budget';

type Request = FastifyRequest <{
  Body: {
    short_description: string,
    description: string,
    value: number,
    status: BudgetStatus | undefined
  }
}>;

export default async (
  {body: { short_description, description, value, status}}: Request,
  reply: FastifyReply
) => 
  Budget.query()
    .insert({short_description, description, value, status})
    .then(budget => reply.send(budget))
    .catch(error => reply.send(error));