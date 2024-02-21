/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import deprecated from './deprecated';

const icon = (
	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" role="img" focusable="false">
		<path d="M10,3v3h8V3H10z M5.79,2.79L4,4.58L3.71,4.29c-0.39-0.39-1.03-0.39-1.42,0c-0.39,0.39-0.39,1.02,0,1.41h0l1,1
		    C3.48,6.9,3.73,7,4,7s0.52-0.1,0.71-0.29l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41C6.82,2.4,6.18,2.4,5.79,2.79z M10,12h8V9h-8V12z
		     M3.29,12.71C3.48,12.89,3.73,13,4,13c0.27,0,0.52-0.1,0.71-0.29l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41c-0.39-0.39-1.02-0.39-1.41,0
		    L4,10.58l-0.29-0.29c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41L3.29,12.71z M10,18h8v-3h-8V18z M5.79,14.79L4,16.58
		    l-0.29-0.29c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41l1,1C3.48,18.89,3.73,19,4,19c0.27,0,0.52-0.1,0.71-0.29
		    l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41C6.82,14.4,6.18,14.4,5.79,14.79z"/>
	</svg>
);

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	icon: icon,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
	deprecated,
} );
