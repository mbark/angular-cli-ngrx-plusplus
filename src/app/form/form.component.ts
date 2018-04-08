import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
import { ConnectService } from 'ngrx-query';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';

import { FormState, GetUserEmail } from '../modules/form';
import { createFakerQuery } from '../queries';
import { AppState } from '../reducers';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  readonly id = 'some-id';
  form: Observable<FormGroupState<FormState>>;
  user: Observable<string>;

  constructor(
    private store: Store<AppState>,
    private connectService: ConnectService
  ) {
    this.form = store.select(s => s.form);
    this.user = store.pipe(
      select(s => s.entities.persons),
      tap(persons => console.log(persons)),
      map(persons => persons[this.id])
    );
  }

  public ngOnInit() {
    this.store.dispatch(new GetUserEmail());
  }

  public newEmail() {
    this.store.dispatch(new GetUserEmail());
  }

  public getUser(): void {
    this.connectService.requestAsync(createFakerQuery(this.id));
  }
}
