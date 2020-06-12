# pixelit
Convert image to pixel art based on equidistant sampling method.

## Example

> 🖼️ Source image

<img src="https://avatars1.githubusercontent.com/u/11770748?s=460&u=9f7bd014ccdbaf750249e417ccabbf82d57208a9&v=4" width="200" height="200"/>

> 🖨️ After processed

<img src="https://i.ibb.co/xKk8h79/Screen-Shot-2020-06-12-at-4-06-06-PM.png" width="200" height="200"/>

## Getting started

### Install

```bash
npm i pixelit
```

### How to use
```javascript
const pixelit = require('pixelit');

// Output to .svg file
pixelit('/file/path/raw-image.jpg', { pixel: 20, x: 40, y: 40 }, { path: '/output/path/for/image.svg' })
    .then(doSomething)
    .catch(errorHandler);

// Get HTML for the <svg> element
pixelit('/file/path/raw-image.jpg', { pixel: 20, x: 40, y: 40 }, { html: true })
    .then(html => doSth(html))
    .catch(errorHandler);
```


