const path = require('path')

module.exports = function (wallaby)
{
	process.env.NODE_PATH +=
		path.delimiter
		+ path.join(wallaby.projectCacheDir, 'src')
}
