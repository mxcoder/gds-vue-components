path = require('path');

module.exports = {
	entry: path.join(__dirname, 'index.js'),
	html: {
		title: 'Vue Components',
		template: path.join(__dirname, 'src/template.html')
	}
}