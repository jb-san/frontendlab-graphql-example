import { createApolloFetch } from "apollo-fetch";
const uri = "http://localhost:3000";
const apolloFetch = createApolloFetch({ uri });

export default apolloFetch;
