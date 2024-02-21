/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import { addClassNames } from './../_functions/add-class-names.js';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

	const {
        className,
        content,
        state,
        marginLeft,
        marginRight,
        marginBefore,
        marginAfter,
        display,
        textAlign,
	} = attributes;

    const checklistClassNames = addClassNames( {
        marginLeft, 
        marginRight, 
        marginBefore,
        marginAfter,
        display,
        textAlign,
    }, !! className ? 'checklist ' + className : 'checklist' );

    return (
        <ul { ...useBlockProps.save( { className: checklistClassNames } ) }>
            <InnerBlocks.Content />
        </ul>
    );
}
