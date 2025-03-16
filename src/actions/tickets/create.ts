import { FastifyReply, FastifyRequest } from 'fastify';
import Ticket from '../../models/ticket';

type Request = FastifyRequest<{
  Body: {
    barcode: string,
    date: string,
    value: number
  }
}>;

export default async ({body: {barcode, date, value}}: Request, reply: FastifyReply) =>
  Ticket.query()
    .insert({barcode, date, value})
    .then(ticket => reply.send(ticket))
    .catch(error => reply.send(error));