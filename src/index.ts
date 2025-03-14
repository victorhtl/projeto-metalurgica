import fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import path from 'path';
import clientRoutes from './routes/clients';
import publicRoutes from './routes/public';
import budgetRoutes from './routes/budgets';

const shouldLog = process.env.NODE_ENV !== 'test';
const server = fastify({ logger: shouldLog });

server.register(fastifyStatic, {
  root: path.join(__dirname, './public')
});
server.register(publicRoutes);
server.register(clientRoutes, { prefix: '/clients' });
server.register(budgetRoutes, { prefix: '/budgets' });

export default server;