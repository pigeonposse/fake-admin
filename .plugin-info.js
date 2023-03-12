/**
 * Release-it config.
 *
 * @descriptionConfiguration for release versions in github.
 * @link https://github.com/release-it/release-it/blob/main/docs/configuration.md
 * @since 1.0.0
 * @version 1.0.0
 */


const pkg = require( './composer.json' )
const fs = require('fs');

const pluginChange = `<?php 

/**
 * The plugin main file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @wordpress-plugin
 * Plugin Name:       ${pkg.custom.pluginName}
 * Description:       ${pkg.custom.description}
 * Version:           ${pkg.version}
 * Author:            ${pkg.authors[0].name}
 * Author URI:        ${pkg.authors[0].homepage}
 * License:           ${pkg.license}
 * License URI:       ${pkg.repositories.github.url}/blob/main/LICENSE
 * Text Domain:       ${pkg.custom.textDomain}
 * Domain Path:       /web/lang
 */

/**
 * --------------------------------------------------------------
 * Ok, this is where the fun starts, bebesite.
 * --------------------------------------------------------------
 */

$loader = require_once __DIR__.'/vendor/autoload.php';
$loader->addPsr4('PigeonPosse\\\\FakeAdmin\\\\', __DIR__.'/src/');
$loader->addPsr4('PigeonPosse\\\\FakeAdmin\\\\Inc\\\\', __DIR__.'/src/inc/');
$loader->addPsr4('PigeonPosse\\\\FakeAdmin\\\\Utils\\\\', __DIR__.'/src/utils/');

require_once 'src/plugin.php';
`

fs.writeFile(pkg.custom.pluginFile, pluginChange, (err) => {
  if (err) throw err;
  console.log('File overwritten!');
});