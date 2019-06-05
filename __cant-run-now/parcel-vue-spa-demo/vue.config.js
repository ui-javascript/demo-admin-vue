const pug = require('pug')

module.exports = {
    customCompilers: {
        pug (content, cb) {
            const html = pug.render(content)
            cb(null, html)
        }
    }
}
