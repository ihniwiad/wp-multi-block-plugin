/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';
import {
    getFileSuffix,
    getFileName,
} from './../_functions/utilities.js';

/**
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

    const {
        className,
        notHasFigure,
        figcaption,
        videoId,
        videoUrl,
        videoIsHvc1,
        video2Id,
        video2Url,
        video3Id,
        video3Url,
        videoWidth,
        videoHeight,
        posterId,
        posterUrl,
        scale,
        width,
        height,
        displayedWidth,
        displayedHeight,
        controls,
        autoplay,
        playsinline,
        loop,
        muted,
        textAlign,
        marginAfter,
        objectFit,
        overflow,
    } = attributes;


    // class names

    const outerClassNames = addClassNames( {
        textAlign,
        marginAfter,
        width,
        height,
        objectFit,
        overflow,
    } );

    let videoClassNames = 'img-fluid align-middle';
    if ( !! notHasFigure ) {
        videoClassNames += !! outerClassNames ? ' ' + outerClassNames : '';
    }

    // video attributes

    const videoSaveAttributes = makeSaveAttributes( {
        'controls': controls,
        'autoplay': autoplay,
        'loop': loop,
        'playsinline': playsinline,
        'muted': muted,
        'poster': posterUrl,
        'width': !! displayedWidth ? displayedWidth : !! scale ? scale * videoWidth : videoWidth,
        'height': !! displayedHeight ? displayedHeight : !! scale ? scale * videoHeight : videoHeight,
    } );

    const videoFileSuffix = getFileSuffix( videoUrl );
    const videoType = ( videoFileSuffix == 'mov' && videoIsHvc1 ) ? 'video/mp4; codecs=hvc1' : 'video/' + videoFileSuffix;
    const video2Type = 'video/' + getFileSuffix( video2Url );
    const video3Type = 'video/' + getFileSuffix( video3Url );


    // video inner html

    const videoInner = (
        <>
            <source src={ videoUrl } type={ videoType }/>
            {
                video2Url && (
                    <source src={ video2Url } type={ video2Type }/>
                )
            }
            {
                video3Url && (
                    <source src={ video3Url } type={ video3Type }/>
                )
            }
            Your browser does not support HTML video.
        </>
    );

	return (
        <>
            {
                ! notHasFigure ? (
                    <figure { ...useBlockProps.save( { className: outerClassNames } ) }>

                        {
                            !! videoUrl && (
                                <>
                                    <video className={ videoClassNames } { ...videoSaveAttributes }>
                                        { videoInner }
                                    </video>
                                    {
                                        figcaption && ! RichText.isEmpty( figcaption ) && (
                                            <RichText.Content tagName="figcaption" className="font-italic" value={ figcaption } />
                                        )
                                    }
                                </>
                            )
                        }
                        
                    </figure>
                )
                : (
                    <video { ...useBlockProps.save( { className: videoClassNames, ...videoSaveAttributes } ) }>
                        { videoInner }
                    </video>
                )
            }
        </>
	);
}
