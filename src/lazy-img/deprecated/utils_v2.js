export const makeSrcset = ( attributes ) => {

    const {
        calcImgSizes,
        imgSizeIndex,
    } = attributes;

    // console.log( 'calcImgSizes: ' + calcImgSizes );
    // console.log( 'imgSizeIndex: ' + imgSizeIndex );

    const srcsetList = [];
    calcImgSizes.forEach( ( imgSize, index ) => {
        if ( 
            ( ( imgSizeIndex == 0 && index == 0 ) || ( imgSize.width == imgSize.height ) )
            || ( imgSizeIndex > 0 && index > 0 )
        ) {
            // add square thumb img if is selected size (imgSizeIndex == 0) or original img has square format too, else skip
            srcsetList.push( imgSize.url + ' ' + imgSize.width + 'w' );
            if ( imgSizeIndex == 0 ) {
                // skip other sizes but square
                return; // do not use `break` since will cause error “Unsyntactic break.”
            }
        }
    } );

    return srcsetList.join( ', ' );
}


