/**
 * Zip plugin.
 *
 * @description Todo.
 */

import fs           from 'fs'
import path         from 'path'
import { composer } from './getPkg.js'
import archiver     from 'archiver'

const zipDirectory = ( sourceDir, outPath ) => {

	const archive = archiver( 'zip', { zlib: { level: 9 } } )
	const stream  = fs.createWriteStream( outPath )

	return new Promise( ( resolve, reject ) => {

		archive
			.directory( sourceDir, false )
			.on( 'error', err => reject( err ) )
			.pipe( stream )

		stream.on( 'close', () => resolve() )
		archive.finalize()
	
	} )

}
try{

	const distPath   = path.join( composer.dir, 'dist' )
	const pluginPath = path.join( composer.dir, 'plugin' )
	const zipPath    = path.join( distPath, `${composer.data.extra.textDomain}.zip` )

	// console.log(distPath, pluginPath, zipPath);

	if ( fs.existsSync( distPath ) ) fs.rmSync( distPath, { recursive: true } )

	fs.mkdirSync( distPath )

	zipDirectory( pluginPath, zipPath )

}catch( e ){

	console.error( e )

}
