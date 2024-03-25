
import { addFilter } from '@wordpress/hooks';


// Our filter function
function setBlockCustomClassName( className, blockName ) {
    /*
    return blockName === 'core/code' ?
        'text-danger' :
        className;
        */

    // [ original-wp-class-name, add-class-name, replace-original-class-name (default: false) ]
    const classNamesMap = [
        // [ 'has-text-align-left', 'text-left' ],
        // [ 'has-text-align-center', 'text-center' ],
        // [ 'has-text-align-right', 'text-right' ],
        // [ 'wp-block-columns', 'row' ],
        // [ 'wp-block-column', 'col-md', false ],
        // [ 'wp-block-button__link', 'btn btn-outline-primary', true ],
    ];

    let done = false;

    const classNames = className.split( ' ' );

    for ( let i = 0; i < classNamesMap.length; i++ ) {
        if ( classNames.includes( classNamesMap[ i ][ 0 ] ) ) {
            done = true;
            if ( classNamesMap[ i ][ 2 ] === true ) {
                // remove wp class name
                const index = classNames.indexOf( classNamesMap[ i ][ 0 ] );
                classNames.splice( index, 1 );
            }
            if ( ! classNames.includes( classNamesMap[ i ][ 1 ] ) ) {
                // add (if not already set)
                classNames.push( classNamesMap[ i ][ 1 ] );
            }
            return classNames.join( ' ' );
            break;
        }
    }
    if ( ! done ) {
        return className;
    }

    /*
    // successful tested

    const classNames = className.split(' ');

    if ( classNames.includes( 'wp-block-code' ) ) {
        classNames.push( 'text-danger' );
        return classNames.join( ' ' );
    }
    else {
        return className;
    }
    */


    /*
    if ( blockName === 'core/code' ) {
        return 'text-danger';
    }
    else {
        return className;
    }
    */
}
 
// Adding the filter
addFilter(
    'blocks.getBlockDefaultClassName',
    'bsx-blocks/set-custom-class-names',
    setBlockCustomClassName
);

