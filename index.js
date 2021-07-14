import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

const schema = gql(`
type Result {
    message: String
    date: String
}
type Query {
    helloWorld: Result
}
`);

const resolvers = {
  Query: {
    helloWorld: () => {
      return {
        message: "Hello world",
        date: Date.now(),
      };
    },
  },
};

const app = express();
const server = new ApolloServer({ typeDefs: schema, resolvers });
server.applyMiddleware({ app });

app.listen("3030", () =>
  console.log(`Running on Port 3030${server.graphqlPath}`)
);
