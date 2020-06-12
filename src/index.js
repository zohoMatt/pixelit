const path = require('path');

const { exportSvg } = require('./export.js');
const { sampling } = require('./sampling.js');
const { paint } = require('./paint.js');

/**
 * @param sourceFilePath
 * @param targetFileOptions {{ pixel: number, x: number, y: number }}
 */
const pixelIt = async (sourceFilePath, targetFileOptions) => {
    const originalFileName = path.basename(sourceFilePath);
    const { x, y, pixel } = targetFileOptions;

    const samples = await sampling(sourceFilePath, x, y);
    const svgElm = await paint(pixel, x, y, samples, { mode: 'around' });
    await exportSvg(path.resolve('.', originalFileName + '.svg'), svgElm);
};

module.exports = pixelIt;
