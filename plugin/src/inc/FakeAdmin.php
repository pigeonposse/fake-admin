<?php

namespace PigeonPosse\FakeAdmin\Inc;

/**
 * PHP class to put all fake admin functions
 *
 **/
class FakeAdmin extends Core {

    /**
     * Add admin Fake role
     *
     */
    public function add_role( ) {
        
        add_role(
            $this->role_id,
            $this->txt['role-name'],
            [ 'read' => true ]
        );
        
    }

    /**
     * Functionality
     *
     */
    public function init( ) {  
  
        global $current_user; 

        if ( !$this->is_admin() ) return false; 
        if ( !$this->fake_admin_exists() ) return false; 
        
        $fake_admin = $this->get_fake_admin();
        $fake_admin = $fake_admin[0];

        $posts      = get_posts( [
			'author'          =>  $current_user->ID, 
			'posts_per_page'  => -1,
			'post_status'     => 'any', // no limit
			'post_type'       => get_post_types( [ 'public' => true ] )
        ] );
        
        if ( $posts ) {

            foreach ( $posts as $post ) {

                wp_update_post( [
                    'ID'            => $post->ID,
                    'post_author'   => $fake_admin->ID,
                ] );
            }

        }


    }

    /**
     * Add error notices if there are not fake administrator
     *
     */
    public function notices( ) {

        if ( !$this->is_admin() ) return false; 
        if ( $this->fake_admin_exists() ) return false; 

        $this->notices->add(
            'all',
            'warning', 
            $this->txt['admin-fake-no-exist'],
            false,
            false
        );

    }

    /**
     * Todo
     *
     */
    public function actions(){

        // add_action( 
        //     'init', 
        //     [ $this, 'load_textdomain' ],
        // );
        
        add_action( 
            'init', 
            [ $this, 'add_role' ],
        );

        add_action( 
            'admin_init', 
            [ $this, 'init' ],
        );

        add_action( 
            'admin_notices', 
            [ $this, 'notices' ],
        );

    }

}
