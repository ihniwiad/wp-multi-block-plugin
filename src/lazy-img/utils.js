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

