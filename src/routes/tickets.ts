import { FastifyInstance } from 'fastify';
import createTicket from '../actions/tickets/create';
import fetchTickets from '../actions/tickets/fetch';

export default async function userRouter(server: FastifyInstance) {
  server.post('/', createTicket);
  server.get('/', fetchTickets);
}