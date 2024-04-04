/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';

/**
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

    const {
        content,
        display,
        marginLeft,
        marginRight,
        marginBefore,
        marginAfter,
    } = attributes;
        
    const labelClassNames = addClassNames( {
        display,
        marginLeft, 
        marginRight, 
        marginBefore,
        marginAfter,
    } );

    const TagName = 'span';

    return (
        <TagName { ...useBlockProps.save( { className: labelClassNames } ) }>
            <RichText.Content value={ content } />
        </TagName>
    );
}
