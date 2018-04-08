# AngularCliStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## ngrx

`ngrx` is used for state management, additionally the following packages are used:

* `@ngrx/store` the actual store;
* `@ngrx/effects` for side effects;
* `@ngrx/router-store` to hook up the router to the store;
* `@ngrx/store-devtools` to get Redux Devtools support;
* `ngrx-forms` to hook up your forms with ngrx;
* `ngrx-query` for better query management via `redux-query`;
* `ngrx-store-freeze` to ensure that no modifications are done to the store when developing;
* `ngrx-store-localstorage` to persist data and entities;
* `ngrx-store-logger` to log what is happening;

## the plusplus parts

* `jest` is used to run tests as it is faster and just better than `karma`;
* `prettierjs` to format all code;
* `husky` to for git-hooks to ensure formatting and tests passing;
* `lint-staged` to run tests and format files;
* `jest-runner-tslint` to run `tslint` via `jest`.
