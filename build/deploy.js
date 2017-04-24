const ghpages = require('gh-pages')
const path = require('path')

ghpages.publish(path.join(__dirname, '../dist'), {
    user: {
        name: 'Adrian Saiz',
        email: 'adrian.saiz.ferri@outlook.com'
    },
    message: 'Auto-generated commit',
    repo: 'https://github.com/SaizFerri/SaizFerri.github.io.git',
    branch: 'master',
    logger: function(message) {
        console.log(message);
    }
}, (err) => {
    err && console.log(err);
})
