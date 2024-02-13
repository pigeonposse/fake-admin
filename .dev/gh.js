/**
 * Core for .DEV folder.
 *
 * @description Functions for .DEV folder.
 */
import { execSync } from 'child_process'
import inquirer from 'inquirer'
import { exec } from './exec.js'
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


export const checkGitUserEmail = () => {
    try {
        // Obtener el nombre de usuario y el correo electrónico de Git
        const userName = execSync('git config user.name').toString().trim();
        const userEmail = execSync('git config user.email').toString().trim();

        // Verificar si el nombre de usuario y el correo electrónico están configurados
        if (!userName || !userEmail) {
            return false;
        } else {
            return true;
        }
    } catch (error) {
        console.error( error.message);
        return false;
    }
};

export const addGitUser = async () => {
	const questions = [
		{
			type    : 'input',
			name    : 'git_mail',
			message : 'Add git global mail',
			default() {
	
				return 'example@gmail.com'
			
			},
		},
		{
			type    : 'input',
			name    : 'git_name',
			message : 'Add git global name',
			default() {
	
				return 'Name'
			
			},
		},
	]

	await inquirer.prompt( questions ).then( ( answers ) => {

		// console.log(JSON.stringify(answers, null, '  '));
		if ( !answers || !answers.git_mail || ! answers.git_name ) return

		const cmd = {
			git_mail    : 'git config --global user.email "' + answers.git_mail + '"',
			git_name : 'git config --global user.name "' + answers.git_name + '"',
		}
		
	 	exec( cmd.git_mail )
	 	exec( cmd.git_name )
	
	} )
}