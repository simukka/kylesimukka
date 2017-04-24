# kylesimukka

Repo development for kylesimukka.

## Getting started

Clone repo.

#### Install dependencies

From within the cloned folder `kylesimukka` run:

Install node dependencies

```
npm install
```

Install bower dependencies

```
bower install
```

#### Gulp tasks

- `gulp` or `gulp build` to build an optimized version of your application in folder dist
- `gulp serve` to start BrowserSync server on your source files with live reload
- `gulp serve:dist` to start BrowserSync server on your optimized application without live reload
- `gulp clean` to remove all files from the build and tmp folders
- `gulp test` to run your unit tests with Karma
- `gulp test:auto` to run your unit tests with Karma in watch mode
- `gulp protractor` to launch your e2e tests with Protractor
- `gulp protractor:dist` to launch your e2e tests with Protractor on the dist
