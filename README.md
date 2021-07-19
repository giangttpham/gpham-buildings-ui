# Buildings UI Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.

## Run the API and the UI app together

- Check out the back-end project at https://github.com/giangttpham/gpham.building.api. Follow the instruction to run the donet app.
- Run this Angular app with command `ng serve`.
- Navigate to `http://localhost:4200` in a web browser.
- Upon the intial loading, the app will automatically gets a list of all buildings from the .NET app.
  - On the left side of the UI is the list of all the existing buildings returned by the Buildings API.
  - On the right side, users can fill out the information to add to the API's existing data.
  - When a building is deleted or added, the app will automatically reload the list of existing buildings.

## Possible Improvements:

- Allow updating an existing building
- Allow sorting by a specific column
- Add filtering for each field
- Hide/Show specific column

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

## Libraries

- Bootstrap
- Angular Material
