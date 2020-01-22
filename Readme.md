# executable HTML

## TL;DR
This is a set of custom elements to provide piecemeal insertion of HTML into the DOM tree, in either sequential or conditional fashion, effectively rendering said HTML executable.

## Why this was built

Normally an HTML script is parsed and rendered by the browser as a whole, when loaded. The only way to modify the content of the page is either by having hidden parts that are displayed to the user on some event, or by manipulating the DOM with JavaScript. 

There are use cases where simple logic is needed, and the move into the domain of JavaScript can be daunting for users. One such is the creation of questionnaires for clinical psychology.

Please refer to [this paper](https://link.springer.com/article/10.3758/s13428-018-1148-y) for a detailed exposition of the problem this collection of custom elements solves.

The ultimate aim is to produce a single representation of a data collection protocol that is both human-readable and computer executable.ss



## Running

### Tests

#### Testing in the browser
Raise a server at localhost, e.g using
[live-server](https://www.npmjs.com/package/live-server) and load `/tests/test.html`

#### Headless testing
Run `npm run test`. It will run the browser tests and also produce a coverate report for headless Chrome and Firefox under `./coverage`.

### Distributable
Make sure you have `webpack` and `webpack-cli` installed. Run webpack at the root directory to compile all modules under `./src` into a production-mode single source, stored under `./dist/aaCustomElements.js`

Alternatively, run `npm run build`


<!--
```
<b>my html</b>
```
-->
asdfasdf