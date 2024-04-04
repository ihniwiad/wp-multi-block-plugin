/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';

// utils
import {
    makeButtonClassNames,
    isEmailFormat,
} from './utils';

/**
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

    const {
        href,
        content,
        target,
        rel,
        state,
        stateType,
        size,
        dataFn,
        marginLeft,
        marginRight,
        marginBefore,
        marginAfter,
        ignoreMailtoSpamProtection,
        disabled,
    } = attributes;

    const checkEmail = isEmailFormat( href );

    // adapt empty content of email link
    // if ( ! content && checkEmail.valid ) {
    //     content.push[ href.substring( 7 ) ];
    //     console.log( '----- save: content adapted' );
    // }

    // after reload content is empty in case of valid mailto href
    const hrefIsEmail = checkEmail.valid;
    const hrefIsEmailIsContent = hrefIsEmail && ( href == 'mailto:' + content || ( typeof content == 'object' && content.length == 0 ) );

    // console.log( '---------- checkEmail.valid: ' + checkEmail.valid );
    // console.log( '----- href: ' + href );
    // console.log( '----- content: ' + content );
    // console.log( '----- typeof content: ' + typeof content );
    // console.log( '----- content.length: ' + content.length );
    // console.log( '----- hrefIsEmailIsContent: ' + hrefIsEmailIsContent );
    
    let buttonClassNames = makeButtonClassNames( { 
        state, 
        stateType, 
        size,
        hrefIsEmailIsContent,
        ignoreMailtoSpamProtection,
    } );
    buttonClassNames = addClassNames( {
        marginLeft, 
        marginRight, 
        marginBefore,
        marginAfter,
        disabled,
    }, buttonClassNames );

    // save spam-protected mailto link format (no href-attribute, no content – both will be set via css / js):
    // `<a class="create-mt" data-fn="create-mt" data-mt-n="MY_NAME" data-mt-d="MY_DOMAIN" data-mt-s="MY_DOMAIN_SUFFIX"></a>`

    const saveAttributes = makeSaveAttributes( {
        href: ! ( ! ignoreMailtoSpamProtection && hrefIsEmail ) ? href : 'javascript:void( 0 );', 
        'data-fn': ! ignoreMailtoSpamProtection && hrefIsEmail ? 'create-mt' : dataFn,
        'data-mt-n': ! ignoreMailtoSpamProtection && hrefIsEmail ? checkEmail.name : '',
        'data-mt-d': ! ignoreMailtoSpamProtection && hrefIsEmail ? checkEmail.domain : '',
        'data-mt-s': ! ignoreMailtoSpamProtection && hrefIsEmail ? checkEmail.suffix : '',
        target: target, 
        rel: href ? ( rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' ) : '',
        'disabled': ! href && disabled
    } );

    const TagName = href || state == 'text-link' ? 'a' : 'button';

	return (
        <TagName { ...useBlockProps.save( { className: buttonClassNames, ...saveAttributes } ) }>
            <RichText.Content value={ ! ignoreMailtoSpamProtection && hrefIsEmailIsContent ? '' : content } />
        </TagName>
	);
}
