/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';

/**
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

    const {
        openSingle,
        marginLeft,
        marginRight,
        marginBefore,
        marginAfter,
    } = attributes;

    const ulClassNames = addClassNames( { 
        marginLeft,
        marginRight,
        marginBefore, 
        marginAfter,
    }, 'accordion list-unstyled' );

    const saveAttributes = makeSaveAttributes( {
        'data-acc-conf': openSingle ? '{ multipleOpen: false }' : '',
    } );

	return (
		<ul { ...useBlockProps.save( { className: ulClassNames, ...saveAttributes } ) } data-acc="">
            <InnerBlocks.Content />
		</ul>
	);
}
