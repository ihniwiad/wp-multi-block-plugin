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

export function getSizesAndWithoutSizesTruncFromUrlTrunc ( urlTrunc ) {

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

    const urlTruncAndExtension = getUrlTruncAndExtension( url );

    const fileExtension = urlTruncAndExtension.extension;
    const urlWithoutFileExtension = urlTruncAndExtension.trunc;

    const sizesAndWithoutSizeSlugTrunc = getSizesAndWithoutSizesTruncFromUrlTrunc( urlWithoutFileExtension );

    const width = sizesAndWithoutSizeSlugTrunc.width;
    const urlWithoutSizeSlugAndFileExtension = sizesAndWithoutSizeSlugTrunc.withoutSizeSlugTrunc;

    const returnList = [];

    scaleList.forEach( ( scale, index ) => {

        // calculate new size
        const scaledWidth = Math.round( width * scale );

        // check if default size exists for current img (only if original img is larger)
        if ( scaledWidth <= originalWidth ) {

            const scaledHeight = Math.round( scaledWidth / ratio );
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

    // scaled (hidden) img settings
    const imgScaleList = [ 0.75, 1.5, 2 ];
    const imgBaseSize = 'large';

    const defaultImgList = [ 
        'thumbnail', 
        'medium', 
        imgBaseSize, 
        'full', 
    ];
    const imgSizesOrder = [ 
        'thumbnail', 
        'medium', 
        imgScaleList[ 0 ] + '',
        imgBaseSize, 
        imgScaleList[ 1 ] + '',
        imgScaleList[ 2 ] + '',
        'full',
        'original',
    ];

    let originalImgUrl = '';
    let originalWidth = 0;
    let originalHeight = 0;

    const fullImgIsScaled = checkFullImgIsScaled( img.url );

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

    // make sizes only if large img exists
    if ( img.sizes.large != undefined ) {

        // config for making sizes (might change in newer WP versions)
        const sizedImgsConfig = {
            url: img.sizes[ imgBaseSize ].url,
            scaleList: imgScaleList,
            originalWidth: originalWidth,
            originalHeight: originalHeight,
        };
        const sizedImgs = makeSizedImgs( sizedImgsConfig );

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

    // // TEST – TODO: remove
    // for ( let [ key, value ] of Object.entries( scaledImgs ) ) {
    //     console.log( 'scaledImgs[ ' + key + ' ].url: ' + value.url );
    //     console.log( 'scaledImgs[ ' + key + ' ].sizeSlug: ' + value.sizeSlug );
    // }

    // make ordered list of all existing default img sizes and scaled (hidden) img sizes
    imgSizesOrder.forEach( ( imgSize, index ) => {

        if ( defaultImgList.indexOf( imgSize ) != -1 && img.sizes[ imgSize ] != undefined ) {
            // get from default img list
            returnImgs.push( {
                url: img.sizes[ imgSize ].url,
                sizeSlug: getSizeSlugFromUrl( img.sizes[ imgSize ].url, originalImgUrl ),
                width: img.sizes[ imgSize ].width,
                height: img.sizes[ imgSize ].height, 
            } );
        }
        else if ( imgScaleList.indexOf( parseFloat( imgSize ) ) != -1 && scaledImgs.get( imgSize ) != undefined ) {
            // get from scaled imgs list
            returnImgs.push( scaledImgs.get( imgSize ) );
        }
        else if ( imgSize == 'original' && fullImgIsScaled ) {
            // add unscaled original
            returnImgs.push( {
                url: originalImgUrl,
                sizeSlug: getSizeSlugFromUrl( originalImgUrl, originalImgUrl ),
                width: originalWidth,
                height: originalHeight, 
            } );
        }

    } );

    // TEST – TODO: remove
    // returnImgs.forEach( ( returnImg, index ) => {
    //     console.log( 
    //         index + ':\n' 
    //         + returnImg.url + '\n'
    //         + returnImg.width + '\n'
    //         + returnImg.height + '\n'
    //     );
    // } );

    // console.log( 'returnImgs: ' + JSON.stringify( returnImgs, null, 2 ) );
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



