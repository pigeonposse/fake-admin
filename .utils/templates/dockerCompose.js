/**
 * Todo.
 *
 * @description Todo.
 */

import { pkg, composer } from '../getPkg.js'

const gitUrl     = composer.data.repositories.github.url
const author     = composer.data.extra.contributors.author
const collective = composer.data.extra.contributors.collective
const version    = pkg.data.version ? pkg.data.version : 'UNDEFINDED'
const dcScript   = pkg.data.scripts['docker-compose-dev']
const title      = `${collective.name.toUpperCase()} [${composer.data.extra.pluginName.toUpperCase()}]`
const mark       = `${title} - DOCKER-COMPOSE DEV`

const composeVersion = '3.8'

const dockerComposeDev = `################ ${mark} ################
#
# ${title}
# 
# @description Run WP enviroment for plugin development.
#              Easy to use.
# @usage       - ${dcScript}
#              - pnpm docker-compose-dev
# @link        https://docs.docker.com/compose/
# @link        https://developer.wordpress.org/plugins/wordpress-org/detailed-plugin-guidelines/
#
###############################################################################

version: "${composeVersion}"


###############################################################################
# SERVICES
###############################################################################

services:          


  #########################################################################
  # DATABASE
  #########################################################################
  
  db:

    image: mariadb
    container_name: ${pkg.data.name}-db
    command: --default-authentication-plugin=mysql_native_password  
    volumes:
      - './dev-env/db:/var/lib/mysql'
    restart: always
    env_file: .env


  #########################################################################
  # WP
  #########################################################################
  
  wp:

    image: wordpress:latest
    container_name: ${pkg.data.name}-wp
    depends_on:
      - db
    ports:
      - ${composer.data.extra.devPort}:80
    restart: always
    volumes:
      - ./dev-env/wp:/var/www/html
      - ./plugin:/var/www/html/wp-content/plugins/${pkg.data.name}
      - ./dev-env/wp-cli:/var/www/html/wp-cli
    env_file: .env


  #########################################################################
  # WP-CLI
  #########################################################################
  
  wpcli:
  
    image: wordpress:cli
    container_name: fake-admin-wpcli
    depends_on:
      - db
      - wp
    volumes:
      - ./dev-env/wp:/var/www/html
      - ./plugin:/var/www/html/wp-content/plugins/${pkg.data.name}
      - ./dev-env/wp-cli:/var/www/html/wp-cli
    env_file: .env
    command: sleep 3600


################ ${mark} ################`
	
export const dockerCompose = {
	dev : dockerComposeDev,
}
