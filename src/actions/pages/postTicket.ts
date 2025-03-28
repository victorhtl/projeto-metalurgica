import { FastifyReply, FastifyRequest } from 'fastify';

export default async (req: FastifyRequest, reply: FastifyReply) => {
  return reply.code(200).sendFile('postTicketPage.html');
};