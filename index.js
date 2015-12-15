/* impliments.js
 *
 * Author: Nicky Laczko
 * License: MIT
 */
const { exec } = require('child_process')
const _ = require('underscore')
const path = require('path')

function impliments(dependencies: Array, options = {}, cb) {
	return new Promise((resolve, reject) => {
		if (
			!(dependencies && options) ||
			! typeof (dependencies === Array && options === 'Object')
			) {
			reject()
			cb('NO ARGUMENTS')
		}
		if (!dependencies && options.Npm) {
			if (typeof options.Npm === 'Array') {
				_.forEach(options.Npm, (npmDep) => {
					for (var dep in npmDep) {
						for (var i = 0; i < options.Npm.length; i++) {
							return exec(`npm install --save ${npmDep[dep]}`)
						}
					}
					cb(null, require(npmDep))	// (error, $core)
				})
			}
		}
		if (dependencies && !options.Npm) {
			_.forEach(dependencies, (dep) => {
				cb(null, require(path.join(__dirname, dep)))
			})
		}
		resolve()
	})
}
