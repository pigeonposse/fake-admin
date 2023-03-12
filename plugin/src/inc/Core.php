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
    protected $role_id, $admin_capability, $txt, $notices;

    /**
     * Initialize the class and set its properties.
     *
     */
    public function __construct( ) {

    	$this->plugin_name      = 'fake_admin';
        $this->role_id          = 'pigeon_fake_admin';
        $this->admin_capability = 'update_core';
        $this->txt           	= $this->txt();
        $this->notices 			= new Notices();

    }

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

    	$name = $this->plugin_name;

        $link = '<a href="%1$s">Create a new user</a> or <a href="%2$s">change user role</a>';
    	$not  = "There is no user created with the <b>fake Administrator</b> role, this can be dangerous when posting posts. ". $link;

    	return [
    		'role-name' 			=> __( 'Fake admin', $this->plugin_name ),
    		'admin-fake-no-exist' 	=> sprintf( 
	    		__( $not, $this->plugin_name ),
	    		network_admin_url('user-new.php'),
	    		admin_url('users.php'), 
	    	),
    	];

    }

}
