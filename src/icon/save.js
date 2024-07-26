/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';

// utils
import makeIconClassNames from './utils';

/**
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

    const {
        iconKey,
        iconFamily,
        href,
        target,
        rel,
        state,
        hoverState,
        iconType,
        iconSize,
        marginLeft,
        marginRight,
        marginBefore,
        marginAfter,
        verticalAlign,
    } = attributes;
        
    let iconClassNames = makeIconClassNames( { 
        state, 
        hoverState, 
        iconType,
        iconSize,
    } );
    iconClassNames = addClassNames( {
        marginLeft, 
        marginRight, 
        marginBefore,
        marginAfter,
        verticalAlign,
    }, iconClassNames );

    const saveAttributes = makeSaveAttributes( {
        href: href, 
        target: target, 
        rel: href ? ( rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' ) : '',
    } );

    const familyClassName = ( !! iconFamily ) ? 'fa' + iconFamily : 'fa';

    const mergedIconClassName = iconType == 'circle'
        ? 'fa-stack ' + iconClassNames
        : familyClassName + ' fa-' + iconKey + ' ' + iconClassNames
    ;
    const iconInnerClassName = iconType == 'circle'
        ? familyClassName + ' fa-' + iconKey + ' fa-stack-1x fa-inverse'
        : ''
    ; 
    const TagName = !! href
        ? 'a'
        : 'span'
    ; 

	return (
        <>
            {
                iconType == 'circle' ? (
                    <TagName { ...useBlockProps.save( { className: mergedIconClassName, 'aria-hidden': true, ...saveAttributes } ) }>
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class={ iconInnerClassName }></i>
                    </TagName>
                )
                :
                (
                    <TagName { ...useBlockProps.save( { className: mergedIconClassName, 'aria-hidden': true, ...saveAttributes } ) }></TagName>
                )
            }
        </>
	);
}
