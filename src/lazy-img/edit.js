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
import {
    useDispatch,
    useRegistry,
    select,
    useSelect,
    withSelect,
} from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { store as coreStore } from '@wordpress/core-data';
import { useEffect, useRef } from '@wordpress/element';


import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';
// import { getTemplate } from './../_functions/utilities.js';
import { 
    linkUrlInput,
    // ignoreMailtoSpamProtectionToggle,
    targetToggle,
    relInput,
    // dataFnInput,
    marginLeftSelect,
    marginRightSelect,
    marginBeforeSelect,
    marginAfterSelect,
    scaleSelect,
    disableResponsiveDownsizingToggle,
    textAlignToolbar,
    portraitImgMaxWidthBreakpointInput,
} from './../_functions/controls.js';
import { 
    getUrlTruncAndExtension,
    fullImgIsScaled,
    getOriginalImgUrl,
    getSizesAndWithoutSizesTruncFromUrlTrunc,
    makeSizedImgs,
    getImgWithHeight,
    imgExists,
    getImgSizesData,
    makeBase64PreloadImgSrc,
    makeImgSizesFromImgData,
    makeImgData,
    getSizeSlugFromUrl,
    getImgAllDataFromMediaSizes,
    getImgWidthHeight,
} from './../_functions/img.js';


// utils
import {
	makeSourcesAttributesList,
	makeSrcset,
    getSrcsetUrlsFromImgHtml,
    // migrateToLazyimgV2,
} from './utils';


// templates
// import templates from './templates';

/**
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import './editor.scss';


async function useMigrateOnLoad( attributes, clientId, mediaSizes, portraitMediaSizes, calcImgSizes, calcPortraitImgSizes ) {

    console.log( 'useMigrateOnLoad()' )

    const {
        imgId,
        imgSizes,
        imgData,
        imgSizeIndex,
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
        pictureAdditionalClassName, // deprecated
        imgAdditionalClassName,
        href,
        target,
        rel,
        scale,
        displayedWidth,
        displayedHeight,
        noFigureTag,
        imgHtml,
    } = attributes;


    // console.log( '--------> mediaSizes useMigrateOnLoad(): ' + JSON.stringify( mediaSizes, null, 2 ) + '\n' );
    // console.log( '--------> portraitMediaSizes useMigrateOnLoad(): ' + JSON.stringify( portraitMediaSizes, null, 2 ) + '\n' );
    // if ( mediaSizes ) {
    //     console.log( '>>>> IMAGE SIZES' )
    // }
    // else {
    //     console.log( '>>>> NOT IMAGE SIZES' )
    // }
    // if ( portraitMediaSizes ) {
    //     console.log( '>>>> PORTRAIT IMAGE SIZES' )
    // }
    // else {
    //     console.log( '>>>> NOT PORTRAIT IMAGE SIZES' )
    // }

    // if ( ! mediaSizes && ! portraitMediaSizes ) {
    //     return;
    // }

    // console.log( 'mediaSizes useMigrateOnLoad() (' + imgId + '): \n' + JSON.stringify( mediaSizes, null, 2 ) + '\n' );
    // console.log( 'portraitMediaSizes useMigrateOnLoad() (' + imgId + '): \n' + JSON.stringify( portraitMediaSizes, null, 2 ) + '\n' );

    const registry = useRegistry();
    const { updateBlockAttributes } =
        useDispatch( blockEditorStore );


    let newAttributes = {};

    // if ( mediaSizes && imgData.length === 0 ) {
    if ( mediaSizes ) {


        if ( mediaSizes?.original ) {
            console.log( '---- has original size' )

            const sourceUrl = mediaSizes?.original.source_url;

            // get width and height by loading file since not defined in media object
            let originalSizes;
            try {
                originalSizes = await getImgWidthHeight( sourceUrl );
            } catch( err ) {
                console.error( err );
            }
            // console.log( '------ originalSizes.width: ' + originalSizes.width + ', originalSizes.height: ' + originalSizes.height )
            mediaSizes.original.width = originalSizes.width;
            mediaSizes.original.height = originalSizes.height;

            // console.log( 'mediaSizes (after set width/height) (' + imgId + '): ' + JSON.stringify( mediaSizes, null, 2 ) + '\n' );

        }
        else {
            console.log( '---- NOT has original size' )
        }

        // console.log( '--------> make img attr' )
        const newImgAllData = getImgAllDataFromMediaSizes( mediaSizes );
        const originalWidth = newImgAllData.originalWidth;
        const originalHeight = newImgAllData.originalHeight;
        const returnImgs = newImgAllData.imgs;
        // console.log( '----> newImgAllData useMigrateOnLoad() ( ' + imgId + ' ): ' + JSON.stringify( newImgAllData, null, 2 ) + '\n' );

        // const newImgData = makeImgData( returnImgs, truncWithoutSizeSlug, fileExt );
        const newImgData = makeImgData( newImgAllData.imgs, newImgAllData.truncWithoutSizeSlug, newImgAllData.fileExt );
        // console.log( '----> newImgData ( ' + imgId + ' ): ' + JSON.stringify( newImgData, null, 2 ) + '\n' );

        // check size indexes, compare imgSizes.length with returnImgs.length, if equal keep, if difference count down from largest size
        // console.log( '------> imgSizes.length: ' + imgSizes.length + ', returnImgs.length: ' + returnImgs.length )

        const imgIsBetween770And1024 = originalWidth <= 1024 && originalWidth >= 770;
        // console.log( 'imgIsBetween770And1024: ' + imgIsBetween770And1024 )
        let newImgSizeIndex = typeof imgSizeIndex !== 'undefined' ? imgSizeIndex : calcImgSizes.length - 1;
        let newZoomImgSizeIndex = zoomImgSizeIndex;
        // some existing image size (768px) might be missing due to a bug if original image is between 1024 and 770px
        // now there are all image sizes so we might need to increase imgSizeIndex
        if ( imgIsBetween770And1024 ) {
            // check to change imgSizeIndex
            if ( parseInt( imgSizeIndex ) >= 2 ) {
                newImgSizeIndex = ( parseInt( imgSizeIndex ) + ( returnImgs.length - calcImgSizes.length ) ).toString();
            }
            if ( parseInt( newZoomImgSizeIndex ) >= 2 ) {
                newZoomImgSizeIndex = ( parseInt( zoomImgSizeIndex ) + ( returnImgs.length - calcImgSizes.length ) ).toString();
            }
        }
        // console.log( '------> imgSizeIndex: ' + imgSizeIndex + ', newImgSizeIndex: ' + newImgSizeIndex )
        // console.log( '------> zoomImgSizeIndex: ' + zoomImgSizeIndex + ', newZoomImgSizeIndex: ' + newZoomImgSizeIndex )
        
        newAttributes = {
            imgSizes: '', // save empty, replaced by imgData
            imgData: newImgData,
            imgSizeIndex: newImgSizeIndex,
            url: '', // save empty, replaced by imgData
            width: '', // save empty, replaced by imgDat
            height: '', // save empty, replaced by imgDat
            origWidth: originalWidth,
            origHeight: originalHeight,
            zoomImgSizeIndex: newZoomImgSizeIndex,
        };
        // console.log( '--------> newAttributes (img): ' + JSON.stringify( newAttributes, null, 2 ) + '\n' );
    }
    else {
        // console.log( '--------> NOT make img attr' )
    }

    // if ( portraitMediaSizes && portraitImgData.length === 0 ) {
    if ( portraitMediaSizes ) {
        // console.log( '--------> make portrait img attr' )
        const newPortraitImgAllData = getImgAllDataFromMediaSizes( portraitMediaSizes );
        // const portraitOriginalWidth = newPortraitImgAllData.originalWidth;
        // const portraitOriginalHeight = newPortraitImgAllData.originalHeight;
        const portraitReturnImgs = newPortraitImgAllData.imgs;

        const newPortraitImgData = makeImgData( newPortraitImgAllData.imgs, newPortraitImgAllData.truncWithoutSizeSlug, newPortraitImgAllData.fileExt );
        
        // console.log( '----> newPortraitImgData ( ' + portraitImgId + ' ): ' + JSON.stringify( newPortraitImgData, null, 2 ) + '\n' );
        // console.log( '------> portraitImgSizes.length: ' + portraitImgSizes.length + ', portraitReturnImgs.length: ' + portraitReturnImgs.length )

        let newPortraitImgSizeIndex = typeof portraitImgSizeIndex !== 'undefined' ? portraitImgSizeIndex : calcPortraitImgSizes.length - 1;
        // some existing image sizes due to bug in old sizes calculation on protrait formats
        // now there are all image sizes so we might need to increase imgSizeIndex
        if ( parseInt( portraitImgSizeIndex ) >= 2 ) {
            newPortraitImgSizeIndex = ( parseInt( portraitImgSizeIndex ) + ( portraitReturnImgs.length - calcPortraitImgSizes.length ) ).toString();
        }
        // console.log( '------> portraitImgSizeIndex: ' + portraitImgSizeIndex + ', newPortraitImgSizeIndex: ' + newPortraitImgSizeIndex )
    
        newAttributes = {
            portraitImgSizes: '', // save empty, replaced by portraitImgData
            portraitImgData: newPortraitImgData,
            portraitImgSizeIndex: newPortraitImgSizeIndex.toString(),
            ...newAttributes,
        };
        // console.log( '--------> newAttributes (portrait): ' + JSON.stringify( newAttributes, null, 2 ) + '\n' );

    }
    else {
        // console.log( '--------> NOT make portrait img attr' )
    }

    // useEffect( () => {
        // As soon as the block is loaded, migrate it to the new version.

        // if ( 
        //     ! mediaSizes 
        //     || attributes.imgData.length > 0 
        //     || ! portraitMediaSizes 
        //     || attributes.portraitImgData.length > 0 
        // ) {
        //     return;
        // }

        // let newAttributes = migrateToLazyimgV2( attributes, mediaSizes, portraitMediaSizes );

    // if ( ( mediaSizes && imgData.length === 0 ) || ( portraitMediaSizes && portraitImgData.length === 0 ) ) {
    if ( mediaSizes || portraitMediaSizes ) {
        // stop after both atrributes have been updated to avoid endless loop

        // console.log( '>>>>>>>>>>>>>>>>> UPDATE!' )

        registry.batch( () => {
            updateBlockAttributes( clientId, newAttributes );
        } );
    }
    // }, [ mediaSizes, attributes.imgData, portraitMediaSizes, attributes.portraitImgData ] );
}


/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
// export default function Edit( { attributes, setAttributes, clientId } ) {
function Edit( { attributes, setAttributes, clientId, mediaSizes, portraitMediaSizes } ) {

    // console.log( 'Edit()' )

	const {
        imgId,
        imgSizes,
        imgData,
        imgSizeIndex,
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
        pictureAdditionalClassName, // deprecated
        imgAdditionalClassName,
        href,
        target,
        rel,
        scale,
        displayedWidth,
        displayedHeight,
        noFigureTag,
        imgHtml,
    } = attributes;

    // console.log( 'mediaSizes Edit() (' + imgId + '): \n' + JSON.stringify( mediaSizes, null, 2 ) + '\n' );
    // console.log( 'portraitMediaSizes Edit() (' + imgId + '): \n' + JSON.stringify( portraitMediaSizes, null, 2 ) + '\n' );

    // TEST
    // console.log( 'imgId: ' + imgId );
    // console.log( 'imgData: ' + JSON.stringify( imgData, null, 2 ) );
    // console.log( 'imgSizes (deprecated): ' + JSON.stringify( imgSizes, null, 2 ) + '\n' );
    // console.log( 'portraitImgId: ' + portraitImgId );
    // console.log( 'portraitImgData: ' + JSON.stringify( portraitImgData, null, 2 ) );
    // console.log( 'portraitImgSizes (deprecated): ' + JSON.stringify( portraitImgSizes, null, 2 ) + '\n' );

    // initial set, replaces old attr 'imgSizes'
    const hasOldAttrImgSizes = typeof imgSizes !== 'undefined' && Array.isArray( imgSizes ) && imgSizes.length > 0;
    const hasOldAttrPortraitImgSizes = typeof portraitImgSizes !== 'undefined' && Array.isArray( portraitImgSizes ) && portraitImgSizes.length > 0;

    const calcImgSizes = hasOldAttrImgSizes ? imgSizes : makeImgSizesFromImgData( imgData );
    const calcPortraitImgSizes = hasOldAttrPortraitImgSizes ? portraitImgSizes : makeImgSizesFromImgData( portraitImgData );

    // console.log( 'imgData: ' + JSON.stringify( imgData, null, 2 ) + '\n' );
    // console.log( 'hasOldAttrImgSizes: ' + hasOldAttrImgSizes )
    // console.log( 'attributes: ' + JSON.stringify( attributes, null, 2 ) + '\n' );
    // console.log( 'calcImgSizes: ' + JSON.stringify( calcImgSizes, null, 2 ) + '\n' );
    // console.log( 'edit()' )
    // console.log( 'imgSizeIndex: ' + imgSizeIndex )

    // migrate deprecated attributes to new once

    const registry = useRegistry();
    const { updateBlockAttributes } =
        useDispatch( blockEditorStore );


    // class names

    const classNames = addClassNames( {
        textAlign,
        marginBefore,
        marginAfter,
        marginLeft,
        marginRight,
    } );

    const blockProps = useBlockProps( { className: classNames } );

    // if (
    //     ( mediaSizes && imgData.length === 0 )
    //     || ( portraitMediaSizes && portraitImgData.length === 0 )
    // ) {
    // if ( mediaSizes || portraitMediaSizes ) {
    if (
        ( typeof mediaSizes !== 'undefined' && mediaSizes != null )
        || ( typeof portraitMediaSizes !== 'undefined' && portraitMediaSizes != null )
    ) {
        // console.log( 'call useMigrateOnLoad()' )
        useMigrateOnLoad( attributes, clientId, mediaSizes, portraitMediaSizes, calcImgSizes, calcPortraitImgSizes )
    }
    else {
        // console.log( 'NOT call useMigrateOnLoad()' )
    }

    // if ( hasOldAttrImgSizes ) console.log( 'hasOldAttrImgSizes' )
    // else console.log( 'imgData up 2 date' )
    // if ( hasOldAttrPortraitImgSizes ) console.log( 'hasOldAttrPortraitImgSizes' )
    // else console.log( 'portraitImgData up 2 date' )

    // remove deprecated attribute if set
    // TODO: check if use of `setAttributes()` causes problems in reusable block (may load infinite)
    // if ( pictureAdditionalClassName ) {
    //     setAttributes( { pictureAdditionalClassName: '' } );
    // }

    async function onSelectImage( img ) {

        if ( typeof img.url !== 'undefined' ) {

            // console.log( '>>>>>>>> img: ' + JSON.stringify( img, null, 2 ) + '\n' );

            // get all data of new image
            const newImgAllData = await getImgSizesData( img );
            const originalWidth = newImgAllData.originalWidth;
            const originalHeight = newImgAllData.originalHeight;

            // console.log( 'newImgAllData: ' + JSON.stringify( newImgAllData, null, 2 ) );
            // console.log( 'original size: ' + originalWidth + 'x' + originalHeight )

            // prepare attr 'imgData' to save in block (replacing old attr 'imgSizes')
            const newImgData = makeImgData( newImgAllData.imgs, newImgAllData.truncWithoutSizeSlug, newImgAllData.fileExt );

            // check if current img size index fits to new img (might be too large)
            let newImgSizeIndex = parseInt( imgSizeIndex );
            if ( parseInt( imgSizeIndex ) >= newImgAllData.imgs.length ) {
                newImgSizeIndex = newImgAllData.imgs.length - 1;
                // console.log( 'reduce initial imgSizeIndex to: ' + newImgSizeIndex );
            }

            // do not use thumbnail for srcset if has square format, start with img sizes index 1 then
            const newLowestSrcsetImgSizeIndex = img.sizes.thumbnail.width !== img.sizes.thumbnail.height ? 0 : 1;

            // check if current zoom img size index fits to new img (might be too large) or is unset
            let newZoomImgSizeIndex = zoomImgSizeIndex;
            if ( ( zoomable && ! zoomImgSizeIndex ) || parseInt( zoomImgSizeIndex ) < parseInt( newImgSizeIndex ) || parseInt( zoomImgSizeIndex ) >= parseInt( newImgAllData.imgs.length ) ) {
                newZoomImgSizeIndex = ( newImgAllData.imgs.length - 1 ).toString();
            }

            // avoid creating deprecated (empty) attr 'imgSizes'
            if ( imgSizes && imgSizes.length > 0 ) {
                // delete value of 'imgSizes'
                setAttributes( {
                    imgId: img.id,
                    imgSizes: '', // save empty, replaced by imgData
                    imgData: newImgData,
                    imgSizeIndex: newImgSizeIndex.toString(),
                    url: '', // save empty, replaced by imgData
                    width: '', // save empty, replaced by imgDat
                    height: '', // save empty, replaced by imgDat
                    origWidth: originalWidth,
                    origHeight: originalHeight,
                    alt: img.alt,
                    zoomImgSizeIndex: newZoomImgSizeIndex,
                } );
            }
            else {
                // skip 'imgSizes'
                setAttributes( {
                    imgId: img.id,
                    imgData: newImgData,
                    imgSizeIndex: newImgSizeIndex.toString(),
                    origWidth: originalWidth,
                    origHeight: originalHeight,
                    alt: img.alt,
                    zoomImgSizeIndex: newZoomImgSizeIndex,
                } );
            }
            
        }
    };

    async function onSelectPortraitImage( portraitImg ) {

        if ( typeof portraitImg.url !== 'undefined' ) {

            const newPortraitImgAllData = await getImgSizesData( portraitImg );

            // prepare attr 'imgData' to save in block (replacing old attr 'portraitImgSizes')
            const newPortraitImgData = makeImgData( newPortraitImgAllData.imgs, newPortraitImgAllData.truncWithoutSizeSlug, newPortraitImgAllData.fileExt );

            // check if current img size index fits to new img (might be too large)
            let newPortraitImgSizeIndex = parseInt( portraitImgSizeIndex );
            if ( parseInt( portraitImgSizeIndex ) >= newPortraitImgAllData.imgs.length ) {
                newPortraitImgSizeIndex = newPortraitImgAllData.imgs.length - 1;
            }

            // avoid creating deprecated (empty) attr 'portraitImgSizes'
            if ( portraitImgSizes && portraitImgSizes.length > 0 ) {
                // delete value of 'portraitImgSizes'
                setAttributes( {
                    portraitImgId: portraitImg.id,
                    portraitImgSizes: '', // save empty, replaced by portraitImgData
                    portraitImgData: newPortraitImgData,
                    portraitImgSizeIndex: newPortraitImgSizeIndex.toString(),
                } );
            }
            else {
                // skip 'portraitImgSizes'
                setAttributes( {
                    portraitImgId: portraitImg.id,
                    portraitImgData: newPortraitImgData,
                    portraitImgSizeIndex: newPortraitImgSizeIndex.toString(),
                } );
            }

        }
    };

    const onDeletePortraitImage = () => {
        // avoid creating deprecated attr 'portraitImgSizes'
        if ( portraitImgSizes && portraitImgSizes.length > 0 ) {
            // delete value of 'portraitImgSizes'
            setAttributes( {
                portraitImgId: '',
                portraitImgSizes: '',
                portraitImgData: '',
            } );
        }
        else {
            // skip 'portraitImgSizes'
            setAttributes( {
                portraitImgId: '',
                portraitImgData: '',
            } );
        }
    };

    const onChangeMediaAlt = ( value ) => {
        setAttributes( { alt: value } );
    };
    const onChangeFigcaption = ( value ) => {
        setAttributes( { figcaption: value } );
    };

    const onChangeScale = ( value ) => {
        setAttributes( { 
            scale: parseFloat( value ),
            displayedWidth: ( !! value && value != calcImgSizes[ imgSizeIndex ].width ) ? Math.round( calcImgSizes[ imgSizeIndex ].width * parseFloat( value ) ) : '',
            displayedHeight: ( !! value && value != calcImgSizes[ imgSizeIndex ].height ) ? Math.round( calcImgSizes[ imgSizeIndex ].height * parseFloat( value ) ) : '',
        } );
    };
    const onChangeDisplayedWidth = ( value ) => {
        setAttributes( { 
            displayedWidth: value != calcImgSizes[ imgSizeIndex ].width ? parseFloat( value ) : '',
            displayedHeight: value != calcImgSizes[ imgSizeIndex ].height ? Math.round( value / calcImgSizes[ imgSizeIndex ].width * calcImgSizes[ imgSizeIndex ].height ) : '',
            scale: parseFloat( value / calcImgSizes[ imgSizeIndex ].width ),
        } );
    };
    const onChangeDisplayedHeight = ( value ) => {
        setAttributes( { 
            displayedHeight: value != calcImgSizes[ imgSizeIndex ].width ? parseFloat( value ) : calcImgSizes[ imgSizeIndex ].width,
            displayedWidth: value != calcImgSizes[ imgSizeIndex ].height ? Math.round( value / calcImgSizes[ imgSizeIndex ].height * calcImgSizes[ imgSizeIndex ].width ) : '',
            scale: parseFloat( value / calcImgSizes[ imgSizeIndex ].height ),
        } );
    };

    const onChangeRounded = ( value ) => {
        setAttributes( { rounded: value } );
    };
    const onChangeImgThumbnail = ( value ) => {
        setAttributes( { imgThumbnail: value } );
    };
    const onChangeBorderState = ( value ) => {
        setAttributes( { borderState: value } );
    };

    const onChangeZoomable = ( value ) => {
        if ( zoomImgSizeIndex == undefined ) {
            setAttributes( { 
                zoomable: value,
                zoomImgSizeIndex: ( calcImgSizes.length - 1 ).toString(),
            } );
        }
        else {
            setAttributes( { zoomable: value } );
        }
    };
    const onChangeExternalGalleryParent = ( value ) => {
        setAttributes( { externalGalleryParent: value } );
    };
    const onChangeZoomImgSizeIndex = ( value ) => {
        setAttributes( { zoomImgSizeIndex: value.toString() } );
    };

    const onChangeDisableResponsiveDownsizing = ( value ) => {
        setAttributes( { disableResponsiveDownsizing: value } );
    };

    const onChangeTextAlign = ( value ) => {
        setAttributes( { textAlign: value } );
    };

    const onChangeMarginBefore = ( value ) => {
        setAttributes( { marginBefore: value } );
    };
    const onChangeMarginAfter = ( value ) => {
        setAttributes( { marginAfter: value } );
    };
    const onChangeMarginLeft = ( value ) => {
        setAttributes( { marginLeft: value } );
    };
    const onChangeMarginRight = ( value ) => {
        setAttributes( { marginRight: value } );
    };

    const onChangeAAdditionalClassName = ( value ) => {
        setAttributes( { aAdditionalClassName: value } );
    };
     // deprecated:
    const onChangePictureAdditionalClassName = ( value ) => {
        setAttributes( { pictureAdditionalClassName: value } );
    };
    const onChangeImgAdditionalClassName = ( value ) => {
        setAttributes( { imgAdditionalClassName: value } );
    };

    const onChangeHref = ( value ) => {
        if ( href == '' ) {
            // reset aAdditionalClassName
            setAttributes( { 
                href: value,
                aAdditionalClassName: '',
            } );
        }
        else {
            setAttributes( { href: value } );
        }
    };
    const onChangeTarget = ( value ) => {
        setAttributes( { target: !! value ? '_blank' : '' } );
    };
    const onChangeRel = ( value ) => {
        setAttributes( { rel: value } );
    };
    // const onChangeDataFn = ( value ) => {
    //     setAttributes( { dataFn: value } );
    // };

    const onChangeNoFigureTag = ( value ) => {
        setAttributes( { 
            noFigureTag: value,
            zoomable: false,
            figcaption: [],
        } );
    };


    const onChangeImgSizeIndex = ( value ) => {
        setAttributes( { 
            imgSizeIndex: value.toString(),
            // url: calcImgSizes[ value ].url,
            displayedWidth: parseInt( calcImgSizes[ value ].width ),
            displayedHeight: parseInt( calcImgSizes[ value ].height ),
            scale: parseFloat( calcImgSizes[ value ].width / calcImgSizes[ value ].height ),
        } );
    };
    const imgSizeRadioControlOptions = [];
    if ( typeof calcImgSizes !== 'undefined' ) {
        calcImgSizes.forEach( ( imgSize, index ) => {
            imgSizeRadioControlOptions.push( 
                { value: index.toString(), label: imgSize.width + 'x' + imgSize.height + ( calcImgSizes[ calcImgSizes.length - 1 ].width !== calcImgSizes[ calcImgSizes.length - 1 ].height && imgSize.width === imgSize.height ? ' ' + __( '(Square format)', 'bsx-blocks' ) : '' ) } 
            );
        } );
    }

    const onChangePortraitImgSizeIndex = ( value ) => {
        setAttributes( { 
            portraitImgSizeIndex: value.toString(),
        } );
    };
    const portraitImgSizeRadioControlOptions = [];
    if ( typeof calcPortraitImgSizes !== 'undefined' ) {
        calcPortraitImgSizes.forEach( ( portraitImgSize, index ) => {
            portraitImgSizeRadioControlOptions.push( 
                { value: index.toString(), label: portraitImgSize.width + 'x' + portraitImgSize.height + ( calcPortraitImgSizes[ calcPortraitImgSizes.length - 1 ].width !== calcPortraitImgSizes[ calcPortraitImgSizes.length - 1 ].height && portraitImgSize.width === portraitImgSize.height ? ' ' + __( '(Square format)', 'bsx-blocks' ) : '' ) } 
            );
        } );
    }

    const zoomImgSizeRadioControlOptions = [];
    if ( typeof calcImgSizes !== 'undefined' ) {
        calcImgSizes.forEach( ( imgSize, index ) => {
            if ( index >= imgSizeIndex ) {
                zoomImgSizeRadioControlOptions.push( 
                    { value: index.toString(), label: imgSize.width + 'x' + imgSize.height + ( calcImgSizes[ calcImgSizes.length - 1 ].width !== calcImgSizes[ calcImgSizes.length - 1 ].height && imgSize.width === imgSize.height ? ' ' + __( '(Square format)', 'bsx-blocks' ) : '' ) } 
                );
            }
        } );
    }

    const onChangePortraitImgMaxWidthBreakpoint = ( value ) => {
        setAttributes( { 
            portraitImgMaxWidthBreakpoint: value.toString(),
        } );
    };

    // class names

    // const classNames = addClassNames( {
    //     textAlign,
    //     marginBefore,
    //     marginAfter,
    //     marginLeft,
    //     marginRight,
    // } );

    const imgClassName = addClassNames( {
        rounded,
        imgThumbnail,
        borderState,
    }, 'img-fluid' + ( imgAdditionalClassName ? ' ' + imgAdditionalClassName : '' )  );

    // image

    const hasValidImg = ( imgId && typeof calcImgSizes !== 'undefined' && calcImgSizes.length > 0 && typeof calcImgSizes[ imgSizeIndex ] !== 'undefined' && imgSizeIndex < calcImgSizes.length );

    const srcset = makeSrcset( {
        calcImgSizes,
        imgSizeIndex,
    } );

    const src = hasValidImg ? calcImgSizes[ imgSizeIndex ].url : '';
    const width = ( hasValidImg && !! displayedWidth ) ? displayedWidth : hasValidImg ? calcImgSizes[ imgSizeIndex ].width : '';
    const height = ( hasValidImg && !! displayedHeight ) ? displayedHeight : hasValidImg ? calcImgSizes[ imgSizeIndex ].height : '';
    const sizes = ( width && height ) ? '(max-width: ' + width + 'px) 100vw, ' + width + 'px' : '';


    const image = hasValidImg ? (
        <img className={ imgClassName } src={ src } srcset={ srcset } sizes={ sizes } alt={ alt } width={ width } height={ height } loading="lazy" />
    )
    :
    (
        <></>
    );

    const controls = (
    	<>
    		<BlockControls>
                {
                    textAlignToolbar( textAlign, onChangeTextAlign )
                }
            </BlockControls>
            <InspectorControls>
                <PanelBody title={ __( 'Image', 'bsx-blocks' ) }>
                    <TextControl 
                        label={ __( 'Alt', 'bsx-blocks' ) }
                        value={ alt } 
                        onChange={ onChangeMediaAlt }
                    />
                    {
                        imgId ? (
                            <MediaUpload
                                onSelect={ onSelectImage }
                                allowedTypes="image"
                                value={ imgId }
                                render={ ( { open } ) => (
                                    <Button
                                        className="bsxui-config-panel-img-button has-margin-bottom"
                                        onClick={ open }
                                    >
                                        <img class="bsxui-config-panel-img" src={ calcImgSizes[ imgSizeIndex ].url } alt={ __( 'Change / upload image', 'bsx-blocks' ) } />
                                    </Button>
                                ) }
                            />
                        )
                        : 
                        (
                            <div class="bsxui-config-panel-row">
                                <div class="bsxui-config-panel-text">{ __( '– No image selected yet –', 'bsx-blocks' ) }</div>
                            </div>
                        )
                    }
                    <div class="bsxui-config-panel-row">
                        <MediaUpload
                            onSelect={ onSelectImage }
                            allowedTypes="image"
                            value={ imgId }
                            render={ ( { open } ) => (
                                <Button 
                                    onClick={ open }
                                    isSecondary
                                >
                                    { __( 'Change / upload image', 'bsx-blocks' ) }
                                </Button>
                            ) }
                        />
                    </div>
                    <RadioControl
                        label={ __( 'Image size and format', 'bsx-blocks' ) }
                        selected={ imgSizeIndex.toString() }
                        options={ imgSizeRadioControlOptions }
                        onChange={ onChangeImgSizeIndex }
                    />
                    {
                        calcImgSizes[ imgSizeIndex ] != undefined && calcImgSizes[ imgSizeIndex ].url != undefined && (
                            <div class="bsxui-config-panel-row">
                                <div class="bsxui-config-panel-text">
                                    <a class="bsxui-link" href={ calcImgSizes[ imgSizeIndex ].url } target="_blank">{ __( 'Preview selected image', 'bsx-blocks' ) }</a>
                                </div>
                            </div>
                        )
                    }
                    {
                        imgId && typeof calcImgSizes !== 'undefined' && typeof calcImgSizes[ imgSizeIndex ] !== 'undefined' && (
                            <>
                                <TextControl 
                                    label={ __( 'Displayed width', 'bsx-blocks' ) }
                                    value={ !! displayedWidth ? displayedWidth : calcImgSizes[ imgSizeIndex ].width  } 
                                    onChange={ onChangeDisplayedWidth }
                                />
                                <TextControl 
                                    label={ __( 'Displayed height', 'bsx-blocks' ) }
                                    value={ !! displayedHeight ? displayedHeight : calcImgSizes[ imgSizeIndex ].height } 
                                    onChange={ onChangeDisplayedHeight }
                                />
                                {
                                    scaleSelect( scale, onChangeScale )
                                }
                            </>
                        )
                    }
                    <SelectControl 
                        label={ __( 'Rounded', 'bsx-blocks' ) }
                        value={ rounded }
                        onChange={ onChangeRounded }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: 'rounded', label: __( 'Rounded corners', 'bsx-blocks' ) },
                            { value: 'circle', label: __( 'Circle', 'bsx-blocks' ) },
                        ] }
                    />
                    <ToggleControl
                        label={ __( 'Border', 'bsx-blocks' ) }
                        checked={ !! imgThumbnail }
                        onChange={ onChangeImgThumbnail }
                    />
                    <SelectControl 
                        label={ __( 'Border color', 'bsx-blocks' ) }
                        value={ borderState }
                        onChange={ onChangeBorderState }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: 'white', label: __( 'White', 'bsx-blocks' ) },
                            { value: 'primary', label: __( 'Primary', 'bsx-blocks' ) },
                            { value: 'secondary', label: __( 'Secondary', 'bsx-blocks' ) },
                            { value: 'success', label: __( 'Success', 'bsx-blocks' ) },
                            { value: 'danger', label: __( 'Danger', 'bsx-blocks' ) },
                            { value: 'warning', label: __( 'Warning', 'bsx-blocks' ) },
                            { value: 'info', label: __( 'Info', 'bsx-blocks' ) },
                            { value: 'light', label: __( 'Light', 'bsx-blocks' ) },
                            { value: 'dark', label: __( 'Dark', 'bsx-blocks' ) },
                        ] }
                    />
                </PanelBody>

                <PanelBody title={ __( 'Portrait image (optional)', 'bsx-blocks' ) }>
                    {
                        !! zoomable ? (
                            <div class="bsxui-config-panel-row">
                                <div class="bsxui-alert">
                                    { __( 'Portrait image is deactivated since Zoomable image is set.', 'bsx-blocks' ) }
                                </div>
                            </div>
                        )
                        :
                        (
                            <>
                                {
                                    portraitImgId && typeof calcPortraitImgSizes[ portraitImgSizeIndex ] != 'undefined' && typeof calcPortraitImgSizes[ portraitImgSizeIndex ].url != 'undefined' ? (
                                        <MediaUpload
                                            onSelect={ onSelectPortraitImage }
                                            allowedTypes="image"
                                            value={ portraitImgId }
                                            render={ ( { open } ) => (
                                                <Button
                                                    className="bsxui-config-panel-img-button has-margin-bottom"
                                                    onClick={ open }
                                                >
                                                    <img class="bsxui-config-panel-img" src={ calcPortraitImgSizes[ portraitImgSizeIndex ].url } alt={ __( 'Change / upload portrait image', 'bsx-blocks' ) } />
                                                </Button>
                                            ) }
                                        />
                                    )
                                    : 
                                    (
                                        <div class="bsxui-config-panel-row">
                                            <div class="bsxui-config-panel-text">{ __( '– No portrait image selected yet –', 'bsx-blocks' ) }</div>
                                        </div>
                                    )
                                }
                                <div class="bsxui-config-panel-row">
                                    <MediaUpload
                                        onSelect={ onSelectPortraitImage }
                                        allowedTypes="image"
                                        value={ portraitImgId }
                                        render={ ( { open } ) => (
                                            <Button 
                                                onClick={ open }
                                                isSecondary
                                            >
                                                { __( 'Change / upload portrait image', 'bsx-blocks' ) }
                                            </Button>
                                        ) }
                                    />
                                </div>
                                {
                                    portraitImgId && typeof calcPortraitImgSizes[ portraitImgSizeIndex ] != 'undefined' && typeof calcPortraitImgSizes[ portraitImgSizeIndex ].url != 'undefined' && (
                                        <div class="bsxui-config-panel-row">
                                            <Button 
                                                onClick={ onDeletePortraitImage }
                                                isDestructive={ true }
                                            >
                                                { __( 'Remove portrait image', 'bsx-blocks' ) }
                                            </Button>
                                        </div>
                                    )
                                }
                                <RadioControl
                                    label={ __( 'Image size and format', 'bsx-blocks' ) }
                                    selected={ portraitImgSizeIndex.toString() }
                                    options={ portraitImgSizeRadioControlOptions }
                                    onChange={ onChangePortraitImgSizeIndex }
                                />
                                {
                                    typeof calcPortraitImgSizes != 'undefined' && typeof calcPortraitImgSizes[ portraitImgSizeIndex ] != 'undefined' && typeof calcPortraitImgSizes[ portraitImgSizeIndex ].url != 'undefined' && (
                                        <div class="bsxui-config-panel-text">
                                            <a class="bsxui-link" href={ calcPortraitImgSizes[ portraitImgSizeIndex ].url } target="_blank">{ __( 'Preview selected portrait image', 'bsx-blocks' ) }</a>
                                        </div>
                                    )
                                }
                            </>
                        )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Zoomable (optional)', 'bsx-blocks' ) }>
                    {
                        calcPortraitImgSizes.length > 0 || !! href ? (
                            <div class="bsxui-config-panel-row">
                                <div class="bsxui-alert">
                                    { 
                                        !! href ? 
                                            __( 'Zoomable image is deactivated since href is set.', 'bsx-blocks' ) 
                                        :
                                            __( 'Zoomable image is deactivated since Portrait image is set.', 'bsx-blocks' ) 
                                    }
                                </div>
                            </div>
                        )
                        :
                        (
                            <>
                                <ToggleControl
                                    className={ calcPortraitImgSizes.length > 0 || !! noFigureTag ? 'bsxui-disabled' : '' }
                                    label={ __( 'Zoomable image', 'bsx-blocks' ) }
                                    checked={ !! zoomable }
                                    onChange={ onChangeZoomable }
                                    help={ __( 'If enabled click on image will open shadowbox gallery with large image.', 'bsx-blocks' ) }
                                />
                                {
                                    zoomable ? (
                                        <>
                                            <RadioControl
                                                label={ __( 'Zoom image size', 'bsx-blocks' ) }
                                                selected={ zoomImgSizeIndex }
                                                options={ zoomImgSizeRadioControlOptions }
                                                onChange={ onChangeZoomImgSizeIndex }
                                            />
                                            {
                                                imgSizeIndex == zoomImgSizeIndex && (
                                                    <div class="bsxui-config-panel-text">
                                                        { __( 'Currently your zoom image is not larger than your original image.', 'bsx-blocks' ) }
                                                    </div>
                                                )
                                            }
                                            <ToggleControl
                                                label={ __( 'External gallery parent', 'bsx-blocks' ) }
                                                checked={ !! externalGalleryParent }
                                                onChange={ onChangeExternalGalleryParent }
                                                help={ __( 'Enabled if using custom external shadowbox gallery element (e.g. configured BSX Wrapper) wrapping this image.', 'bsx-blocks' ) }
                                            />
                                        </>
                                    )
                                    :
                                    (
                                        <div class="bsxui-config-panel-row">
                                            <div class="bsxui-alert">
                                                { __( 'Zoomable image is deactivated since No figure Tag is set.', 'bsx-blocks' ) }
                                            </div>
                                        </div>
                                    )
                                }
                            </>
                        )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Link (optional)', 'bsx-blocks' ) }>
                    {
                        !! zoomable ? (
                            <div class="bsxui-config-panel-row">
                                <div class="bsxui-alert">
                                    { __( 'Link is deactivated since <i>Zoomable image</i> is set.', 'bsx-blocks' ) }
                                </div>
                            </div>
                        )
                        :
                        (
                            <>
                                {
                                    linkUrlInput( href, onChangeHref )
                                }
                                {
                                    targetToggle( target, onChangeTarget )
                                }
                                {
                                    relInput( rel, onChangeRel )
                                }
                                {
                                    // dataFnInput( dataFn, onChangeDataFn )
                                }
                            </>
                        )
                    }
                </PanelBody>
                
                <PanelBody title={ __( 'Margin', 'bsx-blocks' ) }>
                    {
                        marginLeftSelect( marginLeft, onChangeMarginLeft )
                    }
                    {
                        marginRightSelect( marginRight, onChangeMarginRight )
                    }
                    {
                        marginBeforeSelect( marginBefore, onChangeMarginBefore )
                    }
                    {
                        marginAfterSelect( marginAfter, onChangeMarginAfter )
                    }
                </PanelBody>

            </InspectorControls>
            <InspectorAdvancedControls>
                {
                    disableResponsiveDownsizingToggle( disableResponsiveDownsizing, onChangeDisableResponsiveDownsizing )
                }
                {
                    portraitImgMaxWidthBreakpointInput( portraitImgMaxWidthBreakpoint, onChangePortraitImgMaxWidthBreakpoint )
                }
                <ToggleControl
                    className={ !! zoomable ? 'bsxui-disabled' : '' }
                    label={ __( 'No figure tag', 'bsx-blocks' ) }
                    checked={ !! noFigureTag }
                    onChange={ onChangeNoFigureTag }
                />
                {
                    !! zoomable && (
                        <div class="bsxui-config-panel-row">
                            <div class="bsxui-alert">
                                { __( 'Figure tag must exist since Zoomable image is set.', 'bsx-blocks' ) }
                            </div>
                        </div>
                    )
                }
                {
                    !! href && (
                        <TextControl 
                            label={ __( 'A element additional class(es)', 'bsx-blocks' ) }
                            value={ aAdditionalClassName } 
                            onChange={ onChangeAAdditionalClassName }
                        />
                    )
                }
                {
                    ! noFigureTag ? (
                        <TextControl 
                            label={ __( 'Picture element additional class(es) – DEPRECATED', 'bsx-blocks' ) }
                            value={ pictureAdditionalClassName } 
                            onChange={ onChangePictureAdditionalClassName }
                        />
                    )
                    :
                    (
                        <div class="bsxui-config-panel-row">
                            <div class="bsxui-alert">
                                { __( 'Picture element additional class(es) is deactivated since No figure tag is set. Use Additional class(es) instead.', 'bsx-blocks' ) }
                                . 
                            </div>
                        </div>
                    )
                }
                <TextControl 
                    label={ __( 'Image element additional class(es)', 'bsx-blocks' ) }
                    value={ imgAdditionalClassName } 
                    onChange={ onChangeImgAdditionalClassName }
                />
            </InspectorAdvancedControls>
    	</>
	);

    // add class names to blockProps
    // const blockProps = useBlockProps( { className: imgClassName } );
	// console.log( 'blockProps: ' + JSON.stringify( blockProps, null, 2 ) );

	return (
		<>
			<figure { ...blockProps }>
                {
                    imgId ? (
                        <>
                            { 
                                ! zoomable ? (
                                    <>
                                        { image }
                                    </>
                                )
                                :
                                (
                                    <a className={ 'zoomable-img' }>
                                        { image }
                                    </a>
                                ) 
                            }
                        </>
                    )
                    : 
                    (
                        <div className={ 'bsxui-img-upload-placeholder' }>
                            <MediaUpload
                                onSelect={ onSelectImage }
                                allowedTypes="image"
                                value={ imgId }
                                render={ ( { open } ) => (
                                    <Button 
                                        onClick={ open }
                                        isSecondary
                                    >
                                        { __( 'Select / upload Image', 'bsx-blocks' ) }
                                    </Button>
                                ) }
                            />
                        </div>
                    )
                }
                <RichText
                    tagName="figcaption"
                    multiline={ false }
                    placeholder={ __( 'Caption (optional)', 'bsx-blocks' ) }
                    value={ figcaption }
                    onChange={ onChangeFigcaption }
                    keepPlaceholderOnFocus
                />
            </figure>
			{ controls }
		</>
	);
}

// export default withSelect( async ( select, props ) => {
export default withSelect( ( select, props ) => {

    // console.log( 'withSelect()' )

    // check for migration v1 to v2, else do nothing
    const {
        attributes: {
            imgId,
            imgSizes, // old attr
            imgData, // new attr
            portraitImgId,
            portraitImgSizes, // old attr
            portraitImgData, // new attr
        },
    } = props;

    let mediaSizes, portraitMediaSizes;

    // check for different reasons to migrate
    // option 1: using old attribute imgSizes (will be replaced by new attribute imgData)
    // option 2: using old attribute portraitImgSizes (will be replaced by new attribute portraitImgData)
    // option 3: has original size between 780px and 1024px and missing (existing) image size 768px

    const hasDeprecatedAttrImgSizes = (
        typeof imgSizes !== 'undefined' 
        && Array.isArray( imgSizes ) 
        && imgSizes.length > 0 
        && ( 
            typeof imgData === 'undefined' 
            || imgData.length === 0
        )
        && !! imgId
    );
    const hasDeprecatedAttrPortraitImgSizes = ( 
        typeof portraitImgSizes !== 'undefined' 
        && Array.isArray( portraitImgSizes ) 
        && portraitImgSizes.length > 0 
        && ( 
            typeof portraitImgData === 'undefined' 
            || portraitImgData.length === 0
        )
        && !! portraitImgId
    );

    const hasMissingSize768 = (
        typeof imgData !== 'undefined'
        && Array.isArray( imgData ) 
        && imgData.length > 0
        && typeof imgData[ 0 ] !== 'undefined'
        && typeof imgData[ 0 ].sizes !== 'undefined'
        && typeof imgData[ 0 ].sizes[ imgData[ 0 ].sizes.length - 1 ].w !== 'undefined'
        && parseInt( imgData[ 0 ].sizes[ imgData[ 0 ].sizes.length - 1 ].w ) <= 1024
        && parseInt( imgData[ 0 ].sizes[ imgData[ 0 ].sizes.length - 1 ].w ) >= 780
        && parseInt( imgData[ 0 ].sizes[ imgData[ 0 ].sizes.length - 2 ].w ) !== 768
    );


    // console.log( 'imgData: ' + JSON.stringify( imgData, null, 2 ) + '\n' );
    // console.log( 'hasDeprecatedAttrImgSizes: ' + JSON.stringify( hasDeprecatedAttrImgSizes, null, 2 ) + '\n' );
    // console.log( 'hasDeprecatedAttrPortraitImgSizes: ' + JSON.stringify( hasDeprecatedAttrPortraitImgSizes, null, 2 ) + '\n' );

    // check if img has to be updated
    if ( hasDeprecatedAttrImgSizes || hasMissingSize768 ) {
        console.log( '-- get media' )
        // mediaSizes = select( 'core' ).getMedia( imgId )?.media_details?.sizes;
        const media = select( 'core' ).getMedia( imgId );
        const originalImage = media?.media_details?.original_image;

        // console.log( 'media: ' + media )
        // console.log( 'originalImage: ' + originalImage )

        // check if existing additional original image size (larger than “full” size)
        if ( typeof media !== 'undefined' && typeof originalImage !== 'undefined' ) {
            // if originalImage is defined original image size exists

            // // get original image url
            // const sourceUrl = media?.guid?.raw;

            // // get width and height by loading file since not defined in media object
            // let originalSizes;
            // try {
            //     originalSizes = await getImgWidthHeight( sourceUrl );
            // } catch( err ) {
            //     console.error( err );
            // }
            // // console.log( 'originalSizes.width: ' + originalSizes.width + ', originalSizes.height: ' + originalSizes.height )

            // const originalImgSize = {
            //     original: {
            //         file: originalImage, // media?.media_details?.original_image,
            //         width: originalSizes.width, // is not defined in media object
            //         height: originalSizes.height, // is not defined in media object
            //         filesize: media?.media_details?.filesize,
            //         mime_type: media?.mime_type,
            //         source_url: sourceUrl, // media?.guid?.raw,
            //     }
            // };

            const originalImgSize = {
                original: {
                    file: originalImage, // media?.media_details?.original_image,
                    width: null, // is not defined in media object
                    height: null, // is not defined in media object
                    filesize: media?.media_details?.filesize,
                    mime_type: media?.mime_type,
                    source_url: media?.guid?.raw, // media?.guid?.raw,
                }
            };

            // add original size to sizes list
            mediaSizes = {
                ...media?.media_details?.sizes,
                ...originalImgSize,
            };
        }
        else {
            mediaSizes = media?.media_details?.sizes;
        }
        // console.log( 'media: ' + JSON.stringify( media, null, 2 ) + '\n' );
        // console.log( 'mediaSizes (' + imgId + '): ' + JSON.stringify( mediaSizes, null, 2 ) + '\n' );
        // console.log( 'originalImgSize: ' + JSON.stringify( originalImgSize, null, 2 ) + '\n' );
    }
    else {
        // console.log( '-- NOT get media' )
        mediaSizes = null;
    }

    // check if portrait img has to be updated
    if ( hasDeprecatedAttrPortraitImgSizes ) {
        portraitMediaSizes = select( 'core' ).getMedia( portraitImgId )?.media_details?.sizes;
    }
    else {
        portraitMediaSizes = null;
    }

    // console.log( 'mediaSizes withSelect() ( ' + imgId + ' ): ' + JSON.stringify( mediaSizes, null, 2 ) + '\n' );
    // console.log( 'portraitMediaSizes withSelect() ( ' + portraitImgId + ' ): ' + JSON.stringify( portraitMediaSizes, null, 2 ) + '\n' );
    // console.log( 'withSelect() mediaSizes: ' + ( !! mediaSizes ? 'defined' : 'null or undefined' ) )
    // console.log( 'withSelect() portraitMediaSizes: ' + ( !! portraitMediaSizes ? 'defined' : 'null or undefined' ) )


    // note: sending any value non `null`will run migration on edit
    return {
        mediaSizes: mediaSizes,
        portraitMediaSizes: portraitMediaSizes,
    };
} )( Edit );