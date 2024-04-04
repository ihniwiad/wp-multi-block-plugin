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
import { buttons as icon } from './../_functions/icon';
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
            templateName,
            textAlign,
            marginBefore,
            marginAfter,
        } = attributes;
        return {
            'data-template-name': templateName,
            'data-text-align': textAlign,
            'data-margin-before': marginBefore,
            'data-margin-after': marginAfter,
        };
    },
	edit: Edit,
	save,
} );
