/**
 * Dev.
 *
 * @description Todo.
 *
 */

import { pkg }  from './getPkg.js'
import { exec } from './exec.js'

const cmdFiles     = pkg.data.scripts['plugin-files']
const cmdDCDev     = pkg.data.scripts['docker-compose-init']
const cmdDCDevStop = pkg.data.scripts['docker-compose-stop']

if ( process.argv.includes( '--stop' ) ) {

	exec( cmdDCDevStop )

}else {

	exec( cmdFiles )
	exec( cmdDCDev )

}

