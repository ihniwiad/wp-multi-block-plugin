/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import { RawHTML } from '@wordpress/element';

import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';

// utils
import unwrapContent from './utils';

/**
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

    const {
        content,
        nodeName,
        href,
        target,
        rel,
        state,
        marginBefore,
        marginAfter,
        verticalAlign,
        textAlign,
        display,
    } = attributes;


    // console.log( 'content: ' + JSON.stringify( content, null, 2 ) );


    // unwrap content (remove wrapping outer element)
    const unwrappedContent = unwrapContent( content );


    // console.log( 'content (unwrapped): ' + JSON.stringify( unwrappedContent, null, 2 ) );

    
    const className = addClassNames( {
        state,
        marginBefore,
        marginAfter,
        verticalAlign,
        textAlign,
        display,
    }, 'svg-wrap' );

    const saveAttributes = makeSaveAttributes( {
        href: href, 
        target: target, 
        rel: href ? ( rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' ) : '',
    } );

    let TagName = !! nodeName ? nodeName : '';
    if ( !! href ) {
        TagName = 'a';
    }

	return (
        <>
            {
                TagName ? 
                (
                    <TagName { ...useBlockProps.save( { className: className, ...saveAttributes } ) }>
                        <RawHTML>{ unwrappedContent }</RawHTML>
                    </TagName>
                )
                : 
                (
                    <RawHTML { ...useBlockProps.save( { className: className, ...saveAttributes } ) }>{ unwrappedContent }</RawHTML>
                )
            }
        </>
	);
}
