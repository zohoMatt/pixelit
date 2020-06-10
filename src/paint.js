const paint = (
    width,
    height,
    xPixels,
    yPixels,
    colorList
) => {
    const pixelWidth = width / xPixels;
    const pixelHeight = height / yPixels;
    let rects = '';
    for (let x = 0; x < pixelWidth * xPixels; x += pixelWidth) {
        for (let y = 0; y < pixelHeight * yPixels; y += pixelHeight) {
            rects +=
                `<rect width="${pixelWidth}" height="${pixelHeight}" x="${x}" y="${y}" fill="${colorList[x][y]}" />`;
        }
    }
    return `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${xPixels * pixelWidth}"
            height="${yPixels * pixelHeight}">
            ${rects}
        </svg>    
    `;
};

exports.paint = paint;
