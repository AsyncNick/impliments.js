/* impliments.js
 *
 * Author: Nicky Laczko
 * License: MIT
 */
const { exec } = require('child_process')
const _ = require('underscore')
const path = require('path')
const remove = require('remove')

module.exports = function impliments (dependencies, options, cb) {
	new Promise((resolve, reject) => {
		if (typeof dependencies === 'String') {
			exec(`npm install ${dependencies}`)
		}
		if (options.npm || options.Npm) {
		dependencies.map((d) => exec(`npm install ${d}`))
		resolve
		}
	}).then(() => {
		if (options.testFile) {
			exec(`node ${__dirname}/${options.testFile}`)
			resolve
		}
	})
	new Promise((r,r1) => {
		if (options.remove_dependencies === true) {
			let removed = dependencies.map((dep) => {
				remove(`./node_modules/${dep}`, (e) => {
					if (e) console.log(e)
				})
			})
			removed
		}
		if (options.remove === true) {
			remove('./node_modules', (e) => {
				console.log(e)
			})
			r
		}
		if (options.eval) {
			exec(`${eval}`)
		}
	})
}