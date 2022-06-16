# NgSimplePos

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.
- NodeJS version 16 and
- json-server `npm install -g json-server`

## Installation

- Run `npm install -g @angular/cli@14` in case doesn't have angular-cli before
- Run `npm install` after clone repository
- Run `json-server --watch db.json` to start JSON Server
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Lazy-loading feature modules

By default, NgModules are eagerly loaded, which means that as soon as the application loads, so do all the NgModules, whether or not they are immediately necessary. For large applications with lots of routes, consider lazy loading —a design pattern that loads NgModules as needed. Lazy loading helps keep initial bundle sizes smaller, which in turn helps decrease load times.

### Create a feature module with routing

you'll need a feature module with a component to route to. To make one, enter the following command in the terminal, where customers is the name of the feature module. The path for loading the customers feature modules is also customers because it is specified with the --route option:

```
ng generate module customers --route customers --module app.module
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
