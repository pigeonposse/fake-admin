/**
 * Todo.
 *
 * @description Todo.
 */

import { mark }       from './mark.js'
import { pluginDesc } from './pluginDesc.js'

import { pkg, composer } from '../getPkg.js'

const gitUrl     = composer.data.repositories.github.url
const author     = composer.data.extra.contributors.author
const collective = composer.data.extra.contributors.collective

// const usage = `

// ` 

const org = `
## 👨‍💻 Development

You can contribute via **_Github_**.

[![Issues](https://img.shields.io/badge/Issues-grey?style=flat-square)](${gitUrl}/issues)
[![Pull requests](https://img.shields.io/badge/Pulls-grey?style=flat-square)](${gitUrl}/pulls)

## ☕ Donate

Help us to develop more interesting things.

[![Donate](https://img.shields.io/badge/Donate-grey?style=flat-square)](${composer.data.funding[0].url}) 


## 📜 License

This software is licensed with ***[GPLv3](/LICENSE)***.

[![Read more](https://img.shields.io/badge/Read-more-grey?style=flat-square)](/LICENSE)

## 🐦 About us

_PigeonPosse_ is a ✨ **code development collective** ✨ focused on creating practical and interesting tools that help developers and users enjoy a more agile and comfortable experience. Our projects cover various programming sectors and we do not have a thematic limitation in terms of projects.

[![More](https://img.shields.io/badge/Read-more-grey?style=flat-square)](${collective.github})

### Collaborators

|                                                                                    | Name        | Role         | GitHub                                         |
| ---------------------------------------------------------------------------------- | ----------- | ------------ | ---------------------------------------------- |
| <img src="${author.github}.png?size=72" style="border-radius:100%"/> | ${author.name} |   Author   | [@${author.name}](${author.github}) |
| <img src="${collective.github}.png?size=72" style="border-radius:100%"/> | ${collective.name} | Collective	  | [@${collective.name}](${collective.github}) |


<br> 
`

const markTxt = `<!--\n${mark}\n-->`
const desc    = `${pluginDesc.main}

### ${pluginDesc.howWork.title}

${pluginDesc.howWork.desc}

`

export const readme = {
	// usage : usage,
	org  : org,
	mark : markTxt,
	desc : desc,
}
