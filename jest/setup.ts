import 'jest-preset-angular';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgrxFormsModule } from 'ngrx-forms';
import { NgrxQueryModule } from 'ngrx-query';

import { FormEffects } from '../src/app/modules/form';
import {
  entitiesSelector,
  initialState,
  queriesSelector,
  reducers,
} from '../src/app/reducers';
import { routes } from '../src/app/routes';

beforeEach(
  async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NgrxFormsModule,
        StoreModule.forRoot(reducers, {
          metaReducers: [],
          initialState,
        }),
        EffectsModule.forRoot([FormEffects]),
        NgrxQueryModule.forRoot({
          queriesSelector: queriesSelector,
          entitiesSelector: entitiesSelector,
        }),
      ],
    });
  })
);
