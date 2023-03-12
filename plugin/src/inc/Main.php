<?php

namespace PigeonPosse\FakeAdmin\Inc;

/**
 * PHP class to put all fake admin functions
 * 
 **/

class Main {

	public static function run(){

		$fake_admin = new FakeAdmin();
		$fake_admin->actions();

	}
}
