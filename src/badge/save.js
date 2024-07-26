/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';

// utils
import makeBadgeClassNames from './utils';

/**
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

    const {
        href,
        content,
        state,
        badgeType,
        marginLeft,
        marginRight,
        marginBefore,
        marginAfter,
        textColor,
        bgColor,
        iconKey,
        iconFamily,
    } = attributes;

    let badgeClassNames = makeBadgeClassNames( { 
        state, 
        badgeType,
    } );
    badgeClassNames = addClassNames( {
        marginLeft, 
        marginRight, 
        marginBefore,
        marginAfter,
        textColor,
        bgColor,
    }, badgeClassNames );

    if ( ! iconKey ) {
        badgeClassNames += ' badge-content';
    }

    const saveAttributes = makeSaveAttributes( {
        href: href, 
        // target: target, 
        // rel: href ? ( rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' ) : '',
    } );

    const TagName = href ? 'a' : 'span';
    const iconFamilyClassName = ( !! iconFamily ) ? 'fa' + iconFamily : 'fa';
    const iconClassNames = iconFamilyClassName + ' ' + ( iconKey ? 'fa-' + iconKey : '' ) + ' pr-1';

	return (
        <>
            {
                iconKey ? (
                    <TagName { ...useBlockProps.save( { className: badgeClassNames, ...saveAttributes } ) }>
                        <span className={ iconClassNames } aria-hidden="true"></span>
                        {
                            ( content && ! RichText.isEmpty( content ) ) && (
                                <RichText.Content 
                                    tagName={ 'span' } 
                                    value={ content } 
                                    className={ 'badge-content' }
                                />
                            )
                        }
                    </TagName>
                )
                :
                (
                    <>
                        {
                            ( content && ! RichText.isEmpty( content ) ) && (
                                <RichText.Content 
                                    tagName={ TagName } 
                                    value={ content } 
                                    className={ badgeClassNames }
                                     { ...useBlockProps.save( { className: badgeClassNames, ...saveAttributes } ) }
                                />
                            )
                        }
                    </>
                )
            }
        </>
	);
}
