import { FastifyReply, FastifyRequest } from "fastify";

export default async (req: FastifyRequest, reply: FastifyReply) => {
  reply.code(201).send({message: 'created'});
}