# generator-kage-boilerplate [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> boilerplate for webapps projects

## Installation

First, install [Yeoman](http://yeoman.io) and generator-kage-boilerplate using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-kage-boilerplate
```

Then generate your new project:

```bash
yo kage-boilerplate
```

## Grunt tasks

There are three grunt tasks available after initializing kage-boilerplate
```bash
grunt build
```
Use this to compile HTML, CSS and JS files into dist folder.

```bash
grunt run
```
Runs the server (default on port 9000) and opens the browser as well as watch files for changes.

```bash
grunt min
```

Minify and uglify css/js in dist folder.

## License

 © [bkage]()


[npm-image]: https://badge.fury.io/js/generator-kage-boilerplate.svg
[npm-url]: https://npmjs.org/package/generator-kage-boilerplate
[travis-image]: https://travis-ci.org/bkage/generator-kage-boilerplate.svg?branch=master
[travis-url]: https://travis-ci.org/bkage/generator-kage-boilerplate
[daviddm-image]: https://david-dm.org/bkage/generator-kage-boilerplate.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/bkage/generator-kage-boilerplate
