/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';

// utils
import makeColumnRowClassNames from './utils';

/**
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

    const {
        columnRowType,
        alignItems,
        display,
    } = attributes;

    const columnRowClassNames = makeColumnRowClassNames( {
        columnRowType,
        alignItems,
        display,
    } );

	return (
		<div { ...useBlockProps.save( { className: columnRowClassNames } ) }>
            <InnerBlocks.Content />
		</div>
	);
}
