import { FastifyInstance } from 'fastify';
import createTicket from '../actions/tickets/create';
import fetchTickets from '../actions/tickets/fetch';
import deleteTicket from '../actions/tickets/delete';

export default async function userRouter(server: FastifyInstance) {
  server.post('/', createTicket);
  server.get('/', fetchTickets);
  server.delete('/:id', deleteTicket);
}