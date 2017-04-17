let path = require('path');
let common = require(path.join(process.cwd(), 'config/common.config.js'));

module.exports = {
    entry: {
        app: 'play/app.js',
        preview: 'play/preview.js'
    },
    dist: 'dist/play',
    port: 4000,
    // compile Vue template
    templateCompiler: true,
    hmrEntry: ['preview'],
    // no code split for 3rd party libraries
    vendor: false,
    html: [
        {
            chunks: ['app'],
            filename: 'index.html'
        },
        {
            chunks: ['preview'],
            filename: 'preview.html',
            template: path.join(process.cwd(), 'config/template.html')
        }
    ],
    webpack: Object.assign(common.webpack, {
        output: {
            publicPath: ''
        }
    })
}
