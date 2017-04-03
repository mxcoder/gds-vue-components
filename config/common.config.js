let path = require('path');

module.exports = {
    webpack: {
        resolve: {
            alias: {
                Components: path.resolve(process.cwd(), 'src/'),
                Playbooks: path.resolve(process.cwd(), 'playbook/'),
                System: path.resolve(process.cwd(), 'src/system.js')
            }
        }
    }
};
