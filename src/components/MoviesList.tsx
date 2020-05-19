import React from 'react';

import { QueryRenderer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { Loader } from '@gpn-design/uikit/Loader';

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
          console.error(error);
          return <div>Error!</div>;
        }
        if (!props) {
          return <Loader/>;
        }
        return <div>Result: {JSON.stringify(props)}</div>;
      }}
    />
  );
}

export default MoviesList;