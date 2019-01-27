# impliments.js
Impliment a Npm module into your code easier.
[npm package](https://www.npmjs.com/package/impliments)
## Install
`` npm install impliments``
## Options
Impliment needs two specific options
```js
impliments([], {
	npm: (true or false),
	testFile: 'path', // optional
	remove: (true or false), // this removes the entire node_modules folder
	// -- remove OR remove_deps can be enabled but not at the same time
	remove_deps: (true or false) // this removes specific dependencies
	eval: // execute a command while in a Promise
})
```
## Usage
-----------
```js
const impliments = require('impliments')

var some_deps = ['underscore', 'cheerio', 'bluebird']
impliments(some_deps, { Npm: true })

function testing () {
	/**
	some code .....
	**/
}

```