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
        iconKey,
        iconFamily,
        calcIconFamily,
        itemTextColor,
        iconTextColor,
        calcIconTextColor,
    } = attributes;

    const itemClassNames = addClassNames( {
        textColor: itemTextColor,
    } );
    
    const iconClassNames = addClassNames( {
        textColor: calcIconTextColor,
    }, 'fa-li ' + 'fa' + calcIconFamily + ' fa-' + iconKey );

	return (
        <li { ...useBlockProps.save( { className: itemClassNames } ) }>
            <span class={ iconClassNames } aria-hidden="true"></span>
            <RichText.Content tagName="span" value={ content } className="content"/>
        </li>
	);
}
