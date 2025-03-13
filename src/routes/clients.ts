import { FastifyInstance } from "fastify";
import createClient from '../actions/clients/create';

export default async function userRouter(server: FastifyInstance) {
  server.post('/', createClient);
}