import express, { Application } from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from './schemas';
import { resolvers } from './resolvers';
import { json } from 'body-parser';

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app: Application = express();

  app.use('/graphql', json(), expressMiddleware(server));

  app.listen({ port: 4000 }, () =>
    console.log('Server ready at http://localhost:4000/graphql')
  );
};

startServer();
