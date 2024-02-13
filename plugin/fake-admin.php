<?php 

/**
 * The plugin main file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @wordpress-plugin
 * Plugin Name: Fake Admin
 * Description: 🕵️‍♀️🔌 Prevent your administrator user from being exposed to the public with just a few clicks. Create a user or change the role of an existing one to Fake-Admin and you're done! easy to use and very practical.
 * Version: 1.0.9
 * Author: PigeonPosse collective
 * Author URI: https://pigeonposse.com
 * Donate link: https://pigeonposse.com/?popup=donate
 * Text Domain: fake-admin
 * Domain Path: /languages
 * License: GPL-3.0-only
 * License URI: https://github.com/pigeonposse/fake-admin/blob/main/LICENSE
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

$loader->addPsr4('PigeonPosse\\FakeAdmin\\', __DIR__.'/src/');
$loader->addPsr4('PigeonPosse\\FakeAdmin\\Inc\\', __DIR__.'/src/inc/');
$loader->addPsr4('PigeonPosse\\FakeAdmin\\Utils\\', __DIR__.'/src/utils/');


/**
 * CONSTATS
 */
define('FAKE_ADMIN_DIR_PATH', plugin_dir_path( __FILE__ ));
define('FAKE_ADMIN_DIR_URL', plugin_dir_url( __FILE__ ));

/**
 * PLUGIN SOURCE
 */
require_once 'src/plugin.php';
