/**
 * Dev.
 *
 * @description Todo.
 *
 */

import { spawnSync } from 'child_process'

export const exec = ( cmd ) => {
	
	console.log()

	console.group( `🐢 CMD: ${cmd}` )
	
	spawnSync( cmd, {
		shell : true,
		stdio : 'inherit',
	} )
	
	console.groupEnd()

}
