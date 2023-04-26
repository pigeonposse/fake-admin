/**
 * Release-it config.
 *
 * @description Configuration for release versions in github.
 *
 * @link https://github.com/release-it/release-it/blob/main/docs/configuration.md
 */

import { pkg, composer } from '../getPkg.js'
import { pluginDesc }    from './pluginDesc.js'

const gitUrl     = composer.data.repositories.github.url
const pluginName = composer.data.extra.pluginName

export const pluginReadme = `=== ${pluginName} ===
Contributors: ${composer.data.authors[0].name}
Tags: ${composer.data.extra.wpTags.join( ', ' )}
Plugin Name: ${pluginName}
Plugin URI: ${gitUrl}
Requires at least: 5.3
Tested up to: 6.2
Stable tag: ${pkg.data.version}
Requires PHP: 5.6
License: ${composer.data.license}
License URI: ${gitUrl}/blob/main/LICENSE
Donate link: ${composer.data.funding[1].url}

== Description ==

${pluginDesc.main}

= ${pluginDesc.howWork.title} =

${pluginDesc.howWork.desc}

= More info =

* [Github project page](${gitUrl})

== Screenshots ==

1. When there is no 'fake admin' user, a notification appears in your admin panel
2. Create user with "Fake admin" role or change user role with "Fake admin"
3. Created user with "Fake admin" role
4. Creating random post with a admin user & fake-admin activated
5. Posts, pages, custom posts etc are automatically changed to the user admin-fake

== Frequently Asked Questions ==

== Changelog ==

* [View CHANGELOG](${gitUrl}/blob/main/CHANGELOG.md)

== Development / Contributing ==

* [Contribute](${gitUrl}#-development)

== Installation ==

* [Installation guide](${gitUrl}#-installation)

== Upgrade Notice ==

Please use [github issues](${gitUrl}/issues) when submitting your logs. 

`
