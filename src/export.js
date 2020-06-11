const util = require('util');
const fs = require('fs');
const path = require('path');

const exportSvg = async (fileName, svgXml) => {
    const filePath = path.resolve(fileName);
    return util.promisify(fs.writeFile)(filePath, svgXml, { encoding: 'utf-8' });
};

exports.exportSvg = exportSvg;
