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
        nodeName,
        content,
        textColor,
        bgColor,
        marginLeft,
        marginRight,
        marginBefore,
        marginAfter,
    } = attributes;


    const outerClassNames = addClassNames( {
        marginLeft, 
        marginRight, 
        marginBefore,
        marginAfter,
    }, 'bg-text-parent');

    const innerClassNames = addClassNames( {
        textColor,
        bgColor,
    }, 'bg-text' );

    const TagName = nodeName;

	return (
        <TagName { ...useBlockProps.save( { className: outerClassNames } ) }>
            {
                ( content && ! RichText.isEmpty( content ) ) && (
                    <RichText.Content 
                        tagName={ 'span' } 
                        value={ content } 
                        className={ innerClassNames }
                    />
                )
            }
        </TagName>
	);
}
