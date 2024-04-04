import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
    InnerBlocks,
    InspectorControls,
    InspectorAdvancedControls,
	useInnerBlocksProps, // use if appending inner blocks directly into outer elem
} from '@wordpress/block-editor';
import { 
    TextControl,
    PanelBody,
    RangeControl,
    ToggleControl,
    SelectControl,
    Button,
    SVG, 
    Path,
} from '@wordpress/components';
// import { useSelect } from '@wordpress/data';
// import { store as blockEditorStore } from '@wordpress/block-editor';


import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';
import { getTemplate } from './../_functions/utilities.js';
import { 
    inlineTemplateSelect,
    uiTemplateSelect,
    displaySelect,
    widthSelect,
    justifyContentSelect,
    flexDirectionSelect,
    multilayerSelect,
    zIndexSelect,
    bannerInnerToggle,
} from './../_functions/controls.js';


// utils
import makeColumnRowsClassNames from './utils';


// templates
import templates from './templates';

/**
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes, clientId } ) {

	// const { getBlock } = useSelect( blockEditorStore );

	const {
        templateName,
        display,
        flexDirection,
        width,
        justifyContent,
        multilayer,
        zIndex,
        isBannerInner,
    } = attributes;

	// const hasInnerBlocks = () => {
	// 	const block = getBlock( clientId );
	// 	if ( typeof block.innerBlocks === 'undefined' ) return false;
	// 	return block.innerBlocks.length > 0;
	// }

	let template = getTemplate( templates, templateName ).template;
	let templateLock = getTemplate( templates, templateName ).templateLock;

    const allowedBlocks = [ 'bsx-blocks/column-row' ];


    const onChangeTemplate = ( value ) => {
        template = getTemplate( templates, value ).template;
        setAttributes( { templateName: value } );

        // console.log( 'changed templateName: ' + value );
        // console.log( 'changed template: ' + template );
    };

    const onChangeDisplay = ( value ) => {
        setAttributes( { display: value } );
    };
    const onChangeFlexDirection = ( value ) => {
        setAttributes( { flexDirection: value } );
    };
    const onChangeWidth = ( value ) => {
        setAttributes( { width: value } );
    };
    const onChangeJustifyContent = ( value ) => {
        setAttributes( { justifyContent: value } );
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

    let columnsRowsClassNames = makeColumnRowsClassNames( {
        templateName,
        display,
        flexDirection,
        width,
    } );
    columnsRowsClassNames = addClassNames( {
        multilayer,
        zIndex,
        isBannerInner,
    }, columnsRowsClassNames );

    const controls = (
    	<>
            <InspectorControls>
                <PanelBody title={ __( 'Column Rows layout', 'bsx-blocks' ) }>
                    <div className="bsxui-icon-text-button-list">
                        { templates.map( ( template, index ) => (
                            <Button
                                label={ template.title }
                                onClick={ () => {
                                    onChangeTemplate( template.name );
                                } }
                                className={ 'bsxui-icon-text-button-list-item ' + ( templateName === template.name ? 'active' : '' ) }
                            >
                                <div class="bsxui-icon-text-button-list-item-icon">
                                    { template.icon }
                                </div>
                                <div class="bsxui-icon-text-button-list-item-label">
                                    { template.title }
                                </div>
                            </Button>
                        ) ) }
                    </div>
                </PanelBody>
            </InspectorControls>
            <InspectorAdvancedControls>
                {
                    displaySelect( display, onChangeDisplay, [ '', 'flex' ] )
                }
                {
                    flexDirectionSelect( flexDirection, onChangeFlexDirection )
                }
                {
                    widthSelect( width, onChangeWidth )
                }
                {
                    justifyContentSelect( justifyContent, onChangeJustifyContent )
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
            </InspectorAdvancedControls>
    	</>
	);

    // add class names to blockProps
    const blockProps = useBlockProps( { className: columnsRowsClassNames, 'data-block': 'column-rows', 'data-template-name': templateName } );
	// console.log( 'blockProps: ' + JSON.stringify( blockProps, null, 2 ) );

	// use if appending inner blocks directly into outer elem
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		// defaultBlock: { name: 'bsx-blocks/column-col' },
		directInsert: true,
		template: template,
		templateLock: templateLock,
        allowedBlocks: allowedBlocks,
		templateInsertUpdatesSelection: true,
		// ...( Platform.isNative && {
		// 	marginVertical: NATIVE_MARGIN_SPACING,
		// 	marginHorizontal: NATIVE_MARGIN_SPACING,
		// 	renderAppender: false,
		// } ),
		// __experimentalCaptureToolbars: true,
	} );

	return (
		<>
            {
                ! templateName ? (
                    <div class="bsxui-initial-inline-control">
                        <div class="bsxui-initial-inline-control-heading">
                            { __( 'Please select Column Rows template', 'bsx-blocks' ) }
                        </div>
                        <div className="bsxui-icon-text-button-list">
                            { templates.map( ( template, index ) => (
                                <Button
                                    label={ template.title }
                                    onClick={ () => {
                                        onChangeTemplate( template.name );
                                    } }
                                    className={ 'bsxui-icon-text-button-list-item ' }
                                >
                                    <div class="bsxui-icon-text-button-list-item-icon">
                                        { template.icon }
                                    </div>
                                    <div class="bsxui-icon-text-button-list-item-label">
                                        { template.title }
                                    </div>
                                </Button>
                            ) ) }
                        </div>
                    </div>
                )
                : 
                (
                    // <div className={ columnsRowsClassNames } data-block="column-rows" data-template-name={ templateName }>
                    //     <InnerBlocks 
                    //         template={ template }
                    //         templateLock={ templateLock }
                    //         allowedBlocks={ allowedBlocks }
                    //     />
                    // </div>
					<div { ...innerBlocksProps }/>
                )
            }
			{ controls }
		</>
	);
}
