import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// String, Int, Float, Boolean
// Array

const typeDefs = `#graphql
  type Query {
    hello: String! #Always the returned value must be a string
    numberOfAnimals: Int
    price: Float
    isCool: Boolean,
    words: [String!]!
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "World!!!!!";
    },
    numberOfAnimals: () => {
      return 55;
    },
    price: () => {
      return 2314.5689;
    },
    isCool: () => {
      return false;
    },
    words: () => {
      return ["animals", "fruits", "mother"];
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);

// incluir "type": "module", en el package.json para correr con "node server.js"
