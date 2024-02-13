#!/usr/bin/env node

/**
 * Todo.
 *
 * @description Todo.
 *
 * @see https://developer.wordpress.org/cli/commands/i18n/
 */

import inquirer          from 'inquirer'
import { spawnSync }     from 'child_process'
import { join }          from 'path'
import { pkg, composer } from './getPkg.js'
import { dockerCompose } from './templates/dockerCompose.js'
import { exec }          from './exec.js'

const i18nRun = async () => {

	const pluginDir   = join( composer.dir, composer.data.extra.pluginDir )
	const pluginLang  = join( composer.dir, composer.data.extra.pluginLang )
	const pluginPot   = join( composer.dir, composer.data.extra.pluginPot )
	const pluginName  = composer.data.extra.textDomain
	const findLang    = process.argv.find( ( arg ) => arg.startsWith( '--lang=' ) )
	const includeLang = findLang ? findLang.split( '=' )[1] : false

	const cmds = {
		createPot : `wp i18n make-pot ${pluginDir} ${pluginPot} --slug=${pluginName}`,
		updatePo  : `wp i18n update-po ${pluginPot} ${pluginLang}`,
		makeMo    : `wp i18n make-mo ${pluginLang}`,
		makePo    : ( lang ) =>`wp i18n make-json ${pluginPot} --dir=${pluginLang}/ --domain=${pluginName} --merge`,
	}

	if ( process.argv.includes( '--update' ) ) {
		
		exec( cmds.createPot )
		exec( cmds.updatePo )

	} else if ( process.argv.includes( '--update-mos' ) ) {

		exec( cmds.makeMo )

	} else {

		const answers = await inquirer.prompt( [ 
			{
				type    : 'list',
				name    : 'i18n',
				message : 'Provides internationalization tools for WordPress plugin',
				choices : [
					{ value: 'up', name: 'Update translation strings (Create/Update Pot file & update po files)' },
					{ value: 'up-mo', name: 'Update translation when is do it (Make Mo files)' },
				],
				default : 'up',
			},
			{
				type    : 'input',
				name    : 'i18nLang',
				message : 'Set Language',
				default() {

					return 'es_ES'

				},
				when : ( answers ) => answers.i18n === 'po-create',
			},
		] )

		if ( !answers || !answers.i18n ) return
		
		console.log()

		if ( answers.i18n === 'up' ) {

			exec( cmds.createPot )
			exec( cmds.updatePo )
		
		} else if ( answers.i18n === 'up-mo' ) {

			exec( cmds.makeMo )
		
		}

	}

}

try {

	i18nRun()

} catch ( e ) {

	console.error( e )

}
