/**
 * Release-it config.
 *
 * @descriptionConfiguration for release versions in github.
 * @link https://github.com/release-it/release-it/blob/main/docs/configuration.md
 * @since 1.0.0
 * @version 1.0.0
 */

const composer = require( '../composer.json' )
const pkg = require( '../package.json' )
const fs = require('fs');
var path = require('path');

const pluginChange = `=== ${composer.extra.pluginName} ===
Contributors: ${composer.authors[0].name}
Tags: security, users, roles, admin, wp-admin, administrator
Plugin Name:: ${composer.extra.pluginName}
Plugin URI: ${composer.repositories.github.url}
Requires at least: 5.3
Tested up to: 6.0
Stable tag: ${pkg.version}
Requires PHP: 5.6
License: ${composer.license}
License URI: ${composer.repositories.github.url}/blob/main/LICENSE

== Description ==

${composer.repositories.github.url}

== Installation ==
${composer.repositories.github.url}#-installation

== Frequently Asked Questions ==

== Screenshots ==

== Changelog ==

${composer.repositories.github.url}/blob/main/CHANGELOG.md

== Development / Contributing ==

${composer.repositories.github.url}#-development

`
const pluginFile = path.join(__dirname, '../'+composer.extra.pluginReadMe )

// console.log(pluginFile)

fs.writeFile(pluginFile, pluginChange, (err) => {
  if (err) throw err;
  console.log('File overwritten!');
});

