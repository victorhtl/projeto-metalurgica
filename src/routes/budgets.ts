import { FastifyInstance } from 'fastify';
import createBudget from '../actions/budgets/create';
import fetchBudget from '../actions/budgets/fetch';

export default async function userRouter(server: FastifyInstance) {
  server.post('/', createBudget);
  server.get('/', fetchBudget);
}