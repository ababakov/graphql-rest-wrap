import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

  
import getCookie from '../utils/getCookie';
import createFetch from '../utils/createFetch';
import schema from './schema';

import { Network as NetworkType } from 'relay-runtime/lib/network/RelayNetworkTypes';

function fetchQuery(
  operation:any,
  variables:any,
) {
  return fetch('/graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCookie('csrftoken')
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}


function resolveNetwork(rest:Boolean):NetworkType {
  return Network.create(rest 
    ? createFetch({ schema })
    : fetchQuery)
}

const environment = new Environment({
  network: resolveNetwork(true),
  store: new Store(new RecordSource()),
});

export default environment;