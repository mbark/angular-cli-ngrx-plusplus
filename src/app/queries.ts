import { ConnectRequestParams, RequestParams } from 'ngrx-query';

import { AppState } from './reducers';

export function createFakerQuery(id: string): ConnectRequestParams {
  return {
    transform: response => ({ persons: { [id]: response } }),
    update: {
      persons: (prevEntities, entities) => ({
        ...prevEntities,
        ...entities,
      }),
    },
    url: `http://faker.hook.io?property=name.findName`,
    selector: (state: AppState) => state.entities.persons[id],
  };
}
