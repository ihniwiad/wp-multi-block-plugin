import { 
    // getUrlTruncAndExtension,
    // fullImgIsScaled,
    // getOriginalImgUrl,
    // getSizesAndWithoutSizesTruncFromUrlTrunc,
    // makeSizedImgs,
    // getImgWithHeight,
    // imgExists,
    // getImgSizesData,
    makeBase64PreloadImgSrc,
    // makeImgSizesFromImgData,
    makeImgData,
    // getSizeSlugFromUrl,
    getImgAllDataFromMediaSizes,
} from './../_functions/img.js';


// do not use – external function causes react error for unknown reason
export function migrateToLazyimgV2( attributes, mediaSizes, portraitMediaSizes ) {
    
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
        pictureAdditionalClassName,
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


    console.log( '---- migrateToLazyimgV2()' );
    
    let newAttributes = {};

    if ( mediaSizes && imgData.length === 0 ) {
        const newImgAllData = getImgAllDataFromMediaSizes( mediaSizes );
        const originalWidth = newImgAllData.originalWidth;
        const originalHeight = newImgAllData.originalHeight;
        const returnImgs = newImgAllData.imgs;
        // console.log( '----> newImgAllData useMigrateOnLoad() ( ' + imgId + ' ): ' + JSON.stringify( newImgAllData, null, 2 ) + '\n' );

        // const newImgData = makeImgData( returnImgs, truncWithoutSizeSlug, fileExt );
        const newImgData = makeImgData( newImgAllData.imgs, newImgAllData.truncWithoutSizeSlug, newImgAllData.fileExt );
        // console.log( '----> newImgData ( ' + imgId + ' ): ' + JSON.stringify( newImgData, null, 2 ) + '\n' );

        // TODO: check size indexes, compare imgSizes.length with returnImgs.length, if equal keep, if difference count down from largest size


        console.log( '------> imgSizes.length: ' + imgSizes.length + ', returnImgs.length: ' + returnImgs.length )


        // TODO: check imgSizeIndex more complex

        const imgIsBetween770And1024 = originalWidth <= 1024 && originalWidth >= 770;
        console.log( 'imgIsBetween770And1024: ' + imgIsBetween770And1024 )
        let newImgSizeIndex = typeof imgSizeIndex !== 'undefined' ? imgSizeIndex : imgSizes.length - 1;
        let newZoomImgSizeIndex = zoomImgSizeIndex;
        // some existing image size (768px) might be missing due to a bug if original image is between 1024 and 770px
        // now there are all image sizes so we might need to increase imgSizeIndex
        if ( imgIsBetween770And1024 ) {
            // check to change imgSizeIndex
            if ( parseInt( imgSizeIndex ) >= 2 ) {
                newImgSizeIndex = ( parseInt( imgSizeIndex ) + ( returnImgs.length - imgSizes.length ) ).toString();
            }
            if ( parseInt( newZoomImgSizeIndex ) >= 2 ) {
                newZoomImgSizeIndex = ( parseInt( zoomImgSizeIndex ) + ( returnImgs.length - imgSizes.length ) ).toString();
            }
        }
        console.log( '------> imgSizeIndex: ' + imgSizeIndex + ', newImgSizeIndex: ' + newImgSizeIndex )
        console.log( '------> zoomImgSizeIndex: ' + zoomImgSizeIndex + ', newZoomImgSizeIndex: ' + newZoomImgSizeIndex )

        console.log( '--------> make (first) img attr' )

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

            // portraitImgData: typeof newPortraitImgData !== 'undefined' ? newPortraitImgData : null,
            // portraitImgSizeIndex: typeof newPortraitImgSizeIndex !== 'undefined' ? newPortraitImgSizeIndex.toString() : null,
        };
        // console.log( '--------> newAttributes (img): ' + JSON.stringify( newAttributes, null, 2 ) + '\n' );
    }

    if ( portraitMediaSizes && portraitImgData.length === 0 ) {
        console.log( '--------> make portrait img attr' )
        const newPortraitImgAllData = getImgAllDataFromMediaSizes( portraitMediaSizes );
        // const portraitOriginalWidth = newPortraitImgAllData.originalWidth;
        // const portraitOriginalHeight = newPortraitImgAllData.originalHeight;
        const portraitReturnImgs = newPortraitImgAllData.imgs;

        const newPortraitImgData = makeImgData( newPortraitImgAllData.imgs, newPortraitImgAllData.truncWithoutSizeSlug, newPortraitImgAllData.fileExt );
        
        // console.log( '----> newPortraitImgData ( ' + portraitImgId + ' ): ' + JSON.stringify( newPortraitImgData, null, 2 ) + '\n' );


        console.log( '------> portraitImgSizes.length: ' + portraitImgSizes.length + ', portraitReturnImgs.length: ' + portraitReturnImgs.length )

        let newPortraitImgSizeIndex = typeof portraitImgSizeIndex !== 'undefined' ? portraitImgSizeIndex : portraitImgSizes.length - 1;
        // some existing image sizes due to bug in old sizes calculation on protrait formats
        // now there are all image sizes so we might need to increase imgSizeIndex
        if ( parseInt( portraitImgSizeIndex ) >= 2 ) {
            newPortraitImgSizeIndex = ( parseInt( portraitImgSizeIndex ) + ( portraitReturnImgs.length - portraitImgSizes.length ) ).toString();
        }
        console.log( '------> portraitImgSizeIndex: ' + portraitImgSizeIndex + ', newPortraitImgSizeIndex: ' + newPortraitImgSizeIndex )
    

        newAttributes = {
            portraitImgSizes: '', // save empty, replaced by portraitImgData
            portraitImgData: newPortraitImgData,
            portraitImgSizeIndex: newPortraitImgSizeIndex.toString(),
            ...newAttributes,
        };
        // console.log( '--------> newAttributes (portrait): ' + JSON.stringify( newAttributes, null, 2 ) + '\n' );

    }

    // console.log( 'otherAttributes: \n' + JSON.stringify( otherAttributes, null, 2 ) );

    return newAttributes;
}


export const getSrcsetUrlsFromImgHtml = ( imgHtml ) => {

    function decodeHTMLEntities( text ) {
        var textArea = document.createElement( 'textarea' );
        textArea.innerHTML = text;
        return textArea.value;
    }

    const parser = new DOMParser();
    const htmlContent = parser.parseFromString( decodeHTMLEntities( imgHtml ), 'text/html' );
    // console.log( 'decodeHTMLEntities( imgHtml ): ' + JSON.stringify( decodeHTMLEntities( imgHtml ), null, 2 ) + '\n' );
    var el = document.createElement( 'html' );
    el.innerHTML = '<html><head></head><body>' + decodeHTMLEntities( imgHtml ) + '</body></html>';

    // 
    if ( el.querySelector( 'img' ) === null || ! el.querySelector( 'img' ).getAttribute( 'srcset' ) ) return [];

    const srcset = el.querySelector( 'img' ).getAttribute( 'srcset' ); // Live NodeList of your anchor elements
    // console.log( 'srcset: \n' + JSON.stringify( srcset, null, 2 ) + '\n' );

    const srcsetArr = srcset.split( ',' );
    const sourcesList = srcsetArr.map( ( sourceText ) => {
        return sourceText.trim().split( ' ' )[ 0 ];
    } );

    return sourcesList;
}


export const makeSourcesAttributesList = ( attributes ) => {

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
                    srcset: makeBase64PreloadImgSrc( calcPortraitImgSizes[ adaptedCurrentPortraitImgIndex ].width, calcPortraitImgSizes[ adaptedCurrentPortraitImgIndex ].height ),
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
                srcset: makeBase64PreloadImgSrc( calcPortraitImgSizes[ portraitImgSizeIndex ].width, calcPortraitImgSizes[ portraitImgSizeIndex ].height ),
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
                srcset: makeBase64PreloadImgSrc( calcImgSizes[ adaptedCurrentImgIndex ].width, calcImgSizes[ adaptedCurrentImgIndex ].height ),
                'data-srcset': calcImgSizes[ adaptedCurrentImgIndex ].url,
                'data-width': calcImgSizes[ adaptedCurrentImgIndex ].width,
                'data-height': calcImgSizes[ adaptedCurrentImgIndex ].height,
            } );
        }
    } );

    return sourcesAttributesList;

}


export const makeSrcset = ( attributes ) => {

    const {
        calcImgSizes,
        imgSizeIndex,
    } = attributes;

    // console.log( 'calcImgSizes: ' + JSON.stringify( calcImgSizes, null, 2 ) + '\n' );
    // console.log( 'imgSizeIndex: ' + imgSizeIndex );

    const srcsetList = [];
    calcImgSizes.forEach( ( imgSize, index ) => {
        if ( index === 0 ) {
            // first loop, thumbnail image – add only if selected or if image has square format (ose largest size since current loop size will always be square at first loop)
            if ( imgSizeIndex == 0 || calcImgSizes[ calcImgSizes.length - 1 ].width == calcImgSizes[ calcImgSizes.length - 1 ].height ) {
                // add thumbnail to srcset
                srcsetList.push( imgSize.url + ' ' + imgSize.width + 'w' );
            }
        }
        else {
            // other loops, non thumbnail images
            // if ( index <= imgSizeIndex ) {
                // add if current size is smaller than selected size
                srcsetList.push( imgSize.url + ' ' + imgSize.width + 'w' );
            // }
        }
    } );

    // console.log( 'srcsetList: ' + JSON.stringify( srcsetList, null, 2 ) + '\n' );

    return srcsetList.join( ', ' );
}

