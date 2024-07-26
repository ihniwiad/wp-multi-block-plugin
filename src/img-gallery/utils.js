export const makeClassName = ( attributes ) => {

    const {
        galleryType,
    } = attributes;

    const classNames = [ 'bsx-gallery' ];

    if ( !! galleryType ) {
        if ( galleryType == 'floating' ) {
            classNames.push( 'bsx-floating-gallery' );
        }
    }

    return classNames.join( ' ' );
}

export const makeInnerClassName = ( attributes ) => {

    const {
        galleryType,
    } = attributes;

    const classNames = [];

    if ( !! galleryType ) {
        if ( galleryType == 'floating' ) {
            classNames.push( 'bsx-floating-gallery-inner' );
        }
        else if ( galleryType == 'columns' ) {
            classNames.push( 'row' );
        }
    }
    
    return classNames.join( ' ' );
}

export const makeItemClassName = ( attributes ) => {

    const {
        galleryType,
    } = attributes;

    const classNames = [];

    if ( !! galleryType ) {
        if ( galleryType == 'floating' ) {
            classNames.push( 'bsx-floating-gallery-figure d-inline-block' );
        }
        else if ( galleryType == 'columns' ) {
            // TODO: make configurable later
            classNames.push( 'col-6 col-sm-3 mb-4' );
        }
    }
    
    return classNames.join( ' ' );
}

export const makeLinkClassName = ( attributes ) => {

    const {
        galleryType,
    } = attributes;

    const classNames = [];

    if ( !! galleryType ) {
        if ( galleryType == 'floating' ) {
            classNames.push( 'd-inline-block' );
        }
        else if ( galleryType == 'columns' ) {
            classNames.push( 'd-block text-center' );
        }
    }
    
    return classNames.join( ' ' );
}

export const makeImgClassName = ( attributes ) => {

    const {
        galleryType,
    } = attributes;

    const classNames = [];

    if ( !! galleryType ) {
        if ( galleryType == 'floating' ) {
            classNames.push( 'bsx-floating-gallery-img-md' );
        }
        else if ( galleryType == 'columns' ) {
            classNames.push( 'img-fluid' );
        }
    }
    
    return classNames.join( ' ' );
}

export const makeUploadElementClassName = ( attributes ) => {

    const {
        galleryType,
    } = attributes;

    const classNames = [ 'bsxui-inline-control' ];

    if ( !! galleryType ) {
        if ( galleryType == 'floating' ) {
            classNames.push( 'bsxui-mt-3' );
        }
    }
    
    return classNames.join( ' ' );
}


