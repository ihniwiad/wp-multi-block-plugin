/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
    useBlockProps,
    RichText,
} from '@wordpress/block-editor';

import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';
import { 
    makeBase64PreloadImgSrc,
    makeImgSizesFromImgData,
} from './../_functions/img.js';

// utils
import {
    makeSrcset,
} from './utils';

/**
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

    const {
        className,
        imgSizeIndex,
        imgSizes,
        imgData,
        url,
        // width,
        // height,
        origWidth,
        origHeight,
        portraitImgId,
        portraitImgSizes,
        portraitImgData,
        portraitImgSizeIndex,
        portraitImgMaxWidthBreakpoint,
        alt,
        figcaption,
        rounded,
        imgThumbnail,
        borderState,
        zoomable,
        externalGalleryParent,
        zoomImgSizeIndex,
        disableResponsiveDownsizing,
        textAlign,
        marginBefore,
        marginAfter,
        marginLeft,
        marginRight,
        aAdditionalClassName,
        pictureAdditionalClassName,
        imgAdditionalClassName,
        href,
        target,
        rel,
        scale,
        displayedWidth,
        displayedHeight,
        noFigureTag,
    } = attributes;

    // console.log( 'Hello from v3 save()!' )


    // TEST
    // console.log( 'imgData: ' + JSON.stringify( imgData, null, 2 ) );
    // console.log( 'imgSizes: ' + JSON.stringify( imgSizes, null, 2 ) + '\n' );



    // initial set, replaces old attr 'imgSizes'
    const hasOldAttrImgSizes = typeof imgSizes !== 'undefined' && Array.isArray( imgSizes ) && imgSizes.length > 0;
    const hasOldAttrPortraitImgSizes = typeof portraitImgSizes !== 'undefined' && Array.isArray( portraitImgSizes ) && portraitImgSizes.length > 0;

    const calcImgSizes = hasOldAttrImgSizes ? imgSizes : makeImgSizesFromImgData( imgData );
    const calcPortraitImgSizes = hasOldAttrPortraitImgSizes ? portraitImgSizes : makeImgSizesFromImgData( portraitImgData );

    // console.log( 'calcImgSizes: ' + JSON.stringify( calcImgSizes, null, 2 ) + '\n' );

    // prepare img sources attributes

    // const sourcesAttributesList = makeSourcesAttributesList( {
    //     calcImgSizes,
    //     imgSizeIndex,
    //     calcPortraitImgSizes,
    //     portraitImgSizeIndex,
    //     portraitImgMaxWidthBreakpoint,
    //     disableResponsiveDownsizing,
    // } );

    // class names

    const classNames = addClassNames( {
        textAlign,
        marginBefore,
        marginAfter,
        marginLeft,
        marginRight,
    }, className );

    const aClassName = zoomable ? 'zoomable-img' : ( !! href && !! aAdditionalClassName ? aAdditionalClassName : '' );
    // let aClassName = '';
    // if ( zoomable ) {
    //     aClassName += 'zoomable-img';
    // }
    // if ( !! href && !! aAdditionalClassName ) {
    //     aClassName += ' ' + aAdditionalClassName.trim();
    // }

    const imgClassName = addClassNames( {
        rounded,
        imgThumbnail,
        borderState,
    }, 'img-fluid' + ( imgAdditionalClassName ? ' ' + imgAdditionalClassName : '' ) );

    // attributes

    // allow zoomable img
    const saveAttributes = ( zoomable && ! externalGalleryParent ) ? 
        makeSaveAttributes( {
            'data-fn': 'photoswipe',
        } )
        :
        {}
    ;

    // manage zoomImgSizeIndex & href, target, rel
    const aSaveAttributes = ( zoomable && typeof calcImgSizes[ zoomImgSizeIndex ] != 'undefined' ) ? 
        makeSaveAttributes( {
            'href': calcImgSizes[ zoomImgSizeIndex ].url,
            'data-size': calcImgSizes[ zoomImgSizeIndex ].width + 'x' + calcImgSizes[ zoomImgSizeIndex ].height,
        } )
        : 
        (
            !! href ? 
            {
                'href': href,
                'target': target,
                rel: href ? ( rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' ) : '',
            } 
            : 
            {}
        )
    ;

    // check if valid image(s)
    const hasValidImg = ( typeof calcImgSizes !== 'undefined' && calcImgSizes.length > 0 && typeof calcImgSizes[ imgSizeIndex ] !== 'undefined' && imgSizeIndex < calcImgSizes.length );
    const hasValidPortraitImg = ( typeof calcPortraitImgSizes !== 'undefined' && typeof calcPortraitImgSizes[ portraitImgSizeIndex ] !== 'undefined' ) && !! portraitImgSizeIndex;

           // const image = typeof calcImgSizes !== 'undefined' && typeof calcImgSizes[ imgSizeIndex ] !== 'undefined' ? (
    //     <>
    //         <script>document.write( '
    //             <picture className={ ! noFigureTag ? pictureAdditionalClassName : classNames }>
    //                 {
    //                     sourcesAttributesList.map( ( sourceAttributes, index ) => (
    //                         <source { ...sourceAttributes } />
    //                     ) )
    //                 }
    //                 <img className={ imgClassName } src={ makeBase64PreloadImgSrc( calcImgSizes[ imgSizeIndex ].width, calcImgSizes[ imgSizeIndex ].height ) } alt={ alt } data-src={ calcImgSizes[ imgSizeIndex ].url } width={ !! displayedWidth ? displayedWidth : calcImgSizes[ imgSizeIndex ].width } height={ !! displayedHeight ? displayedHeight : calcImgSizes[ imgSizeIndex ].height } data-fn="lazyload" />
    //             </picture>
    //         ' );</script>
    //         <noscript><img className={ imgClassName } src={ calcImgSizes[ imgSizeIndex ].url } alt={ alt } width={ !! displayedWidth ? displayedWidth : calcImgSizes[ imgSizeIndex ].width } height={ !! displayedHeight ? displayedHeight : calcImgSizes[ imgSizeIndex ].height } /></noscript>
    //     </>
    // )
    // :
    // (
    //     <></>
    // );


    // const srcsetList = [];
    // calcImgSizes.forEach( ( imgSize, index ) => {
    //     if ( 
    //         ( ( imgSizeIndex == 0 && index == 0 ) || ( imgSize.width == imgSize.height ) )
    //         || ( imgSizeIndex > 0 && index > 0 )
    //     ) {
    //         // add square thumb img if selected (imgSizeIndex == 0) or original img is square format too, else skip
    //         srcsetList.push( imgSize.url + ' ' + imgSize.width + 'w' );
    //         if ( imgSizeIndex == 0 ) {
    //             // skip other sizes but square
    //             return; // `break` will cause error “Unsyntactic break.”
    //         }
    //     }
    // } );

    // const srcset = srcsetList.join( ', ' );

    const srcset = makeSrcset( {
        calcImgSizes,
        imgSizeIndex,
        disableResponsiveDownsizing,
    } );
    const src = hasValidImg ? calcImgSizes[ imgSizeIndex ].url : '';
    const width = ( hasValidImg && !! displayedWidth ) ? displayedWidth : hasValidImg ? calcImgSizes[ imgSizeIndex ].width : '';
    const height = ( hasValidImg && !! displayedHeight ) ? displayedHeight : hasValidImg ? calcImgSizes[ imgSizeIndex ].height : '';
    const sizes = ( width && height ) ? '(max-width: ' + width + 'px) 100vw, ' + width + 'px' : '';
    const landscapeImgClassName = hasValidPortraitImg ? imgClassName + ' d-portrait-none' : imgClassName;

    // TODO: manage className (if is outer element)

    const image = hasValidImg ? (
        <>
            <script>document.write( '
                <img className={ landscapeImgClassName } src={ makeBase64PreloadImgSrc( width, height ) } data-src={ src } data-srcset={ srcset } sizes={ sizes } alt={ alt } width={ width } height={ height } data-fn="lazyload" />
            ' );</script>
            <noscript><img className={ landscapeImgClassName } src={ src } srcset={ srcset } sizes={ sizes } alt={ alt } width={ width } height={ height } loading="lazy" /></noscript>
        </>
    )
    :
    (
        <></>
    );

    let portraitImage = (
        <></>
    );
    if ( hasValidPortraitImg ) {

        const portraitSrcset = makeSrcset( {
            calcImgSizes: calcPortraitImgSizes,
            imgSizeIndex: portraitImgSizeIndex,
        } );
        const portraitSrc = calcPortraitImgSizes[ portraitImgSizeIndex ].url;
        const portraitWidth = calcPortraitImgSizes[ portraitImgSizeIndex ].width;
        const portraitHeight = calcPortraitImgSizes[ portraitImgSizeIndex ].height;
        const portaitSizes = '(max-width: ' + portraitWidth + 'px) 100vw, ' + portraitWidth + 'px';
        const portraitImgClassName = imgClassName + ' d-landscape-none';

        portraitImage = (
            <>
                <script>document.write( '
                    <img className={ portraitImgClassName } src={ makeBase64PreloadImgSrc( portraitWidth, portraitHeight ) } data-src={ portraitSrc } data-srcset={ portraitSrcset } sizes={ portaitSizes } alt={ alt } width={ portraitWidth } height={ portraitHeight } data-fn="lazyload" />
                ' );</script>
                <noscript><img className={ portraitImgClassName } src={ portraitSrc } srcset={ portraitSrcset } sizes={ portaitSizes } alt={ alt } width={ portraitWidth } height={ portraitHeight } loading="lazy" /></noscript>
            </>
        );

    }


    const aOrImage = (
        <>
            { 
                zoomable || href ? (
                    <a className={ aClassName } { ...aSaveAttributes } { ...useBlockProps.save( { className: aClassName, ...saveAttributes } ) }>
                        { image }
                        { portraitImage }
                    </a>
                )
                :
                (
                    <>
                        { image }
                        { portraitImage }
                    </>
                ) 
            }
        </>
    );

    // console.log( 'return save()' )

    // const testOutput = (
    //     <>
    //         {
    //             ! noFigureTag ?
    //             (
    //                 <figure { ...useBlockProps.save( { ...saveAttributes } ) }>
    //                     {
    //                         typeof calcImgSizes !== 'undefined' && typeof calcImgSizes[ imgSizeIndex ] !== 'undefined' && typeof calcImgSizes[ imgSizeIndex ].url !== 'undefined' && calcImgSizes[ imgSizeIndex ].url && (
    //                             <>
    //                                 { 
    //                                     aOrImage
    //                                 }
    //                                 {
    //                                     figcaption && ! RichText.isEmpty( figcaption ) && (
    //                                         <RichText.Content tagName="figcaption" className="font-italic" value={ figcaption } />
    //                                     )
    //                                 }
    //                             </>
    //                         )
    //                     }
    //                 </figure>
    //             )
    //             :
    //             (
    //                 <>
    //                     { 
    //                         typeof calcImgSizes !== 'undefined' && typeof calcImgSizes[ imgSizeIndex ] !== 'undefined' && typeof calcImgSizes[ imgSizeIndex ].url !== 'undefined' && calcImgSizes[ imgSizeIndex ].url && (
    //                             <>
    //                                 {
    //                                     aOrImage
    //                                 }
    //                             </>
    //                         )
    //                     }
    //                 </>
    //             )
    //         }
    //     </>
    // );
    // console.log( 'testOutput (save.js): ' + JSON.stringify( testOutput, null, 2 ) + '\n' );

	return (
        <>
            {
                ! noFigureTag ?
                (
                    <figure { ...useBlockProps.save( { className: classNames, ...saveAttributes } ) }>
                        {
                            typeof calcImgSizes !== 'undefined' && typeof calcImgSizes[ imgSizeIndex ] !== 'undefined' && typeof calcImgSizes[ imgSizeIndex ].url !== 'undefined' && calcImgSizes[ imgSizeIndex ].url && (
                                <>
                                    { 
                                        aOrImage
                                    }
                                    {
                                        figcaption && ! RichText.isEmpty( figcaption ) && (
                                            <RichText.Content tagName="figcaption" className="font-italic" value={ figcaption } />
                                        )
                                    }
                                </>
                            )
                        }
                    </figure>
                )
                :
                (
                    <>
                        { 
                            typeof calcImgSizes !== 'undefined' && typeof calcImgSizes[ imgSizeIndex ] !== 'undefined' && typeof calcImgSizes[ imgSizeIndex ].url !== 'undefined' && calcImgSizes[ imgSizeIndex ].url && (
                                <>
                                    {
                                        aOrImage
                                    }
                                </>
                            )
                        }
                    </>
                )
            }
        </>
	);
}
