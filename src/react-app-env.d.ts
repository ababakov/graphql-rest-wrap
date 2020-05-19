/// <reference types="react-scripts" />
declare module 'babel-plugin-relay/macro' {
  export { graphql } from 'react-relay'
}

declare module 'relay-local-schema' {
  export { Network } from 'relay-runtime'
}

declare module 'graphql-relay' {
  export function fromGlobalId(id:any):any;
  export function globalIdField(type:string):any;
  export function nodeDefinitions(
    globalIdToId:(_:string) => any,
    getObjType:(_:any) => string | undefined
  );
}