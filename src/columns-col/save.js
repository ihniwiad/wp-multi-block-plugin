/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';

// utils
import makeColClassNames from './utils';

/**
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

    const {
        colType,
        enableInheritanceFromRow,
        sizeXs,
        sizeSm,
        sizeMd,
        sizeLg,
        sizeXl,
        nodeName,
        marginAfter,
        display,
    } = attributes;


    let colClassName = makeColClassNames( [ sizeXs, sizeSm, sizeMd, sizeLg, sizeXl ] );
    colClassName = addClassNames( {
        marginAfter,
        display,
    }, colClassName );

    const TagName = nodeName;

	return (
		<TagName { ...useBlockProps.save( { className: colClassName } ) }>
            <InnerBlocks.Content />
		</TagName>
	);
}
