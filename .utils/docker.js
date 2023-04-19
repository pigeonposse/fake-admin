#!/usr/bin/env node

import chalk             from 'chalk'
import open              from 'open'
import { writeSync }     from './writeFile.js'
import { pkg, composer } from './getPkg.js'
import { exec }          from './exec.js'
import { dockerCompose } from './templates/dockerCompose.js'

const dockerRun = () => {

	writeSync( composer.data.extra.dockerComposeDevFile, dockerCompose.dev )

	if ( process.argv.includes( '--init' ) ) {

		exec( pkg.data.scripts['docker-compose-dev'] )
	
	}

	if ( process.argv.includes( '--open' ) ) {

		const devUrl = `http://localhost:${composer.data.extra.devPort}`
		const wp     = `${pkg.data.name}: ${chalk.cyan( devUrl )}`
		console.log( `Development url:\n\n${wp}` )
		open( devUrl )
	
	}

}

try {

	dockerRun()

} catch ( e ) {

	console.error( e )

}
