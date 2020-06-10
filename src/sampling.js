const getPixels = require('get-pixels');
const util = require('util');

/**
 * @param width
 * @param height
 * @param xPixels
 * @param yPixels
 * @param rgbaBuffer
 * @param mode          {'around' | 'start'}
 */
const getData = (
    width,
    height,
    xPixels,
    yPixels,
    rgbaBuffer,
    mode='around'
) => {
    const xGap = width / xPixels;
    const xStartPt = mode === 'start' ? 0 : xGap / 2;
    const yGap = height / yPixels;
    const yStartPt = mode === 'start' ? 0 :  yGap / 2;

    const matrix = Array(xPixels).fill(0).map(() => Array(yPixels).fill(''));    // xPixels * yPixels matrix
    for (let j = 0; j < yPixels; j += 1) {
        const y = Math.floor(yStartPt + j * yGap);
        for (let i = 0; i < xPixels; i += 1) {
            const x = Math.floor(xStartPt + i * xGap);
            const bufferStartPt = ((x - 1) * width + y) * 4;    // RGBA mode contains 4 numbers
            matrix[j][i] = `rgba(${rgbaBuffer.slice(bufferStartPt, bufferStartPt + 4).join(',')})`
        }
    }
    return matrix;
};

/**
 *
 * @param filePath
 * @param xSamples
 * @param ySamples
 * @param options   {{ mode: string }}
 */
const sampling = async (
    filePath,
    xSamples,
    ySamples,
    options={ mode: 'around' }
) => {
    let image = null;
    try {
        image = await util.promisify(getPixels)(filePath);
    } catch (e) {
        console.error(e);
    }
    const [width, height] = image.shape;
    return getData(width, height, xSamples, ySamples, image.data, options.mode);
};

exports.sampling = sampling;
