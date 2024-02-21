// add class names

export function addClassNames( attributes, classNamesString ) {

    const {
        belowNavbar, 
        touchFooter,
        display,
        marginBefore, 
        marginAfter, 
        marginLeft,
        marginRight,
        resMargin1Breakpoint,
        resMargin1Position,
        resMargin1Size,
        resMargin2Breakpoint,
        resMargin2Position,
        resMargin2Size,
        paddingBefore, 
        paddingAfter, 
        paddingLeft, 
        paddingRight,
        bgColor, 
        textColor,
        textSize, 
        rounded, 
        textAlign,
        resTextAlignBreakpoint,
        resTextAlign,
        textShadow,
        fontWeight,
        inverseTextColor,
        headingInheritTextColor,
        headingInheritFontWeight,
        width,
        height,
        imgThumbnail,
        borderState,
        border,
        hoverShadow,
        hoverMove,
        disabled,
        verticalAlign,
        speechBubble,
        isAlert,
        state,
        objectFit,
        overflow,
        multilayer,
        zIndex,
        isBannerInner,
        isTop0,
        isBottom0,
        isLeft0,
        isRight0,
        position,
    } = attributes;

    const classNames = ( typeof classNamesString != 'undefined' && classNamesString.trim().length > 0 ) ? classNamesString.split( ' ' ) : [];

    if ( !! belowNavbar ) {
        classNames.push( 'below-navbar-content' );
    }
    if ( !! touchFooter ) {
        classNames.push( 'mb-n-footer-space' );
    }

    if ( !! display ) {
        classNames.push( 'd-' + display );
    }

    if ( !! marginBefore && marginBefore === marginAfter && marginBefore === marginLeft && marginBefore === marginRight ) {
        // all
        classNames.push( 'm-' + marginBefore );
    }
    else {

        // top & bottom
        if ( !! marginBefore && marginBefore === marginAfter ) {
            classNames.push( 'my-' + marginBefore );
        }
        else {
            if ( !! marginBefore ) {
                classNames.push( 'mt-' + marginBefore );
            }
            if ( !! marginAfter ) {
                classNames.push( 'mb-' + marginAfter );
            }
        }

        // left & right
        if ( !! marginLeft && marginLeft === marginRight ) {
            classNames.push( 'mx-' + marginLeft );
        }
        else {
            if ( !! marginLeft ) {
                classNames.push( 'ml-' + marginLeft );
            }
            if ( !! marginRight ) {
                classNames.push( 'mr-' + marginRight );
            }
        }

    }

    if ( !! resMargin1Breakpoint && !! resMargin1Position && !! resMargin1Size ) {
        // examples: `my-sm-3`, `my-0
        classNames.push( 'm' + ( ( resMargin1Position === 'all' ) ? '' : resMargin1Position ) + '-' + ( ( resMargin1Breakpoint === 'xs' ) ? '' : resMargin1Breakpoint + '-' ) + resMargin1Size );
    }
    if ( !! resMargin2Breakpoint && !! resMargin2Position && !! resMargin2Size ) {
        // examples: `my-sm-3`, `my-0
        classNames.push( 'm' + ( ( resMargin2Position === 'all' ) ? '' : resMargin2Position ) + '-' + ( ( resMargin2Breakpoint === 'xs' ) ? '' : resMargin2Breakpoint + '-' ) + resMargin2Size );
    }

    if ( !! paddingBefore && paddingBefore === paddingAfter && paddingBefore === paddingLeft && paddingBefore === paddingRight ) {
        // all
        classNames.push( 'p-' + paddingBefore );
    }
    else {

        // top & bottom
        if ( !! paddingBefore && paddingBefore === paddingAfter ) {
            classNames.push( 'py-' + paddingBefore );
        }
        else {
            // top
            if ( !! paddingBefore ) {
                classNames.push( 'pt-' + paddingBefore );
            }
            // bottom
            if ( !! paddingAfter ) {
                classNames.push( 'pb-' + paddingAfter );
            }
        }

        // left & right
        if ( !! paddingLeft && paddingLeft === paddingRight ) {
            classNames.push( 'px-' + paddingLeft );
        }
        else {
            // left
            if ( !! paddingLeft ) {
                classNames.push( 'pl-' + paddingLeft );
            }
            // right
            if ( !! paddingRight ) {
                classNames.push( 'pr-' + paddingRight );
            }
        }

    }

    if ( !! bgColor ) {
        classNames.push( 'bg-' + bgColor );
    }

    if ( !! textColor ) {
        classNames.push( 'text-' + textColor );
    }

    if ( !! textSize ) {
        classNames.push( textSize );
    }

    if ( !! textShadow ) {
        classNames.push( 'text-shadow-' + textShadow );
    }

    if ( !! fontWeight ) {
        classNames.push( 'font-weight-' + fontWeight );
    }

    if ( !! inverseTextColor ) {
        classNames.push( 'text-inverse' );
    }

    if ( !! headingInheritTextColor ) {
        classNames.push( 'heading-inherit-text' );
    }

    if ( !! headingInheritFontWeight ) {
        classNames.push( 'heading-inherit-font-weight' );
    }
    
    if ( !! rounded ) {
        if ( rounded == true || rounded == 'rounded' ) {
            classNames.push( 'rounded' );
        }
        else {
            classNames.push( 'rounded-' + rounded );
        }
    }

    if ( !! textAlign ) {
        classNames.push( 'text-' + textAlign );
    }
    if ( !! resTextAlignBreakpoint && !! resTextAlign ) {
        classNames.push( 'text-' + resTextAlignBreakpoint + '-' + resTextAlign );
    }



    if ( !! width ) {
        classNames.push( 'w-' + width );
    }
    if ( !! height ) {
        classNames.push( 'h-' + height );
    }

    if ( !! imgThumbnail ) {
        classNames.push( 'img-thumbnail' );
    }

    if ( !! border ) {
        if ( border == 'true' ) {
            classNames.push( 'border' );
        }
        else if ( border == 'x' ) {
            classNames.push( 'border-left' );
            classNames.push( 'border-right' );
        }
        else if ( border == 'y' ) {
            classNames.push( 'border-top' );
            classNames.push( 'border-bottom' );
        }
        else if ( border == 'u' ) {
            classNames.push( 'border-left' );
            classNames.push( 'border-right' );
            classNames.push( 'border-bottom' );
        }
        else if ( border == 'inverted-u' ) {
            classNames.push( 'border-left' );
            classNames.push( 'border-right' );
            classNames.push( 'border-top' );
        }
        else {
            // TODO: what about multipla values, e.g. top and bottom?
            classNames.push( 'border-' + border );
        }
    }

    if ( !! borderState ) {
        classNames.push( 'border-' + borderState );
    }

    if ( !! hoverShadow ) {
        classNames.push( 'hover-shadow' );
    }

    if ( !! hoverMove ) {
        classNames.push( 'hover-move' );
    }

    if ( !! disabled ) {
        classNames.push( 'disabled' );
    }

    if ( !! verticalAlign ) {
        classNames.push( 'align-' + verticalAlign );
    }

    if ( !! speechBubble ) {
        classNames.push( 'speech-bubble' );
        if ( speechBubble != 'md' ) {
            classNames.push( 'speech-bubble-' + speechBubble );
        }
    }

    if ( !! isAlert ) {
        classNames.push( 'alert' );
        if ( !! state ) {
            classNames.push( 'alert-' + state );
        }
    }

    if ( !! objectFit ) {
        classNames.push( 'object-fit-' + objectFit );
    }

    if ( !! overflow ) {
        classNames.push( 'overflow-' + overflow );
    }

    if ( !! multilayer ) {
        classNames.push( 'multilayer-' + multilayer );
    }
    if ( !! zIndex ) {
        classNames.push( 'z-' + zIndex );
    }

    if ( !! isBannerInner ) {
        classNames.push( 'banner-inner' );
    }

    if ( !! isTop0 ) {
        classNames.push( 'top-0' );
    }
    if ( !! isBottom0 ) {
        classNames.push( 'bottom-0' );
    }
    if ( !! isLeft0 ) {
        classNames.push( 'left-0' );
    }
    if ( !! isRight0 ) {
        classNames.push( 'right-0' );
    }

    if ( !! position ) {
        classNames.push( 'position-' + position );
    }



    return classNames.join( ' ' );
}