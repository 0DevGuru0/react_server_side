import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { createPersistedQueryLink } from 'apollo-link-persisted-queries';

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, location, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${location}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const queryOrMutationLink = (config = {}) =>
  createPersistedQueryLink({ useGETForHashedQueries: true }).concat(
    new HttpLink({
      ...config,
      credentials: 'same-origin',
    })
  );
export const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };