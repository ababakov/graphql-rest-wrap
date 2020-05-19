// from https://github.com/relay-tools/relay-local-schema
import { graphql } from 'graphql';

interface CreateFetchArguments {
  schema: any
  rootValue?: any
  contextValue?: any
}

export default function createFetch({ schema, rootValue, contextValue }: CreateFetchArguments) {
  return function fetchQuery(operation:any, variables:any) {
    return graphql(
      schema,
      operation.text,
      rootValue,
      contextValue,
      variables,
    ).then((payload:any) => {
      if (payload.errors) {
        throw new Error(payload.errors);
      }

      return payload;
    });
  };
}