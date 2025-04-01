<?php
/**
 * Plugin Name:       BSX Blocks 2.0 (Multiple Blocks Plugin)
 * Description:       Bootstrap Blocks for a compatible Theme (e.g. BSX WordPress).
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.6
 * Author:            ihniwiad
 * Plugin URI:        https://github.com/ihniwiad/wp-multi-block-plugin
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bsx-blocks
 *
 * @package           bxs-blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function bsx_blocks_init() {

    // incude blocks

	// register_block_type( __DIR__ . '/build/block-1' );
    // register_block_type( __DIR__ . '/build/__test-img-from-id' );
    register_block_type( __DIR__ . '/build/badge' );
    register_block_type( __DIR__ . '/build/banner' );
    register_block_type( __DIR__ . '/build/button' );
    register_block_type( __DIR__ . '/build/button-label' );
    register_block_type( __DIR__ . '/build/buttons' );
	register_block_type( __DIR__ . '/build/check-list' );
	register_block_type( __DIR__ . '/build/check-list-item' );
    register_block_type( __DIR__ . '/build/container' );
    register_block_type( __DIR__ . '/build/columns-col' );
    register_block_type( __DIR__ . '/build/columns-row' );
    register_block_type( __DIR__ . '/build/groups' );
    register_block_type( __DIR__ . '/build/icon' );
    register_block_type( __DIR__ . '/build/icon-list' );
    register_block_type( __DIR__ . '/build/icon-list-item' );
    register_block_type( __DIR__ . '/build/img-gallery' );
    register_block_type( __DIR__ . '/build/lazy-img' );
    register_block_type( __DIR__ . '/build/rows-col' );
    register_block_type( __DIR__ . '/build/rows-row' );
    register_block_type( __DIR__ . '/build/section' );
    register_block_type( __DIR__ . '/build/slider' );
    register_block_type( __DIR__ . '/build/svg-img' );
    register_block_type( __DIR__ . '/build/video' );
    register_block_type( __DIR__ . '/build/wrapper' );
    register_block_type( __DIR__ . '/build/bg-text' );
}
add_action( 'init', 'bsx_blocks_init' );


// additional scripts / styles

function bsx_blocks_enqueue_block_editor_assets() {

    // Include non blocks JS data

    // global block settings
    wp_enqueue_script( 'global-block-settings', plugin_dir_url( __FILE__ ) . 'build/_global-block-settings/index.js' );

    // global class names
    wp_enqueue_script( 'global-class-names', plugin_dir_url( __FILE__ ) . 'build/_global-class-names/index.js' );

}
add_action( 'enqueue_block_editor_assets', 'bsx_blocks_enqueue_block_editor_assets' );


/**
 * Additional scripts / styles
 */
function bsx_blocks_enqueue_theme_styles() {

    // Include non blocks CSS data

    if ( is_admin() ) {

        // global editor style
        wp_register_style( 'global-editor-style', plugin_dir_url( __FILE__ ) . 'build/_global-editor-style/index.css' );
        wp_enqueue_style( 'global-editor-style' );

        // global block settings
        wp_register_style( 'global-block-settings-style', plugin_dir_url( __FILE__ ) . 'build/_global-block-settings/index.css' );
        wp_enqueue_style( 'global-block-settings-style' );


        // Theme styles

        $templateDir = get_template_directory(); // e.g. /Applications/MAMP/htdocs/block-development/wp-content/themes/bsx-wordpress
        $templateDirUri = get_template_directory_uri(); // e.g. http://block-development.local/wp-content/themes/bsx-wordpress
        $relativeTemplateDir = parse_url($templateDirUri, PHP_URL_PATH); // e.g. /wp-content/themes/bsx-wordpress

        wp_enqueue_style( 'admin-editor',
            $relativeTemplateDir . '/assets/css/style.min.css',
            false,
            filemtime( $templateDir . '/assets/css/style.min.css' )
        );
        wp_enqueue_style( 'admin-editor-atf',
            $relativeTemplateDir . '/assets/css/atf.min.css',
            false,
            filemtime( $templateDir . '/assets/css/atf.min.css' ),
        );
    }
}
add_action( 'enqueue_block_assets', 'bsx_blocks_enqueue_theme_styles' );
