/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';
import { getTemplate } from './../_functions/utilities.js';
import { 
    // getUrlTruncAndExtension,
    // fullImgIsScaled,
    // getOriginalImgUrl,
    // getSizesAndWithoutSizesTruncFromUrlTrunc,
    // makeSizedImgs,
    // getImgWithHeight,
    // imgExists,
    // getImgSizesData,
    makeImgSizesFromImgData,
    // makeImgData,
} from './../_functions/img.js';


// utils
import {
    makeBannerClassNames,
    makeBannerInnerClassNames,
    makeSrcsetJson,
} from './utils';


// templates (required for checking selected template props)
import templates from './templates';


/**
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

    const {
        nodeName,
        templateName,
        belowNavbar,
        touchFooter,
        bgColor,
        imgId,
        imgSizes,
        imgData,
        imgSizeIndex,
        url,
        portraitImgId,
        portraitImgSizes,
        portraitImgData,
        portraitImgSizeIndex,
        bannerType,
        bannerSize,
        bgAttachment,
        bgAttachmentFixedLimited,
        bgSize,
        bgPosition,
        alignItems,
        smAlignItems,
        mdAlignItems,
        rounded,
        marginBefore,
        marginAfter,
        paddingBefore,
        paddingAfter,
        href,
        target,
        rel,
        dataFn,
        disableResponsiveDownsizing,
        multilayer,
    } = attributes;


    // initial set, replaces old attr 'imgSizes'
    const hasOldAttrImgSizes = typeof imgSizes !== 'undefined' && Array.isArray( imgSizes ) && imgSizes.length > 0;
    const hasOldAttrPortraitImgSizes = typeof portraitImgSizes !== 'undefined' && Array.isArray( portraitImgSizes ) && portraitImgSizes.length > 0;

    const calcImgSizes = hasOldAttrImgSizes ? imgSizes : makeImgSizesFromImgData( imgData );
    const calcPortraitImgSizes = hasOldAttrPortraitImgSizes ? portraitImgSizes : makeImgSizesFromImgData( portraitImgData );

    // TEST
    // console.log( 'props.attributes: ' + JSON.stringify( props.attributes, null, 2 ) );
    // console.log( 'calcImgSizes: ' + JSON.stringify( calcImgSizes, null, 2 ) );
    // console.log( 'calcPortraitImgSizes: ' + JSON.stringify( calcPortraitImgSizes, null, 2 ) + '\n\n' );


    // class names

    let bannerClassName = makeBannerClassNames( {
        bannerType, 
        bannerSize, 
        bgAttachment, 
        bgAttachmentFixedLimited,
        bgSize, 
        bgPosition, 
        alignItems, 
        smAlignItems,
        mdAlignItems,
        templateName,
        rounded,
        href,
    } );
    bannerClassName = addClassNames( {
        belowNavbar, 
        touchFooter,
        bgColor,
        rounded,
        marginBefore, 
        marginAfter, 
        paddingBefore, 
        paddingAfter,
        multilayer,
    }, bannerClassName );

    const bannerInnerClassName = makeBannerInnerClassNames( {
        templateName,
    } );

    const srcsetJson = makeSrcsetJson( { 
        calcImgSizes, 
        imgSizeIndex, 
        calcPortraitImgSizes, 
        portraitImgSizeIndex, 
        disableResponsiveDownsizing,
    } );

    // there might be no images at all, e.g. if background color banner
    const saveAttributes = makeSaveAttributes( {
        'data-fn': imgId ? 'lazyload' : dataFn,
        'data-src': imgId ? calcImgSizes[ imgSizeIndex ].url : '',
        'data-srcset': imgId ? srcsetJson : '',
        href: href, 
        target: target, 
        rel: href ? ( rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' ) : '',
    } );

    const TagName = href ? 'a' : nodeName;

    const template = getTemplate( templates, templateName ).template;

	return (
        <TagName { ...useBlockProps.save( { className: bannerClassName, ...saveAttributes } ) }>
            {
                typeof template !== 'undefined' && template[ 0 ] !== 'undefined' && typeof template[ 0 ][ 1 ] !== 'undefined' && typeof template[ 0 ][ 1 ].isBannerInner !== 'undefined' && template[ 0 ][ 1 ].isBannerInner ? (
                    <InnerBlocks.Content />
                )
                :
                (
                    <div className={ bannerInnerClassName }>
                        <InnerBlocks.Content />
                    </div>
                )
            }
        </TagName>
	);
}
