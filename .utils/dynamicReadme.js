/**
 * Todo.
 *
 * @description Todo.
 */

import fs                      from 'fs'
import { join }                from 'path'
import { addTextBetweenAMark } from './writeFile.js'
import { readme }              from './templates/readme.js'

const dynamicReadme = async () => {

	await addTextBetweenAMark( 
		'README.md', 
		'<!-- PIGEONPOSSE START MARK -->', 
		'<!-- PIGEONPOSSE END MARK -->', 
		readme.mark,
	)

	await addTextBetweenAMark( 
		'README.md', 
		'<!-- PIGEONPOSSE START DESCRIPTION -->', 
		'<!-- PIGEONPOSSE END DESCRIPTION -->', 
		readme.desc,
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

