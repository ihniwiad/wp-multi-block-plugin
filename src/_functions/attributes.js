// attribute functions 

// returns list of non empty attributes to add to html element
export function makeSaveAttributes( attributes ) {
    const nonEmptyAttributes = {};
    for ( let [ key, value ] of Object.entries( attributes ) ) {
        //console.log( 'key: "' + key + '", val: "' + value + '"' );
        if ( value ) {
            nonEmptyAttributes[ key ] = value;
        }
    }
    return nonEmptyAttributes;
}