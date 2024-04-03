import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
    InnerBlocks,
    InspectorControls,
    InspectorAdvancedControls,
    BlockControls,
    AlignmentToolbar,
} from '@wordpress/block-editor';
import { 
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl,
} from '@wordpress/components';
// import { useSelect } from '@wordpress/data';
// import { store as blockEditorStore } from '@wordpress/block-editor';


import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';
// import { getTemplate } from './../_functions/utilities.js';
import { 
	belowNavbarToggle,
    touchFooterToggle,
    textShadowSelect,
    fontWeightSelect,
    inverseTextColorToggle,
    headingInheritTextColorToggle,
    headingInheritFontWeightToggle,
    marginLeftSelect,
    marginRightSelect,
    marginBeforeSelect,
    marginAfterSelect,
    resMarginBreakpointsSelect,
    resMarginPositionSelect,
    resMarginSizeSelect,
    paddingBeforeSelect,
    paddingAfterSelect,
    paddingLeftSelect,
    paddingRightSelect,
    stateSelect,
    textColorSelect,
    bgColorSelect,
    roundedToggle,
    borderSelect,
    borderStateSelect,
    displaySelect,
    verticalAlignSelect,
    dataFnInput,
    dataTgInput,
    dataFnOptionsInput,
    dataFnTargetInput,
    alertToggle,
    widthSelect,
    heightSelect,
    nodeNameSelect,
    isGalleryParentToggle,
    textAlignToolbar,
    breakpointsSelect,
    textAlignSelect,
    multilayerSelect,
    zIndexSelect,
    bannerInnerToggle,
    positionSelect,
    top0Toggle,
    bottom0Toggle,
    left0Toggle,
    right0Toggle,
    roleInput,
    tabindexInput,
    hiddenToggle,
    overflowSelect,
} from './../_functions/controls.js';


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
export default function Edit( { attributes, setAttributes, clientId } ) {

	// const { getBlock } = useSelect( blockEditorStore );

	const {
        nodeName,
        id,
        dataFn,
        dataFnOptions,
        dataFnTarget,
        dataTg,
        belowNavbar,
        bgColor,
        textColor,
        textSize,
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
        rounded,
        border,
        borderState,
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
        touchFooter,
        display,
        verticalAlign,
        speechBubble,
        isAlert,
        state,
        isGalleryParent,
        multilayer,
        zIndex,
        isBannerInner,
        position,
        isTop0,
        isBottom0,
        isLeft0,
        isRight0,
        role,
        tabindex,
        hidden,
        overflow,
        // href,
        // target,
        // rel,
    } = attributes;

	// const hasInnerBlocks = () => {
	// 	const block = getBlock( clientId );
	// 	if ( typeof block.innerBlocks === 'undefined' ) return false;
	// 	return block.innerBlocks.length > 0;
	// }

	// let template = getTemplate( templates, templateName ).template;

    const onChangeId = ( value ) => {
        setAttributes( { id: value } );
    };

    const onChangeNodeName = ( value ) => {
        setAttributes( { nodeName: value } );
    };

    const onChangeBelowNavbar = ( value ) => {
        setAttributes( { belowNavbar: value } );
    };

    const onChangeBgColor = ( value ) => {
        setAttributes( { bgColor: value } );
    };
    const onChangeTextColor = ( value ) => {
        setAttributes( { textColor: value } );
    };
    const onChangeState = ( value ) => {
        setAttributes( { state: value } );
    };
    const onChangeTextSize = ( value ) => {
        setAttributes( { textSize: value } );
    };
    const onChangeTextShadow = ( value ) => {
        setAttributes( { textShadow: value } );
    };
    const onChangeTextAlign = ( value ) => {
        setAttributes( { textAlign: value } );
    };
    const onChangeResTextAlignBreakpoint = ( value ) => {
        setAttributes( { resTextAlignBreakpoint: value } );
    };
    const onChangeResTextAlign = ( value ) => {
        setAttributes( { resTextAlign: value } );
    };
    const onChangeFontWeight = ( value ) => {
        setAttributes( { fontWeight: value } );
    };
    const onChangeInverseTextColor = ( value ) => {
        setAttributes( { inverseTextColor: value } );
    };

    const onChangeHeadingInheritTextColor = ( value ) => {
        setAttributes( { headingInheritTextColor: value } );
    };
    const onChangeHeadingInheritFontWeight = ( value ) => {
        setAttributes( { headingInheritFontWeight: value } );
    };

    const onChangeWidth = ( value ) => {
        setAttributes( { width: value } );
    };
    const onChangeHeight = ( value ) => {
        setAttributes( { height: value } );
    };

    const onChangeRounded = ( value ) => {
        setAttributes( { rounded: value } );
    };
    const onChangeBorder = ( value ) => {
        setAttributes( { border: value } );
    };
    const onChangeBorderState = ( value ) => {
        setAttributes( { borderState: value } );
    };

    const onChangeIsAlert = ( value ) => {
        setAttributes( { isAlert: value } );
    };

    const onChangeMarginBefore = ( value ) => {
        setAttributes( { marginBefore: value } );
    };
    const onChangeMarginAfter = ( value ) => {
        setAttributes( { marginAfter: value } );
    };
    const onChangeMarginLeft = ( value ) => {
        setAttributes( { marginLeft: value } );
    };
    const onChangeMarginRight = ( value ) => {
        setAttributes( { marginRight: value } );
    };

    const onChangeResMargin1Breakpoint = ( value ) => {
        setAttributes( { resMargin1Breakpoint: value } );
    };
    const onChangeResMargin1Position = ( value ) => {
        setAttributes( { resMargin1Position: value } );
    };
    const onChangeResMargin1Size = ( value ) => {
        setAttributes( { resMargin1Size: value } );
    };
    const onChangeResMargin2Breakpoint = ( value ) => {
        setAttributes( { resMargin2Breakpoint: value } );
    };
    const onChangeResMargin2Position = ( value ) => {
        setAttributes( { resMargin2Position: value } );
    };
    const onChangeResMargin2Size = ( value ) => {
        setAttributes( { resMargin2Size: value } );
    };

    const onChangePaddingBefore = ( value ) => {
        setAttributes( { paddingBefore: value } );
    };
    const onChangePaddingAfter = ( value ) => {
        setAttributes( { paddingAfter: value } );
    };
    const onChangePaddingLeft = ( value ) => {
        setAttributes( { paddingLeft: value } );
    };
    const onChangePaddingRight = ( value ) => {
        setAttributes( { paddingRight: value } );
    };
    const onChangeTouchFooter = ( value ) => {
        setAttributes( { touchFooter: value } );
    };
    const onChangeDisplay = ( value ) => {
        setAttributes( { display: value } );
    };
    const onChangeVerticalAlign = ( value ) => {
        setAttributes( { verticalAlign: value } );
    };
    const onChangeSpeechBubble = ( value ) => {
        setAttributes( { speechBubble: value } );
    };
    const onChangeDataFn = ( value ) => {
        setAttributes( { dataFn: value } );
    };
    const onChangeDataFnOptions = ( value ) => {
        setAttributes( { dataFnOptions: value } );
    };
    const onChangeDataFnTarget = ( value ) => {
        setAttributes( { dataFnTarget: value } );
    };
    const onChangeDataTg = ( value ) => {
        setAttributes( { dataTg: value } );
    };
    const onChangeIsGalleryParent = ( value ) => {
        setAttributes( { isGalleryParent: value } );
    };
    const onChangeMultilayer = ( value ) => {
        setAttributes( { multilayer: value } );
    };
    const onChangeZIndex = ( value ) => {
        setAttributes( { zIndex: value } );
    };

    const onChangeIsBannerInner = ( value ) => {
        setAttributes( { isBannerInner: value } );
    };

    const onChangePosition = ( value ) => {
        setAttributes( { position: value } );
    };
    const onChangeIsTop0 = ( value ) => {
        setAttributes( { isTop0: value } );
    };
    const onChangeIsBottom0 = ( value ) => {
        setAttributes( { isBottom0: value } );
    };
    const onChangeIsLeft0 = ( value ) => {
        setAttributes( { isLeft0: value } );
    };
    const onChangeIsRight0 = ( value ) => {
        setAttributes( { isRight0: value } );
    };

    const onChangeRole = ( value ) => {
        setAttributes( { role: value } );
    };
    const onChangeTabindex = ( value ) => {
        setAttributes( { tabindex: value } );
    };
    const onChangeHidden = ( value ) => {
        setAttributes( { hidden: value } );
    };

    const onChangeOverflow = ( value ) => {
        setAttributes( { overflow: value } );
    };

    const wrapperClassName = addClassNames( { 
        belowNavbar,
        bgColor, 
        textColor, 
        textSize,
        rounded, 
        border,
        borderState,
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
        touchFooter,
        display,
        verticalAlign,
        speechBubble,
        isAlert,
        state,
        multilayer,
        zIndex,
        isBannerInner,
        position,
        isTop0,
        isBottom0,
        isLeft0,
        isRight0,
        overflow,
    } );
    
    // add class names to blockProps
    const blockProps = useBlockProps( { className: wrapperClassName } );
	// console.log( 'blockProps: ' + JSON.stringify( blockProps, null, 2 ) );

    const TagName = nodeName;

    const controls = (
    	<>
            <BlockControls>
                {
                    textAlignToolbar( textAlign, onChangeTextAlign )
                }
            </BlockControls>
            <InspectorControls>
                <PanelBody title={ __( 'Texte', 'bsx-blocks' ) }>
                    {
                        textColorSelect( textColor, onChangeTextColor )
                    }
                    <SelectControl 
                        label={ __( 'Text size', 'bsx-blocks' ) }
                        value={ textSize }
                        onChange={ onChangeTextSize }
                        options={ [
                            { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                            { value: 'lead', label: __( 'Larger', 'bsx-blocks' ) },
                            { value: 'small', label: __( 'Smaller', 'bsx-blocks' ) },
                            { value: 'h6', label: __( 'Heading 6 (smallest)', 'bsx-blocks' ) },
                            { value: 'h5', label: __( 'Heading 5', 'bsx-blocks' ) },
                            { value: 'h4', label: __( 'Heading 4', 'bsx-blocks' ) },
                            { value: 'h3', label: __( 'Heading 3', 'bsx-blocks' ) },
                            { value: 'h2', label: __( 'Heading 2', 'bsx-blocks' ) },
                            { value: 'h1', label: __( 'Heading 1 (biggest)', 'bsx-blocks' ) },
                            { value: 'display-4', label: __( 'Large 4 (smallest)', 'bsx-blocks' ) },
                            { value: 'display-3', label: __( 'Large 3', 'bsx-blocks' ) },
                            { value: 'display-2', label: __( 'Large 2', 'bsx-blocks' ) },
                            { value: 'display-1', label: __( 'Large 1 (biggest)', 'bsx-blocks' ) },
                        ] }
                    />
                    {
                        textShadowSelect( textShadow, onChangeTextShadow )
                    }
                    {
                        fontWeightSelect( fontWeight, onChangeFontWeight )
                    }
                    {
                        inverseTextColorToggle( inverseTextColor, onChangeInverseTextColor )
                    }
                    {
                        headingInheritTextColorToggle( headingInheritTextColor, onChangeHeadingInheritTextColor )
                    }
                    {
                        headingInheritFontWeightToggle( headingInheritFontWeight, onChangeHeadingInheritFontWeight )
                    }
                </PanelBody>
                <PanelBody title={ __( 'Appearance', 'bsx-blocks' ) }>
                    {
                        bgColorSelect( bgColor, onChangeBgColor )
                    }
                    {
                        roundedToggle( rounded, onChangeRounded )
                    }
                    {
                        borderSelect( border, onChangeBorder )
                    }
                    {
                        borderStateSelect( borderState, onChangeBorderState )
                    }
                    {
                        alertToggle( isAlert, onChangeIsAlert )
                    }
                    {
                        stateSelect( state, onChangeState )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Margin', 'bsx-blocks' ) }>
                    {
                        marginLeftSelect( marginLeft, onChangeMarginLeft )
                    }
                    {
                        marginRightSelect( marginRight, onChangeMarginRight )
                    }
                    {
                        marginBeforeSelect( marginBefore, onChangeMarginBefore )
                    }
                    {
                        marginAfterSelect( marginAfter, onChangeMarginAfter )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Padding', 'bsx-blocks' ) }>
                    {
                        paddingLeftSelect( paddingLeft, onChangePaddingLeft )
                    }
                    {
                        paddingRightSelect( paddingRight, onChangePaddingRight )
                    }
                    {
                        paddingBeforeSelect( paddingBefore, onChangePaddingBefore )
                    }
                    {
                        paddingAfterSelect( paddingAfter, onChangePaddingAfter )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Responsive text align', 'bsx-blocks' ) }>
                    <div class="bsxui-config-panel-row">
                        <div class="bsxui-config-panel-text">{ __( 'Use in addition to Alignment toolbar.', 'bsx-blocks' ) }</div>
                    </div>
                    {
                        breakpointsSelect( resTextAlignBreakpoint, onChangeResTextAlignBreakpoint )
                    }
                    {
                        textAlignSelect( resTextAlign, onChangeResTextAlign )
                    }
                </PanelBody>
            </InspectorControls>
            <InspectorAdvancedControls>
                <TextControl 
                    label={ __( 'ID', 'bsx-blocks' ) }
                    value={ id } 
                    onChange={ onChangeId }
                />
                {
                    nodeNameSelect( nodeName, onChangeNodeName, [ 'div', 'section', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ] )
                }
                {
                    displaySelect( display, onChangeDisplay )
                }
                {
                    verticalAlignSelect( verticalAlign, onChangeVerticalAlign )
                }
                {
                    widthSelect( width, onChangeWidth )
                }
                {
                    heightSelect( height, onChangeHeight )
                }
                {
                    positionSelect( position, onChangePosition )
                }
                {
                    top0Toggle( isTop0, onChangeIsTop0 )
                }
                {
                    bottom0Toggle( isBottom0, onChangeIsBottom0 )
                }
                {
                    left0Toggle( isLeft0, onChangeIsLeft0 )
                }
                {
                    right0Toggle( isRight0, onChangeIsRight0 )
                }
                <SelectControl 
                    label={ __( 'Speech bubble', 'bsx-blocks' ) }
                    value={ speechBubble }
                    onChange={ onChangeSpeechBubble }
                    options={ [
                        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                        { value: 'sm', label: __( 'Small', 'bsx-blocks' ) },
                        { value: 'md', label: __( 'Medium', 'bsx-blocks' ) },
                        { value: 'lg', label: __( 'Large', 'bsx-blocks' ) },
                    ] }
                />
                {
                    belowNavbarToggle( belowNavbar, onChangeBelowNavbar )
                }
                {
                    touchFooterToggle( touchFooter, onChangeTouchFooter )
                }
                {
                    resMarginBreakpointsSelect( resMargin1Breakpoint, onChangeResMargin1Breakpoint, [], '1' )
                }
                {
                    resMarginPositionSelect( resMargin1Position, onChangeResMargin1Position, [], '1' )
                }
                {
                    resMarginSizeSelect( resMargin1Size, onChangeResMargin1Size, [], '1' )
                }
                {
                    resMarginBreakpointsSelect( resMargin2Breakpoint, onChangeResMargin2Breakpoint, [], '2' )
                }
                {
                    resMarginPositionSelect( resMargin2Position, onChangeResMargin2Position, [], '2' )
                }
                {
                    resMarginSizeSelect( resMargin2Size, onChangeResMargin2Size, [], '2' )
                }
                {
                    isGalleryParentToggle( isGalleryParent, onChangeIsGalleryParent )
                }
                {
                    ! isGalleryParent ? 
                    (
                        <>
                            {
                                dataFnInput( dataFn, onChangeDataFn )
                            }
                        </>
                    )
                    :
                    (
                        <div class="bsxui-config-panel-row">
                            <div class="bsxui-alert">
                                {
                                    __( 'dataFn is deactivated since element is image gallery parent.', 'bsx-blocks' ) 
                                }
                            </div>
                        </div>
                    )
                }
                {
                    multilayerSelect( multilayer, onChangeMultilayer )
                }
                {
                    zIndexSelect( zIndex, onChangeZIndex )
                }
                {
                    bannerInnerToggle( isBannerInner, onChangeIsBannerInner )
                }
                {
                    dataFnOptionsInput( dataFnOptions, onChangeDataFnOptions )
                }
                {
                    dataFnTargetInput( dataFnTarget, onChangeDataFnTarget )
                }
                {
                    dataTgInput( dataTg, onChangeDataTg )
                }

                {
                    roleInput( role, onChangeRole )
                }
                {
                    tabindexInput( tabindex, onChangeTabindex )
                }
                {
                    hiddenToggle( hidden, onChangeHidden )
                }
                {
                    overflowSelect( overflow, onChangeOverflow )
                }
            </InspectorAdvancedControls>
    	</>
	);

	return (
		<>
			<TagName id={ id } { ...blockProps }>
                <InnerBlocks />
            </TagName>
			{ controls }
		</>
	);
}
