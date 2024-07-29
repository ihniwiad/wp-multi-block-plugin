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
import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';


// functions imports

import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';


// v2 functions
import { 
    makeBase64PreloadImgSrc as makeBase64PreloadImgSrc_v2,
    makeImgSizesFromImgData as makeImgSizesFromImgData_v2,
} from './../_functions/img.js';
import { 
    makeSrcset as makeSrcset_v2,
} from './deprecated/utils_v2.js';
// /v2 functions


const v2 = {
	supports: {
		html: false,
		className: false // else would add `wp-block-bsx-blocks-lazy-img`
	},
    attributes: {
        hasFigure: {
            boolean: "string",
            default: true
        },
        imgSizes: {
            type: "array",
            default: []
        },
        imgData: {
            type: "array",
            default: []
        },
        imgSizeIndex: {
            type: "string",
            default: "3"
        },
        imgId: {
            type: "number"
        },
        url: {
            type: "string"
        },
        width: {
            type: "number"
        },
        height: {
            type: "number"
        },
        origWidth: {
            type: "number"
        },
        origHeight: {
            type: "number"
        },
        portraitImgId: {
            type: "number"
        },
        portraitImgSizes: {
            type: "array",
            default: []
        },
        portraitImgData: {
            type: "array",
            default: []
        },
        portraitImgSizeIndex: {
            type: "string",
            default: "3"
        },
        portraitImgMaxWidthBreakpoint: {
            type: "string"
        },
        alt: {
            type: "string"
        },
        figcaption: {
            type: "string",
            source: "html",
            selector: "figcaption"
        },
        rounded: {
            type: "string"
        },
        imgThumbnail: {
            type: "boolean"
        },
        borderState: {
            type: "string"
        },
        zoomable: {
            type: "boolean"
        },
        externalGalleryParent: {
            type: "boolean"
        },
        zoomImgSizeIndex: {
            type: "string"
        },
        disableResponsiveDownsizing: {
            type: "boolean"
        },
        textAlign: {
            type: "string"
        },
        marginBefore: {
            type: "string"
        },
        marginAfter: {
            type: "string"
        },
        marginLeft: {
            type: "string"
        },
        marginRight: {
            type: "string"
        },
        aAdditionalClassName: {
            type: "string"
        },
        pictureAdditionalClassName: {
            type: "string"
        },
        imgAdditionalClassName: {
            type: "string"
        },
        href: {
            type: "string"
        },
        target: {
            type: "string"
        },
        rel: {
            type: "string"
        },
        scale: {
            type: "number"
        },
        displayedWidth: {
            type: "text"
        },
        displayedHeight: {
            type: "text"
        },
        noFigureTag: {
            type: "boolean"
        },
        // imgHtml: {
        //     type: "string",
        //     source: "html",
        //     selector: "noscript"
        // }
    },
    save: ( { attributes } ) => {

        // console.log( 'Hello from deprecation v2 save()!' );

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
    
        // TEST
        // console.log( 'imgData: ' + JSON.stringify( imgData, null, 2 ) );
        // console.log( 'imgSizes: ' + JSON.stringify( imgSizes, null, 2 ) + '\n' );
    
        // initial set, replaces old attr 'imgSizes'
        const hasOldAttrImgSizes = typeof imgSizes !== 'undefined' && Array.isArray( imgSizes ) && imgSizes.length > 0;
        const hasOldAttrPortraitImgSizes = typeof portraitImgSizes !== 'undefined' && Array.isArray( portraitImgSizes ) && portraitImgSizes.length > 0;
    
        const calcImgSizes = hasOldAttrImgSizes ? imgSizes : makeImgSizesFromImgData_v2( imgData );
        const calcPortraitImgSizes = hasOldAttrPortraitImgSizes ? portraitImgSizes : makeImgSizesFromImgData_v2( portraitImgData );
    
        // console.log( 'calcImgSizes: ' + JSON.stringify( calcImgSizes, null, 2 ) + '\n' );
    
        // class names
    
        const classNames = addClassNames( {
            textAlign,
            marginBefore,
            marginAfter,
            marginLeft,
            marginRight,
        }, className );
    
        const aClassName = zoomable ? 'zoomable-img' : ( !! href && !! aAdditionalClassName ? aAdditionalClassName : '' );
    
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

    
        const srcset = makeSrcset_v2( {
            calcImgSizes,
            imgSizeIndex,
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
                    <img className={ landscapeImgClassName } src={ makeBase64PreloadImgSrc_v2( width, height ) } data-src={ src } data-srcset={ srcset } sizes={ sizes } alt={ alt } width={ width } height={ height } data-fn="lazyload" />
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
    
            const portraitSrcset = makeSrcset_v2( {
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
                        <img className={ portraitImgClassName } src={ makeBase64PreloadImgSrc_v2( portraitWidth, portraitHeight ) } data-src={ portraitSrc } data-srcset={ portraitSrcset } sizes={ portaitSizes } alt={ alt } width={ portraitWidth } height={ portraitHeight } data-fn="lazyload" />
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

        // const testOutput = (
        //     <>
        //         {
        //             ! noFigureTag ?
        //             (
        //                 <figure { ...useBlockProps.save( { className: classNames, ...saveAttributes } ) }>
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
        // console.log( 'testOutput (deprecated v2): ' + JSON.stringify( testOutput, null, 2 ) + '\n' );
    
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
}


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

async function getImgObjFromId( imgId ) {
    const media = useSelect(
        select => {
            const media = select( blockEditorStore ).getMedia( imgId, { context: 'view' } ); // undefined
            return media;
        },
        [ imgId ]
    )
}

// /v1 functions


const v1 = {
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
    // migrate( { imgId, imgSizes, imgData } ) {
    //     // replaces old attr 'imgSizes'
    //     // const hasOldAttrImgSizes = typeof imgSizes !== 'undefined' && Array.isArray( imgSizes ) && imgSizes.length > 0;
    //     // const hasOldAttrPortraitImgSizes = typeof portraitImgSizes !== 'undefined' && Array.isArray( portraitImgSizes ) && portraitImgSizes.length > 0;

    //     // const calcImgSizes = hasOldAttrImgSizes ? imgSizes : makeImgSizesFromImgData( imgData );
    //     // const calcPortraitImgSizes = hasOldAttrPortraitImgSizes ? portraitImgSizes : makeImgSizesFromImgData( portraitImgData );

    //     // const imgObj = wp.data.select( 'core' ).getMedia( imgId );

    //     console.log( 'Hello from migrate()!' )
    //     const media = useSelect( () => select( 'core' ).getMedia( imgId ) );
    //     console.log( '--> media( ' + imgId + ' ): ' + JSON.stringify( media, null, 2 ) + '\n' );


    //     // console.log( 'imageObj( ' + imgId + ' ): ' + JSON.stringify( imgObj, null, 2 ) + '\n' );

    //     return {
    //         imgId,
    //         imgSizes,
    //         imgData,
    //     };
    // },
    save: ( props ) => {

        // console.log( 'Hello from deprecation v1 save()!' );

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

        // const id = imgId;
        // const imageSizes = useSelect(
        //     ( select ) => {
        //         // return {
        //         //     imageSizes: select( "core/editor" ).getEditorSettings().imageSizes,
        //         //     image: id ? select( "core" ).getMedia( id ) : null,
        //         // };
        //     },
        //     [ id ]
        // );

        // const media = useSelect(
        //     select => select( 'core' ).getMedia( imgId ),
        //     [ imgId ],
        // );
        // console.log( 'media: ' + JSON.stringify( media, null, 2 ) + '\n' );

        // const async function awaitImg( imgId ) {
        //     const imgTestData = await getImgObjFromId( imgId );
        //     return imgTestData;
        // }
        // console.log( 'awaitImg( imgId ): ' + JSON.stringify( awaitImg( imgId ), null, 2 ) + '\n' );

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

        // const testOutput = (
        //     <>
        //         {
        //             ! noFigureTag ?
        //             (
        //                 <figure className={ classNames } { ...saveAttributes }>
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
        // console.log( 'testOutput (deprecated v1): ' + JSON.stringify( testOutput, null, 2 ) + '\n' );

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

export default [ v2, v1 ];

