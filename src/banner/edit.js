import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
    InnerBlocks,
    InspectorControls,
    InspectorAdvancedControls,
    MediaUpload,
	useInnerBlocksProps, // use if appending inner blocks directly into outer elem
} from '@wordpress/block-editor';
import { 
    PanelBody,
    TextControl,
    ToggleControl,
    SelectControl,
    Button,
    SVG, 
    Path,
    RadioControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';


import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';
import { getTemplate } from './../_functions/utilities.js';
import { 
    getUrlTruncAndExtension,
    fullImgIsScaled,
    getOriginalImgUrl,
    getSizesAndWithoutSizesTruncFromUrlTrunc,
    makeSizedImgs,
    getImgWithHeight,
    imgExists,
    getImgSizesData,
    makeImgSizesFromImgData,
    makeImgData,
} from './../_functions/img.js';
import { 
    alignItemsSelect,
    marginBeforeSelect,
    marginAfterSelect,
    paddingBeforeSelect,
    paddingAfterSelect,
    belowNavbarToggle,
    touchFooterToggle,
    nodeNameSelect,
    bgPositionSelect,
    bgSizeSelect,
    bannerTypeSelect,
    bannerSizeSelect,
    bgAttachmentSelect,
    bgAttachmentFixedLimitedToggle,
    inlineTemplateSelect,
    uiTemplateSelect,
    imgUploadClickableImg,
    imgUploadButton,
    bgColorSelect,
    roundedToggle,
    linkUrlInput,
    // ignoreMailtoSpamProtectionToggle,
    targetToggle,
    relInput,
    dataFnInput,
    disableResponsiveDownsizingToggle,
    multilayerSelect,
} from './../_functions/controls.js';


// utils
import {
	makeBannerClassNames,
	makeBannerInnerClassNames,
	makeSrcsetJson,
} from './utils';


// templates
import templates from './templates';

/**
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';


// insert directly into banner element without `.banner-inner`
const noBannerInnerTemplateNames = [
    'column-row-banner',
];

/**
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes, clientId } ) {

	const { getBlock } = useSelect( blockEditorStore );

	const {
        nodeName,
        templateName,
        belowNavbar,
        touchFooter,
        bgColor,
        imgId,
        imgSizes,
        imgData,
        imgSizeIndex,
        url,
        portraitImgId,
        portraitImgSizes,
        portraitImgData,
        portraitImgSizeIndex,
        bannerType,
        bannerSize,
        bgAttachment,
        bgAttachmentFixedLimited,
        bgSize,
        bgPosition,
        alignItems,
        smAlignItems,
        mdAlignItems,
        rounded,
        marginBefore,
        marginAfter,
        paddingBefore,
        paddingAfter,
        href,
        target,
        rel,
        dataFn,
        disableResponsiveDownsizing,
        multilayer,
    } = attributes;

	const hasInnerBlocks = () => {
		const block = getBlock( clientId );
		if ( typeof block.innerBlocks === 'undefined' ) return false;
		return block.innerBlocks.length > 0;
	}

	let template = getTemplate( templates, templateName ).template;


    // initial set, replaces old attr 'imgSizes'
    const hasOldAttrImgSizes = typeof imgSizes !== 'undefined' && Array.isArray( imgSizes ) && imgSizes.length > 0;
    const hasOldAttrPortraitImgSizes = typeof portraitImgSizes !== 'undefined' && Array.isArray( portraitImgSizes ) && portraitImgSizes.length > 0;

    const calcImgSizes = hasOldAttrImgSizes ? imgSizes : makeImgSizesFromImgData( imgData );
    const calcPortraitImgSizes = hasOldAttrPortraitImgSizes ? portraitImgSizes : makeImgSizesFromImgData( portraitImgData );

    // TEST
    // console.log( 'props.attributes: ' + JSON.stringify( props.attributes, null, 2 ) );
    // console.log( 'calcImgSizes: ' + JSON.stringify( calcImgSizes, null, 2 ) );
    // console.log( 'calcPortraitImgSizes: ' + JSON.stringify( calcPortraitImgSizes, null, 2 ) + '\n\n' );
	

    const onChangeTemplate = ( value ) => {
        const currentTemplateMap = getTemplate( templates, value );
        if ( currentTemplateMap.template != undefined && currentTemplateMap.attributes != undefined ) {
            template = currentTemplateMap.template;
            setAttributes( { 
                templateName: value,
                ...currentTemplateMap.attributes,
            } );
        }
        else {
            console.log( 'Error: Template change failed.' );
        }

        // console.log( 'changed templateName: ' + value );
        // console.log( 'changed template: ' + template );
    };

    const onChangeNodeName = ( value ) => {
        setAttributes( { nodeName: value } );
    };

    const onChangeBelowNavbar = ( value ) => {
        setAttributes( { belowNavbar: value } );
    };
    const onChangeTouchFooter = ( value ) => {
        setAttributes( { touchFooter: value } );
    };

    const onChangeBgColor = ( value ) => {
        setAttributes( { bgColor: value } );
    };

    async function onSelectImage( img ) {

        if ( typeof img.url !== 'undefined' ) {

            const newImgAllData = await getImgSizesData( img );

            // check if current img size index fits to new img (might be too large)
            let newImgSizeIndex = parseInt( imgSizeIndex );
            if ( parseInt( imgSizeIndex ) >= newImgAllData.imgs.length ) {
                newImgSizeIndex = newImgAllData.imgs.length - 1;
            }

            // prepare attr 'imgData' to save in block (replacing old attr 'imgSizes')
            const newImgData = makeImgData( newImgAllData.imgs, newImgAllData.truncWithoutSizeSlug, newImgAllData.fileExt );

            // avoid creating deprecated (empty) attr 'imgSizes'
            if ( imgSizes && imgSizes.length > 0 ) {
                // delete value of 'imgSizes'
                setAttributes( {
                    imgId: img.id,
                    imgSizes: '', // save empty, replaced by imgData
                    imgData: newImgData,
                    imgSizeIndex: newImgSizeIndex.toString(),
                    url: '', // save empty, replaced by imgData
                } );
            }
            else {
                // skip 'imgSizes'
                setAttributes( {
                    imgId: img.id,
                    imgData: newImgData,
                    imgSizeIndex: newImgSizeIndex.toString(),
                } );
            }


            // console.log( 'url: ' + newImgAllData.imgs[ newImgSizeIndex ].url );
        }
    };

    async function onSelectPortraitImage( portraitImg ) {

        if ( typeof portraitImg.url !== 'undefined' ) {

            const newPortraitImgAllData = await getImgSizesData( portraitImg );

            // check if current img size index fits to new img (might be too large)
            let newPortraitImgSizeIndex = parseInt( portraitImgSizeIndex );
            if ( parseInt( portraitImgSizeIndex ) >= newPortraitImgAllData.imgs.length ) {
                newPortraitImgSizeIndex = newPortraitImgAllData.imgs.length - 1;
            }
            // console.log( 'newPortraitImgSizeIndex: ' + newPortraitImgSizeIndex );

            // prepare attr 'imgData' to save in block (replacing old attr 'portraitImgSizes')
            const newPortraitImgData = makeImgData( newPortraitImgAllData.imgs, newPortraitImgAllData.truncWithoutSizeSlug, newPortraitImgAllData.fileExt );

            // avoid creating deprecated (empty) attr 'portraitImgSizes'
            if ( portraitImgSizes && portraitImgSizes.length > 0 ) {
                // delete value of 'portraitImgSizes'
                setAttributes( {
                    portraitImgId: portraitImg.id,
                    portraitImgSizes: '', // save empty, replaced by portraitImgData
                    portraitImgData: newPortraitImgData,
                    portraitImgSizeIndex: newPortraitImgSizeIndex.toString(),
                } );
            }
            else {
                // skip 'portraitImgSizes'
                setAttributes( {
                    portraitImgId: portraitImg.id,
                    portraitImgData: newPortraitImgData,
                    portraitImgSizeIndex: newPortraitImgSizeIndex.toString(),
                } );
            }

            // console.log( 'portraitImgSizes[ portraitImgSizeIndex ].url: ' + newPortraitImgAllData.imgs[ newPortraitImgSizeIndex ].url );
        }
    };

    const onDeleteImage = () => {
        // avoid creating deprecated attr 'imgSizes'
        if ( imgSizes && imgSizes.length > 0 ) {
            // delete value of 'imgSizes'
            setAttributes( {
                imgId: '',
                imgSizes: '',
                imgData: '',
            } );
        }
        else {
            // skip 'imgSizes'
            setAttributes( {
                imgId: '',
                imgData: '',
            } );
        }
    };

    const onDeletePortraitImage = () => {
        // avoid creating deprecated attr 'portraitImgSizes'
        if ( portraitImgSizes && portraitImgSizes.length > 0 ) {
            // delete value of 'portraitImgSizes'
            setAttributes( {
                portraitImgId: '',
                portraitImgSizes: '',
                portraitImgData: '',
            } );
        }
        else {
            // skip 'portraitImgSizes'
            setAttributes( {
                portraitImgId: '',
                portraitImgData: '',
            } );
        }
    };

    const onChangeBannerType = ( value ) => {
        setAttributes( { bannerType: value } );
    };
    const onChangeBannerSize = ( value ) => {
        setAttributes( { bannerSize: value } );
    };

    const onChangeBgAttachment = ( value ) => {
        setAttributes( { bgAttachment: value } );
    };
    const onChangeBgAttachmentFixedLimited = ( value ) => {
        setAttributes( { bgAttachmentFixedLimited: value } );
    };
    const onChangeBgSize = ( value ) => {
        setAttributes( { bgSize: value } );
    };
    const onChangeBgPosition = ( value ) => {
        setAttributes( { bgPosition: value } );
    };

    const onChangeAlignItems = ( value ) => {
        setAttributes( { alignItems: value } );
    };
    const onChangeSmAlignItems = ( value ) => {
        setAttributes( { smAlignItems: value } );
    };
    const onChangeMdAlignItems = ( value ) => {
        setAttributes( { mdAlignItems: value } );
    };

    const onChangeRounded = ( value ) => {
        setAttributes( { rounded: value } );
    };

    const onChangeMarginBefore = ( value ) => {
        setAttributes( { marginBefore: value } );
    };

    const onChangeMarginAfter = ( value ) => {
        setAttributes( { marginAfter: value } );
    };

    const onChangePaddingBefore = ( value ) => {
        setAttributes( { paddingBefore: value } );
    };

    const onChangePaddingAfter = ( value ) => {
        setAttributes( { paddingAfter: value } );
    };

    const onChangeHref = ( value ) => {
        setAttributes( { href: value } );
    };
    const onChangeTarget = ( value ) => {
        setAttributes( { target: !! value ? '_blank' : '' } );
    };
    const onChangeRel = ( value ) => {
        setAttributes( { rel: value } );
    };
    const onChangeDataFn = ( value ) => {
        setAttributes( { dataFn: value } );
    };

    const onChangeDisableResponsiveDownsizing = ( value ) => {
        setAttributes( { disableResponsiveDownsizing: value } );
    };

    const onChangeMultilayer = ( value ) => {
        setAttributes( { multilayer: value } );
    };

    const onChangeImgSizeIndex = ( value ) => {
        setAttributes( { 
            imgSizeIndex: value.toString(),
        } );
    };
    const imgSizeRadioControlOptions = [];
    calcImgSizes.forEach( ( imgSize, index ) => {
        imgSizeRadioControlOptions.push( 
            { value: index.toString(), label: imgSize.width + 'x' + imgSize.height + ( imgSize.width === imgSize.height ? ' ' + __( '(Square format)', 'bsx-blocks' ) : '' ) } 
        );
    } );

    const onChangePortraitImgSizeIndex = ( value ) => {
        setAttributes( { 
            portraitImgSizeIndex: value.toString(),
        } );
    };
    const portraitImgSizeRadioControlOptions = [];
    calcPortraitImgSizes.forEach( ( portraitImgSize, index ) => {
        portraitImgSizeRadioControlOptions.push( 
            { value: index.toString(), label: portraitImgSize.width + 'x' + portraitImgSize.height + ( portraitImgSize.width === portraitImgSize.height ? ' ' + __( '(Square format)', 'bsx-blocks' ) : '' ) } 
        );
    } );

    let bannerClassName = makeBannerClassNames( { 
        bannerType, 
        bannerSize, 
        bgAttachment, 
        bgAttachmentFixedLimited,
        bgSize, 
        bgPosition, 
        alignItems, 
        smAlignItems,
        mdAlignItems,
        templateName,
        rounded,
        href,
    } );
    bannerClassName = addClassNames( {
        belowNavbar,
        touchFooter,
        bgColor,
        rounded,
        marginBefore, 
        marginAfter, 
        paddingBefore, 
        paddingAfter,
        multilayer,
    }, bannerClassName );

    const bannerInnerClassName = makeBannerInnerClassNames( {
        templateName,
    } );

    const TagName = nodeName;

    const bannerStyle = typeof calcImgSizes[ imgSizeIndex ] !== 'undefined' ? { backgroundImage: `url(${ calcImgSizes[ imgSizeIndex ].url })` } : {};


    const controls = (
    	<>
            <InspectorControls>
                <PanelBody title={ __( 'Banner template', 'bsx-blocks' ) }>
                    {
                        uiTemplateSelect( templates, templateName, onChangeTemplate )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Banner image', 'bsx-blocks' ) }>
                    {
                        imgId ? (
                            <>
                                {
                                    imgUploadClickableImg( imgId, calcImgSizes[ imgSizeIndex ].url, onSelectImage )
                                }
                            </>
                        )
                        : 
                        (
                            <div class="bsxui-config-panel-row">
                                <div class="bsxui-config-panel-text">{ __( '– No image selected yet –', 'bsx-blocks' ) }</div>
                            </div>
                        )
                    }
                    <div class="bsxui-config-panel-row">
                        <>
                            {
                                imgUploadButton( imgId, onSelectImage )
                            }
                        </>
                    </div>
                    {
                        imgId && (
                            <div class="bsxui-config-panel-row">
                                <Button 
                                    onClick={ onDeleteImage }
                                    isDestructive={ true }
                                >
                                    { __( 'Remove image', 'bsx-blocks' ) }
                                </Button>
                            </div>
                        )
                    }
                    <RadioControl
                        label={ __( 'Image size and format', 'bsx-blocks' ) }
                        selected={ imgSizeIndex.toString() }
                        options={ imgSizeRadioControlOptions }
                        onChange={ onChangeImgSizeIndex }
                    />
                    {
                        calcImgSizes[ imgSizeIndex ] != undefined && calcImgSizes[ imgSizeIndex ].url != undefined && (
                            <div class="bsxui-config-panel-text">
                                <a class="bsxui-link" href={ calcImgSizes[ imgSizeIndex ].url } target="_blank">{ __( 'Preview selected image', 'bsx-blocks' ) }</a>
                            </div>
                        )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Banner portrait image (optional)', 'bsx-blocks' ) }>
                    {
                        portraitImgId && typeof calcPortraitImgSizes[ portraitImgSizeIndex ] != 'undefined' && typeof calcPortraitImgSizes[ portraitImgSizeIndex ].url != 'undefined' ? (
                            <>
                                {
                                    imgUploadClickableImg( portraitImgId, calcPortraitImgSizes[ portraitImgSizeIndex ].url, onSelectPortraitImage, 'p' )
                                }
                            </>
                        )
                        : 
                        (
                            <div class="bsxui-config-panel-row">
                                <div class="bsxui-config-panel-text">{ __( '– No portrait image selected yet –', 'bsx-blocks' ) }</div>
                            </div>
                        )
                    }
                    <div class="bsxui-config-panel-row">
                        <>
                            {
                                imgUploadButton( portraitImgId, onSelectPortraitImage, 'p' )
                            }
                        </>
                    </div>
                    {
                        portraitImgId && (
                            <div class="bsxui-config-panel-row">
                                <Button 
                                    onClick={ onDeletePortraitImage }
                                    isDestructive={ true }
                                >
                                    { __( 'Remove portrait image', 'bsx-blocks' ) }
                                </Button>
                            </div>
                        )
                    }
                    <RadioControl
                        label={ __( 'Image size and format', 'bsx-blocks' ) }
                        selected={ portraitImgSizeIndex.toString() }
                        options={ portraitImgSizeRadioControlOptions }
                        onChange={ onChangePortraitImgSizeIndex }
                    />
                    {
                         typeof calcPortraitImgSizes[ portraitImgSizeIndex ] != 'undefined' && typeof calcPortraitImgSizes[ portraitImgSizeIndex ].url != 'undefined' && (
                            <div class="bsxui-config-panel-text">
                                <a class="bsxui-link" href={ calcPortraitImgSizes[ portraitImgSizeIndex ].url } target="_blank">{ __( 'Preview selected portrait image', 'bsx-blocks' ) }</a>
                            </div>
                        )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Banner dimensions', 'bsx-blocks' ) }>
                    {
                        bannerTypeSelect( bannerType, onChangeBannerType )
                    }
                    {
                        bannerSizeSelect( bannerSize, onChangeBannerSize )
                    }
                    {
                        bgAttachmentSelect( bgAttachment, onChangeBgAttachment )
                    }
                    { bgAttachment === 'fixed' && (
                        <>
                            {
                                bgAttachmentFixedLimitedToggle( bgAttachmentFixedLimited, onChangeBgAttachmentFixedLimited )
                            }
                        </>
                    ) }
                    {
                        alignItemsSelect( alignItems, onChangeAlignItems, [ '', 'center', 'end' ], ( templateName == 'column-row-banner' ) )
                    }
                    {
                        alignItemsSelect( smAlignItems, onChangeSmAlignItems, [ '', 'center', 'end' ], ( templateName == 'column-row-banner' ), 'SM' )
                    }
                    {
                        alignItemsSelect( mdAlignItems, onChangeMdAlignItems, [ '', 'center', 'end' ], ( templateName == 'column-row-banner' ), 'MD' )
                    }
                    {
                        roundedToggle( rounded, onChangeRounded )
                    }
                </PanelBody>


                <PanelBody title={ __( 'Background', 'bsx-blocks' ) }>
                    {
                        bgColorSelect( bgColor, onChangeBgColor )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Margin', 'bsx-blocks' ) }>
                    {
                        marginBeforeSelect( marginBefore, onChangeMarginBefore )
                    }
                    {
                        marginAfterSelect( marginAfter, onChangeMarginAfter )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Link', 'bsx-blocks' ) }>
                    {
                        linkUrlInput( href, onChangeHref )
                    }
                    {
                        targetToggle( target, onChangeTarget )
                    }
                    {
                        relInput( rel, onChangeRel )
                    }
                    {
                        dataFnInput( dataFn, onChangeDataFn )
                    }
                </PanelBody>
            </InspectorControls>

            <InspectorAdvancedControls>
                {
                    belowNavbarToggle( belowNavbar, onChangeBelowNavbar )
                }
                {
                    touchFooterToggle( touchFooter, onChangeTouchFooter )
                }
                {
                    nodeNameSelect( nodeName, onChangeNodeName, [ 'div', 'section' ] )
                }
                {
                    bgPositionSelect( bgPosition, onChangeBgPosition )
                }
                {
                    bgSizeSelect( bgSize, onChangeBgSize )
                }
                {
                    paddingBeforeSelect( paddingBefore, onChangePaddingBefore )
                }
                {
                    paddingAfterSelect( paddingAfter, onChangePaddingAfter )
                }
                {
                    disableResponsiveDownsizingToggle( disableResponsiveDownsizing, onChangeDisableResponsiveDownsizing )
                }
                {
                    multilayerSelect( multilayer, onChangeMultilayer )
                }
            </InspectorAdvancedControls>
    	</>
	);


	// console.log( 'template: ' + JSON.stringify( template, null, 2 ) );
	// console.log( 'template[ 0 ][ 1 ].isBannerInner: ' + JSON.stringify( template[ 0 ][ 1 ].isBannerInner, null, 2 ) );

    // add class names to blockProps
    const blockProps = useBlockProps( { className: bannerClassName, style: bannerStyle } );
	// console.log( 'blockProps: ' + JSON.stringify( blockProps, null, 2 ) );
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		// defaultBlock: { name: 'bsx-blocks/container' },
		directInsert: true,
		template: template,
		templateLock: false,
		templateInsertUpdatesSelection: true,
	} );
	// console.log( 'innerBlocksProps: ' + JSON.stringify( innerBlocksProps, null, 2 ) );

	// prepare props for .banner-inner without additional 
    const bannerInnerBlockProps = { className: bannerInnerClassName };
	// console.log( 'bannerInnerBlockProps: ' + JSON.stringify( bannerInnerBlockProps, null, 2 ) );
	const bannerInnerInnerBlocksProps = useInnerBlocksProps( bannerInnerBlockProps, {
		// defaultBlock: { name: 'bsx-blocks/container' },
		directInsert: true,
		template: template,
		templateLock: false,
		templateInsertUpdatesSelection: true,
	} );
	// console.log( 'bannerInnerInnerBlocksProps: ' + JSON.stringify( bannerInnerInnerBlocksProps, null, 2 ) );

	return (
		<>
            {
                ! templateName ? (
                    <div class="bsxui-initial-inline-control">
                        {
                            inlineTemplateSelect( templates, onChangeTemplate )
                        }
                    </div>
                )
                : 
                (
	                <>
	                	{
	                		false && ! imgId ? (
	                    		<TagName { ...blockProps }>
	                                <div className="bsxui-in-widget-overlay-panel bsxui-top">
	                                    <MediaUpload
	                                        onSelect={ onSelectImage }
	                                        allowedTypes="image"
	                                        value={ imgId }
	                                        render={ ( { open } ) => (
	                                            <Button 
	                                                onClick={ open }
	                                                isSecondary
	                                            >
	                                                { __( 'Select / upload Image', 'bsx-blocks' ) }
	                                            </Button>
	                                        ) }
	                                    />
	                                </div>
	                    		</TagName>
	                		)
	                		:
	                		(
		                		<>
			                        {
			                            typeof template[ 0 ] !== 'undefined' && typeof template[ 0 ][ 1 ] !== 'undefined' && typeof template[ 0 ][ 1 ].isBannerInner !== 'undefined' && template[ 0 ][ 1 ].isBannerInner ? (
			                            	// is column row with class name .banner-inner, needs no additional inner element, inset template directly
		                    				<TagName { ...innerBlocksProps }/>
			                            )
			                            :
			                            (
			                            	// is not column row, needs additional inner element .banner-inner to inset template
			                                <TagName { ...blockProps }>
			                                	<div { ...bannerInnerInnerBlocksProps }/>
			                                </TagName>
			                            )
			                        }
		                        </>
	                		)
	                	}
                	</>
                )


                // (
                // 	// check if image

                // 	// else 
                // 		// check if column-row -> put innerBlocksProps into root
                // 		// else put bannerInnerInnerBlocksProps into child of root
                //     <TagName { ...blockProps }>
                //         {
                //             false && ! imgId && (
                //                 <div className="bsxui-in-widget-overlay-panel bsxui-top">
                //                     <MediaUpload
                //                         onSelect={ onSelectImage }
                //                         allowedTypes="image"
                //                         value={ imgId }
                //                         render={ ( { open } ) => (
                //                             <Button 
                //                                 onClick={ open }
                //                                 isSecondary
                //                             >
                //                                 { __( 'Select / upload Image', 'bsx-blocks' ) }
                //                             </Button>
                //                         ) }
                //                     />
                //                 </div>
                //             )
                //         }
                //         {
                //             noBannerInnerTemplateNames.indexOf( templateName ) == -1 ? (
                //                 <div { ...innerBlocksProps }/>
                //             )
                //             :
                //             (
                //                 // <InnerBlocks 
                //                 //     template={ template }
                //                 //     renderAppender={
                //                 //         hasInnerBlocks ? undefined
                //                 //         : () => <InnerBlocks.ButtonBlockAppender />
                //                 //     }
                //                 // />
                //                 <div { ...bannerInnerInnerBlocksProps }/>
                //             )
                //         }
                //     </TagName>
                // )
            }
			{ controls }
		</>
	);
}
