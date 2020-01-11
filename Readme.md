# executable HTML

## TL;DR
This is a set of custom elements to provide piecemeal insertion of HTML into the DOM tree, either in sequential or conditional function, effectively rendering the HTML executable

## Why this was built

Normally an HTML script is parsed and rendered by the browser as a whole, when loaded. The only way to modify the content of the page is either by having hidden parts that are displayed to the user on some event, or by manipulating the DOM with JavaScript. 

There are use cases where simple logic is needed, and the move into the domain of JavaScript can be daunting for users. One such is the creation of questionnaires by clinical psychologists.

Please refer to https://link.springer.com/article/10.3758/s13428-018-1148-y for an detail exposition of the problem this collection of custom elements solves