/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';

/**
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

    const {
        nodeName,
        id,
        dataFn,
        dataFnOptions,
        dataFnTarget,
        dataTg,
        belowNavbar,
        bgColor,
        textColor,
        textSize,
        textAlign,
        resTextAlignBreakpoint,
        resTextAlign,
        textShadow,
        fontWeight,
        inverseTextColor,
        headingInheritTextColor,
        headingInheritFontWeight,
        width,
        height,
        rounded,
        border,
        borderState,
        marginBefore,
        marginAfter,
        marginLeft,
        marginRight,
        resMargin1Breakpoint,
        resMargin1Position,
        resMargin1Size,
        resMargin2Breakpoint,
        resMargin2Position,
        resMargin2Size,
        paddingBefore,
        paddingAfter,
        paddingLeft,
        paddingRight,
        touchFooter,
        display,
        verticalAlign,
        speechBubble,
        isAlert,
        state,
        isGalleryParent,
        multilayer,
        zIndex,
        isBannerInner,
        position,
        isTop0,
        isBottom0,
        isLeft0,
        isRight0,
        role,
        tabindex,
        hidden,
        overflow,
        // href,
        // target,
        // rel,
    } = attributes;


    const wrapperClassName = addClassNames( { 
        belowNavbar,
        bgColor, 
        textColor, 
        textSize,
        rounded, 
        border,
        borderState,
        textAlign,
        resTextAlignBreakpoint,
        resTextAlign,
        textShadow,
        fontWeight,
        inverseTextColor,
        headingInheritTextColor,
        headingInheritFontWeight,
        width,
        height,
        marginBefore,
        marginAfter,
        marginLeft,
        marginRight,
        resMargin1Breakpoint,
        resMargin1Position,
        resMargin1Size,
        resMargin2Breakpoint,
        resMargin2Position,
        resMargin2Size,
        paddingBefore, 
        paddingAfter, 
        paddingLeft, 
        paddingRight,
        touchFooter,
        display,
        verticalAlign,
        speechBubble,
        isAlert,
        state,
        multilayer,
        zIndex,
        isBannerInner,
        position,
        isTop0,
        isBottom0,
        isLeft0,
        isRight0,
        overflow,
    } );

    const saveAttributes = makeSaveAttributes( {
        // href: href, 
        // target: ref ? target : '', 
        // rel: href ? ( rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' ) : '',
        id: id,
        'data-fn': ( isGalleryParent ) ? 'photoswipe' : dataFn,
        'data-fn-options': dataFnOptions,
        'data-fn-target': dataFnTarget,
        'data-tg': dataTg,
        'role': role,
        'tabindex': tabindex,
        'hidden': hidden,
    } );

    const TagName = !! nodeName ? nodeName : 'div';

	return (
		<TagName { ...useBlockProps.save( { className: wrapperClassName, ...saveAttributes } ) }>
            <InnerBlocks.Content />
		</TagName>
	);
}
