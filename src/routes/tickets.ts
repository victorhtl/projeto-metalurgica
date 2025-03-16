import { FastifyInstance } from 'fastify';
import createTicket from '../actions/tickets/create';

export default async function userRouter(server: FastifyInstance) {
  server.post('/', createTicket);
}