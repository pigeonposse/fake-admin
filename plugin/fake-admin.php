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
 * Plugin Name:       Fake Admin
 * Description:       🕵️‍♀️🔌 Prevents your admin user from being exposed to the public.
 * Version:           undefined
 * Author:            Angelo
 * Author URI:        https://pigeonposse.com
 * License:           GPL-3.0-only
 * License URI:       https://github.com/pigeonposse/fake-admin/blob/main/LICENSE
 * Text Domain:       fake-admin
 * Domain Path:       /web/lang
 */

/**
 * --------------------------------------------------------------
 * Ok, this is where the fun starts, bebesite.
 * --------------------------------------------------------------
 */

$loader = require_once __DIR__.'/vendor/autoload.php';
$loader->addPsr4('PigeonPosse\\FakeAdmin\\', __DIR__.'/src/');
$loader->addPsr4('PigeonPosse\\FakeAdmin\\Inc\\', __DIR__.'/src/inc/');
$loader->addPsr4('PigeonPosse\\FakeAdmin\\Utils\\', __DIR__.'/src/utils/');

require_once 'src/plugin.php';
