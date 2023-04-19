/**
 * Package function.
 *
 * @description Get package.json data, path or dir.
 */

import { fileURLToPath } from 'url'
import { readFileSync }  from 'fs'
import path              from 'path'
import * as url          from 'url'

export const pkgFunct = ( fileName ) => {

	const json = ( path ) => JSON.parse( readFileSync( path ) )

	let projectPath = path.join(
		path.dirname( fileURLToPath( import.meta.url ) ),
		'..', 
	)

	// when is used in the compilated files of 'dist' folder
	if ( projectPath.includes( 'dist' ) ) projectPath = path.join( projectPath, '..' )

	const pkgPath = path.join( projectPath, fileName + '.json' )
	const pkgData = json( pkgPath )

	return {
		path : pkgPath,
		dir  : projectPath,
		data : pkgData,
	}

}

export const pkg = pkgFunct( 'package' )
export const composer = pkgFunct( 'composer' )
