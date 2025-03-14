import { FastifyInstance } from 'fastify';
import createBudget from '../actions/budgets/create';

export default async function userRouter(server: FastifyInstance) {
  server.post('/', createBudget);
}