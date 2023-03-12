import inquirer from 'inquirer';
import { spawnSync } from 'child_process';

const questions = [
  {
    type: 'input',
    name: 'git_add',
    message: "Add files for git",
    default() {
      return '.';
    },
  },
  {
    type: 'input',
    name: 'git_commit',
    message: "Set release commit",
    default() {
      return 'Release commit 🌈⚡️';
    },
  },
];

inquirer.prompt(questions).then((answers) => {

    // console.log(JSON.stringify(answers, null, '  '));
	if (!answers || !answers.git_add || ! answers.git_commit) return

	const gitAdd = 'git add '+ answers.git_add
	const gitCommit = 'git commit -m "'+ answers.git_commit+'"'
	const releaseIt = 'release-it'
	 
	spawnSync( gitAdd, {
		shell : true,
		stdio : 'inherit',
	},);

	spawnSync( gitCommit, {
		shell : true,
		stdio : 'inherit',
	},);

	spawnSync( releaseIt, {
		shell : true,
		stdio : 'inherit',
	},);

});