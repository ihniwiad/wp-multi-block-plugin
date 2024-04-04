/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';

/**
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

    const {
        templateName,
        textAlign,
        marginBefore,
        marginAfter,
    } = attributes;

    const className = addClassNames( { 
        textAlign, 
        marginBefore, 
        marginAfter,
    } );

	return (
		<div { ...useBlockProps.save( { className: className } ) }>
            <InnerBlocks.Content />
		</div>
	);
}
