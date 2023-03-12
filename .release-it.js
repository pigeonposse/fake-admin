/**
 * Release-it config.
 *
 * @descriptionConfiguration for release versions in github.
 * @link https://github.com/release-it/release-it/blob/main/docs/configuration.md
 * @since 1.0.0
 * @version 1.0.0
 */

const pkg    = require( './composer.json' )
const topics = pkg.keywords.join( ',' )

module.exports = {
	'git' : {
		'requireBranch' : 'main',
		'commitMessage' : 'Release v${version}',
	},
	'hooks' : {
		'before:init' : [ 
			'git push', 
			'pnpm plugin-file',
			// 'pnpm lint-fix', 
			// 'pnpm build' 
		],
	    'after:bump'        : 'pnpm auto-changelog -p',
	    'after:git:release' : 'echo \'After git push, before github release\'',
	    'after:release'     : [
	    	`gh repo edit ${pkg.repositories.github.url} -d \"${pkg.description}\"`,
	    	`gh repo edit ${pkg.repositories.github.url} --add-topic ${topics}`,
	    	`echo \'Github action is now releasing: ${pkg.name} v${pkg.version} to ${pkg.repositories.github.url}.\n Check if all is ok 🌈🤖\n ${pkg.repositories.github.url}/actions\'`,
	    ],
	},
	'github' : {
		'release' : false,
	},
	'npm' : {
		'release' : false,
	},
}
