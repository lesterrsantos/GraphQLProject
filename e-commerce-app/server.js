import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema.js";
import { Query } from "./resolvers/Query.js";
import { Product } from "./resolvers/Product.js";
import { Category } from "./resolvers/Category.js";
import { categories, products } from "./db.js";

// String, Int, Float, Boolean
// Array

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
  },
  context: {
    categories,
    products,
  },
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);

// incluir "type": "module", en el package.json para correr con "node server.js"
