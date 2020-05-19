// adopted from https://graphql.org/blog/rest-api-graphql-wrapper/
import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt
} from 'graphql';
import {
  fromGlobalId,
  globalIdField,
  nodeDefinitions,
} from 'graphql-relay';

const BASE_URL = 'http://localhost:3000/api';

function fetchResponseByURL(relativeURL:string) {
  return fetch(`${BASE_URL}${relativeURL}`).then(res => res.json());
}

function fetchMovies() {
  return fetchResponseByURL('/movies');
}

const { nodeInterface, nodeField } = nodeDefinitions(
  globalId => {
    const { type, id } = fromGlobalId(globalId);
    if (type === 'Movie') {
      return fetchResponseByURL(`/movies/${id}`);
    }
  },
  object => {
    if (object.hasOwnProperty('username')) {
      return 'Movie';
    }
  },
);

const ActorType = new GraphQLObjectType({
  name: 'Actor',
  description: 'Actors',
  fields: () => ({
    name: { type: GraphQLString },
    id: { type: GraphQLString },
    actors: { type: new GraphQLList(GraphQLInt) },
  })
});

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  description: 'Somebody that you used to know',
  fields: () => ({
    title: { type: GraphQLString },
    year: { type: GraphQLInt },
    id: { type: GraphQLString },
    actors: {
      type: new GraphQLList(ActorType),
      resolve: ({actors}) => actors.map((id:any) => fetchResponseByURL(`/actors/${id}`)),
    },
  }),
  // interfaces: [ nodeInterface ],
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    movies: {
      type: new GraphQLList(MovieType),
      resolve: fetchMovies,
    },
    node: nodeField,
    movie: {
      type: MovieType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (root, args) => fetchResponseByURL(`/movie/${args.id}`),
    },
  }),
});

export default new GraphQLSchema({
  query: QueryType,
});