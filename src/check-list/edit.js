/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps, 
	RichText,
	BlockControls,
	InspectorControls,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';

import { PanelBody } from '@wordpress/components';

import { useDispatch, useRegistry } from '@wordpress/data';

import { useEffect } from '@wordpress/element';

// import { createBlock } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';


import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';
import { 
    stateSelect,
    linkUrlInput,
    targetToggle,
    relInput,
    marginLeftSelect,
    marginRightSelect,
    marginBeforeSelect,
    marginAfterSelect,
    displaySelect,
    textAlignToolbar,
} from './../_functions/controls.js';

import { migrateToListV2 } from './utils';

const TEMPLATE = [ [ 'create-block/check-list-item' ] ];

/**
 * At the moment, deprecations don't handle create blocks from attributes
 * (like when using CPT templates). For this reason, this hook is necessary
 * to avoid breaking templates using the old list block format.
 *
 * @param {Object} attributes Block attributes.
 * @param {string} clientId   Block client ID.
 */
function useMigrateOnLoad( attributes, clientId ) {

	// console.log( 'useMigrateOnLoad()' )

	const registry = useRegistry();
	const { updateBlockAttributes, replaceInnerBlocks } =
		useDispatch( blockEditorStore );

	useEffect( () => {
		// As soon as the block is loaded, migrate it to the new version.

		if ( ! attributes.values ) {
			return;
		}

		const [ newAttributes, newInnerBlocks ] = migrateToListV2( attributes );

		// deprecated( 'Content attribute on the BSX Check List block', {
		// 	since: '6.0',
		// 	version: '6.5',
		// 	alternative: 'inner blocks',
		// } );

		registry.batch( () => {
			updateBlockAttributes( clientId, newAttributes );
			replaceInnerBlocks( clientId, newInnerBlocks );
		} );
	}, [ attributes.values ] );
}

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes, clientId } ) {

	// console.log( 'Edit()' )

	const {
        className,
        values,
        state,
        marginLeft,
        marginRight,
        marginBefore,
        marginAfter,
        display,
        textAlign,
	} = attributes;

	// console.log( 'values: \n' + JSON.stringify( values, null, 2 ) );
	// if ( content ) {
	// 	console.log( 'content found' )
	// }
	// else {
	// 	console.log( 'NO content found (migrated)' )
	// }

	const blockProps = useBlockProps( { className: 'checklist' } );

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
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

	useMigrateOnLoad( attributes, clientId );

	// const test = createListBlockFromDOMElement( content )

	// console.log( 'innerBlocksProps: \n' + JSON.stringify( innerBlocksProps, null, 2 ) );
	// console.log( 'test: \n' + JSON.stringify( test, null, 2 ) );

	// console.log( 'innerBlocks: \n' + JSON.stringify( innerBlocks, null, 2 ) );

    // const allowedBlocks = [ 
    //     'check-list-item',  
    // ];

    // const onChangeContent = ( value ) => {
    //     setAttributes( { content: value } );
    // };
    const onChangeState = ( value ) => {
        setAttributes( { state: value } );
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
    const onChangeDisplay = ( value ) => {
        setAttributes( { display: value } );
    };
    const onChangeTextAlign = ( value ) => {
        setAttributes( { textAlign: value } );
    };

    const checklistClassNames = addClassNames( {
        marginLeft, 
        marginRight, 
        marginBefore,
        marginAfter,
        display,
        textAlign,
    }, ( !! className ? 'checklist ' + className : 'checklist' ) );

	const controls = (
		<>
            <BlockControls>
                {
                    textAlignToolbar( textAlign, onChangeTextAlign )
                }
            </BlockControls>
            <InspectorControls>
                <PanelBody title={ __( 'Appearance', 'bsx-blocks' ) }>
                    {
                        stateSelect( state, onChangeState )
                    }
                    {
                        displaySelect( display, onChangeDisplay )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Margin', 'bsx-blocks' ) }>
                    {
                        marginLeftSelect( marginLeft, onChangeMarginLeft, [ '', '0', '1', '2', '3' ] )
                    }
                    {
                        marginRightSelect( marginRight, onChangeMarginRight, [ '', '0', '1', '2', '3' ] )
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

    return (
		<>
			<ul { ...innerBlocksProps } />
			{ controls }
		</>
    );
}
