<?php 
/**
 * ADMIN NOTICES 
 * 
 * The template for the pigeon admin notices
 * 
 */

/** Restricted access on frontend */
if ( !defined('ABSPATH') ) exit(); 

$dismissible = ( true == $args['dismissible'] ) ? 'is-dismissible' : '';
$type        = 'notice notice-'.$args['type'];
$msg         = $args['message'];
$update      = ( true == $args['for_update'] ) ? 'updated' : '' ;
$img 		 = '<img src="'.plugins_url().'/fake-admin/src/assets/img/logo.png" width="30px" height="30px" style="margin-right: 10px; border-radius: 5px;"></img>';

?>

<div id="message" class="<?php echo $update.' '.$type.' '.$dismissible; ?>" style="display: flex;padding: 5px 10px;flex-wrap: nowrap;align-items: center;">
	<?php echo $img; ?>
    <p><?php echo $msg; ?></p>
</div>
