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
// import { useSelect } from '@wordpress/data';
// import { store as blockEditorStore } from '@wordpress/block-editor';


import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';
import { getTemplate } from './../_functions/utilities.js';
import {
	textAlignToolbar,
	marginBeforeSelect,
	marginAfterSelect,
	uiTemplateSelect,
    inlineTemplateSelect,
} from './../_functions/controls.js';


// utils
// import fooBar from './utils';


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
export default function Edit( { attributes, setAttributes } ) {

	// const { getBlock } = useSelect( blockEditorStore );

	const {
        templateName,
        textAlign,
        marginBefore,
        marginAfter,
    } = attributes;

	// const hasInnerBlocks = () => {
	// 	const block = getBlock( clientId );
	// 	if ( typeof block.innerBlocks === 'undefined' ) return false;
	// 	return block.innerBlocks.length > 0;
	// }

	let template = getTemplate( templates, templateName ).template;

    const allowedBlocks = [ 
        'bsx-blocks/button-label',
        'bsx-blocks/button',  
    ];

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

    const onChangeTextAlign = ( value ) => {
        setAttributes( { textAlign: value } );
    };

    const onChangeMarginBefore = ( value ) => {
        setAttributes( { marginBefore: value } );
    };

    const onChangeMarginAfter = ( value ) => {
        setAttributes( { marginAfter: value } );
    };

    const className = addClassNames( { 
        textAlign, 
        marginBefore, 
        marginAfter,
    } );

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
                        uiTemplateSelect( templates, templateName, onChangeTemplate )
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
            </InspectorControls>
    	</>
	);

    // add class names to blockProps
    const blockProps = useBlockProps( { className: className } );
	// console.log( 'blockProps: ' + JSON.stringify( blockProps, null, 2 ) );

	// use if appending inner blocks directly into outer elem
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		// defaultBlock: { name: 'bsx-blocks/col' },
		// directInsert: true,
		template: template,
		templateLock: false,
		// templateInsertUpdatesSelection: true,
		allowedBlocks: allowedBlocks,
	} );

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
                    <div { ...innerBlocksProps }/>
                )
            }
			{ controls }
		</>
	);
}
