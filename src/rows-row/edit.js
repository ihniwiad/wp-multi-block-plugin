import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
    InnerBlocks,
    InspectorControls,
	useInnerBlocksProps, // use if appending inner blocks directly into outer elem
} from '@wordpress/block-editor';
import { 
    TextControl,
    PanelBody,
    RangeControl,
    ToggleControl,
    Button,
    SelectControl,
} from '@wordpress/components';
// import { useSelect } from '@wordpress/data';
// import { store as blockEditorStore } from '@wordpress/block-editor';


import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';
// import { getTemplate } from './../_functions/utilities.js';
import { 
	// belowNavbarToggle,
	// touchFooterToggle,
	// marginBeforeSelect,
	// marginAfterSelect,
	// bgColorSelect,
	// paddingBeforeSelect,
	// paddingAfterSelect,
	// isGalleryParentToggle,
} from './../_functions/controls.js';


// utils
import makeColumnRowClassNames from './utils';


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
        columnRowType,
        alignItems,
        display,
    } = attributes;

	// const hasInnerBlocks = () => {
	// 	const block = getBlock( clientId );
	// 	if ( typeof block.innerBlocks === 'undefined' ) return false;
	// 	return block.innerBlocks.length > 0;
	// }

	// let template = getTemplate( templates, templateName ).template;


    const hasInnerBlocks = ( children ) => {
        return children.length > 0;
    }

    const onChangeColumnRowType = ( value ) => {
        setAttributes( { columnRowType: value } );
    };
    const onChangeAlignItems = ( value ) => {
        setAttributes( { alignItems: value } );
    };
    const onChangeDisplay = ( value ) => {
        setAttributes( { display: value } );
    };

    const columnRowClassNames = makeColumnRowClassNames( {
        columnRowType,
        alignItems,
        display,
    } );

    const controls = (
        <InspectorControls>
            <PanelBody title={ __( 'Column Row', 'bsx-blocks' ) }>
                <SelectControl 
                    label={ __( 'Columns Row height', 'bsx-blocks' ) }
                    value={ columnRowType }
                    onChange={ onChangeColumnRowType }
                    options={ [
                        { value: 'unset', label: __( '– unset – (unstyled)', 'bsx-blocks' ) },
                        { value: '', label: __( '– Default – (flexible height)', 'bsx-blocks' ) },
                        { value: 'auto', label: __( 'Auto (static height)', 'bsx-blocks' ) },
                    ] }
                    help={ __( 'Column Rows will share their patent’s height dividing it into flexible and/or static height segments.', 'bsx-blocks' ) }
                />
                <SelectControl 
                    label={ __( 'Vertical Align', 'bsx-blocks' ) }
                    value={ alignItems }
                    onChange={ onChangeAlignItems }
                    options={ [
                        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                        { value: 'start', label: __( 'Start', 'bsx-blocks' ) },
                        { value: 'center', label: __( 'Center', 'bsx-blocks' ) },
                        { value: 'end', label: __( 'End', 'bsx-blocks' ) },
                    ] }
                />
                <SelectControl 
                    label={ __( 'Display', 'bsx-blocks' ) }
                    value={ display }
                    onChange={ onChangeDisplay }
                    options={ [
                        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                        { value: 'flex', label: __( 'Flex', 'bsx-blocks' ) },
                    ] }
                />
            </PanelBody>
        </InspectorControls>
	);

    // add class names to blockProps
    const blockProps = useBlockProps( { className: columnRowClassNames, 'data-block': 'column-row', 'data-column-row-type': columnRowType } );
	// console.log( 'blockProps: ' + JSON.stringify( blockProps, null, 2 ) );

	// use if appending inner blocks directly into outer elem
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		// defaultBlock: { name: 'bsx-blocks/rows-col' },
		// directInsert: true,
		// template: template,
		// templateLock: false,
		// templateInsertUpdatesSelection: true,
	} );

	return (
		<>
			<div { ...innerBlocksProps }/>
			{ controls }
		</>
	);
}
