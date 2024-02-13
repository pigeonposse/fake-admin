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
const noRelease = process.argv.includes( '--no-release' )

if( !auth ) {

	console.log( '❌ You need to logged with github CLI' )
	console.log('CMD: gh auth login')
	console.log('You may use SSH for git to')
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
			push      : 'git push -u origin main',
			releaseIt : 'pnpm release-it',
		}
		
	 	exec( cmd.gitAdd )
	 	exec( cmd.gitCommit )
		if ( noRelease ) exec( cmd.push )
		else exec( cmd.releaseIt )
	
	} )

}

release()
