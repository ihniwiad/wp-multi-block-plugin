const makeIconClassNames = ( attributes ) => {

    const {
        state,
        hoverState,
        // iconType,
        iconSize,
    } = attributes;

    const classNames = [];

    if ( !! hoverState ) {
        classNames.push( 'hover-text-' + hoverState );
    }

    if ( !! state ) {
        classNames.push( 'text-' + state );
    }

    // if ( !! iconType ) {
    //     classNames.push( 'fa-' + iconType );
    // }

    if ( !! iconSize ) {
        classNames.push( 'fa-' + iconSize );
    }

    return classNames.join( ' ' );
}

export default makeIconClassNames;


