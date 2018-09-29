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


## Structure

Files are split for different folders

| Folder name | Purpose                                                                   |
|-------------|---------------------------------------------------------------------------|
| `css`       | Global scss files that imports all module styles and partials (variables) |
| `js`        | Global js files                                                           |
| `lib`       | Config files for gulp task configuration                                  |
| `modules`   | Folder for modules                                                        |

## Creating new page

Pages are simple `.html` files with HTML code. Each file represents different page (index.html, about.html etc.). They should be used to group modules together and not to use unnececary HTML inside. 

### Creating modules

Module is made of 3 files and placed inside `modules` folder. 

`*.html` file - HTML structure of a module
`*.scss` file - Styles for module (they are not encapsulated) that are automatically imported in `css/main.scss`. Variables are imported by default (via css/main.css)
`*.js` file - Scripts for module

File names doesn't metter.
Example:
```
modules
  |
  |-about
       |
       | - index.html
       | - styles.scss
       | - index.js

```

### Using module

To use module insert `<partial>` tag with `src` of your module html into page.html file.

Example:

index.html
```html
<!doctype html>
<html lang="pl">
<head>
    <partial src="modules/_partials/head.html"></partial>
</head>
<body>
    <partial src="modules/about-section/index.html"></partial>

    <partial src="modules/_partials/foot.html"></partial>
</body>
</html>
```
## Optimalization

To optimise third-party css/js files they can be concatenated using special HTML comment syntax

example: 
```html
<!-- build:css /assets/css/vendor.min.css -->
  <link rel="stylesheet" href="bower_components/reset-css/reset.css">
  <link rel="stylesheet" href="bower_components/bootstrap/global.css">
  <link rel="stylesheet" href="bower_components/someplugin/index.css">
<!-- endbuild -->
```



## License

 © [bkage]()


[npm-image]: https://badge.fury.io/js/generator-kage-boilerplate.svg
[npm-url]: https://npmjs.org/package/generator-kage-boilerplate
[travis-image]: https://travis-ci.org/bkage/generator-kage-boilerplate.svg?branch=master
[travis-url]: https://travis-ci.org/bkage/generator-kage-boilerplate
[daviddm-image]: https://david-dm.org/bkage/generator-kage-boilerplate.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/bkage/generator-kage-boilerplate
