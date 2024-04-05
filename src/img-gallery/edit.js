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


import { 
    makeBase64PreloadImgSrc,
} from './../_functions/img.js';
import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';
// import { getTemplate } from './../_functions/utilities.js';
import { 
    marginBeforeSelect,
    marginAfterSelect,
    borderStateSelect,
} from './../_functions/controls.js';


// utils
import {
	makeClassName,
	makeInnerClassName,
	makeItemClassName,
	makeLinkClassName,
	makeImgClassName,
	makeUploadElementClassName,
} from './utils';

import {
	uiCarretLeft,
	uiCarretRight,
	uiTrash,
} from './../_functions/icon.js';


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

	// const hasInnerBlocks = () => {
	// 	const block = getBlock( clientId );
	// 	if ( typeof block.innerBlocks === 'undefined' ) return false;
	// 	return block.innerBlocks.length > 0;
	// }

	// let template = getTemplate( templates, templateName ).template;


    const onAddImage = ( mediaStack ) => {
        const addMedia = [];
        mediaStack.forEach( ( media ) => {
            addMedia.push( { 
                id: media.id,
                url: media.url,
                width: media.sizes.full.width,
                height: media.sizes.full.height,
                alt: media.alt,
                thumbUrl: media.sizes.medium.url,
                thumbWidth: media.sizes.medium.width,
                thumbHeight: media.sizes.medium.height,
                caption: media.alt,
            } );
        } );
        addMediaListItem( addMedia );
    };

    const onUpdateImage = ( media, index ) => {
        updateMediaListItem( { 
            id: media.id,
            url: media.url,
            width: media.sizes.full.width,
            height: media.sizes.full.height,
            alt: media.alt,
            thumbUrl: media.sizes.medium.url,
            thumbWidth: media.sizes.medium.width,
            thumbHeight: media.sizes.medium.height,
            caption: media.alt,
        }, index );
    };

    const onClickDelete = ( index ) => {
        const response = confirm( __( 'Delete item' ) + ' ' + ( index + 1) + '?' );
        if ( response == true ) {
            deleteMediaListItem( index );
        }
        else {
            // do nothing
        }
    };

    const onClickMoveUp = ( index ) => {
        const newIndex = index > 0 ? index - 1 : mediaList.length - 1;
        mediaListItemMoveTo( index, newIndex );
    };

    const onClickMoveDown = ( index ) => {
        const newIndex = index < mediaList.length - 1 ? index + 1 : 0;
        mediaListItemMoveTo( index, newIndex );
    };

    const onChangeCaption = ( value, index ) => {
        const newMediaList = [
            ...mediaList.slice( 0, index ),
            { 
                id: mediaList[ index ].id,
                url: mediaList[ index ].url,
                width: mediaList[ index ].width,
                height: mediaList[ index ].height,
                alt: mediaList[ index ].alt,
                thumbUrl: mediaList[ index ].thumbUrl,
                thumbWidth: mediaList[ index ].thumbWidth,
                thumbHeight: mediaList[ index ].thumbHeight,
                caption: value,
            },
            ...mediaList.slice( index + 1 )
        ];
        setAttributes( { mediaList: newMediaList } );
    }

    const addMediaListItem = ( newItem ) => setAttributes( { mediaList: [ ...mediaList, ...newItem ] } );

    const updateMediaListItem = ( newItem, index ) => {
        const newMediaList = [
            ...mediaList.slice( 0, index ),
            newItem,
            ...mediaList.slice( index + 1 )
        ];
        setAttributes( { mediaList: newMediaList } );
    }

    const deleteMediaListItem = ( index ) => {
        const newMediaList = [
            ...mediaList.slice( 0, index ),
            ...mediaList.slice( index + 1 )
        ];
        setAttributes( { mediaList: newMediaList } );
    }

    const mediaListItemMoveTo = ( index, newIndex ) => {
        const newMediaList = [
            ...mediaList.slice( 0, index ),
            ...mediaList.slice( index + 1 )
        ];
        const newMediaList2 = [
            ...newMediaList.slice( 0, newIndex ),
            mediaList[ index ],
            ...newMediaList.slice( newIndex )
        ];
        setAttributes( { mediaList: newMediaList2 } );
    }

    const onChangeGalleryType = ( value ) => {
        setAttributes( { galleryType: value } );
    }
    const onChangeFigcaption = ( value ) => {
        setAttributes( { figcaption: value } );
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

    const onChangeHoverShadow = ( value ) => {
        setAttributes( { hoverShadow: value } );
    };
    const onChangeHoverMove = ( value ) => {
        setAttributes( { hoverMove: value } );
    };

    const onChangeMarginBefore = ( value ) => {
        setAttributes( { marginBefore: value } );
    };
    const onChangeMarginAfter = ( value ) => {
        setAttributes( { marginAfter: value } );
    };

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

    const uploadElementClassName = makeUploadElementClassName( { 
        galleryType 
    } );

    const TagName = 'figure';


    const controls = (
        <InspectorControls>
            <PanelBody title={ __( 'Gallery settings', 'bsx-blocks' ) }>
                <SelectControl 
                    label={ __( 'Gallery type', 'bsx-blocks' ) }
                    value={ galleryType }
                    onChange={ onChangeGalleryType }
                    options={ [
                        { value: 'columns', label: __( 'Columns', 'bsx-blocks' ) },
                        { value: 'floating', label: __( 'Floating (equal image height)', 'bsx-blocks' ) },
                    ] }
                />
            </PanelBody>

            <PanelBody title={ __( 'Thumbnail appearance', 'bsx-blocks' ) }>
                <ToggleControl
                    label={ __( 'Rounded corners', 'bsx-blocks' ) }
                    checked={ !! rounded }
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
                <ToggleControl
                    label={ __( 'Mouseover shadow', 'bsx-blocks' ) }
                    checked={ !! hoverShadow }
                    onChange={ onChangeHoverShadow }
                />
                <ToggleControl
                    label={ __( 'Mouseover move', 'bsx-blocks' ) }
                    checked={ !! hoverMove }
                    onChange={ onChangeHoverMove }
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
    const blockProps = useBlockProps( { className: galleryClassName } );
	// console.log( 'blockProps: ' + JSON.stringify( blockProps, null, 2 ) );

	return (
		<>
            <TagName { ...blockProps }>

                <div className={ innerClassName }>
                    {
                        mediaList.map( ( media, index ) => 
                            <div class={ itemClassName }>
                                <span className={ linkClassName }>
                                    <MediaUpload
                                        key={ index }
                                        onSelect={ ( value ) => onUpdateImage( value, index ) }
                                        allowedTypes="image"
                                        value={ media.id }
                                        render={ ( { open } ) => (
                                            <Button className="bsxui-h-auto bsxui-w-100 bsxui-p-0 bsxui-va-middle" onClick={ open }>
                                                <img className={ imgClassName } src={ media.url } alt={ __( 'Upload Image', 'bsx-blocks' ) } />
                                            </Button>
                                        ) }
                                    />
                                </span>
                                <div>
                                    <RichText
                                        tagName="div"
                                        multiline={ false }
                                        placeholder={ __( 'Caption (optional)', 'bsx-blocks' ) }
                                        value={ media.caption }
                                        onChange={ ( value ) => { onChangeCaption( value, index ) } }
                                    />
                                </div>
                                <div class="bsxui-inline-control">
                                    <div className="bsxui-d-flex">
                                        <Button 
                                            className="button bsxui-icon-button" 
                                            onClick={ () => { onClickMoveUp( index ) } }
                                            label={ __( 'Move backward', 'bsx-blocks' ) }
                                        >
                                            { uiCarretLeft }
                                        </Button>
                                        <Button 
                                            className="button bsxui-icon-button" 
                                            onClick={ () => { onClickMoveDown( index ) } }
                                            label={ __( 'Move forward', 'bsx-blocks' ) }
                                        >
                                            { uiCarretRight }
                                        </Button>
                                        <Button 
                                            className="button bsxui-icon-button bsxui-text-danger bsxui-border-danger bsxui-ml-auto"
                                            onClick={ () => { onClickDelete( index ) } }
                                            label={ __( 'Remove Image', 'bsx-blocks' ) }
                                        >
                                            { uiTrash }
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className={ uploadElementClassName }>
                    <MediaUpload
                        onSelect={ onAddImage }
                        allowedTypes="image"
                        multiple
                        render={ ( { open } ) => (
                            <Button className="button button-large bsxui-w-100" onClick={ open }>
                                { __( 'Add image(s)', 'bsx-blocks' ) }
                            </Button>
                        ) }
                    />
                </div>

                <RichText
                    tagName="figcaption"
                    multiline={ false }
                    placeholder={ __( 'Caption (optional)', 'bsx-blocks' ) }
                    value={ figcaption }
                    onChange={ onChangeFigcaption }
                    keepPlaceholderOnFocus
                />
            </TagName>
			{ controls }
		</>
	);
}
