import { Params, RouterStateSnapshot } from '@angular/router';
import {
  RouterReducerState,
  RouterStateSerializer,
  routerReducer,
} from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
import { entitiesReducer, queriesReducer } from 'ngrx-query';
import { storeFreeze } from 'ngrx-store-freeze';
import { localStorageSync } from 'ngrx-store-localstorage';
import { storeLogger } from 'ngrx-store-logger';

import { environment } from '../environments/environment';
import { FormState, formReducer } from './modules/form';

export interface AppState {
  form: FormGroupState<FormState>;
  router: RouterReducerState<RouterStateUrl>;
  queries: any;
  entities: {
    persons: { [key: string]: string };
  };
}

export const reducers: ActionReducerMap<AppState> = {
  form: formReducer,
  router: routerReducer,
  queries: queriesReducer,
  entities: entitiesReducer,
};

export const initialState = {
  entities: { persons: {} },
};

export const queriesSelector = (state: AppState) => state.queries;
export const entitiesSelector = (state: AppState) => state.entities;

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [storeLogger(), storeFreeze, storageReducer]
  : [storageReducer];

export function storageReducer(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return localStorageSync({ keys: ['entities'], rehydrate: true })(reducer);
}

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const { url, root: { queryParams } } = routerState;
    const { params } = route;

    return { url, params, queryParams };
  }
}
