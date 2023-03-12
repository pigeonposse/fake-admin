<?php

/**
 * This is the file used to call all the functionality of the plugin
 * 
 **/

namespace PigeonPosse\FakeAdmin;

// If this file is called directly, abort.
if( ! defined( 'ABSPATH' ) ) die();

/**
 * Begins execution of the plugin.
 */

$run = function() {

   Inc\Main::run();

};

$run();
