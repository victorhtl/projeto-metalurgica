import { FastifyInstance } from 'fastify';
import indexPage from '../actions/pages/index';
import postBudgetPage from '../actions/pages/postBudget';
import postTicketPage from '../actions/pages/postTicket';

export default async function publicRouter(server: FastifyInstance) {
  server.get('/', indexPage);
  server.get('/postBudget', postBudgetPage);
  server.get('/postTicket', postTicketPage);
}