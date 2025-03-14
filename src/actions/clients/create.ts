import { FastifyReply, FastifyRequest } from 'fastify';
import Client from '../../models/client';

type Request = FastifyRequest<{
  Body: {
    name: string,
    email: string
  }
}>;

export default async ({body: {name, email}}: Request, reply: FastifyReply) =>
  Client.query()
    .insert({name, email})
    .then(user => reply.send(user))
    .catch(error => reply.send(error));