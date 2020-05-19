/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MoviesListQueryVariables = {||};
export type MoviesListQueryResponse = {|
  +movies: ?$ReadOnlyArray<?{|
    +id: string,
    +title: string,
    +year: number,
    +actors: $ReadOnlyArray<{|
      +id: string,
      +name: string,
    |}>,
  |}>
|};
export type MoviesListQuery = {|
  variables: MoviesListQueryVariables,
  response: MoviesListQueryResponse,
|};
*/


/*
query MoviesListQuery {
  movies {
    id
    title
    year
    actors {
      id
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "MovieType",
    "kind": "LinkedField",
    "name": "movies",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "year",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "ActorType",
        "kind": "LinkedField",
        "name": "actors",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MoviesListQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MoviesListQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "MoviesListQuery",
    "operationKind": "query",
    "text": "query MoviesListQuery {\n  movies {\n    id\n    title\n    year\n    actors {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd199a0c1776585d3e57115b7dd40e509';

module.exports = node;
