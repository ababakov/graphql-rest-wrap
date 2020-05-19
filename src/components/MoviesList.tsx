import React from 'react';

import { graphql, QueryRenderer } from 'react-relay';

import environment from '../environment';

const MoviesList = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
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
      `}
      variables={{}}
      render={({error, props}: {error: any, props: any}) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return <div>User ID: {props.viewer.id}</div>;
      }}
    />
  );
}

export default MoviesList;