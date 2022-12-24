module.exports = async (config) => {
	process.env.data = 'data'
	// Or a more complicated data structure as JSON:
	process.env.coderbyte = {
		url: 'https://coderbyte.com/sl',
	}
}
