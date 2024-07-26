const makeClassName = ( attributes ) => {

    const {
        sliderType,
    } = attributes;

    const classNames = [ 'bsx-slider-wrapper' ];

    if ( !! sliderType ) {
        if ( sliderType == 'citation' ) {
            classNames.push( 'bsx-citation-slider' );
        }
    }

    return classNames.join( ' ' );
}

export default makeClassName;


