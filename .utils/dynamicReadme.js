/**
 * Todo.
 *
 * @description Todo.
 */

import fs                                 from 'fs'
import { join }                           from 'path'
import { writeFile, addTextBetweenAMark } from './writeFile.js'
import { readme }                         from './templates/readme.js'

const dynamicReadme = async () => {

	await addTextBetweenAMark( 
		'README.md', 
		'<!-- PIGEONPOSSE START MARK -->', 
		'<!-- PIGEONPOSSE END MARK -->', 
		readme.mark,
	)
	await addTextBetweenAMark( 
		'README.md',
		'<!-- PIGEONPOSSE START ORG -->', 
		'<!-- PIGEONPOSSE END ORG -->', 
		readme.org,
	)

}

try{

	dynamicReadme()

}catch( e ){

	console.error( e )

}

