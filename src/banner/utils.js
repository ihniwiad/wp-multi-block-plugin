export const makeBannerClassNames = ( attributes ) => {

    const { 
        bannerType, 
        bannerSize, 
        bgAttachment, 
        bgAttachmentFixedLimited,
        bgSize, 
        bgPosition, 
        alignItems, 
        smAlignItems,
        mdAlignItems,
        templateName,
        rounded,
        href,
    } = attributes;

    const classNames = [];

    if ( !! bannerType ) {
        // always set bannerType and bannerSize to keep debugging easy
        classNames.push( 'banner-' + bannerType + '-' + bannerSize );
    }
    else {
        classNames.push( 'banner-' + bannerSize );
    }

    if ( !! bgAttachment ) {
        classNames.push( 'bg-' + bgAttachment );
    }
    if ( !! bgAttachmentFixedLimited ) {
        classNames.push( 'bg-w2000-static' );
    }

    if ( !! bgSize ) {
        classNames.push( 'bg-' + bgSize );
    }

    if ( !! bgPosition ) {
        classNames.push( 'bg-' + bgPosition );
    }
    
    if ( !! templateName == 'column-row-banner' && classNames.indexOf( 'd-flex' ) == -1 ) {
        classNames.push( 'd-flex' );
    }
    
    if ( !! alignItems ) {
        if ( classNames.indexOf( 'd-flex' ) == -1 ) {
            classNames.push( 'd-flex' );
        }
        if ( templateName !== 'column-row-banner' ) {
            classNames.push( 'align-items-' + alignItems );
        }
    }
    if ( !! smAlignItems ) {
        if ( classNames.indexOf( 'd-flex' ) == -1 ) {
            classNames.push( 'd-flex' );
        }
        if ( templateName !== 'column-row-banner' ) {
            classNames.push( 'align-items-sm-' + smAlignItems );
        }
    }
    if ( !! mdAlignItems ) {
        if ( classNames.indexOf( 'd-flex' ) == -1 ) {
            classNames.push( 'd-flex' );
        }
        if ( templateName !== 'column-row-banner' ) {
            classNames.push( 'align-items-md-' + mdAlignItems );
        }
    }

    if ( rounded === true ) {
        classNames.push( 'of-hidden' );
    }

    if ( !! href ) {
        classNames.push( 'd-block' );
        classNames.push( 'no-underline' );
    }

    return classNames.join( ' ' );
}

export const makeBannerInnerClassNames = ( attributes ) => {

    const {
        templateName,
    } = attributes;

    const classNames = [ 'banner-inner' ];
    
    if ( !! templateName && templateName == 'column-row-banner' ) {
        classNames.push( 'w-100' );
        classNames.push( 'd-flex' );
        classNames.push( 'flex-column' );
    }

    return classNames.join( ' ' );
}

// responsive sizes
const responsivePortraitMediaIndexList = [
    {
        media: '(orientation: portrait) and (max-width: 499.98px)',
        imgSizeIndexShift: '-1',
    },
    {
        media: '(orientation: portrait)',
        imgSizeIndexShift: '0',
    },
];
const responsiveMediaIndexList = [
    {
        media: '(max-width: 999.98px)',
        imgSizeIndexShift: '-3',
    },
    {
        media: '(max-width: 1399.98px)',
        imgSizeIndexShift: '-2',
    },
];
const skipIndex = 0;
export const makeSrcsetJson = ( attributes ) => {

    const { 
        calcImgSizes, 
        imgSizeIndex, 
        calcPortraitImgSizes, 
        portraitImgSizeIndex, 
        disableResponsiveDownsizing,
    } = attributes;

    // srcsetJson = "[ { media: '" + mobileMediaQuery + "', src: '" + url + "' }, { media: '" + smallMobileMediaQuery + "', src: '" + calcImgSizes[ ( imgSizeIndex - mobileSizeStep > 0 ? imgSizeIndex - mobileSizeStep : 0 ) ].url + "' }, { media: '', src: '" + calcImgSizes[ ( imgSizeIndex - smallMobileSizeStep > 0 ? imgSizeIndex - smallMobileSizeStep : 0 ) ].url + "' } ]";
    let srcsetJson = '[ ';
    responsivePortraitMediaIndexList.forEach( ( item, index ) => {
        // add item if img resulting indes > skipIndex (no square format)
        if ( ! disableResponsiveDownsizing || index == 0 ) {
            // always add 1st item, others only if downsizing is enabled
            const currentPortraitImgSizeIndex = ( parseInt( portraitImgSizeIndex ) + parseInt( item.imgSizeIndexShift ) );
            if ( typeof calcPortraitImgSizes !== 'undefined' && currentPortraitImgSizeIndex > skipIndex && currentPortraitImgSizeIndex < calcPortraitImgSizes.length ) {
                srcsetJson += '{ media: \'' + item.media + '\', src: \'' + calcPortraitImgSizes[ currentPortraitImgSizeIndex ].url + '\' }, ';
            }
        }
    } );
    if ( ! disableResponsiveDownsizing ) {
        responsiveMediaIndexList.forEach( ( item, index ) => {
            // add item if img resulting indes > skipIndex (no square format)
            const currentImgSizeIndex = ( parseInt( imgSizeIndex ) + parseInt( item.imgSizeIndexShift ) );
            if ( currentImgSizeIndex > skipIndex && currentImgSizeIndex < calcImgSizes.length ) {
                srcsetJson += '{ media: \'' + item.media + '\', src: \'' + calcImgSizes[ currentImgSizeIndex ].url + '\' }, ';
            }
        } );
    }
    if ( srcsetJson.lastIndexOf( ', ' ) == srcsetJson.length - 2 ) {
        srcsetJson = srcsetJson.substring( 0, srcsetJson.length - 2 );
    }
    srcsetJson += ' ]';
    return srcsetJson;
}

