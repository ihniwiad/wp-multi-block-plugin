export const makeButtonClassNames = ( attributes, className ) => {

    const {
        state,
        stateType,
        size,
        hrefIsEmailIsContent,
        ignoreMailtoSpamProtection,
    } = attributes;

    const classNames = [];

    let buildClassName = 'btn-';

    if ( !! state ) {

        if ( state == 'text-link' ) {
            classNames.push( 'text-link' );
        }
        else {
            classNames.push( 'btn' );
            if ( !! stateType ) {
                buildClassName += stateType + '-';
            }
            buildClassName += state;
            classNames.push( buildClassName );
        }
    }

    if ( !! size ) {
        classNames.push( 'btn-' + size );
    }

    if ( ! ignoreMailtoSpamProtection && hrefIsEmailIsContent ) {
        classNames.push( 'create-mt' );
    }

    if ( !! className ) {
        classNames.push( className );
    }

    return classNames.join( ' ' );
}

export const isEmailFormat = ( href ) => {
    if ( href.indexOf( 'mailto:' ) == 0 && /\S+@\S+\.\S+/.test( href.substring( 7 ) ) ) {
        let explode = href.substring( 7 ).split( '@' ); 
        const name = explode[ 0 ];
        explode = explode[ 1 ].split( '.' );
        const suffix = explode[ explode.length - 1 ]; // doest’t need to contain the whole suffix in cases of e.g. `.co.uk`
        explode.pop();
        const domain = explode.join( '.' ); // might contain part of suffix in cases of e.g. `.co.uk`
        // console.log( 'href: ' + href );
        // console.log( 'valid: ' + true );
        // console.log( 'name: ' + name );
        // console.log( 'domain: ' + domain );
        // console.log( 'suffix: ' + suffix );
        return {
            valid: true,
            name: name,
            domain: domain,
            suffix: suffix,
        };
    }
    else {
        // console.log( 'href: ' + href );
        // console.log( 'valid: ' + false );
        return {
            valid: false,
        };
    }
}


