import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
    InnerBlocks,
    InspectorControls,
    BlockControls,
    AlignmentToolbar,
	useInnerBlocksProps, // use if appending inner blocks directly into outer elem
} from '@wordpress/block-editor';
import { 
    TextControl,
    PanelBody,
    SelectControl,
    Button,
    SVG, 
    Path,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';


import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';
// import { getTemplate } from './../_functions/utilities.js';
import { 
    iconFamilySelect,
    textColorSelect,
    displaySelect,
    marginLeftSelect,
    marginRightSelect,
    marginBeforeSelect,
    marginAfterSelect,
    textAlignToolbar,
} from './../_functions/controls.js';


// utils
// import fooBar from './utils';


// templates
// import templates from './templates';

const DEFAULT_BLOCK = {
    name: 'bsx-blocks/icon-list-item',
};
const TEMPLATE = [ [ 'bsx-blocks/icon-list-item' ] ];

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

	const { getBlock } = useSelect( blockEditorStore );

	const {
        globalIconFamily,
        globalIconTextColor,
        textAlign,
        display,
        marginLeft,
        marginRight,
        marginBefore,
        marginAfter,
	} = attributes;

	const hasInnerBlocks = () => {
		const block = getBlock( clientId );
		if ( typeof block.innerBlocks === 'undefined' ) return false;
		return block.innerBlocks.length > 0;
	}

	const getInnerBlocks = () => {
		const block = getBlock( clientId );
		if ( typeof block.innerBlocks === 'undefined' ) return false;
		return block.innerBlocks;
	}

	// let template = getTemplate( templates, templateName ).template;


    const onChangeGlobalIconFamily = ( value ) => {
        setAttributes( { globalIconFamily: value } );
    };
    const onChangeGlobalIconTextColor = ( value ) => {
        // change childrens calcIconTextColor
        setAttributes( { globalIconTextColor: value } );

        children.forEach( ( child, index ) => {
            const childAttributes = getBlockAttributes( child.clientId );

            // console.log( 'child[ ' + index + ' ] attributes: \n' );
            // console.log( JSON.stringify( childAttributes, null, 2 ) );

            if ( ! childAttributes.iconTextColor && ! childAttributes.itemTextColor ) {
                // change only if no icon color and no item color is set
                const newAttributes = { 
                    calcIconTextColor: value, 
                };
                updateBlockAttributes( child.clientId, newAttributes );
            }
        } );
    };

    const onChangeTextAlign = ( value ) => {
        setAttributes( { textAlign: value } );
    };

    const onChangeDisplay = ( value ) => {
        setAttributes( { display: value } );
    };

    const onChangeMarginLeft = ( value ) => {
        setAttributes( { marginLeft: value } );
    };
    const onChangeMarginRight = ( value ) => {
        setAttributes( { marginRight: value } );
    };
    const onChangeMarginBefore = ( value ) => {
        setAttributes( { marginBefore: value } );
    };
    const onChangeMarginAfter = ( value ) => {
        setAttributes( { marginAfter: value } );
    };

    const ulClassNames = addClassNames( { 
        textAlign, 
        display,
        marginLeft,
        marginRight,
        marginBefore, 
        marginAfter,
    }, 'fa-ul' );


    const controls = (
    	<>
            <BlockControls>
                {
                    textAlignToolbar( textAlign, onChangeTextAlign )
                }
            </BlockControls>
            <InspectorControls>
                <PanelBody title={ __( 'Settings', 'bsx-blocks' ) }>
                    {
                        iconFamilySelect( globalIconFamily, onChangeGlobalIconFamily )
                    }
                    {
                        textColorSelect( globalIconTextColor, onChangeGlobalIconTextColor, [], __( 'List Icon Color', 'bsx-blocks' ) )
                    }
                    {
                        displaySelect( display, onChangeDisplay )
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
            </InspectorControls>
    	</>
	);

    // add class names to blockProps
    const blockProps = useBlockProps( { className: ulClassNames } );
	// console.log( 'blockProps: ' + JSON.stringify( blockProps, null, 2 ) );

	// use if appending inner blocks directly into outer elem
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		defaultBlock: DEFAULT_BLOCK,
		directInsert: true,
		template: TEMPLATE,
		templateLock: false,
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
            <ul { ...innerBlocksProps }/>
            { controls }
		</>
	);
}
