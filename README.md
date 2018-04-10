# AngularCliStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## getting started
1. Check your `node` version (it was developed with `9.5.0`), to manage node
   versions `nvm` is recommended, see [installation instructions here for
   Windows](https://github.com/coreybutler/nvm-windows);
2. Install `yarn`, see [installation instructions](https://yarnpkg.com/lang/en/docs/install/);
3. Run `yarn install` to install all dependencies.

You should now be able to start the server with `yarn start` and navigate to
[`http://localhost:4200`](http://localhost:4200). To run the tests just run
`yarn test` or start a watch-process with `yarn test --watch`.

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
