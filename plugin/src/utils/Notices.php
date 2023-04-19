<?php

namespace PigeonPosse\FakeAdmin\Utils;

/**
 * This class is a constructor of wp admin notices
 */

class Notices {

    /**
     * Classes
     *
     */
    private $partial;

    /**
     * Constructor
     *
     */
    public function __construct(){
        
    	$this->partial = plugin_dir_path( __DIR__ ).'/partials/admin/notices.php';


    }

    /**
     * Notice constructor
     *
     */
    private function notices_constructor( 
        $page_name,
        $type, 
        $message,
        $dismissible = true,
        $for_update  = true
    ) {

        global $pagenow;    

        // args
        $args = [
            'type'          => ( $type == 'success' || $type == 'warning' || $type == 'error' || $type == 'info' ) ? $type : 'info',
            'message'       => $message,
            'dismissible'   => $dismissible,
            'for_update'    => $for_update,
            "imgUrl"        => plugin_dir_url( __DIR__ ) . 'assets/img/logo.png'
        ];

        // condition
        if ( $for_update == true ) {
        
            if( 
                isset($_GET['page']) && 
                $_GET['page'] == $page_name && 
                isset( $_GET['updated'] ) 
            ) {

                // add html
                include( $this->partial );

            }

        }else {
            
            // add html
            if ( $page_name == '' || $page_name == 'all' ) {

                include( $this->partial );

            }else if ( $page_name == $pagenow ) {

                include( $this->partial );

            }
        
        }

    }

    /**
     * add admin notice
     *
     */
    public function add(
        $page_id    = '',
        $type       = 'success', 
        $message    = '',
        $dismissible = true,
        $for_update  = true
    ) {

        $this->notices_constructor(
            $page_id,
            $type, 
            $message,
            $dismissible, 
            $for_update
        );

    }

}
