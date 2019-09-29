# RacingStats

The two identified calls for getting necessary data:
http://ergast.com/api/f1/2008/results/1
http://ergast.com/api/f1/driverstandings/1?limit=11&offset=55

Comments in no particular order:

1. The app is using the ngRX Store for state management and using the previous loaded results in the store, without making another call to the api, when in the same session.

2. Modules:
  - Shared module: for other shared components/pipes used multiple times in the F1 module and a maybe a future module for MotoGP races for ex.
  - F1 module: specific for the features requested 
  
3. Regarding styling, I prefer to use the BEM methodology whenever it makes sense and keep different files for a logical (from my perspective :D) separation of variables, mixins, functions etc.

4. I used a service resolver for routing to the details, to make sure when the user is on a detailed page like http://localhost:4200/f1/2006 and refreshes the page, I have the initial parent request loaded, before I get the result details.

5. I'm sure I missed other cool ideas, so if you have any other questions about aproaches and decisions made during the development process, don't be shy and ask :) Hope you like the card design and effects :P

Note: 
Regarding unit/end-to-end tests, I don't have too much previous experience with them, so I didn't want to make a stupid and incomplete implementation.
I will add testing after I get some free time to do a proper research.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
