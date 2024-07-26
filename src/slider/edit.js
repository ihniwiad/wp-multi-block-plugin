import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
    RichText,
    MediaUpload,
    InspectorControls,
    InspectorAdvancedControls,
	// useInnerBlocksProps, // use if appending inner blocks directly into outer elem
} from '@wordpress/block-editor';
import { 
    Button,
    TextControl,
    SelectControl,
    PanelBody,
    ToggleControl,
    SVG, 
    Path,
} from '@wordpress/components';
// import { useSelect } from '@wordpress/data';
// import { store as blockEditorStore } from '@wordpress/block-editor';


import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';
// import { getTemplate } from './../_functions/utilities.js';
import { 
    bgColorSelect,
    borderStateSelect,
    marginBeforeSelect,
    marginAfterSelect,
} from './../_functions/controls.js';
import { 
    makeBase64PreloadImgSrc,
} from './../_functions/img.js';
import {
	uiIconCarretLeft,
	uiIconCarretRight,
	uiIconTrash,
} from './../_functions/icon.js';


// utils
import makeClassName from './utils';


// templates
// import templates from './templates';

/**
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import './editor.scss';

/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {

	// const { getBlock } = useSelect( blockEditorStore );

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


	// console.log( 'itemData: ' + JSON.stringify( itemData, null, 2 ) );

	// const hasInnerBlocks = () => {
	// 	const block = getBlock( clientId );
	// 	if ( typeof block.innerBlocks === 'undefined' ) return false;
	// 	return block.innerBlocks.length > 0;
	// }

	// let template = getTemplate( templates, templateName ).template;


    // initial overwrites
    itemData.forEach( ( item, index ) => {
        if ( item.subline === '&nbsp;' ) {
            item.subline = '';
        }
    } );

    // update itemData all `item` at position `index`
    const updateItemDataItem = ( index, newItem ) => {
        const newItemData = [
            ...itemData.slice( 0, index ),
            newItem,
            ...itemData.slice( index + 1 )
        ];
        setAttributes( { itemData: newItemData } );
    }

    // update itemData single `value` for `key` at position `index`
    const updateItemDataValue = ( index, key, value ) => {
        let newItem = itemData[ index ];
        newItem[ key ] = value;
        updateItemDataItem( index, newItem );
    }

    // // update imgList all `item` at position `index`
    // const updateImgListItem = ( index, newItem ) => {
    //     const newImgList = [
    //         ...imgList.slice( 0, index ),
    //         newItem,
    //         ...imgList.slice( index + 1 )
    //     ];
    //     setAttributes( { imgList: newImgList } );
    // }

    // // update imgList single `value` for `key` at position `index`
    // const updateImgListValue = ( index, key, value ) => {
    //     let newItem = imgList[ index ];
    //     newItem[ key ] = value;
    //     updateImgListItem( index, newItem );
    // }

    const onChangeSliderType = ( value ) => {
        if ( value === 'product-gallery' ) {
            setAttributes( { 
                sliderType: value,
                rounded: '',
            } );
        }
        else {
            setAttributes( { 
                sliderType: value,
            } );
        }
    }

    const onChangeImgSize = ( value ) => {
        setAttributes( { imgSize: value } );

        // TODO: change all img urls & sizes

        itemData.forEach( ( item, index ) => {
            console.log( 'imgId: ' + item.imgId )
        } );
    }

    

    const onChangeImg = ( index, img ) => {

        // TODO: make img url configurable

        const newImg = {};
        if ( sliderType === 'product-gallery' ) {
            newImg.url = img.sizes.medium.url;
            newImg.width = img.sizes.medium.width;
            newImg.height = img.sizes.medium.height;
        }
        else {
            newImg.url = img.sizes.thumbnail.url;
            newImg.width = img.sizes.thumbnail.width;
            newImg.height = img.sizes.thumbnail.height;
        }
        updateItemDataItem( index, { 
            imgId: img.id,
            imgUrl: newImg.url,
            imgWidth: newImg.width,
            imgHeight: newImg.height,
            imgAlt: img.alt,
            heading: itemData[ index ].heading,
            subline: itemData[ index ].subline,
            text: itemData[ index ].text,
            footerText_1: itemData[ index ].footerText_1,
            footerText_2: itemData[ index ].footerText_2,
        } );
        // updateImgListItem( index, { 
        //     imgId: img.id,
        //     imgUrl: img.sizes.thumbnail.url,
        //     imgWidth: img.sizes.thumbnail.width,
        //     imgHeight: img.sizes.thumbnail.height,
        //     imgAlt: img.alt,
        // } );
    };

    const onChangeAlt = ( index, value ) => {
        updateItemDataValue( index, 'imgAlt', value );
        // updateImgListValue( index, 'imgAlt', value );
    }

    const onChangeText = ( index, value ) => {
        updateItemDataValue( index, 'text', value );
    }
    const onChangeHeading = ( index, value ) => {
        updateItemDataValue( index, 'heading', value );
    }
    const onChangeSubline = ( index, value ) => {
        updateItemDataValue( index, 'subline', value );
    }
    const onChangeFooterText_1 = ( index, value ) => {
        updateItemDataValue( index, 'footerText_1', value );
    }
    const onChangeFooterText_2 = ( index, value ) => {
        updateItemDataValue( index, 'footerText_2', value );
    }
    const onChangeUrl = ( index, value ) => {
        updateItemDataValue( index, 'url', value );
    }
    const onChangeTarget = ( index, value ) => {
        updateItemDataValue( index, 'target', value );
    }
    const onChangeRel = ( index, value ) => {
        updateItemDataValue( index, 'rel', value );
    }
    const onChangeBgColor = ( value ) => {
        setAttributes( { bgColor: value } );
    };

    const onAddItem = () => { 
        setAttributes( { itemData: [ ...itemData, {} ] } );
    }

    const deleteItemDataItem = ( index ) => {
        const newMediaList = [
            ...itemData.slice( 0, index ),
            ...itemData.slice( index + 1 )
        ];
        setAttributes( { itemData: newMediaList } );
    }

    const itemDataItemMoveTo = ( index, newIndex ) => {
        const newMediaList = [
            ...itemData.slice( 0, index ),
            ...itemData.slice( index + 1 )
        ];
        const newMediaList2 = [
            ...newMediaList.slice( 0, newIndex ),
            itemData[ index ],
            ...newMediaList.slice( newIndex )
        ];
        setAttributes( { itemData: newMediaList2 } );
    }

    const onClickDelete = ( index ) => {
        const response = confirm( __( 'Delete item' ) + ' ' + ( index + 1) + '?' );
        if ( response == true ) {
            deleteItemDataItem( index );
        }
        else {
            // do nothing
        }
    };
    const onClickMoveUp = ( index ) => {
        const newIndex = index > 0 ? index - 1 : itemData.length - 1;
        itemDataItemMoveTo( index, newIndex );
    };
    const onClickMoveDown = ( index ) => {
        const newIndex = index < itemData.length - 1 ? index + 1 : 0;
        itemDataItemMoveTo( index, newIndex );
    };

    const onChangeHint = ( value ) => {
        setAttributes( { hint: value } );
    };
    const onChangePrevText = ( value ) => {
        setAttributes( { prevText: value } );
    };
    const onChangeNextText = ( value ) => {
        setAttributes( { nextText: value } );
    };

    const onChangeRounded = ( value ) => {
        setAttributes( { rounded: value } );
    };
    const onChangeImgThumbnail = ( value ) => {
        setAttributes( { imgThumbnail: value } );
    };
    const onChangeBorderState = ( value ) => {
        setAttributes( { borderState: value } );
    };

    const onChangeMarginBefore = ( value ) => {
        setAttributes( { marginBefore: value } );
    };
    const onChangeMarginAfter = ( value ) => {
        setAttributes( { marginAfter: value } );
    };

    // class names

    let sliderWrapperClassName = makeClassName( { 
        sliderType 
    } );
    sliderWrapperClassName = addClassNames( {
        marginBefore, 
        marginAfter, 
    }, sliderWrapperClassName );

    const sliderClassName = 'owl-carousel owl-theme';

    let imgClassName = 'owl-lazy img-fluid';
    imgClassName = addClassNames( {
        rounded,
        imgThumbnail,
        borderState,
    }, imgClassName );

    // must contain .item to get attributes from html
    const itemClassName = sliderType === 'citation'
        ? 'item d-block text-center'
        : 'item px-3 py-2 text-center' + ( typeof bgColor !== 'undefined' && !! bgColor ? ' bg-' + bgColor : '' )
    ;

    // const textClassName = 'h4 font-weight-normal font-italic mb-4';
    // const headingClassName = 'test-1';
    // const sublineClassName = 'test-2';
    // const footer1ClassName = 'font-weight-bold text-uppercase';
    // const footer2ClassName = '';

    const textClassName = 'h4 font-weight-normal font-italic mb-4';
    const headingClassName = 'h4 text-center';
    const sublineClassName = 'small text-center mb-2';
    const footer1ClassName = sliderType === 'product-gallery' ? '' : 'font-weight-bold text-uppercase';
    const footer2ClassName = sliderType === 'product-gallery' ? 'lead text-danger font-weight-bold' : '';
    const hintClassName = sliderType === 'product-gallery' ? 'text-danger font-weight-bold' : '';
    const sliderRowClassName = sliderType === 'product-gallery' ? 'row' : '';

    const TagName = 'div';


    const controls = (
        <InspectorControls>
            <PanelBody title={ __( 'Slider settings', 'bsx-blocks' ) }>
                <SelectControl 
                    label={ __( 'Slider type', 'bsx-blocks' ) }
                    value={ sliderType }
                    onChange={ onChangeSliderType }
                    options={ [
                        { value: 'citation', label: __( 'Citation', 'bsx-blocks' ) },
                        { value: 'product-gallery', label: __( 'Product Gallery', 'bsx-blocks' ) },
                    ] }
                />
                <TextControl 
                    label={ __( 'Hint', 'bsx-blocks' ) }
                    value={ hint } 
                    onChange={ onChangeHint }
                />
                <TextControl 
                    label={ __( 'Prev button text', 'bsx-blocks' ) }
                    value={ prevText } 
                    onChange={ onChangePrevText }
                />
                <TextControl 
                    label={ __( 'Next button text', 'bsx-blocks' ) }
                    value={ nextText } 
                    onChange={ onChangeNextText }
                />
                {
                    bgColorSelect( bgColor, onChangeBgColor )
                }
            </PanelBody>

            <PanelBody title={ __( 'Image appearance', 'bsx-blocks' ) }>
                <ToggleControl
                    label={ __( 'Rounded', 'bsx-blocks' ) }
                    checked={ !! rounded ? 'circle' : '' }
                    onChange={ onChangeRounded }
                />
                <ToggleControl
                    label={ __( 'Border', 'bsx-blocks' ) }
                    checked={ !! imgThumbnail }
                    onChange={ onChangeImgThumbnail }
                />
                {
                    borderStateSelect( borderState, onChangeBorderState )
                }
                <SelectControl 
                    label={ __( 'Image size', 'bsx-blocks' ) }
                    value={ imgSize }
                    onChange={ onChangeImgSize }
                    options={ [
                        { value: 'thumbnail', label: __( 'Thumbnail (square format)', 'bsx-blocks' ) },
                        { value: 'medium', label: __( 'Medium', 'bsx-blocks' ) },
                    ] }
                />
            </PanelBody>

            <PanelBody title={ __( 'Margin', 'bsx-blocks' ) }>
                {
                    marginBeforeSelect( marginBefore, onChangeMarginBefore )
                }
                {
                    marginAfterSelect( marginAfter, onChangeMarginAfter )
                }
            </PanelBody>
        </InspectorControls>
	);

    // add class names to blockProps
    const blockProps = useBlockProps( { className: sliderWrapperClassName } );
	// console.log( 'blockProps: ' + JSON.stringify( blockProps, null, 2 ) );

	return (
			<>
	        <TagName { ...blockProps }>
	            <div class={ sliderRowClassName }>

	                {
	                    itemData.map( ( item, index ) => 
	                        <>

	                            {
	                                sliderType === 'citation' && (
	                                    <div class={ itemClassName }>
	                                        <div class="row">
	                                            <div class="col-4 col-sm-3 col-lg-2 mx-auto">
	                                                <figure>
	                                                    <MediaUpload
	                                                        key={ index }
	                                                        onSelect={ ( value ) => onChangeImg( index, value ) }
	                                                        allowedTypes="image"
	                                                        value={ item.imgId }
	                                                        render={ ( { open } ) => (
	                                                            <>
	                                                                {
	                                                                    item.imgUrl ? (
	                                                                        <Button className="bsxui-h-auto bsxui-w-100 bsxui-p-0 bsxui-va-middle" onClick={ open }>
	                                                                            <img className={ imgClassName } src={ item.imgUrl } alt={ __( 'Change/upload Image', 'bsx-blocks' ) } />
	                                                                        </Button>
	                                                                    )
	                                                                    :
	                                                                    (
	                                                                        <Button className="button button-large bsxui-w-100" onClick={ open }>
	                                                                            { __( 'Add Image', 'bsx-blocks' ) }
	                                                                        </Button>
	                                                                    )
	                                                                }
	                                                            </>
	                                                        ) }
	                                                    />
	                                                </figure>
	                                                <div class="bsxui-inline-control">
	                                                    <TextControl 
	                                                        label={ __( 'Alt text', 'bsx-blocks' ) }
	                                                        value={ item.imgAlt } 
	                                                        onChange={ ( value ) => { onChangeAlt( index, value ) } }
	                                                    />
	                                                </div>
	                                            </div>
	                                        </div>

	                                        <div class="px-3 px-md-5">
	                                            <RichText
	                                                tagName="div"
	                                                className={ textClassName }
	                                                multiline={ false }
	                                                placeholder={ __( 'Insert text here...', 'bsx-blocks' ) }
	                                                value={ item.text }
	                                                onChange={ ( value ) => { onChangeText( index, value ) } }
	                                            />
	                                            <RichText
	                                                tagName="div"
	                                                className={ footer1ClassName }
	                                                multiline={ false }
	                                                placeholder={ __( 'Insert footer text 1 here...', 'bsx-blocks' ) }
	                                                value={ item.footerText_1 }
	                                                onChange={ ( value ) => { onChangeFooterText_1( index, value ) } }
	                                            />
	                                            <RichText
	                                                tagName="div"
	                                                className={ footer2ClassName }
	                                                multiline={ false }
	                                                placeholder={ __( 'Insert footer text 2 here...', 'bsx-blocks' ) }
	                                                value={ item.footerText_2 }
	                                                onChange={ ( value ) => { onChangeFooterText_2( index, value ) } }
	                                            />
	                                        </div>
	                                    </div>
	                                )
	                            }
	                            {
	                                sliderType === 'product-gallery' && (
	                                    <div class="bsxui-owl-slide-1-2-3-4 col-md-6 col-lg-3 p-2">
	                                        <div class={ itemClassName }>
	                                            <div class="">
	                                                <figure>
	                                                    <MediaUpload
	                                                        key={ index }
	                                                        onSelect={ ( value ) => onChangeImg( index, value ) }
	                                                        allowedTypes="image"
	                                                        value={ item.imgId }
	                                                        render={ ( { open } ) => (
	                                                            <>
	                                                                {
	                                                                    item.imgUrl ? (
	                                                                        <Button className="bsxui-h-auto bsxui-w-100 bsxui-p-0 bsxui-va-middle" onClick={ open }>
	                                                                            <img className={ imgClassName } src={ item.imgUrl } alt={ __( 'Change/upload Image', 'bsx-blocks' ) } />
	                                                                        </Button>
	                                                                    )
	                                                                    :
	                                                                    (
	                                                                        <Button className="button button-large bsxui-w-100" onClick={ open }>
	                                                                            { __( 'Add Image', 'bsx-blocks' ) }
	                                                                        </Button>
	                                                                    )
	                                                                }
	                                                            </>
	                                                        ) }
	                                                    />
	                                                </figure>
	                                                <div class="bsxui-inline-control">
	                                                    <TextControl 
	                                                        label={ __( 'Alt text', 'bsx-blocks' ) }
	                                                        value={ item.imgAlt } 
	                                                        onChange={ ( value ) => { onChangeAlt( index, value ) } }
	                                                    />
	                                                </div>
	                                            </div>

	                                            <div class="px-3">
	                                                <RichText
	                                                    tagName="div"
	                                                    className={ headingClassName }
	                                                    multiline={ false }
	                                                    placeholder={ __( 'Add heading here...', 'bsx-blocks' ) }
	                                                    value={ item.heading }
	                                                    onChange={ ( value ) => { onChangeHeading( index, value ) } }
	                                                />
	                                                <RichText
	                                                    tagName="div"
	                                                    className={ sublineClassName }
	                                                    multiline={ false }
	                                                    placeholder={ __( 'Add subline here...', 'bsx-blocks' ) }
	                                                    value={ item.subline }
	                                                    onChange={ ( value ) => { onChangeSubline( index, value ) } }
	                                                />

	                                                <div class="row no-gutters align-items-end">
	                                                    <div class="col-auto">
	                                                        <RichText
	                                                            tagName="div"
	                                                            className={ footer1ClassName }
	                                                            multiline={ false }
	                                                            placeholder={ __( 'Original price...', 'bsx-blocks' ) }
	                                                            value={ item.footerText_1 }
	                                                            onChange={ ( value ) => { onChangeFooterText_1( index, value ) } }
	                                                        />
	                                                    </div>
	                                                    <div class="col text-right">
	                                                        <small class={ hintClassName }>{ hint }</small>&nbsp;
	                                                        <RichText
	                                                            tagName="div"
	                                                            className={ footer2ClassName + ' bsxui-inline-editor' }
	                                                            multiline={ false }
	                                                            placeholder={ __( 'Current price...', 'bsx-blocks' ) }
	                                                            value={ item.footerText_2 }
	                                                            onChange={ ( value ) => { onChangeFooterText_2( index, value ) } }
	                                                        />
	                                                    </div>
	                                                </div>
	                                            </div>

	                                        </div>


	                                        <div class="bsxui-inline-control bsxui-mb-3">
	                                            <div className="bsxui-d-flex">
	                                                <Button 
	                                                    className="button bsxui-icon-button" 
	                                                    onClick={ () => { onClickMoveUp( index ) } }
	                                                    label={ __( 'Move backward', 'bsx-blocks' ) }
	                                                >
	                                                    { uiIconCarretLeft }
	                                                </Button>
	                                                <Button 
	                                                    className="button bsxui-icon-button" 
	                                                    onClick={ () => { onClickMoveDown( index ) } }
	                                                    label={ __( 'Move forward', 'bsx-blocks' ) }
	                                                >
	                                                    { uiIconCarretRight }
	                                                </Button>
	                                                <Button 
	                                                    className="button bsxui-icon-button bsxui-text-danger bsxui-border-danger bsxui-ml-auto"
	                                                    onClick={ () => { onClickDelete( index ) } }
	                                                    label={ __( 'Remove Item', 'bsx-blocks' ) }
	                                                >
	                                                    { uiIconTrash }
	                                                </Button>
	                                            </div>
	                                        </div>

	                                    </div>
	                                )
	                            }

	                        </>
	                    )
	                }

	            </div>

	            <div className="bsxui-inline-control">
	                <Button className="button button-large bsxui-w-100" onClick={ onAddItem }>
	                    { __( 'Add item', 'bsx-blocks' ) }
	                </Button>
	            </div>
	        </TagName>
	        { controls }
        </>
	);
}
