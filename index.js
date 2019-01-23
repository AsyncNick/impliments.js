/* impliments.js
 *
 * Author: Nicky Laczko
 * License: MIT
 */
const { exec } = require('child_process')
const _ = require('underscore')
const path = require('path')

module.exports = function impliments (dependencies, options, cb) {
	return new Promise((resolve, reject) => {
		if (typeof dependencies === 'String') {
			exec(`npm install ${dependencies}`)
		}
		if (options.npm || options.Npm) {
		_.forEach(dependencies, (d) => exec(`npm install ${d}`))
		resolve()
		}
	}).then(() => {
		if (options.testFile) {
			exec(`node ${__dirname}/${options.testFile}`)
		}
	})
}
