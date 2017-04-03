let path = require('path');
let common = require(path.join(process.cwd(), 'config/common.config.js'));

module.exports = {
    html: {
        title: 'Vue Components',
        template: path.join(process.cwd(), 'config/template.html')
    },
    webpack: common.webpack
}
