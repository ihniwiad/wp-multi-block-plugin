// export const makeSrcset = ( attributes ) => {

//     const {
//         calcImgSizes,
//         imgSizeIndex,
//     } = attributes;

//     // console.log( 'calcImgSizes: ' + calcImgSizes );
//     // console.log( 'imgSizeIndex: ' + imgSizeIndex );

//     const srcsetList = [];
//     calcImgSizes.forEach( ( imgSize, index ) => {
//         if ( 
//             ( ( imgSizeIndex == 0 && index == 0 ) || ( imgSize.width == imgSize.height ) )
//             || ( imgSizeIndex > 0 && index > 0 )
//         ) {
//             // add square thumb img if is selected size (imgSizeIndex == 0) or original img has square format too, else skip
//             srcsetList.push( imgSize.url + ' ' + imgSize.width + 'w' );
//             if ( imgSizeIndex == 0 ) {
//                 // skip other sizes but square
//                 return; // do not use `break` since will cause error “Unsyntactic break.”
//             }
//         }
//     } );

//     return srcsetList.join( ', ' );
// }


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
            // first loop, thumbnail image – add only if selected or if image has square format (use largest size since current loop size will always be square at first loop)
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


