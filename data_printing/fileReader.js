const fs = require('fs');

function fileReader(filePath) {
    const rawData = fs.readFileSync(filePath, 'utf-8');
    const data = rawData.split('\n').filter(line => line.trim() !== '');
    data.shift();
    return data;
}

module.exports = { fileReader };
