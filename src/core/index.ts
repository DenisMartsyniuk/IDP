import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  NormalizedCacheObject
} from "@apollo/client";

const link = createHttpLink({ uri: "https://api.graphql.jobs/" });
const cache = new InMemoryCache();

const client = new ApolloClient<NormalizedCacheObject>({
  link,
  cache
});

export default client;
