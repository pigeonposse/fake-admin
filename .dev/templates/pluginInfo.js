/**
 * Plugin Info File.
 *
 * @description Configuration for release versions in github.
 *
 * @link https://github.com/release-it/release-it/blob/main/docs/configuration.md
 * @since 1.0.0
 * @version 1.0.0
 */

import { pkg, composer } from '../getPkg.js'

const loaders = () => {

	let res = ''

	Object.entries( composer.data.extra.loaders ).forEach( ( [ k, v ] ) => {

		res += `$loader->addPsr4('${v}', __DIR__.'/${k}/');\n`
	
	} )

	return res

}

export const pluginInfo = `<?php 

/**
 * The plugin main file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @wordpress-plugin
 * Plugin Name: ${composer.data.extra.pluginName}
 * Description: ${composer.data.extra.description}
 * Version: ${pkg.data.version}
 * Author: ${composer.data.extra.contributors.collective.WPDisplayName}
 * Author URI: ${composer.data.extra.contributors.collective.web}
 * Donate link: ${composer.data.funding[1].url}
 * Text Domain: ${composer.data.extra.textDomain}
 * Domain Path: ${composer.data.extra.pluginDomainPath}
 * License: ${composer.data.license}
 * License URI: ${composer.data.repositories.github.url}/blob/main/LICENSE
 */

/**
 * --------------------------------------------------------------
 * Ok, this is where the fun starts, bebesita/o/e.
 * --------------------------------------------------------------
 */

/**
 * LOADERS
 */
$loader = require_once __DIR__.'/vendor/autoload.php';

${loaders()}

/**
 * CONSTATS
 */
define('FAKE_ADMIN_DIR_PATH', plugin_dir_path( __FILE__ ));
define('FAKE_ADMIN_DIR_URL', plugin_dir_url( __FILE__ ));

/**
 * PLUGIN SOURCE
 */
require_once 'src/plugin.php';
`
