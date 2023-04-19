/**
 * Release-it config.
 *
 * @description Configuration for release versions in github.
 *
 * @link https://github.com/release-it/release-it/blob/main/docs/configuration.md
 */

import { pkg, composer } from '../getPkg.js'

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

== Description ==

${gitUrl}

== Installation ==
${gitUrl}#-installation

== Frequently Asked Questions ==

== Screenshots ==

== Changelog ==

${gitUrl}/blob/main/CHANGELOG.md

== Development / Contributing ==

${gitUrl}#-development

`
