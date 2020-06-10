const util = require('util');
const fs = require('fs');

const exportSvg = async (
    fileName,
    svgXml
) => {
    const filePath = path.resolve(fileName);
    return util.promisify(fs.writeFile)(filePath, svgXml, { encoding: 'utf-8' });
};
