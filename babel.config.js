const env = targets => ['@babel/preset-env', { targets }]

const ts = () => '@babel/preset-typescript'

module.exports = {
	presets: [
		env({ node: 'current' }),
		ts(),
	]
}
