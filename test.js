const impliments = require('./index')
const remove = require('remove')

console.log('================')
console.log('Testing:')
console.log(
	impliments(['child_process', 'underscore', 'path', 'remove'], {
		npm: true,
		remove: true,
		testFile: 'test_this_file.js'
	})
)
// OR
impliments(['some dependency'], {
	remove_dependencies: true,
	eval: 'npm install'
})
console.log('================')