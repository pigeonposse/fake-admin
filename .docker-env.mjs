#! /usr/bin/env node

import * as dotenv from 'dotenv'
import chalk from 'chalk';

dotenv.config()

const existArgv =(arg) =>{

	let res = false
	process.argv.forEach(val => {
		if (val == arg) res = true
	});
	return res

}

if ( existArgv('--start-text') ) {

	const txtCreator = (name, hostName, port, ssl = false ) => {

		let res

		res  = `${name}: `
		res += chalk.cyan(`http://${hostName}:${port.split(':')[0]}`)

		return res

	}

	const wp = txtCreator('WP', 'localhost', process.env.WP_PORT )
	// const db = txtCreator('DB', 'localhost', process.env.DB_PORT )

	console.log(`Open in browser development urls:\n\n${wp}`)

}