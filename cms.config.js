const packageObj = require('./package.json')
const channelName = packageObj.channel
const project = packageObj.name
const account = require('./openID.json')
const upPath = `f2e/sales/${account.gitName}/${channelName}/${project}`

module.exports = {
  entry: ['./dist/index.shtml'], // * or an array exp: ['./a.html', './module/b.html', './11/*.html']
  output: {
    cdnPath: 'https://static.ws.126.net/163/',
    clean: true // whether remove existing file in dist folder, before each building
    // dir: { root: 'build' }
  },
  svnRoot: account.svnRoot, // setting svn root dir for compatible with absolute paths of previous projects
  log: true,
  image: {
    base64: 1000 // less than 1000 byte, would convert to base64 url
  },
  upload: {
    username: account.username,
    password: account.password,
    path: upPath,
    includeHtml: false,
    exclude: []
    // otppwd: '754335' // netease token is used in outer network env
  },
  api: {
    cms: account.cms
  }
}
