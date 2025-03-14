import { FastifyReply, FastifyRequest } from 'fastify';
import Budget, { BudgetStatus } from '../../models/budget';

type Request = FastifyRequest <{
  Body: {
    client_id: number,
    short_description: string,
    description: string,
    status: BudgetStatus | undefined
  }
}>;

export default async (
  {body: {client_id, short_description, description, status}}: Request,
  reply: FastifyReply
) => 
  Budget.query()
    .insert({client_id, short_description, description, status})
    .then(budget => reply.send(budget))
    .catch(error => reply.send(error));