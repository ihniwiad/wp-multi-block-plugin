<?php
/**
 * Plugin Name:       Multiple Blocks Plugin
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       multiple-blocks-plugin
 *
 * @package           create-block
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
function multiple_blocks_plugin_blocks_init() {
	// register_block_type( __DIR__ . '/build/block-1' );
	// register_block_type( __DIR__ . '/build/block-2' );
	register_block_type( __DIR__ . '/build/check-list' );
	register_block_type( __DIR__ . '/build/check-list-item' );
}
add_action( 'init', 'multiple_blocks_plugin_blocks_init' );


// additional scripts / styles

function multiple_blocks_plugin_enqueue_editor_assets() {

	// scripts
    wp_enqueue_script( 'global-block-settings', plugin_dir_url( __FILE__ ) . 'build/_global-block-settings/index.js' );
    wp_enqueue_script( 'global-class-names', plugin_dir_url( __FILE__ ) . 'build/_global-class-names/index.js' );

    // style
	wp_register_style( 'global-editor-style', plugins_url( 'wp-multi-block-plugin/build/_global-editor-style/index.css' ) );
	wp_enqueue_style( 'global-editor-style' );

    // Theme style (from Theme folder)
    wp_register_style(
        'bsx-theme-atf-style',
        get_template_directory_uri() . '/assets/css/atf.css'
        // filemtime( get_template_directory() . '/assets/css/atf.css' ),
    );
    wp_enqueue_style( 'bsx-theme-atf-style' );
    wp_register_style(
        'bsx-theme-style',
        get_template_directory_uri() . '/assets/css/style.css'
        // filemtime( get_template_directory() . '/assets/css/style.css' ),
    );
    wp_enqueue_style( 'bsx-theme-style' );
}
add_action( 'enqueue_block_editor_assets', 'multiple_blocks_plugin_enqueue_editor_assets' );



