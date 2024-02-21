export const filterByAllowedValueKeys = ( mapArray, allowedValues ) => {
    let filteredValues = [];
    if ( typeof allowedValues !== 'undefined' && allowedValues != null && Array.isArray( allowedValues ) && allowedValues.length > 0 ) {
        mapArray.forEach( ( item ) => {
            if ( typeof allowedValues.find( key => key === item.value ) !== 'undefined' ) {
                filteredValues.push( item );
            }
        } );
    }
    else {
        filteredValues = mapArray;
    }
    return filteredValues;
}

export const getTemplate = ( templates, currentTemplateName ) => {
    const currentTemplate = templates.find( ( item ) => item.name === currentTemplateName );
    return currentTemplate ? currentTemplate : {};
};

export const getFileSuffix = ( filePath ) => {
    if ( !! filePath && filePath.indexOf( '.' ) != -1 ) {
        const explode = filePath.split( '.' );
        return explode[ explode.length - 1 ];
    }
    else {
        return '';
    }
};

export const getFileName = ( filePath ) => {
    if ( !! filePath && filePath.indexOf( '/' ) != -1 ) {
        const explode = filePath.split( '/' );
        return explode[ explode.length - 1 ];
    }
    else {
        return '';
    }
};