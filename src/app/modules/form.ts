import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {
  FormGroupState,
  createFormGroupState,
  formGroupReducer,
  setValue,
  updateGroup,
} from 'ngrx-forms';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';

const ACTION_PREFIX = '[Form]';
export class GetUserEmail implements Action {
  public readonly type = `${ACTION_PREFIX} GetTextAction`;
  constructor() {}
}

export class SetUserEmail implements Action {
  public readonly type = `${ACTION_PREFIX} SetTextAction`;
  constructor(public payload: string) {}
}

export class GetUserEmailFailed implements Action {
  public readonly type = `${ACTION_PREFIX} GetTextFailedAction`;
  constructor() {}
}

export interface FormState {
  email: string;
}

const FORM_ID = '[App] Form';

const initialState = createFormGroupState<FormState>(FORM_ID, {
  email: '',
});

export function formReducer(
  state: FormGroupState<FormState> = initialState,
  action: Action
): FormGroupState<FormState> {
  if (action instanceof SetUserEmail) {
    return updateGroup<FormState>({
      email: setValue(action.payload),
    })(state);
  } else if (action instanceof GetUserEmailFailed) {
    return updateGroup<FormState>({
      email: setValue('unable to fetch faker.io data'),
    })(state);
  }
  return formGroupReducer(state, action);
}

@Injectable()
export class FormEffects {
  @Effect()
  login$: Observable<Action> = this.actions.pipe(
    filter(action => action instanceof GetUserEmail),
    map((action: GetUserEmail) => action),
    mergeMap(_action =>
      this.http.post('http://faker.hook.io/?property=internet.email', {}).pipe(
        // If successful, dispatch success action with result
        map((data: string) => new SetUserEmail(data)),
        // If request fails, dispatch failed action
        catchError(() => of(new GetUserEmailFailed()))
      )
    )
  );

  constructor(private http: HttpClient, private actions: Actions) {}
}
