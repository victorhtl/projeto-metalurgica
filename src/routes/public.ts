import { FastifyInstance } from 'fastify';
import indexPage from '../actions/pages/index';

export default async function publicRouter(server: FastifyInstance) {
  server.get('/', indexPage);
}