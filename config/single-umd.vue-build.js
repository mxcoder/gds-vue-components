path = require('path');

module.exports = {
	html: {
		title: 'Vue Components',
		template: path.join(__dirname, 'config/template.html')
	},
    webpack: {
        resolve: {
            alias: {
                Components: path.resolve(__dirname, 'src/')
            }
        },
        externals: {
            vue: 'Vue'
        }
    }
}
