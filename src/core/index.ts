import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  NormalizedCacheObject
} from "@apollo/client";
import gql from "graphql-tag";

import { BASE_API } from "../constants";

const link = createHttpLink({ uri: BASE_API });
const cache = new InMemoryCache();

const typeDefs = gql`
  extend type Job {
    checked: Int
  }
`;

const resolvers = {
  Job: {
    checked() {
      return false;
    }
  }
};

const client = new ApolloClient<NormalizedCacheObject>({
  link,
  cache,
  resolvers,
  typeDefs
});

export default client;
