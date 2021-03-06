[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/b3008/executable_HTML.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/b3008/executable_HTML/context:javascript)
[![Build Status](https://travis-ci.com/b3008/executable_HTML.svg?branch=master)](https://travis-ci.com/b3008/executable_HTML)

# executable HTML

## TL;DR
This is a set of custom elements to provide piecemeal insertion of HTML into the DOM tree, in either sequential or conditional fashion, effectively rendering said HTML executable.

For a demo, see https://b3008.github.io/

## What is executable HTML

executable HTML is a set of custom elements which help the author of HTML content determine the way pieces of HTML are inserted into the document, without necessitating the use of JavaScript by the author.


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

## Developing



### Import BaseElement

Develop a new component by inheriting from BaseElement

```
import BaseElement from './../aa-baseElement/baseElement.js';

export default class NewComponent extends BaseElement {
}
```

### properties

The `properties` getter describes the attributes for the element e.g.

```
myAttribute:{
    type : <String, Nubmer, Boolean, etc>
    userDefined : <true | false>  is it a property that can be set by the user? (knowing this can be used in building an editor for the element)
    value : does it have a default value?

}   
```

`acceptsElements` is an array of the tags that can be nested inside this element. knowing this can be used in building an editor for the element.





### Building

To get the new component built into the release package, import it in to ./src/index.js


## External libraries

This codebase uses slightly modified versions of jsep and js-yaml, to be able to import them (e.g, with the addition of `export default`)
