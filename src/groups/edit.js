import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
    InnerBlocks,
    InspectorControls,
	useInnerBlocksProps, // use if appending inner blocks directly into outer elem
} from '@wordpress/block-editor';
import { 
    PanelBody,
    // TextControl,
    // ToggleControl,
    // SelectControl,
    // Button,
    // SVG, 
    // Path,
} from '@wordpress/components';
// import { useSelect } from '@wordpress/data';
// import { store as blockEditorStore } from '@wordpress/block-editor';


import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';
import { getTemplate } from './../_functions/utilities.js';
import { 
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
// import './editor.scss';

/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes, clientId } ) {

	// const { getBlock } = useSelect( blockEditorStore );

	const {
        templateName,
	} = attributes;


    let template = getTemplate( templates, templateName ).template;

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


    const controls = (
        <InspectorControls>
            <PanelBody title={ __( 'Group Settings', 'bsx-blocks' ) }>
                {
                    uiTemplateSelect( templates, templateName, onChangeTemplate )
                }
            </PanelBody>
        </InspectorControls>
	);

    // add class names to blockProps
    const blockProps = useBlockProps();
	// console.log( 'blockProps: ' + JSON.stringify( blockProps, null, 2 ) );

	// use if appending inner blocks directly into outer elem
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		template: template,
		templateLock: false,
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
