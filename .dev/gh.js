/**
 * Core for .DEV folder.
 *
 * @description Functions for .DEV folder.
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