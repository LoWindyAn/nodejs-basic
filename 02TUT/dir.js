const { log } = require('console');
const fs = require('fs');

//Create new folder
if (!fs.existsSync('./new')) {

    fs.mkdir('./new', (err) => {
        if (err) throw err;
        log('Directory created');
    });
}

if (fs.existsSync('./new')) {

    fs.rmdir('./new', (err) => {
        if (err) throw err;
        log('Directory removed');
    });
}