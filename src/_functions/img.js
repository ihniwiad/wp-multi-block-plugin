// img functions

export function getUrlTruncAndExtension( url ) {

    const urlExplode = url.split( '.' );

    const fileExtension = urlExplode[ urlExplode.length - 1 ];
    urlExplode.pop();
    const urlWithoutFileExtension = urlExplode.join( '.' );

    return {
        trunc: urlWithoutFileExtension,
        extension: fileExtension,
    };
}

export function checkFullImgIsScaled( fullUrl ) {

    const urlWithoutFileExtension = getUrlTruncAndExtension( fullUrl ).trunc;

    return urlWithoutFileExtension.lastIndexOf( '-scaled' ) === urlWithoutFileExtension.length - 7;
}

export function getOriginalImgUrl( fullUrl ) {

    const truncAndExtension = getUrlTruncAndExtension( fullUrl );

    return truncAndExtension.trunc.substring( 0, truncAndExtension.trunc.length - 7 ) + '.' + truncAndExtension.extension;
}

export function getSizesAndWithoutSizesTruncFromUrlTrunc( urlTrunc ) {

    // input may be
    // http://my-domain.local/wp-content/uploads/2024/02/my-img-name-1024x768
    // http://my-domain.local/wp-content/uploads/2024/02/my-img-name-768x1333
    // http://my-domain.local/wp-content/uploads/2024/02/my-img-name

    // remove file name after last '-'
    const urlWithoutFileExtensionExplode = urlTrunc.split( '-' );
    const sizes = urlWithoutFileExtensionExplode[ urlWithoutFileExtensionExplode.length - 1 ].split( 'x' );

    urlWithoutFileExtensionExplode.pop();

    return {
        width: sizes[ 0 ],
        height: sizes[ 1 ],
        withoutSizeSlugTrunc: urlWithoutFileExtensionExplode.join( '-' ),
    };
}

export function removeFileExt( fullUrl ) {

    const urlExplode = fullUrl.split( '.' );
    urlExplode.pop();

    return urlExplode.join( '.' );
}

export function getSizeSlugFromUrl( fullUrl, originalImgUrl ) {
    // console.log( '------> fullUrl: ' + fullUrl + ', originalImgUrl: ' + originalImgUrl )

    const sizeSlugWithFileExt = fullUrl.replace( removeFileExt( originalImgUrl ), '' );

    return removeFileExt( sizeSlugWithFileExt );
}

export function makeSizedImgs( config ) {

    const {
        originalWidth,
        originalHeight,
        url,
        scaleList,
    } = config;

    const ratio = originalWidth / originalHeight;

    // need to separate if img size 'large' img is scaled down of a larger original img or is original size
    // doesn’t depend on ratio but only on width (not height!)
    const imgIsBetween770And1024 = originalWidth <= 1024 && originalWidth >= 770;

    // console.log( 'ratio: ' + ratio )
    // console.log( 'original size: ' + originalWidth + 'x' + originalHeight )
    // console.log( 'imgIsBetween770And1024: ' + ( imgIsBetween770And1024 ? 'true' : 'false' ) )

    const urlTruncAndExtension = getUrlTruncAndExtension( url );

    // console.log( 'urlTruncAndExtension: \n' + JSON.stringify( urlTruncAndExtension, null, 2 ) );

    const fileExtension = urlTruncAndExtension.extension;
    const urlWithoutFileExtension = urlTruncAndExtension.trunc;

    const sizesAndWithoutSizeSlugTrunc = imgIsBetween770And1024 ? 
        {
            width: originalWidth,
            height: originalHeight,
            withoutSizeSlugTrunc: urlWithoutFileExtension
        }
        : 
        // split img name to get sizes
        getSizesAndWithoutSizesTruncFromUrlTrunc( urlWithoutFileExtension )
    ;
    // console.log( 'sizesAndWithoutSizeSlugTrunc: \n' + JSON.stringify( sizesAndWithoutSizeSlugTrunc, null, 2 ) );

    // base width for scaling is still 1024 even for smaller images
    // const width = imgIsBetween770And1024 ? 1024 : sizesAndWithoutSizeSlugTrunc.width;
    const urlWithoutSizeSlugAndFileExtension = sizesAndWithoutSizeSlugTrunc.withoutSizeSlugTrunc;

    // console.log( 'width: ' + width )
    // console.log( 'urlWithoutSizeSlugAndFileExtension: ' + urlWithoutSizeSlugAndFileExtension )

    const returnList = [];

    scaleList.forEach( ( scale, index ) => {

        // calculate new size

        let scaledWidth, scaledHeight;

        if ( ratio >= 1 || scale === 768 ) {
            // is landscape or scale size is 768 (has a different calculation)

            scaledWidth = scale;
            scaledHeight = Math.round( scale / originalWidth * originalHeight );
        }
        else {
            // is portrait and not scale size 768

            scaledWidth = Math.round( scale / originalHeight * originalWidth );
            scaledHeight = scale;
        }

        // console.log( 'scaled size: ' + scaledWidth + 'x' + scaledHeight + ' (' + ( ratio >= 1 ? 'landscape' : 'portrait' ) + ')' )

        // check if default size exists for current img (only if original img is larger)
        if ( scaledWidth <= originalWidth ) {

            const sizeSlug = '-' + scaledWidth + 'x' + scaledHeight;
            const scaledUrl = urlWithoutSizeSlugAndFileExtension + sizeSlug + '.' + fileExtension;

            returnList.push( {
                url: scaledUrl, // deprecated soon
                sizeSlug: sizeSlug,
                width: scaledWidth,
                height: scaledHeight,
            } );
        }

    } ); 

    return returnList;

}

export function getImgWidthHeight( imgUrl ) {

    return new Promise( ( resolve, reject ) => {

        let img = document.createElement( 'img' );
        img.onload = () => { 

            resolve( {
                width: img.width,
                height: img.height,
            } );

            img.remove;
        };
        img.onerror = ( err ) => {
            reject( 'Error on loading image "' + imgUrl + '"', err );
        }
        img.src = imgUrl;
        document.body.appendChild( img );
    } );
}

export function imgExists( url ) {
    return new Promise( ( resolve, reject ) => {
        const xhr = new XMLHttpRequest();
        xhr.open( 'HEAD', url, true );
        xhr.onreadystatechange = () => {
            if ( xhr.readyState == 4 ) {
                if ( xhr.status == 200 ) {
                    resolve( true );
                } 
                else {
                    resolve( false );
                }
            }
        };
        xhr.send( null );
    } );
}

// getting sorted list of all imgs (default and hidden scaled)
export async function getImgSizesData( img ) {

    // console.log( 'getImgSizesData()' );


    // console.log( 'img.sizes: \n' + JSON.stringify( img.sizes, null, 2 ) );
    // console.log( 'img.media_details: \n' + JSON.stringify( img.media_details, null, 2 ) );

    // scaled (hidden) img settings

    const imgScaleList = [ 768, 1536, 2048 ];

    const defaultImgList = [ 
        'thumbnail', 
        'medium', 
        'large', 
        'full', 
    ];
    const imgSizesOrder = [ 
        'thumbnail', 
        'medium', 
        imgScaleList[ 0 ] + '',
        'large', 
        imgScaleList[ 1 ] + '',
        imgScaleList[ 2 ] + '',
        'full',
        'original',
    ];

    let originalImgUrl = '';
    let originalWidth = 0;
    let originalHeight = 0;

    const fullImgIsScaled = checkFullImgIsScaled( img.url );
    const imgIsBetween770And1024 = ( img.width <= 1024 && img.width >= 770 );

    if ( fullImgIsScaled ) {
        // get original, get sizes
        originalImgUrl = getOriginalImgUrl( img.url );

        let originalImgSizes;
        try {
            originalImgSizes = await getImgWidthHeight( originalImgUrl );
        } catch( err ) {
            console.error( err );
        }

        originalWidth = originalImgSizes.width;
        originalHeight = originalImgSizes.height;
    }
    else {
        // get sizes from full img
        originalImgUrl = img.sizes.full.url;
        originalWidth = img.sizes.full.width;
        originalHeight = img.sizes.full.height;
    }

    const originalImgUrlTruncAndExt = getUrlTruncAndExtension( originalImgUrl );
    const truncWithoutSizeSlug = originalImgUrlTruncAndExt.trunc;
    const fileExt = originalImgUrlTruncAndExt.extension;

    let scaledImgs = new Map();
    const returnImgs = [];

    // console.log( 'img.width: ' + img.width )

    // make sizes only if large img exists or original img has 1024px width
    if ( img.sizes.large != undefined || imgIsBetween770And1024 ) {
    // if ( img.sizes.large != undefined ) {

        // config for making sizes (might change in newer WP versions)
        const sizedImgsConfig = {
            url: imgIsBetween770And1024 ? img.url : img.sizes.large.url,
            scaleList: imgScaleList,
            originalWidth: originalWidth,
            originalHeight: originalHeight,
        };
        const sizedImgs = makeSizedImgs( sizedImgsConfig );

        // console.log( 'sizedImgsConfig: ' + JSON.stringify( sizedImgsConfig, null, 2 ) );
        // console.log( 'sizedImgs: ' + JSON.stringify( sizedImgs, null, 2 ) );

        // check all imgs if exist (since WordPress might change hidden img sizes one day);
        await Promise.all( sizedImgs.map( async ( sizedImg, index ) => {
            const currentImageExists = await imgExists( sizedImg.url );
            if ( currentImageExists ) {
                scaledImgs.set( imgScaleList[ index ] + '', sizedImg );
            }
        } ) );

    }

    // console.log( 'scaledImgs.length: ' + scaledImgs.length );

    // make ordered list of all existing default img sizes and scaled (hidden) img sizes
    imgSizesOrder.forEach( ( imgSizeKey, index ) => {

        if ( defaultImgList.indexOf( imgSizeKey ) != -1 && img.sizes[ imgSizeKey ] != undefined ) {
            // get from default img list
            returnImgs.push( {
                url: img.sizes[ imgSizeKey ].url,
                sizeSlug: getSizeSlugFromUrl( img.sizes[ imgSizeKey ].url, originalImgUrl ),
                width: img.sizes[ imgSizeKey ].width,
                height: img.sizes[ imgSizeKey ].height, 
            } );
        }
        else if ( imgScaleList.indexOf( parseFloat( imgSizeKey ) ) != -1 && scaledImgs.get( imgSizeKey ) != undefined ) {
            // get from scaled imgs list
            returnImgs.push( scaledImgs.get( imgSizeKey ) );
        }
        else if ( imgSizeKey == 'original' && fullImgIsScaled ) {
            // add unscaled original
            returnImgs.push( {
                url: originalImgUrl,
                sizeSlug: getSizeSlugFromUrl( originalImgUrl, originalImgUrl ),
                width: originalWidth,
                height: originalHeight, 
            } );
        }

    } );

    // sort by width since current order might not correspond to sizes (e.g. portrait image at scale 768)
    returnImgs.sort( ( a, b ) => a.width - b.width );

    // console.log( 'returnImgs: \n' + JSON.stringify( returnImgs, null, 2 ) );
    // console.log( 'truncWithoutSizeSlug: ' + truncWithoutSizeSlug );
    // console.log( 'fileExt: ' + fileExt );

    return {
    	imgs: returnImgs,
    	originalWidth: originalWidth,
    	originalHeight: originalHeight,
        truncWithoutSizeSlug: truncWithoutSizeSlug,
        fileExt: fileExt,
    };
}

export const getImgAllDataFromMediaSizes = ( mediaSizes ) => {

    if ( typeof mediaSizes === 'undefined' ) {
        return {};
    }

    const returnImgs = [];
    const largestMediaSize = Object.values( mediaSizes )[ Object.keys( mediaSizes ).length - 1 ];
    Object.values( mediaSizes ).forEach( ( mediaSize ) => {
        returnImgs.push( {
            url: mediaSize.source_url,
            sizeSlug: getSizeSlugFromUrl( mediaSize.source_url, largestMediaSize.source_url ),
            width: mediaSize.width,
            height: mediaSize.height, 
        } );
    } );
    // console.log( '----> returnImgs ( ' + imgId + ' ): ' + JSON.stringify( returnImgs, null, 2 ) + '\n' );

    const originalImgUrlTruncAndExt = getUrlTruncAndExtension( largestMediaSize.source_url );

    // sort by width or height
    if ( largestMediaSize.width > largestMediaSize.height ) {
        // landscape format, sort by width
        returnImgs.sort( ( a, b ) => a.width - b.width );
    }
    else {
        // portrait format, sort by height
        returnImgs.sort( ( a, b ) => a.height - b.height );
    }

    return {
        imgs: returnImgs,
        originalWidth: largestMediaSize.width,
        originalHeight: largestMediaSize.height,
        truncWithoutSizeSlug: originalImgUrlTruncAndExt.trunc,
        fileExt: originalImgUrlTruncAndExt.extension,
    };
}

export const makeBase64PreloadImgSrc = ( imgWidth, imgHeight ) => {
    const img = '<svg xmlns="http://www.w3.org/2000/svg" width="' + imgWidth + 'px" height="' + imgHeight + 'px" viewBox="0 0 ' + imgWidth + ' ' + imgHeight + '"><rect fill="none" width="' + imgWidth + '" height="' + imgHeight + '"/></svg>'
    const imgBase64 = btoa( img )
    return 'data:image/svg+xml;base64,' + imgBase64
}

/*
example:

// was saved in attibutes before
imgSizes = [
    {
        url: '', // url was very large
        width: '',
        height: '',
    },
    // ... (1...n)
];

// is saved in attributes now, replaces imgSizes
imgData = [
    sizes: [
        {
            s: '', // size slug is short
            w: '',
            h: '',
        },
        // ... (1...n)
    ],
    trunc: '',
    ext: '',
];
*/
export const makeImgSizesFromImgData = ( imgData ) => {

    // console.log( 'makeImgSizesFromImgData()' );
    // console.log( 'imgData: ' + JSON.stringify( imgData, null, 2 ) + '\n' );

    const imgSizes = [];

    if ( typeof imgData[ 0 ] !== 'undefined' && typeof imgData[ 0 ].sizes !== 'undefined' && typeof imgData[ 0 ].trunc !== 'undefined' && typeof imgData[ 0 ].ext !== 'undefined' ) {

        imgData[ 0 ].sizes.forEach( ( size, index ) => {

            if ( typeof size.s !== 'undefined' && typeof size.w !== 'undefined' && typeof size.h !== 'undefined' ) {

                imgSizes.push( {
                    url: imgData[ 0 ].trunc + size.s + '.' + imgData[ 0 ].ext,
                    width: size.w,
                    height: size.h, 
                } );

            }

        } );

    }

    return imgSizes;
}

export const makeImgData = ( imgSizes, truncWithoutSizeSlug, fileExt ) => {

    const sizes = [];
    imgSizes.forEach( ( img, index ) => {
        sizes.push( {
            s: img.sizeSlug,
            w: img.width,
            h: img.height,
        } );
    } );

    return [ {
        sizes: sizes,
        trunc: truncWithoutSizeSlug,
        ext: fileExt,
    } ];
}

// export async function getOriginalImgSizes( img ) {

//     if ( fullImgIsScaled( img.url ) ) {
//         // find original img

//         let originalImgSizes;

//         try {
//             originalImgSizes = await getImgWidthHeight( getOriginalImgUrl( img.url ) );
//         } catch( err ) {
//             console.error( err );
//         }

//         return {
//             width: originalImgSizes.width,
//             height: originalImgSizes.height,
//         };

//     }
//     else {
//         // get sizes from full img
//         return {
//             width: img.sizes.full.width,
//             height: img.sizes.full.height,
//         };
//     }
// }



