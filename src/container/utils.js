const makeContainerClassNames = ( attributes, classNamesString ) => {

    const {
        isFluid,
        containerBreakpoint,
        sized, 
    } = attributes;

    const prefix = 'container';

    const classNames = ( typeof classNamesString != 'undefined' && classNamesString != '' ) ? classNamesString.split( ' ' ) : [];

    if ( isFluid ) {
    	if ( containerBreakpoint === '' ) {
    		classNames.push( prefix + '-fluid' );
    	}
    	else {
    		classNames.push( prefix + '-' + containerBreakpoint );
    	}
    }
    else if ( !! sized ) {
        if ( sized == 'text-column' )
            classNames.push( 'text-column' );
        else {
            // e.g. .sized-container-xl
            classNames.push( 'sized-' + prefix + '-' + sized );
        }
    }
    else {
    	classNames.push( prefix );
    }

    return classNames.join( ' ' );
}

export default makeContainerClassNames;