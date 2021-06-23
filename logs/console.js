// adapter for console 
module.exports = {
    info: (data) => {
        console.log('----------> console:info:',data)
    },

    error: (data) => {
        console.error('----------> console:error:',data)
    }
}