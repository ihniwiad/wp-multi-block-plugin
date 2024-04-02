const makeRowClassNames = ( attributes ) => {

    const {
        alignItems, 
        justifyContent, 
        noGutters, 
        formRow,
        rowReverse,
    } = attributes;

    const prefix = 'col';

    const classNames = [ 'row' ];

    if ( alignItems ) {
        classNames.push( 'align-items-' + alignItems );
    }
    if ( justifyContent ) {
        classNames.push( 'justify-content-' + justifyContent );
    }
    if ( noGutters ) {
        classNames.push( 'no-gutters' );
    }
    if ( formRow ) {
        classNames.push( 'form-row' );
    }
    if ( rowReverse ) {
        if ( rowReverse == 'xs' ) {
            classNames.push( 'flex-row-reverse' );
        }
        else {
            classNames.push( 'flex-' + rowReverse + '-row-reverse' );
        }
    }

    //console.log( 'classNames.join( \' \' ): "' + classNames.join( ' ' ) + '"' );

    return classNames.join( ' ' );
}

export default makeRowClassNames;