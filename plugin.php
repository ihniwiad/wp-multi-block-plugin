<?php
/**
 * Plugin Name:       BSX Blocks 2.0 (Multiple Blocks Plugin)
 * Description:       Bootstrap Blocks for a compatible Theme (e.g. BSX WordPress).
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            ihniwiad
 * Plugin URI: https://github.com/ihniwiad/bsx-blocks
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
	// register_block_type( __DIR__ . '/build/block-1' );
	register_block_type( __DIR__ . '/build/check-list' );
	register_block_type( __DIR__ . '/build/check-list-item' );
    register_block_type( __DIR__ . '/build/col' );
    register_block_type( __DIR__ . '/build/container' );
    register_block_type( __DIR__ . '/build/row' );
    register_block_type( __DIR__ . '/build/section' );
    register_block_type( __DIR__ . '/build/wrapper' );
}
add_action( 'init', 'bsx_blocks_init' );


// additional scripts / styles

function bsx_blocks_enqueue_block_editor_assets() {

	// scripts
    wp_enqueue_script( 'global-block-settings', plugin_dir_url( __FILE__ ) . 'build/_global-block-settings/index.js' );
    wp_enqueue_script( 'global-class-names', plugin_dir_url( __FILE__ ) . 'build/_global-class-names/index.js' );

    // style
	wp_register_style( 'global-editor-style', plugin_dir_url( __FILE__ ) . 'build/_global-editor-style/index.css' );
	wp_enqueue_style( 'global-editor-style' );
    wp_register_style( 'global-block-settings-style', plugin_dir_url( __FILE__ ) . 'build/_global-block-settings/index.css' );
    wp_enqueue_style( 'global-block-settings-style' );

	// TODO: What about getting style(s) array from .env file?

    // Theme style (from Theme folder)
    wp_register_style(
        'bsx-theme-atf-style',
        get_template_directory_uri() . '/assets/css/atf.css'
        // [],
        // filemtime( get_template_directory() . '/assets/css/atf.css' ),
    );
    wp_enqueue_style( 'bsx-theme-atf-style' );
    wp_register_style(
        'bsx-theme-style',
        get_template_directory_uri() . '/assets/css/style.css'
        // [],
        // filemtime( get_template_directory() . '/assets/css/style.css' ),
    );
    wp_enqueue_style( 'bsx-theme-style' );
}
add_action( 'enqueue_block_editor_assets', 'bsx_blocks_enqueue_block_editor_assets' );



