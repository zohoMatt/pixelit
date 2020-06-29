# pixelit
Convert image to pixel art based on equidistant sampling method.

## Example

> 🖼️ Source image

<img src="https://ibb.co/VSk3Qdc" width="200" height="200"/>

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


