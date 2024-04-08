import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    RichText,
    MediaUpload,
    InspectorControls,
    InspectorAdvancedControls,
    BlockControls,
    AlignmentToolbar,
    // useInnerBlocksProps, // use if appending inner blocks directly into outer elem
} from '@wordpress/block-editor';
import { 
    Button,
    TextControl,
    PanelBody,
    RadioControl,
    SelectControl,
    ToggleControl,
    SVG, 
    Path,
} from '@wordpress/components';
import { select, useSelect } from '@wordpress/data';


// functions imports

import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';


// v1 functions
import { 
    makeBase64PreloadImgSrc as makeBase64PreloadImgSrc_v1,
    makeImgSizesFromImgData as makeImgSizesFromImgData_v1,
} from './deprecated/img_v1.js';
import { 
    makeBase64PreloadImgSrc,
    // makeImgSizesFromImgData,
} from './../_functions/img.js';

const makeSourcesAttributesList = ( attributes ) => {

    const {
        calcImgSizes,
        imgSizeIndex,
        calcPortraitImgSizes,
        portraitImgSizeIndex,
        portraitImgMaxWidthBreakpoint,
        disableResponsiveDownsizing,
    } = attributes;

    const responsivePortraitMediaIndexList = [
        {
            breakpoint: 460,
            imgSizeIndexShift: '-1',
            minImgSizeIndex: '1',
        },
        {
            breakpoint: 576,
            imgSizeIndexShift: '0',
            minImgSizeIndex: '2',
        },
    ];
    const responsiveMediaIndexList = [
        {
            breakpoint: 460,
            imgSizeIndexShift: '-2',
            minImgSizeIndex: '1',
        },
        {
            breakpoint: 768,
            imgSizeIndexShift: '-1',
            minImgSizeIndex: '2',
        },
    ];
    const skipIndex = 0;

    const sourcesAttributesList = [];

    // portrait img

    if ( ! disableResponsiveDownsizing ) {
        // downsize, iterate list

        responsivePortraitMediaIndexList.forEach( ( item, index ) => {

            const currentPortraitImgIndex = parseInt( portraitImgSizeIndex ) + parseInt( item.imgSizeIndexShift );

            const adaptedCurrentPortraitImgIndex = currentPortraitImgIndex < parseInt( item.minImgSizeIndex ) ? parseInt( item.minImgSizeIndex ) : currentPortraitImgIndex;

            if ( 
                adaptedCurrentPortraitImgIndex <= parseInt( portraitImgSizeIndex ) 
                && adaptedCurrentPortraitImgIndex > skipIndex
                && typeof calcPortraitImgSizes !== 'undefined'
                && typeof calcPortraitImgSizes[ adaptedCurrentPortraitImgIndex ] != 'undefined' 
                && typeof calcPortraitImgSizes[ adaptedCurrentPortraitImgIndex ].url != 'undefined' 
            ) {
                sourcesAttributesList.push( {
                    media: '(orientation: portrait) and (max-width: ' + ( parseInt( ( index == responsivePortraitMediaIndexList.length - 1 && !! portraitImgMaxWidthBreakpoint ) ? portraitImgMaxWidthBreakpoint : item.breakpoint ) - 0.02 ) + 'px)',
                    srcset: makeBase64PreloadImgSrc_v1( calcPortraitImgSizes[ adaptedCurrentPortraitImgIndex ].width, calcPortraitImgSizes[ adaptedCurrentPortraitImgIndex ].height ),
                    'data-srcset': calcPortraitImgSizes[ adaptedCurrentPortraitImgIndex ].url,
                    'data-width': calcPortraitImgSizes[ adaptedCurrentPortraitImgIndex ].width,
                    'data-height': calcPortraitImgSizes[ adaptedCurrentPortraitImgIndex ].height,
                } );
            }
        } );
    }
    else {
        // use largest portrait img size
        if ( 
            !! portraitImgSizeIndex
            && typeof calcPortraitImgSizes !== 'undefined'
            && typeof calcPortraitImgSizes[ portraitImgSizeIndex ] != 'undefined' 
            && typeof calcPortraitImgSizes[ portraitImgSizeIndex ].url != 'undefined' 
        ) {
            sourcesAttributesList.push( {
                media: '(orientation: portrait) and (max-width: ' + ( parseInt( ( !! portraitImgMaxWidthBreakpoint ) ? portraitImgMaxWidthBreakpoint : responsivePortraitMediaIndexList[ responsivePortraitMediaIndexList.length - 1 ].breakpoint ) - 0.02 ) + 'px)',
                srcset: makeBase64PreloadImgSrc_v1( calcPortraitImgSizes[ portraitImgSizeIndex ].width, calcPortraitImgSizes[ portraitImgSizeIndex ].height ),
                'data-srcset': calcPortraitImgSizes[ portraitImgSizeIndex ].url,
                'data-width': calcPortraitImgSizes[ portraitImgSizeIndex ].width,
                'data-height': calcPortraitImgSizes[ portraitImgSizeIndex ].height,
            } );
        }
    }

    // default img
    responsiveMediaIndexList.forEach( ( item, index ) => {

        const currentImgIndex = parseInt( imgSizeIndex ) + parseInt( item.imgSizeIndexShift );

        const adaptedCurrentImgIndex = currentImgIndex < parseInt( item.minImgSizeIndex ) ? parseInt( item.minImgSizeIndex ) : currentImgIndex;

        if ( 
            ! disableResponsiveDownsizing
            && adaptedCurrentImgIndex < parseInt( imgSizeIndex ) 
            && adaptedCurrentImgIndex > skipIndex
            && typeof calcImgSizes != 'undefined' 
            && typeof calcImgSizes[ adaptedCurrentImgIndex ] != 'undefined' 
            && typeof calcImgSizes[ adaptedCurrentImgIndex ].url != 'undefined' 
        ) {
            sourcesAttributesList.push( {
                media: '(max-width: ' + ( parseInt( item.breakpoint ) - 0.02 ) + 'px)',
                srcset: makeBase64PreloadImgSrc_v1( calcImgSizes[ adaptedCurrentImgIndex ].width, calcImgSizes[ adaptedCurrentImgIndex ].height ),
                'data-srcset': calcImgSizes[ adaptedCurrentImgIndex ].url,
                'data-width': calcImgSizes[ adaptedCurrentImgIndex ].width,
                'data-height': calcImgSizes[ adaptedCurrentImgIndex ].height,
            } );
        }
    } );

    return sourcesAttributesList;

}
// /v1 functions


const v1 = {

	// get old attr
	attributes: {
        hasFigure: {
            boolean: 'string',
            default: true,
        },
        // deprecated, do not set anymore, keep alive for existing blocks (replaced by imgData)
        imgSizes: {
            type: 'array',
            default: [],
        },
        imgData: {
            type: 'array',
            default: [],
        },
        imgSizeIndex: {
            type: 'string',
            default: '3',
        },
        imgId: {
            type: 'number',
        },
        // deprecated, do not set anymore, keep alive for existing blocks (replaced by imgData)
        url: {
            type: 'string',
        },
        // deprecated, do not set anymore, keep alive for existing blocks (replaced by imgData)
        width: {
            type: 'number',
        },
        // deprecated, do not set anymore, keep alive for existing blocks (replaced by imgData)
        height: {
            type: 'number',
        },
        origWidth: {
            type: 'number',
        },
        origHeight: {
            type: 'number',
        },
        portraitImgId: {
            type: 'number',
        },
        // deprecated, do not set anymore, keep alive for existing blocks (replaced by portraitImgData)
        portraitImgSizes: {
            type: 'array',
            default: [],
        },
        portraitImgData: {
            type: 'array',
            default: [],
        },
        portraitImgSizeIndex: {
            type: 'string',
            default: '3',
        },
        portraitImgMaxWidthBreakpoint: {
            type: 'string',
        },
        alt: {
            type: 'string',
        },
        figcaption: {
            type: 'string',
            source: 'html',
            selector: 'figcaption',
        },
        rounded: {
            type: 'string',
        },
        imgThumbnail: {
            type: 'boolean',
        },
        borderState: {
            type: 'string',
        },
        zoomable: {
            type: 'boolean',
        },
        externalGalleryParent: {
            type: 'boolean',
        },
        zoomImgSizeIndex: {
            type: 'string',
        },
        disableResponsiveDownsizing: {
            type: 'boolean',
        },
        textAlign: {
            type: 'string',
        },
        marginAfter: {
            type: 'string',
        },
        aAdditionalClassName: {
            type: 'string',
        },
        pictureAdditionalClassName: {
            type: 'string',
        },
        imgAdditionalClassName: {
            type: 'string',
        },
        href: {
            type: 'string',
        },
        target: {
            type: 'string',
        },
        rel: {
            type: 'string',
        },
        scale: {
            type: 'number',
        },
        displayedWidth: {
            type: 'text',
        },
        displayedHeight: {
            type: 'text',
        },
        noFigureTag: {
            type: 'boolean',
        }
    },

    // migrate old attr to new one
    migrate( { imgId, imgSizes, imgData } ) {
        // replaces old attr 'imgSizes'
        // const hasOldAttrImgSizes = typeof imgSizes !== 'undefined' && Array.isArray( imgSizes ) && imgSizes.length > 0;
        // const hasOldAttrPortraitImgSizes = typeof portraitImgSizes !== 'undefined' && Array.isArray( portraitImgSizes ) && portraitImgSizes.length > 0;

        // const calcImgSizes = hasOldAttrImgSizes ? imgSizes : makeImgSizesFromImgData( imgData );
        // const calcPortraitImgSizes = hasOldAttrPortraitImgSizes ? portraitImgSizes : makeImgSizesFromImgData( portraitImgData );

        // const imgObj = wp.data.select( 'core' ).getMedia( imgId );

        console.log( 'Hello from migrate()!' )
        const media = useSelect( () => select( 'core' ).getMedia( imgId ) );
        console.log( '--> media( ' + imgId + ' ): ' + JSON.stringify( media, null, 2 ) + '\n' );


        // console.log( 'imageObj( ' + imgId + ' ): ' + JSON.stringify( imgObj, null, 2 ) + '\n' );

        return {
            imgId,
            imgSizes,
            imgData,
        };
    },

    save: ( props ) => {
        const {
            // className,
            attributes: {
                className,
                imgSizeIndex,
                imgSizes,
                imgData,
                imgId,
                url,
                width,
                height,
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
                marginAfter,
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
            },
        } = props;

        // console.log( 'Hello from deprecation v1 save()!' )

        // TEST
        // console.log( 'imgData: ' + JSON.stringify( imgData, null, 2 ) );
        // console.log( 'imgSizes: ' + JSON.stringify( imgSizes, null, 2 ) + '\n' );

        // console.log( 'Hello from deprecation v1 save()!' )
        // const media = useSelect( () => select( 'core' ).getMedia( imgId ) );
        // console.log( '--> media( ' + imgId + ' ): ' + JSON.stringify( media, null, 2 ) + '\n' );


        // initial set, replaces old attr 'imgSizes'
        const hasOldAttrImgSizes = typeof imgSizes !== 'undefined' && Array.isArray( imgSizes ) && imgSizes.length > 0;
        const hasOldAttrPortraitImgSizes = typeof portraitImgSizes !== 'undefined' && Array.isArray( portraitImgSizes ) && portraitImgSizes.length > 0;

        const calcImgSizes = hasOldAttrImgSizes ? imgSizes : makeImgSizesFromImgData_v1( imgData );
        const calcPortraitImgSizes = hasOldAttrPortraitImgSizes ? portraitImgSizes : makeImgSizesFromImgData_v1( portraitImgData );


        // prepare img sources attributes

        const sourcesAttributesList = makeSourcesAttributesList( {
            calcImgSizes,
            imgSizeIndex,
            calcPortraitImgSizes,
            portraitImgSizeIndex,
            portraitImgMaxWidthBreakpoint,
            disableResponsiveDownsizing,
        } );

        // class names

        const classNames = addClassNames( {
            textAlign,
            marginAfter,
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

        const image = typeof calcImgSizes !== 'undefined' && typeof calcImgSizes[ imgSizeIndex ] !== 'undefined' ? (
            <>
                <script>document.write( '
                    <picture className={ ! noFigureTag ? pictureAdditionalClassName : classNames }>
                        {
                            sourcesAttributesList.map( ( sourceAttributes, index ) => (
                                <source { ...sourceAttributes } />
                            ) )
                        }
                        <img className={ imgClassName } src={ makeBase64PreloadImgSrc_v1( calcImgSizes[ imgSizeIndex ].width, calcImgSizes[ imgSizeIndex ].height ) } alt={ alt } data-src={ calcImgSizes[ imgSizeIndex ].url } width={ !! displayedWidth ? displayedWidth : calcImgSizes[ imgSizeIndex ].width } height={ !! displayedHeight ? displayedHeight : calcImgSizes[ imgSizeIndex ].height } data-fn="lazyload" />
                    </picture>
                ' );</script>
                <noscript><img className={ imgClassName } src={ calcImgSizes[ imgSizeIndex ].url } alt={ alt } width={ !! displayedWidth ? displayedWidth : calcImgSizes[ imgSizeIndex ].width } height={ !! displayedHeight ? displayedHeight : calcImgSizes[ imgSizeIndex ].height } /></noscript>
            </>
        )
        :
        (
            <></>
        );

        const aOrImage = (
            <>
                { 
                    zoomable || href ? (
                        <a className={ aClassName } { ...aSaveAttributes }>
                            { image }
                        </a>
                    )
                    :
                    (
                        <>
                            { image }
                        </>
                    ) 
                }
            </>
        );

        // console.log( 'return deprecated v1 save()' )

        return (
            <>
                {
                    ! noFigureTag ?
                    (
                        <figure className={ classNames } { ...saveAttributes }>
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
}

export default [ v1 ];

