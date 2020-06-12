const path = require('path');

const { exportSvg } = require('./export.js');
const { sampling } = require('./sampling.js');
const { paint } = require('./paint.js');

/**
 * @param sourceFilePath
 * @param targetFileOptions {{ pixel: number, x: number, y: number }}
 * @param outputSettings    {{ path?: string, html?: boolean }}
 */
const pixelIt = async (sourceFilePath, targetFileOptions, outputSettings) => {
    const { x, y, pixel } = targetFileOptions;
    const { path: outputPath, html } = outputSettings;

    const samples = await sampling(sourceFilePath, x, y);
    const svgElm = await paint(pixel, x, y, samples, { mode: 'around' });

    if (html) {
        return svgElm;
    } else {
        return exportSvg(outputPath, svgElm);
    }
};

module.exports = pixelIt;
