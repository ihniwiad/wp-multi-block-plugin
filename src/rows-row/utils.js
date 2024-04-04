const makeColumnRowClassNames = ( attributes ) => {

    const {
        columnRowType,
        alignItems,
        display,
    } = attributes;

    const classNames = [];

    if ( columnRowType != 'unset' ) {
        if ( !! columnRowType ) {
            classNames.push( 'column-row-' + columnRowType );
        }
        else {
            // default class name
            classNames.push( 'column-row' );
        }
    }

    if ( !! alignItems ) {
        classNames.push( 'align-items-' + alignItems );
    }

    if ( !! display ) {
        classNames.push( 'd-' + display );
    }

    //console.log( 'classNames.join( \' \' ): "' + classNames.join( ' ' ) + '"' );

    return classNames.join( ' ' );
}

export default makeColumnRowClassNames;


