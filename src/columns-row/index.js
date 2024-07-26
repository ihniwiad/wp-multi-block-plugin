/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import { rowWithCols as icon } from './../_functions/icon';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	icon,
	// getEditWrapperProps( attributes ) {
 //        const {
 //            // sizeXs,
 //            // sizeSm,
 //            // sizeMd,
 //            // sizeLg,
 //            // sizeXl,
 //        } = attributes;

 //        return {
 //            // 'data-size': sizeXs,
 //            // 'data-size-sm': sizeSm,
 //            // 'data-size-md': sizeMd,
 //            // 'data-size-lg': sizeLg,
 //            // 'data-size-xl': sizeXl,
 //        };
	// },
	edit: Edit,
	save,
} );
