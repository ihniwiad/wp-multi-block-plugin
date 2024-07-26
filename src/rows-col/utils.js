const makeColumnRowsClassNames = ( attributes ) => {

    const {
        templateName,
        display,
        flexDirection,
        width,
        justifyContent,
    } = attributes;

    const classNames = [];

    if ( !! display ) {
        classNames.push( 'd-' + display );
    }
    if ( !! flexDirection ) {
        classNames.push( 'flex-' + flexDirection );
    }
    if ( !! width ) {
        classNames.push( 'w-' + width );
    }
    if ( !! justifyContent ) {
        classNames.push( 'justify-content-' + justifyContent );
    }
    else if ( templateName == 'space-between-columns' ) {
        // fallback
        classNames.push( 'justify-content-between' );
    }

    // console.log( 'classNames.join( \' \' ): "' + classNames.join( ' ' ) + '"' );

    return classNames.join( ' ' );
}

export default makeColumnRowsClassNames;