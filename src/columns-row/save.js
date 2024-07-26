/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';

// utils
import makeRowClassNames from './utils';

/**
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

    const {
        templateName,
        enableInheritanceToCols,
        alignItems,
        justifyContent,
        noGutters,
        formRow,
        rowReverse,
        sizeXs,
        sizeSm,
        sizeMd,
        sizeLg,
        sizeXl,
        colsNodeName,
        colsMarginAfter,
        marginBefore,
        marginAfter,
        paddingBefore,
        paddingAfter,
    } = attributes;

    let rowClassName = makeRowClassNames( {
        alignItems, 
        justifyContent, 
        noGutters, 
        formRow,
        rowReverse,
    } );
    rowClassName = addClassNames( {
        marginBefore, 
        marginAfter, 
        paddingBefore, 
        paddingAfter,
    }, rowClassName );

	return (
		<div { ...useBlockProps.save( { className: rowClassName } ) }>
            <InnerBlocks.Content />
		</div>
	);
}
