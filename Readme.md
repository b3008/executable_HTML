[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/b3008/executable_HTML.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/b3008/executable_HTML/context:javascript)
<!-- [![Build Status](https://travis-ci.com/b3008/executable_HTML.svg?branch=master)](https://travis-ci.com/b3008/executable_HTML) -->

# executable HTML

## TL;DR
This is a set of custom elements to provide piecemeal insertion of HTML into the DOM tree, in either sequential or conditional fashion, effectively rendering said HTML executable.

For a demo, see https://b3008.github.io/


## Overiew

In everyday life, it is common for communication between a singular party (such as an organization e.g. a hospital, or an individual, e.g. a researcher) and a wider population (such as patients or study-participants) to take place via documents, which on one hand disperse information to the crowd (such as advice or instructions), and on the other hand request information and data to be submitted by each respondent back to the issuer. Most common examples are forms and questionnaires.

As Internet connectivity and smart devices have evolved, it has become increasingly prefferable to conduct the distribution of these documents and the collection of data via the Web and its rich array of technologies, which are uniquitously available to every user.

Authors will (directly or indirectly) write up their documents as HTML scripts and distribute them over the Web. Respondents will load these scripts in their browsers, interact with interfaces they render, and will submit requested information.

Executable HTML is meant to increase the level of control afforded to the author of an HTML document, in presenting  content to the respondent, and in requesting data, by allowing procedural logic to be defined at the level of the HTML document (as opposed to writing JavaScript application code)

Ulitimately, Executable HTML allows an author to write and share a document that 



## What is executable HTML

Executable HTML is a set of [Custom Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements). They consist of two major types.













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

``npm run build``

## External libraries

This codebase uses slightly modified versions of jsep and js-yaml, to be able to import them (e.g, with the addition of `export default`)
