/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import './style.scss';

/**
 * Internal dependencies
 */
import { rowsCol as icon } from './../_functions/icon';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

// import deprecated from './deprecated';

/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	icon,
    getEditWrapperProps( attributes ) {
        const {
            display,
            flexDirection,
            width,
            justifyContent,
        } = attributes;
        return {
            'data-display': display,
            'data-flexDirection': flexDirection,
            'data-width': width,
            'data-justify-content': justifyContent,
        };
    },
	edit: Edit,
	save,
} );
