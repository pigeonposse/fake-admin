/**
 * Core for .Utils folder.
 *
 * @description Functions for .Utils folder.
 */
import { execSync } from 'child_process'
export const isGitHubAuthenticated = () =>{

	try {

		const output = execSync( 'gh auth status', {
			encoding : 'utf-8', 
		} )
		return !output.includes( 'Run gh auth login to authenticate.' )
	
	} catch ( error ) {

		return false
	
	}

}