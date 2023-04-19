/**
 * Release-it config builder.
 *
 * @description Configuration for release versions in github.
 *
 * @see https://github.com/release-it/release-it/blob/main/docs/configuration.md
 */
import { writeFile }     from 'fs/promises'
import { join }          from 'path'
import { pkg, composer } from '../getPkg.js'

const topics = composer.data.keywords.join( ',' )
const gitUrl = composer.data.repositories.github.url
const ver    = 'v${version}'

const data = {
	'git' : {
		'requireBranch' : 'main',
		'commitMessage' : `Release ${ver}`,
	},
	'hooks' : {
		'before:init' : [ 
			'git push', 
			'pnpm readme',
			'pnpm build',
		],
	    'after:bump'        : 'pnpm auto-changelog -p',
	    'after:git:release' : 'echo \'After git push, before github release\'',
	    'after:release'     : [
	    	`gh repo edit ${gitUrl} -d \"${composer.data.description}\"`,
	    	`gh repo edit ${gitUrl} --add-topic ${topics}`,
	    	`echo \'Github action is now releasing: ${composer.data.name} ${ver} to ${gitUrl}.\n Check if all is ok 🌈🤖\n ${gitUrl}/actions\'`,
	    ],
	},
	'github' : {
		'release' : false,
	},
	'npm' : {
		'release' : false,
	},
}

export const releaseIt = JSON.stringify( data, null, 4 )
