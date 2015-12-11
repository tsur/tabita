
<img src="tabita.png?raw=true" width="150" height="250" align="left"/>

## What's Tabita ?

> Tabita is an incredibly fast, canvas based table implementation for big data and realtime analytics

## Download

```
npm install tabita
```

## Getting Started

First of all, you need to import it. This can be achieved in different ways depending up on what module definition pattern your application is using.

The Tabita package works by default with CommonJS so you can use it with browserify as shown below:

```js
// CommonJS
var Tabita = require('tabita');

// If you are using ES6, then
import Tabita from 'tabita';
```

Note that `tabita` is written in ES2015. It forces users building its projects with browserify to install the next dependences:

```bash
npm install babelify babel-preset-es2015 babel-preset-stage-1 --save-dev
```

It is also possible to use it with AMD loaders as Require.js. If so, you can import it this way:

```js
// AMD
require('dist/tabita.js', function(CanvasJS){

       // Add your stuff here
});
```

Finally, you may also import it as a global dependence:

```html
<script src="dist/tabita.js">
```

Then you can access the global variable `Tabita`.

** Note: dist folder also contains a minified version located at dist/tabita.min.js and ready for production.

## Build

```
npm run build
```
