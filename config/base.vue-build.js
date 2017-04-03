path = require('path');

module.exports = {
	html: {
		title: 'Vue Components',
		template: path.join(process.cwd(), 'config/template.html')
	},
    webpack: {
        resolve: {
            alias: {
                Components: path.resolve(process.cwd(), 'src/'),
                System: path.resolve(process.cwd(), 'src/system.js')
            }
        }
    }
}
