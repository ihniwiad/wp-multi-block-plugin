const unwrapContent = ( content ) => {
    if ( !! content && content.indexOf( 'svg-wrap' ) != -1 ) {
        const unwrappedContentArray = content.split( '><' );
        unwrappedContentArray.shift();
        unwrappedContentArray.pop();
        const unwrappedContent = '<' + unwrappedContentArray.join( '><' ) + '>';

        return unwrappedContent;
    }
    else {
        return content;
    }
}

export default unwrapContent;


