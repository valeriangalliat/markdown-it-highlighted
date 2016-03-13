# markdown-it-highlighted [![npm version](http://img.shields.io/npm/v/markdown-it-highlighted.svg?style=flat-square)](https://www.npmjs.org/package/markdown-it-highlighted)

> Whether code was highlighted during [markdown-it] rendering.

[markdown-it]: https://github.com/markdown-it/markdown-it

Usage
-----

```js
const md = require('markdown-it')({ highlight: yourHighlighter })
  .use(require('markdown-it-highlighted'))

const env = {}

md.render('```js\nconsole.log(42)\n```', env)
env.highlighted === true // Assuming your highlighter handled the code.

md.render('# Hello, world!', env)
env.highlighted === false
```
