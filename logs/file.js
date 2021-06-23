// adapter for file
const fs = require('fs');
module.exports = {
    info: (data) => {
        fs.appendFile('info.txt', data, function (err) {
            if (err) throw err;
            // console.log('Saved!');
          });
    },

    error: (data) => {
        fs.appendFile('error.txt', data, function (err) {
            if (err) throw err;
            // console.log('Saved!');
          });
    }
}