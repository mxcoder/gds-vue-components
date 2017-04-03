let path = require('path');
let common = require(path.join(process.cwd(), 'config/common.config.js'));

module.exports = {
    html: {
        title: 'Vue Components',
        template: path.join(__dirname, 'config/template.html')
    },
    webpack: Object.assign(common.webpack, {
        externals: {
            vue: 'Vue'
        }
    })
}
