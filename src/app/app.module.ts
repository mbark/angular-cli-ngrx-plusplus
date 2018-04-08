import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import {
  RouterStateSerializer,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PrettyJsonModule } from 'angular2-prettyjson';
import { NgrxFormsModule } from 'ngrx-forms';
import { NgrxQueryModule } from 'ngrx-query';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormEffects } from './modules/form';
import { NotfoundComponent } from './notfound/notfound.component';
import {
  CustomSerializer,
  entitiesSelector,
  initialState,
  metaReducers,
  queriesSelector,
  reducers,
} from './reducers';
import { routes } from './routes';

@NgModule({
  declarations: [AppComponent, FormComponent, NotfoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgrxFormsModule,
    PrettyJsonModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      initialState,
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    EffectsModule.forRoot([FormEffects]),
    StoreDevtoolsModule.instrument(),
    NgrxQueryModule.forRoot({
      queriesSelector: queriesSelector,
      entitiesSelector: entitiesSelector,
    }),
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],

  bootstrap: [AppComponent],
})
export class AppModule {}
