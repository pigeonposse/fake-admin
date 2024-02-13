/**
 * Release inquirer.
 *
 * @description Inquirer for release versions in github.
 */
/**
 * PluginReadme.
 *
 * @description Todo.
 *
 * @link /templates/pluginReadme.js
 */

import inquirer      from 'inquirer'
import { writeSync } from './writeFile.js'
import { composer }  from './getPkg.js'
import { releaseIt } from './templates/releaseIt.js'
import { exec }      from './exec.js'
import { isGitHubAuthenticated } from './gh.js'

const auth      = isGitHubAuthenticated()

if( !auth ) {

	console.log( '❌ You need to logged with github. use: gh auth login' )
	process.exit()

}

const questions = [
	{
		type    : 'input',
		name    : 'git_add',
		message : 'Add files for git',
		default() {

			return '.'
		
		},
	},
	{
		type    : 'input',
		name    : 'git_commit',
		message : 'Set release commit',
		default() {

			return 'Release commit 🌈⚡️'
		
		},
	},
]

const release = async () => {

	writeSync( composer.data.extra.releaseIt, releaseIt )
	
	console.log( '' )

	await inquirer.prompt( questions ).then( ( answers ) => {

		// console.log(JSON.stringify(answers, null, '  '));
		if ( !answers || !answers.git_add || ! answers.git_commit ) return

		const cmd = {
			gitAdd    : 'git add ' + answers.git_add,
			gitCommit : 'git commit -m "' + answers.git_commit + '"',
			releaseIt : 'pnpm release-it',
		}
		
	 	exec( cmd.gitAdd )
	 	exec( cmd.gitCommit )
	 	exec( cmd.releaseIt )

	} )

}

release()
