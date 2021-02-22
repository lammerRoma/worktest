const fs = require('fs');

const indexTemp = fs.readFileSync(`${__dirname}/../templates/index.html`, 'utf-8');
const navigation = fs.readFileSync(`${__dirname}/../templates/navigation.html`, 'utf-8')

exports.indexNav = (req, res) => {
    res.send(indexTemp.replace(/{%DATA%}/g, navigation));
}

