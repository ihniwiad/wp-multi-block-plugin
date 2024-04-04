const makeBadgeClassNames = ( attributes, className ) => {

    const {
        state,
        badgeType,
    } = attributes;

    const classNames = [ 'badge' ];

    if ( !! state ) {
        classNames.push( 'badge-' + state );
    }

    if ( !! badgeType ) {
        classNames.push( 'badge-' + badgeType );
    }

    if ( !! className ) {
        classNames.push( className );
    }

    return classNames.join( ' ' );
}

export default makeBadgeClassNames;


