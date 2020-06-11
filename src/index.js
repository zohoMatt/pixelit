const path = require('path');

const { exportSvg } = require('./export.js');
const { sampling } = require('./sampling.js');
const { paint } = require('./paint.js');

/**
 * @param sourceFilePath
 * @param targetFileOptions {{ width: number, height: number, x: number, y: number }}
 */
const pixelIt = async (
    sourceFilePath,
    targetFileOptions
) => {
    const originalFileName = path.basename(sourceFilePath);
    const { x, y, pixel } = targetFileOptions;

    const samples = await sampling(sourceFilePath, x, y);
    const svgElm = await paint(pixel, x, y, samples, { mode: 'around' });
    await exportSvg(path.resolve('.', originalFileName + '.svg'), svgElm);
};

const init = async () => {
    const args = process.argv;
    const sourceFile = args[2];
    const [x, y] = args[3].split(/[^0-9]/).map(Number);
    const pixel = Number(args[4]);
    await pixelIt(sourceFile, { x, y, pixel });
};

init();
