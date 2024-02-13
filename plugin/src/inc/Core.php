<?php

namespace PigeonPosse\FakeAdmin\Inc;

use PigeonPosse\FakeAdmin\Utils\Notices;

/**
 * PHP class to put all fake admin functions
 *
 **/
class Core {

    /**
     * 'classes'    contains Classes 
     * 'capability' contains capability of fake admin
     * 'id'         contains the unique ID of user role
     *
     */
    protected $role_id, $admin_capability, $txt, $notices, $plugin_name;

    /**
     * Initialize the class and set its properties.
     *
     */
    public function __construct( ) {

    	$this->plugin_name      = 'fake-admin';
        $this->role_id          = 'pigeon_fake_admin';
        $this->admin_capability = 'update_core';
        $this->txt           	= $this->txt();
        $this->notices 			= new Notices();

    }

    // public function load_textdomain() {

	//     load_plugin_textdomain( 
	//     	$this->plugin_name, 
	//     	false, 
	//     	FAKE_ADMIN_DIR_PATH . 'src/lang/' 
	//     );

	// }

    /**
     * Todo
     *
     */
    protected function get_fake_admin(){

    	return get_users( [ 'role' => $this->role_id ] );

    }

    /**
     * Todo
     *
     */
    protected function is_admin(){

    	if ( !current_user_can( $this->admin_capability ) ) return false; 

    	return true;

    }

    /**
     * Todo
     *
     */
    protected function fake_admin_exists(){

    	if ( empty($this->get_fake_admin()) ) return false; 

    	return true;

    }

    /**
     * Todo
     *
     */
    protected function txt(){
    	
		$not = __( 'There is no user created with the <b>Fake Admin</b> role, this can be dangerous when posting posts.', 'fake-admin' );
		$not .= ' <a href="'.esc_url( network_admin_url('user-new.php') ).'">'.__('Create a new user', 'fake-admin').'</a>';
		$not .= ' '.__('or', 'fake-admin').' ';
		$not .= '<a href="'.esc_url( admin_url('users.php') ).'">'.__('change user role', 'fake-admin').'</a>.';

    	return [
    		'role-name' 			=> __( 'Fake admin', 'fake-admin' ),
    		'admin-fake-no-exist' 	=> $not, 
    	];

    }

}
