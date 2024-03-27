/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';

/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

    const {
        templateName,
        belowNavbar,
        touchFooter,
        id,
        marginBefore,
        marginAfter,
        bgColor,
        paddingBefore,
        paddingAfter,
        isGalleryParent,
    } = attributes;

    const sectionClassName = addClassNames( { 
        belowNavbar, 
        touchFooter,
        marginBefore, 
        marginAfter, 
        bgColor,
        paddingBefore,
        paddingAfter,
    } );

    const saveAttributes = makeSaveAttributes( {
        id: id,
        'data-fn': ( isGalleryParent ) ? 'photoswipe' : '',
    } );

    return (
        <section { ...useBlockProps.save( { className: sectionClassName, ...saveAttributes } ) }>
            <InnerBlocks.Content />
        </section>
    );
}
