<?php 
/**
 * ADMIN NOTICES 
 * 
 * The template for the pigeon admin notices
 * 
 */

/** Restricted access on frontend */
if ( !defined( 'ABSPATH' ) ) return;

$dismissible = ( true == $args['dismissible'] ) ? 'is-dismissible' : '';
$type        = 'notice notice-'.$args['type'];
$msg         = $args['message'] ? $args['message'] : '';
$update      = ( true == $args['for_update'] ) ? 'updated' : '' ;
$img 		 = '<img src="' . esc_url($args['imgUrl']).'" width="30px" height="30px" style="margin-right: 10px; border-radius: 5px;"></img>';
$style 		 = 'display: flex;padding: 5px 10px;flex-wrap: nowrap;align-items: center;';
?>

<div 
	id="message" 
	class="<?php echo esc_attr( $update.' '.$type.' '.$dismissible ); ?>" 
	style="<?php echo esc_attr($style); ?>"
	>
	<?php echo wp_kses_post($img); ?>
    <p><?php echo wp_kses_post($msg); ?></p>
</div>
