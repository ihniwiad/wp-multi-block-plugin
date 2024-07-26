/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';

// utils
import makeColumnRowsClassNames from './utils';

/**
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

    const {
        templateName,
        display,
        flexDirection,
        width,
        justifyContent,
        multilayer,
        zIndex,
        isBannerInner,
    } = attributes;

    let columnsRowsClassNames = makeColumnRowsClassNames( {
        templateName,
        display,
        flexDirection,
        width,
    } );
    columnsRowsClassNames = addClassNames( {
        multilayer,
        zIndex,
        isBannerInner,
    }, columnsRowsClassNames );

	return (
		<div { ...useBlockProps.save( { className: columnsRowsClassNames } ) }>
            <InnerBlocks.Content />
		</div>
	);
}
