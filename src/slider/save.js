/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';
import { 
    makeBase64PreloadImgSrc,
} from './../_functions/img.js';

// utils
import makeClassName from './utils';

/**
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

    const {
        sliderType,
        imgSize,
        itemData,
        hint,
        prevText,
        nextText,
        rounded,
        imgThumbnail,
        borderState,
        bgColor,
        marginBefore,
        marginAfter,
    } = attributes;


    // class names

    let sliderWrapperClassName = makeClassName( { 
        sliderType 
    } );
    sliderWrapperClassName = addClassNames( {
        marginBefore, 
        marginAfter, 
    }, sliderWrapperClassName );

    const sliderClassName = 'owl-carousel owl-theme outer-nav nav-lg' + ( sliderType === 'citation' ? ' bsx-slider-fadeout' : '' );

    let imgClassName = 'img-fluid' + ( sliderType === 'product-gallery' ? ' owl-lazy' : '' );
    imgClassName = addClassNames( {
        rounded,
        imgThumbnail,
        borderState,
    }, imgClassName );

    // must contain .item to get attributes from html
    const itemClassName = sliderType === 'citation'
        ? 'item d-block text-center'
        : 'item d-block px-3 py-2 text-center' + ( typeof bgColor !== 'undefined' && !! bgColor ? ' bg-' + bgColor : '' )
    ;

    const textClassName = 'h4 font-weight-normal font-italic mb-4';
    const headingClassName = 'h4 text-center';
    const sublineClassName = 'small text-center mb-2';
    const footer1ClassName = sliderType === 'product-gallery' ? '' : 'font-weight-bold text-uppercase';
    const footer2ClassName = sliderType === 'product-gallery' ? 'lead text-danger font-weight-bold' : '';
    const hintClassName = sliderType === 'product-gallery' ? 'text-danger font-weight-bold' : '';

    const TagName = 'div';

    const prevLabel = !! prevText ? prevText : __( 'Prev', 'bsx-blocks' );
    const nextLabel = !! nextText ? nextText : __( 'Next', 'bsx-blocks' );
    const prevHtml = '<i class="fa fa-chevron-left" aria-label="' + prevLabel + '"></i>';
    const nextHtml = '<i class="fa fa-chevron-right" aria-label="' + nextLabel + '"></i>';

    // if lazyLoad: true use data-src="..." data-g-fn="lazyload"
    // if lazyLoad: false, multiLazyload: true use class="... owl-lazy" data-g-src="..." loading="lazy"
    const options = sliderType === 'citation' 
        ? "{ lazyLoad: false, multiLazyload: true, responsive: { 0: { items: 1 } }, margin: 0, encodeUriNavText: [ '" + encodeURI( prevHtml ) + "', '" + encodeURI( nextHtml ) + "' ], navClass: [ 'btn btn-link is-prev', 'btn btn-link is-next' ] }"
        : "{ lazyLoad: true, responsive: { 0: { items: 1 }, 480: { items: 2 }, 768: { items: 3 }, 992: { items: 4 } }, encodeUriNavText: [ '" + encodeURI( prevHtml ) + "', '" + encodeURI( nextHtml ) + "' ], navClass: [ 'btn btn-primary is-prev', 'btn btn-primary is-next' ], navSpeed: 300, autoplaySpeed: 400, dotsSpeed: 400, smartSpeed: 300, fluidSpeed: 400, dragEndSpeed: 200 }"
    ;
    // makeBase64PreloadImgSrc( item.imgWidth, item.imgHeight )

	return (
        <TagName { ...useBlockProps.save( { className: sliderWrapperClassName } ) }>
            <div class={ sliderClassName } data-fn="owl-carousel" data-fn-options={ options }>
                {
                    itemData.map( ( item, index ) => 

                        <div class={ itemClassName }>
                            {
                                sliderType === 'citation' && (
                                    <>
                                        <div class="row">
                                            <div class="col-4 col-sm-3 col-lg-2 mx-auto">
                                                <figure 
                                                    data-id={ item.imgId } 
                                                    data-url={ item.imgUrl } 
                                                    data-width={ item.imgWidth } 
                                                    data-height={ item.imgHeight } 
                                                    data-alt={ item.imgAlt }
                                                >
                                                    <script>document.write( '<img className={ imgClassName } src={ makeBase64PreloadImgSrc( item.imgWidth, item.imgHeight ) } alt={ item.imgAlt } width={ item.imgWidth } height={ item.imgHeight } data-g-src={ item.imgUrl } data-g-fn="lazyload"/>' );</script>
                                                    <noscript><img className={ imgClassName } src={ item.imgUrl } alt={ item.imgAlt } width={ item.imgWidth } height={ item.imgHeight } /></noscript>
                                                </figure>
                                            </div>
                                        </div>

                                        <div class="px-3 px-md-5">

                                            <RichText.Content tagName="div" className={ textClassName } data-slide-text value={ item.text } />

                                            <RichText.Content tagName="div" className={ footer1ClassName } data-slide-footer-1 value={ item.footerText_1 } />

                                            <RichText.Content tagName="div" className={ footer2ClassName } data-slide-footer-2 value={ item.footerText_2 } />

                                        </div>
                                    </>
                                )
                            }
                            {
                                sliderType === 'product-gallery' && (
                                    <>
                                        <div class="">
                                            <figure 
                                                data-id={ item.imgId } 
                                                data-url={ item.imgUrl } 
                                                data-width={ item.imgWidth } 
                                                data-height={ item.imgHeight } 
                                                data-alt={ item.imgAlt }
                                            >
                                                <script>document.write( '<img className={ imgClassName } src={ makeBase64PreloadImgSrc( item.imgWidth, item.imgHeight ) } alt={ item.imgAlt } width={ item.imgWidth } height={ item.imgHeight } data-src={ item.imgUrl } loading="lazy"/>' );</script>
                                                <noscript><img className={ imgClassName } src={ item.imgUrl } alt={ item.imgAlt } width={ item.imgWidth } height={ item.imgHeight } /></noscript>
                                            </figure>
                                        </div>

                                        <div class="">

                                            <RichText.Content tagName="div" className={ headingClassName } data-slide-heading value={ item.heading } />
                                            
                                            <RichText.Content tagName="div" className={ sublineClassName } data-slide-subline value={ item.subline == '' ? '&nbsp;' : item.subline } />

                                            <div class="row no-gutters align-items-end">
                                                <div class="col-auto">
                                                    <RichText.Content tagName="strike" className={ footer1ClassName } data-slide-footer-1 value={ item.footerText_1 } />
                                                </div>
                                                <div class="col text-right">
                                                    <small class={ hintClassName }>{ hint }</small>&nbsp;
                                                    <RichText.Content tagName="strong" className={ footer2ClassName } data-slide-footer-2 value={ item.footerText_2 } />
                                                </div>
                                            </div>

                                        </div>
                                    </>
                                )
                            }


                        </div>
                    )
                }
            </div>
        </TagName>
	);
}
