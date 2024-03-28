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
import { wrapper as icon } from './../_functions/icon';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	icon,
	getEditWrapperProps( attributes ) {
        const {
            textAlign,
            resTextAlignBreakpoint,
            resTextAlign,
            marginBefore,
            marginAfter,
            marginLeft,
            marginRight,
            // resMargin1Breakpoint,
            // resMargin1Position,
            // resMargin1Size,
            // resMargin2Breakpoint,
            // resMargin2Position,
            // resMargin2Size,
            // paddingBefore,
            // paddingAfter,
            // paddingLeft,
            // paddingRight,
            display,
            verticalAlign,
            isAlert,
            state,
            multilayer,
            zIndex,
        } = attributes;

        return {
            'data-text-align': textAlign,
            'data-res-text-align': resTextAlignBreakpoint + '-' + resTextAlign,
            'data-margin-before': marginBefore,
            'data-margin-after': marginAfter,
            'data-margin-left': marginLeft,
            'data-margin-right': marginRight,
            'data-display': display,
            'data-vertical-align': verticalAlign,
            'data-is-alert': ( !! isAlert ? 'true' : 'false' ),
            'data-state': state,
            'data-multilayer': multilayer,
            'data-z-index': zIndex,
        };
	},
	edit: Edit,
	save,
} );
