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

    const matrix = Array(xPixels).fill(0).map(_ => Array(yPixels).fill(''));    // xPixels * yPixels matrix
    for (let i = 0; i < xPixels; i += 1) {
        for (let j = 0; j < yPixels; j += 1) {
            const x = xStartPt + i * xGap;
            const y = yStartPt + j * yGap;
            const bufferStartPt = ((y - 1) * width + x) * 4;    // RGBA mode contains 4 numbers
            matrix[i][j] = `rgba(${rgbaBuffer.slice(bufferStartPt, bufferStartPt + 4).join(,)})`
        }
    }
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
    const [width, height] = image;
    return getData(width, height, xSamples, ySamples, image.data, options.mode);
};

exports.sampling = sampling;
