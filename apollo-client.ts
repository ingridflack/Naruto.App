import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://narutoql.up.railway.app/graphql",
  cache: new InMemoryCache(),
});

export default client;
