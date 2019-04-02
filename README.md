# cs-demo

## Build Docker Image

Run this to build Docker image for cs-demo:

```
docker build -t cs-demo .
```

## Start Docker Container

Run this to start a Docker container based on the cs-demo image:

```
docker run -v $(pwd):/code -p 4200:4200 -it cs-demo bash
```

Note: this will bind your current directory on your host machine (ie. `pwd`) to `/code` inside the Docker container.

## Install Dependencies

Run `npm install` inside Docker container to install package dependencies.

**Important**: You must install dependencies from within your Docker container to ensure compatibility with Node, npm, Angular and Linux. If you've install your dependencies on your host machine, delete the `node_modules` folder and re-run `npm install` inside Docker container.

## Development server

Run `npm start` inside Docker container for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` inside Docker Container to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `npm test` inside Docker container to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` inside Docker container to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `npm start`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
