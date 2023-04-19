/**
 * WriteFile.
 *
 * @description Todo.
 */

import fs           from 'fs'
import { join }     from 'path'
import { composer } from './getPkg.js'

export const writeSync = ( path, txt ) => {

	const filePath = join( composer.dir, path )

	console.log()

	console.group( `🐢 writeFileSync: ${filePath}` )
		
	fs.writeFileSync( filePath, txt )

	console.log( '✅ File overwritten!' )

	console.groupEnd()

}

export const addTextBetweenAMark = async ( path, startMarker, endMarker, textToAdd ) =>{

	const filePath       = join( composer.dir, path )
	const fileContent    = fs.readFileSync( filePath, 'utf-8' )
	const startIndex     = fileContent.indexOf( startMarker ) + startMarker.length
	const endIndex       = fileContent.indexOf( endMarker )
	const newTextContent = `${fileContent.substring( 0, startIndex )}\n${textToAdd}\n${fileContent.substring( endIndex )}`

	writeSync( filePath, newTextContent )

}
