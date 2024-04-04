import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
    InspectorControls,
    InspectorAdvancedControls,
    RichText,
	// useInnerBlocksProps, // use if appending inner blocks directly into outer elem
} from '@wordpress/block-editor';
import {
    PanelBody,
    SelectControl,
    SVG, 
    Path,
} from '@wordpress/components';
// import { useSelect } from '@wordpress/data';
// import { store as blockEditorStore } from '@wordpress/block-editor';


import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';
// import { getTemplate } from './../_functions/utilities.js';
import { 
    marginLeftSelect,
    marginRightSelect,
    marginBeforeSelect,
    marginAfterSelect,
    displaySelect,
    nodeNameSelect,
    forInput,
} from './../_functions/controls.js';


// utils
// import fooBar from './utils';


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
        content,
        display,
        marginLeft,
        marginRight,
        marginBefore,
        marginAfter,
        nodeName,
        labelFor,
	} = attributes;

	// const hasInnerBlocks = () => {
	// 	const block = getBlock( clientId );
	// 	if ( typeof block.innerBlocks === 'undefined' ) return false;
	// 	return block.innerBlocks.length > 0;
	// }

	// let template = getTemplate( templates, templateName ).template;


    const onChangeContent = ( value ) => {
        setAttributes( { content: value } );
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

    const onChangeIgnoreMailtoSpamProtection = ( value ) => {
        setAttributes( { ignoreMailtoSpamProtection: ! value } );
    };

    const onChangeNodeName = ( value ) => {
        setAttributes( { nodeName: value } );
    };

    const onChangeLabelFor = ( value ) => {
        setAttributes( { labelFor: value } );
    };

    const labelClassNames = addClassNames( {
        display,
        marginLeft, 
        marginRight, 
        marginBefore,
        marginAfter,
    } );

    const controls = (
    	<>
	    	<InspectorControls>
	            <PanelBody title={ __( 'Button Label appearance (optional)', 'bsx-blocks' ) }>
	                {
	                    displaySelect( display, onChangeDisplay, [ 'span', 'label' ] )
	                }
	            </PanelBody>

	            <PanelBody title={ __( 'Margin (optional)', 'bsx-blocks' ) }>
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
	    	<InspectorAdvancedControls>
                {
                    nodeNameSelect( nodeName, onChangeNodeName, [ 'span', 'label' ] )
                }
                {
                	forInput( labelFor, onChangeLabelFor )
                }
	    	</InspectorAdvancedControls>
        </>
	);

    const TagName = nodeName ? nodeName : 'span';

    // add class names to blockProps
    const blockProps = useBlockProps( { className: labelClassNames, 'data-for': labelFor } );
	// console.log( 'blockProps: ' + JSON.stringify( blockProps, null, 2 ) );

	return (
		<>
            <RichText
            	tagName={ TagName }
                multiline={ false }
                placeholder={ __( 'Add label...', 'bsx-blocks' ) }
                value={ content }
                onChange={ onChangeContent }
                allowedFormats={ [] }
                keepPlaceholderOnFocus
                { ...blockProps }
            />
			{ controls }
		</>
	);
}
