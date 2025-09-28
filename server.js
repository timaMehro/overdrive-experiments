import { createServer } from "http";
import { createSchema, createYoga } from "graphql-yoga";


const cars = [
  { id: "1", type: "SUV", model: "Rav4", location: "Sydney" },
  { id: "2", type: "Sedan", model: "Camry", location: "Brisbane" },
  { id: "3", type: "Hatch", model: "i30", location: "Melbourne" },
  { id: "4", type: "SUV", model: "CX-5", location: "Brisbane" },
  { id: "5", type: "Sedan", model: "Model 3", location: "Sydney" },
];

const typeDefs = `type Car {
    id: ID!
    type: String!
    model: String!
    location: String!
   }

  input CarFilter {
    type: String
    model: String
    location: String
  }

 type Query {
   searchCars(filter: CarFilter) :[Car!]!
 }
`;

//Resolvers

const resolvers = {
  Query: {
    searchCars: (_, { filter = {} }) => {
      return cars.filter((c) => {
        if (filter.type && c.type !== filter.type) return false;
        if (filter.model && c.model !== filter.model) return false;
        if (filter.location && c.location !== filter.location) return false;
        return true;
      });
    },
  },
};

// yogaServer
const yoga = createYoga({
  schema: createSchema({ typeDefs, resolvers }),
  cors: {
    origin: ["http://localhost:5173", " http://127.0.0:5173"],
    credentials: true,
  },
  graphqlEndpoint: "/graphql",
});

// HTTP server
createServer(yoga).listen(4000, () => {
  console.log("GraphQl ready at http://localhost:4000/graphql");
});
