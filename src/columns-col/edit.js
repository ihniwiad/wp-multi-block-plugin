import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
    InnerBlocks,
    InspectorControls,
} from '@wordpress/block-editor';
import { 
    TextControl,
    PanelBody,
    RangeControl,
    ToggleControl,
    Button,
    SelectControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';


import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';
// import { getTemplate } from './../_functions/utilities.js';
import { 
    marginAfterSelect,
    displaySelect,
} from './../_functions/controls.js';


// utils
import makeColClassNames from './utils';


// templates
// import templates from './templates';

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

	const { getBlock, getBlockRootClientId } = useSelect( blockEditorStore );

	const {
        colType,
        enableInheritanceFromRow,
        sizeXs,
        sizeSm,
        sizeMd,
        sizeLg,
        sizeXl,
        nodeName,
        marginAfter,
        display,
    } = attributes;

	const hasInnerBlocks = () => {
		const block = getBlock( clientId );
		if ( typeof block.innerBlocks === 'undefined' ) return false;
		return block.innerBlocks.length > 0;
	}


	// get block parent attributes
	const parentBlock = getBlock(
		getBlockRootClientId( clientId )
	);
	const parentAttributes = parentBlock.attributes;


    // xs
    const onChangeXsColSize = ( value ) => {
        setAttributes( { sizeXs: !! value ? value.toString() : '' } );
    };
    const onChangeXsEqualSize = ( value ) => {
        if ( value ) {
            setAttributes( { sizeXs: 'null' } );
        }
        else if ( sizeXs == 'null' ) {
            setAttributes( { sizeXs: '' } );
        }
    };
    const onChangeXsAutoSize = ( value ) => {
        if ( value ) {
            setAttributes( { sizeXs: 'auto' } );
        }
        else if ( sizeXs == 'auto' ) {
            setAttributes( { sizeXs: '' } );
        }
    };

    // sm
    const onChangeSmColSize = ( value ) => {
        setAttributes( { sizeSm: !! value ? value.toString() : '' } );
    };
    const onChangeSmEqualSize = ( value ) => {
        if ( value ) {
            setAttributes( { sizeSm: 'null' } );
        }
        else if ( sizeSm == 'null' ) {
            setAttributes( { sizeSm: '' } );
        }
    };
    const onChangeSmAutoSize = ( value ) => {
        if ( value ) {
            setAttributes( { sizeSm: 'auto' } );
        }
        else if ( sizeSm == 'auto' ) {
            setAttributes( { sizeSm: '' } );
        }
    };

    // md
    const onChangeMdColSize = ( value ) => {
        setAttributes( { sizeMd: !! value ? value.toString() : '' } );
    };
    const onChangeMdEqualSize = ( value ) => {
        if ( value ) {
            setAttributes( { sizeMd: 'null' } );
        }
        else if ( sizeMd == 'null' ) {
            setAttributes( { sizeMd: '' } );
        }
    };
    const onChangeMdAutoSize = ( value ) => {
        if ( value ) {
            setAttributes( { sizeMd: 'auto' } );
        }
        else if ( sizeMd == 'auto' ) {
            setAttributes( { sizeMd: '' } );
        }
    };

    // lg
    const onChangeLgColSize = ( value ) => {
        setAttributes( { sizeLg: !! value ? value.toString() : '' } );
    };
    const onChangeLgEqualSize = ( value ) => {
        if ( value ) {
            setAttributes( { sizeLg: 'null' } );
        }
        else if ( sizeLg == 'null' ) {
            setAttributes( { sizeLg: '' } );
        }
    };
    const onChangeLgAutoSize = ( value ) => {
        if ( value ) {
            setAttributes( { sizeLg: 'auto' } );
        }
        else if ( sizeLg == 'auto' ) {
            setAttributes( { sizeLg: '' } );
        }
    };

    // xl
    const onChangeXlColSize = ( value ) => {
        setAttributes( { sizeXl: !! value ? value.toString() : '' } );
    };
    const onChangeXlEqualSize = ( value ) => {
        if ( value ) {
            setAttributes( { sizeXl: 'null' } );
        }
        else if ( sizeXl == 'null' ) {
            setAttributes( { sizeXl: '' } );
        }
    };
    const onChangeXlAutoSize = ( value ) => {
        if ( value ) {
            setAttributes( { sizeXl: 'auto' } );
        }
        else if ( sizeXl == 'auto' ) {
            setAttributes( { sizeXl: '' } );
        }
    };

    const onChangeEnableInheritanceFromRow = ( value ) => {
        setAttributes( { enableInheritanceFromRow: value } );
    };

    const onClickEnableInheritanceFromRow = ( value ) => {
        //console.log( 'onClickEnableInheritanceFromRow' );

        setAttributes( { 
            sizeXs: parentAttributes.sizeXs, 
            sizeSm: parentAttributes.sizeSm, 
            sizeMd: parentAttributes.sizeMd, 
            sizeLg: parentAttributes.sizeLg,
            sizeXl: parentAttributes.sizeXl,
            nodeName: parentAttributes.colsNodeName,
            marginAfter: parentAttributes.colsMarginAfter,
        } );
    };

    const onChangeNodeName = ( value ) => {
        setAttributes( { nodeName: value } );
    };

    const onChangeMarginAfter = ( value ) => {
        setAttributes( { marginAfter: value } );
    };

    const onChangeDisplay = ( value ) => {
        setAttributes( { display: value } );
    };

    let colClassName = makeColClassNames( [ sizeXs, sizeSm, sizeMd, sizeLg, sizeXl ] );
    colClassName = addClassNames( {
        marginAfter,
        display,
    }, colClassName );

    setAttributes( { fromRowConfig: parentAttributes.fromRowConfig } );

    const TagName = nodeName;
	

    const controls = (
    	<>
    		<InspectorControls>
                <PanelBody title={ __( 'Column Sizes (this Column)', 'bsx-blocks' ) }>

                    { colType === 'custom' && (
                        <>
                            <ToggleControl
                                label={ __( 'Enable inheritance from Row', 'bsx-blocks' ) }
                                checked={ !! enableInheritanceFromRow }
                                onChange={ onChangeEnableInheritanceFromRow }
                                help={ __( 'If enabled allows overwriting Column settings from Row', 'bsx-blocks' ) }
                            />

                            <div class="components-base-control">
                                <Button
                                    onClick={ onClickEnableInheritanceFromRow }
                                    isSecondary
                                    disabled={ ! enableInheritanceFromRow }
                                >
                                    { __( 'Inherit Settings for this Column', 'bsx-blocks' ) }
                                </Button>
                            </div>
                        </>
                    ) }

                    <hr/>

                    <RangeControl 
                        label={ __( 'XS Column Width', 'bsx-blocks' ) }
                        value={ parseInt( sizeXs ) } 
                        onChange={ onChangeXsColSize }
                        min={ 0 }
                        max={ 12 }
                        help={ __( '1 ... 12 or empty', 'bsx-blocks' ) }
                        className="mb-0"
                    />
                    <ToggleControl
                        label={ __( 'XS Equal Width', 'bsx-blocks' ) }
                        checked={ sizeXs == 'null' }
                        onChange={ onChangeXsEqualSize }
                        className="mb-0"
                    />
                    <ToggleControl
                        label={ __( 'XS Auto Width', 'bsx-blocks' ) }
                        checked={ sizeXs == 'auto' }
                        onChange={ onChangeXsAutoSize }
                    />

                    <RangeControl 
                        label={ __( 'SM Column Width', 'bsx-blocks' ) }
                        value={ parseInt( sizeSm ) } 
                        onChange={ onChangeSmColSize }
                        min={ 0 }
                        max={ 12 }
                        help={ __( '1 ... 12 or empty', 'bsx-blocks' ) }
                        className="mb-0"
                    />
                    <ToggleControl
                        label={ __( 'SM Equal Width', 'bsx-blocks' ) }
                        checked={ sizeSm == 'null' }
                        onChange={ onChangeSmEqualSize }
                        className="mb-0"
                    />
                    <ToggleControl
                        label={ __( 'SM Auto Width', 'bsx-blocks' ) }
                        checked={ sizeSm == 'auto' }
                        onChange={ onChangeSmAutoSize }
                    />

                    <RangeControl 
                        label={ __( 'MD Column Width', 'bsx-blocks' ) }
                        value={ parseInt( sizeMd ) } 
                        onChange={ onChangeMdColSize }
                        min={ 0 }
                        max={ 12 }
                        help={ __( '1 ... 12 or empty', 'bsx-blocks' ) }
                        className="mb-0"
                    />
                    <ToggleControl
                        label={ __( 'MD Equal Width', 'bsx-blocks' ) }
                        checked={ sizeMd == 'null' }
                        onChange={ onChangeMdEqualSize }
                        className="mb-0"
                    />
                    <ToggleControl
                        label={ __( 'MD Auto Width', 'bsx-blocks' ) }
                        checked={ sizeMd == 'auto' }
                        onChange={ onChangeMdAutoSize }
                    />

                    <RangeControl 
                        label={ __( 'LG Column Width', 'bsx-blocks' ) }
                        value={ parseInt( sizeLg ) } 
                        onChange={ onChangeLgColSize }
                        min={ 0 }
                        max={ 12 }
                        help={ __( '1 ... 12 or empty', 'bsx-blocks' ) }
                        className="mb-0"
                    />
                    <ToggleControl
                        label={ __( 'LG Equal Width', 'bsx-blocks' ) }
                        checked={ sizeLg == 'null' }
                        onChange={ onChangeLgEqualSize }
                        className="mb-0"
                    />
                    <ToggleControl
                        label={ __( 'LG Auto Width', 'bsx-blocks' ) }
                        checked={ sizeLg == 'auto' }
                        onChange={ onChangeLgAutoSize }
                    />

                    <RangeControl 
                        label={ __( 'XL Column Width', 'bsx-blocks' ) }
                        value={ parseInt( sizeXl ) } 
                        onChange={ onChangeXlColSize }
                        min={ 0 }
                        max={ 12 }
                        help={ __( '1 ... 12 or empty', 'bsx-blocks' ) }
                        className="mb-0"
                    />
                    <ToggleControl
                        label={ __( 'XL Equal Width', 'bsx-blocks' ) }
                        checked={ sizeXl == 'null' }
                        onChange={ onChangeXlEqualSize }
                        className="mb-0"
                    />
                    <ToggleControl
                        label={ __( 'XL Auto Width', 'bsx-blocks' ) }
                        checked={ sizeXl == 'auto' }
                        onChange={ onChangeXlAutoSize }
                    />

                    <hr/>

                    {
                        marginAfterSelect( marginAfter, onChangeMarginAfter )
                    }

                    <hr/>

                    <SelectControl 
                        label={ __( 'Node name', 'bsx-blocks' ) }
                        value={ nodeName }
                        onChange={ onChangeNodeName }
                        options={ [
                            { value: 'div', label: __( 'div', 'bsx-blocks' ) },
                            { value: 'section', label: __( 'section', 'bsx-blocks' ) },
                        ] }
                        help={ __( 'Node name (please edit only if you know what you’re doing)', 'bsx-blocks' ) }
                    />

                    <hr/>

                    {
                        displaySelect( display, onChangeDisplay, [ '', 'flex' ] )
                    }

                </PanelBody>
            </InspectorControls>
    	</>
	);

    // add class names to blockProps
    const blockProps = useBlockProps( { className: colClassName, 'data-col-type': colType } );
	// console.log( 'blockProps: ' + JSON.stringify( blockProps, null, 2 ) );
	return (
		<>
			<TagName { ...blockProps }>
	        	<InnerBlocks
	                renderAppender={
	                    hasInnerBlocks
	                    ? undefined
	                    : () => <InnerBlocks.ButtonBlockAppender />
	                }
	            />
			</TagName>
			{ controls }
		</>
	);
}
