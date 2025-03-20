import { FastifyInstance } from 'fastify';
import createBudget from '../actions/budgets/create';
import fetchBudget from '../actions/budgets/fetch';
import deleteBudget from '../actions/budgets/delete';

export default async function userRouter(server: FastifyInstance) {
  server.post('/', createBudget);
  server.get('/', fetchBudget);
  server.delete('/:id', deleteBudget);
}