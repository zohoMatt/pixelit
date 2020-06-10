const paint = (
    size,
    xPixels,
    yPixels,
    colorList
) => {
    console.log(size, xPixels, yPixels);
    let rects = '';
    for (let i = 0; i < xPixels; i += 1) {
        for (let j = 0; j < yPixels; j += 1) {
            const x = i * size;
            const y = j * size;
            rects +=
                `<rect width="${size}" height="${size}" x="${x}" y="${y}" fill="${colorList[i][j]}" />`;
        }
    }

    return `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${xPixels * size}"
            height="${yPixels * size}">
            ${rects}
        </svg>    
    `;
};

exports.paint = paint;
