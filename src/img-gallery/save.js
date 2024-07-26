/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

import { 
    makeBase64PreloadImgSrc,
} from './../_functions/img.js';
import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';

// utils
import {
    makeClassName,
    makeInnerClassName,
    makeItemClassName,
    makeLinkClassName,
    makeImgClassName,
    makeUploadElementClassName,
} from './utils';

/**
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

    const {
        mediaList,
        galleryType,
        figcaption,
        rounded,
        imgThumbnail,
        borderState,
        hoverShadow,
        hoverMove,
        marginBefore,
        marginAfter,
    } = attributes;

    // class names

    let galleryClassName = makeClassName( { 
        galleryType 
    } );
    galleryClassName = addClassNames( {
        marginBefore, 
        marginAfter, 
    }, galleryClassName );

    const innerClassName = makeInnerClassName( { 
        galleryType 
    } );

    const itemClassName = makeItemClassName( { 
        galleryType 
    } );

    let linkClassName = makeLinkClassName( { 
        galleryType 
    } );
    linkClassName = addClassNames( {
        hoverShadow,
        hoverMove,
    }, linkClassName );

    let imgClassName = makeImgClassName( { 
        galleryType 
    } );
    imgClassName = addClassNames( {
        rounded,
        imgThumbnail,
        borderState,
    }, imgClassName );

    const TagName = 'figure';

	return (
        <TagName { ...useBlockProps.save( { className: galleryClassName } ) }>
            <div class="bsx-gallery" itemscope itemtype="http://schema.org/ImageGallery" data-fn="photoswipe">
                <div class={ innerClassName }>
                    {
                        mediaList.map( ( media, index ) =>     
                            <figure class={ itemClassName } itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                                <a class={ linkClassName } href={ media.url } itemprop="contentUrl" data-size={ media.width + 'x' + media.height }>
                                    <script>document.write( '<img className={ imgClassName } src={ makeBase64PreloadImgSrc( media.thumbWidth, media.thumbHeight ) } alt={ media.alt } width={ media.thumbWidth } height={ media.thumbHeight } data-src={ media.thumbUrl } data-fn="lazyload" />' );</script>
                                    <noscript><img className={ imgClassName } src={ media.thumbUrl } alt={ media.alt } width={ media.thumbWidth } height={ media.thumbHeight } /></noscript>
                                </a>

                                {
                                    media.caption && ! RichText.isEmpty( media.caption ) && (
                                        <RichText.Content tagName="figcaption" className="sr-only" value={ media.caption } itemprop="caption description" />
                                    )
                                }

                            </figure>
                        )
                    }
                </div>
            </div>
            {
                figcaption && ! RichText.isEmpty( figcaption ) && (
                    <RichText.Content tagName="figcaption" className="bsx-gallery-figcaption font-italic" value={ figcaption } />
                )
            }
        </TagName>
	);
}
