// get log base on config 
const config = "file"
if(config === 'console'){
    module.exports = require('./console')
} else {
    module.exports = require('./file')
}
    