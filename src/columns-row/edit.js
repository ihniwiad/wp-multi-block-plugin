import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	InspectorAdvancedControls,
	useInnerBlocksProps,
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
import { useSelect, useDispatch } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';


import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';
import { getTemplate } from './../_functions/utilities.js';
import { 
	marginAfterSelect,
	displaySelect,
} from './../_functions/controls.js';


// utils
import makeRowClassNames from './utils';


templates
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

	const { getBlock, getBlockAttributes } = useSelect( blockEditorStore );
	const { updateBlockAttributes } = useDispatch( blockEditorStore );

	const {
		templateName,
		enableInheritanceToCols,
		alignItems,
		justifyContent,
		noGutters,
		formRow,
		rowReverse,
		sizeXs,
		sizeSm,
		sizeMd,
		sizeLg,
		sizeXl,
		colsNodeName,
		colsMarginAfter,
		marginBefore,
		marginAfter,
		paddingBefore,
		paddingAfter,
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


	// const getColsTemplate = ( currentTemplateName ) => {
	//     const currentTemplate = templates.find( ( item ) => item.name === currentTemplateName );
	//     return currentTemplate ? currentTemplate.template : [];
	// };
	// const getColsTemplateLock = ( currentTemplateName ) => {
	//     const currentTemplate = templates.find( ( item ) => item.name === currentTemplateName );
	//     return currentTemplate ? currentTemplate.templateLock : false;
	// };

	// let colsTemplate = getColsTemplate( templateName );
	let colsTemplate = getTemplate( templates, templateName ).template;
	// let colsTemplateLock = getColsTemplateLock( templateName );
	let colsTemplateLock = getTemplate( templates, templateName ).templateLock;
	const children = getInnerBlocks();
	const allowedBlocks = [ 'bsx-blocks/col' ];

	const onChangeTemplate = ( value ) => {

		// colsTemplate = getColsTemplate( value );
		colsTemplate = getTemplate( templates, templateName ).template

		const colType = value == 'custom' ? 'custom' : 'default';

		// console.log( 'onChangeTemplate: "' + value + '"' );
		// console.log( 'colType: "' + colType + '"' );

		
		// console.log( 'value: "' + value + '"' );
		// console.log( 'colsTemplate: "' + colsTemplate + '"' );
		// console.log( 'colsTemplate.length: "' + colsTemplate.length + '"' );

		// colsTemplate.forEach( ( item, index ) => {
		//     console.log( 'item[ ' + index + ' ]: "' + item + '"' );

		//     if ( !! item ) {
		//         for ( let [ key, value ] of Object.entries( item ) ) {
		//             console.log( 'key: "' + key + '", value: "' + value + '"' );
		//         }
		//     }
		// } ); 
		

		if ( value != 'custom' ) {
			// resize columns
			children.forEach( ( column, index ) => {
				if ( colsTemplate.length > index ) {
					const newAttributes = colsTemplate[ index ][ 1 ];
					updateBlockAttributes( column.clientId, { colType: colType, ...newAttributes } );
				}
			} );
		}
		else {
			// change col type
			children.forEach( ( column, index ) => {
				const newAttributes = { 
					colType: colType, 
				};
				updateBlockAttributes( column.clientId, newAttributes );
			} );
		}

		setAttributes( { templateName: value } );

		// console.log( 'DONE onChangeTemplate' )
	};

	const onChangeAlignItems = ( value ) => {
		setAttributes( { alignItems: value } );
	};

	const onChangeJustifyContent = ( value ) => {
		setAttributes( { justifyContent: value } );
	};

	const onChangeNoGutters = ( value ) => {
		setAttributes( { noGutters: value } );
		if ( value === true ) {
			setAttributes( { formRow: false } );
		}
	};
	const onChangeFormRow = ( value ) => {
		setAttributes( { formRow: value } );
		if ( value === true ) {
			setAttributes( { noGutters: false } );
		}
	};

	const onChangeRowReverse = ( value ) => {
		setAttributes( { rowReverse: value } );
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

	const onChangeEnableInheritanceToCols = ( value ) => {
		setAttributes( { enableInheritanceToCols: value } );
	};

	// value = { sizeXX: 'newValue' }
	const inheritToCols = ( value ) => {
		//console.log( 'inheritToCols: ' + typeof value );

		children.forEach( ( column, index ) => {

			//console.log( 'childrenAttributes[' + index + ' ]: "' + childrenAttributes[ index ] + '"' );

			// if ( childrenAttributes[ index ].enableInheritanceFromRow ) {
			// FIX: get attributes here
			if ( getBlockAttributes( column.clientId ).enableInheritanceFromRow ) {

				const newAttributes = { 
					sizeXs: value.sizeXs != undefined ? value.sizeXs : sizeXs,
					sizeSm: value.sizeSm != undefined ? value.sizeSm : sizeSm,
					sizeMd: value.sizeMd != undefined ? value.sizeMd : sizeMd,
					sizeLg: value.sizeLg != undefined ? value.sizeLg : sizeLg,
					sizeXl: value.sizeXl != undefined ? value.sizeXl : sizeXl,
					nodeName: value.colsNodeName != undefined ? value.colsNodeName : colsNodeName,
					marginAfter: value.colsMarginAfter != undefined ? value.colsMarginAfter : colsMarginAfter,
				};
				updateBlockAttributes( column.clientId, newAttributes );

			}
		} );

	}


	// xs
	const onChangeXsColSize = ( value ) => {
		const attr = { sizeXs: !! value ? value.toString() : '' };
		setAttributes( attr );
		inheritToCols( attr );
	};
	const onChangeXsEqualSize = ( value ) => {
		if ( enableInheritanceToCols ) {
			if ( value ) {
				const attr = { sizeXs: 'null' };
				setAttributes( attr );
				inheritToCols( attr );
			}
			else if ( sizeXs == 'null' ) {
				const attr = { sizeXs: '' };
				setAttributes( attr );
				inheritToCols( attr );
			}
		}
	};
	const onChangeXsAutoSize = ( value ) => {
		if ( enableInheritanceToCols ) {
			if ( value ) {
				const attr = { sizeXs: 'auto' };
				setAttributes( attr );
				inheritToCols( attr );
			}
			else if ( sizeXs == 'auto' ) {
				const attr = { sizeXs: '' };
				setAttributes( attr );
				inheritToCols( attr );
			}
		}
	};

	// sm
	const onChangeSmColSize = ( value ) => {
		const attr = { sizeSm: !! value ? value.toString() : '' };
		setAttributes( attr );
		inheritToCols( attr );
	};
	const onChangeSmEqualSize = ( value ) => {
		if ( enableInheritanceToCols ) {
			if ( value ) {
				const attr = { sizeSm: 'null' };
				setAttributes( attr );
				inheritToCols( attr );
			}
			else if ( sizeSm == 'null' ) {
				const attr = { sizeSm: '' };
				setAttributes( attr );
				inheritToCols( attr );
			}
		}
	};
	const onChangeSmAutoSize = ( value ) => {
		if ( enableInheritanceToCols ) {
			if ( value ) {
				const attr = { sizeSm: 'auto' };
				setAttributes( attr );
				inheritToCols( attr );
			}
			else if ( sizeSm == 'auto' ) {
				const attr = { sizeSm: '' };
				setAttributes( attr );
				inheritToCols( attr );
			}
		}
	};

	// md
	const onChangeMdColSize = ( value ) => {
		const attr = { sizeMd: !! value ? value.toString() : '' };
		setAttributes( attr );
		inheritToCols( attr );
	};
	const onChangeMdEqualSize = ( value ) => {
		if ( enableInheritanceToCols ) {
			if ( value ) {
				const attr = { sizeMd: 'null' };
				setAttributes( attr );
				inheritToCols( attr );
			}
			else if ( sizeMd == 'null' ) {
				const attr = { sizeMd: '' };
				setAttributes( attr );
				inheritToCols( attr );
			}
		}
	};
	const onChangeMdAutoSize = ( value ) => {
		if ( enableInheritanceToCols ) {
			if ( value ) {
				const attr = { sizeMd: 'auto' };
				setAttributes( attr );
				inheritToCols( attr );
			}
			else if ( sizeMd == 'auto' ) {
				const attr = { sizeMd: '' };
				setAttributes( attr );
				inheritToCols( attr );
			}
		}
	};

	// lg
	const onChangeLgColSize = ( value ) => {
		const attr = { sizeLg: !! value ? value.toString() : '' };
		setAttributes( attr );
		inheritToCols( attr );
	};
	const onChangeLgEqualSize = ( value ) => {
		if ( enableInheritanceToCols ) {
			if ( value ) {
				const attr = { sizeLg: 'null' };
				setAttributes( attr );
				inheritToCols( attr );
			}
			else if ( sizeLg == 'null' ) {
				const attr = { sizeLg: '' };
				setAttributes( attr );
				inheritToCols( attr );
			}
		}
	};
	const onChangeLgAutoSize = ( value ) => {
		if ( enableInheritanceToCols ) {
			if ( value ) {
				const attr = { sizeLg: 'auto' };
				setAttributes( attr );
				inheritToCols( attr );
			}
			else if ( sizeLg == 'auto' ) {
				const attr = { sizeLg: '' };
				setAttributes( attr );
				inheritToCols( attr );
			}
		}
	};

	// xl
	const onChangeXlColSize = ( value ) => {
		const attr = { sizeXl: !! value ? value.toString() : '' };
		setAttributes( attr );
		inheritToCols( attr );
	};
	const onChangeXlEqualSize = ( value ) => {
		if ( enableInheritanceToCols ) {
			if ( value ) {
				const attr = { sizeXl: 'null' };
				setAttributes( attr );
				inheritToCols( attr );
			}
			else if ( sizeXl == 'null' ) {
				const attr = { sizeXl: '' };
				setAttributes( attr );
				inheritToCols( attr );
			}
		}
	};
	const onChangeXlAutoSize = ( value ) => {
		if ( enableInheritanceToCols ) {
			if ( value ) {
				const attr = { sizeXl: 'auto' };
				setAttributes( attr );
				inheritToCols( attr );
			}
			else if ( sizeXl == 'auto' ) {
				const attr = { sizeXl: '' };
				setAttributes( attr );
				inheritToCols( attr );
			}
		}
	};

	// cols node name bottom
	const onChangeColsNodeName = ( value ) => {
		if ( enableInheritanceToCols ) {
			const attr = { colsNodeName: value };
			setAttributes( attr );
			inheritToCols( attr );
		}
	};

	// cols margin bottom
	const onChangeColsMarginAfter = ( value ) => {
		if ( enableInheritanceToCols ) {
			const attr = { colsMarginAfter: value };
			setAttributes( attr );
			inheritToCols( attr );
		}
	};


	let rowClassName = makeRowClassNames( {
		alignItems, 
		justifyContent, 
		noGutters, 
		formRow,
		rowReverse,
	} );
	rowClassName = addClassNames( {
		marginBefore, 
		marginAfter, 
		paddingBefore, 
		paddingAfter,
	}, rowClassName );
	

	const controls = (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Columns Layout', 'bsx-blocks' ) }>
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
				<PanelBody title={ __( 'Row Settings', 'bsx-blocks' ) }>
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
						label={ __( 'Justify Content', 'bsx-blocks' ) }
						value={ justifyContent }
						onChange={ onChangeJustifyContent }
						options={ [
							{ value: '', label: __( '– unset –', 'bsx-blocks' ) },
							{ value: 'start', label: __( 'Start', 'bsx-blocks' ) },
							{ value: 'center', label: __( 'Center', 'bsx-blocks' ) },
							{ value: 'end', label: __( 'End', 'bsx-blocks' ) },
							{ value: 'between', label: __( 'Between', 'bsx-blocks' ) },
							{ value: 'around', label: __( 'Around', 'bsx-blocks' ) },
						] }
					/>
					<ToggleControl
						label={ __( 'No Gutters', 'bsx-blocks' ) }
						checked={ !! noGutters }
						onChange={ onChangeNoGutters }
					/>
					<ToggleControl
						label={ __( 'Form Row', 'bsx-blocks' ) }
						checked={ !! formRow }
						onChange={ onChangeFormRow }
					/>
				</PanelBody>

				{ templateName === 'custom' && (
					<PanelBody title={ __( 'Inherit Columns Settings', 'bsx-blocks' ) }>
						<ToggleControl
							label={ __( 'Enable inheritance to Columns', 'bsx-blocks' ) }
							checked={ !! enableInheritanceToCols }
							onChange={ onChangeEnableInheritanceToCols }
							help={ __( 'If enabled all Columns settings can be overwritten here. To protect selected Columns from beeing overwritten, disable inheritance option in respective Column settings.', 'bsx-blocks' ) }
						/>

						<hr/>

						<RangeControl 
							label={ __( 'XS Column Width', 'bsx-blocks' ) }
							value={ parseInt( sizeXs ) } 
							onChange={ onChangeXsColSize }
							min={ 0 }
							max={ 12 }
							help={ __( '1 ... 12 or empty', 'bsx-blocks' ) }
							disabled={ ! enableInheritanceToCols }
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
							disabled={ ! enableInheritanceToCols }
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
							disabled={ ! enableInheritanceToCols }
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
							disabled={ ! enableInheritanceToCols }
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
							disabled={ ! enableInheritanceToCols }
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

						<SelectControl 
							label={ __( 'Margin after', 'bsx-blocks' ) }
							value={ colsMarginAfter }
							onChange={ onChangeColsMarginAfter }
							options={ [
								{ value: '', label: __( '– none –', 'bsx-blocks' ) },
								{ value: '1', label: __( 'extra small', 'bsx-blocks' ) },
								{ value: '2', label: __( 'small', 'bsx-blocks' ) },
								{ value: '3', label: __( 'medium', 'bsx-blocks' ) },
								{ value: '4', label: __( 'large', 'bsx-blocks' ) },
								{ value: '5', label: __( 'extra large', 'bsx-blocks' ) },
							] }
							help={ __( 'Spacer after Column (not Row)', 'bsx-blocks' ) }
						/>

						<hr/>

						<SelectControl 
							label={ __( 'Node name', 'bsx-blocks' ) }
							value={ colsNodeName }
							onChange={ onChangeColsNodeName }
							options={ [
								{ value: 'div', label: __( 'div', 'bsx-blocks' ) },
								{ value: 'section', label: __( 'section', 'bsx-blocks' ) },
							] }
							help={ __( 'Column node name (please edit only if you know what you’re doing)', 'bsx-blocks' ) }
						/>

					</PanelBody>
				) }

				<PanelBody title={ __( 'Row margin (not Columns)', 'bsx-blocks' ) }>
					<SelectControl 
						label={ __( 'Margin before', 'bsx-blocks' ) }
						value={ marginBefore }
						onChange={ onChangeMarginBefore }
						options={ [
							{ value: '', label: __( '– unset –', 'bsx-blocks' ) },
							{ value: '0', label: __( 'none (0)', 'bsx-blocks' ) },
							{ value: '1', label: __( 'extra small', 'bsx-blocks' ) },
							{ value: '2', label: __( 'small', 'bsx-blocks' ) },
							{ value: '3', label: __( 'medium', 'bsx-blocks' ) },
							{ value: '4', label: __( 'large', 'bsx-blocks' ) },
							{ value: '5', label: __( 'extra large', 'bsx-blocks' ) },
						] }
						help={ __( 'Spacer before Row', 'bsx-blocks' ) }
					/>
					<SelectControl 
						label={ __( 'Margin after', 'bsx-blocks' ) }
						value={ marginAfter }
						onChange={ onChangeMarginAfter }
						options={ [
							{ value: '', label: __( '– unset –', 'bsx-blocks' ) },
							{ value: '0', label: __( 'none (0)', 'bsx-blocks' ) },
							{ value: '1', label: __( 'extra small', 'bsx-blocks' ) },
							{ value: '2', label: __( 'small', 'bsx-blocks' ) },
							{ value: '3', label: __( 'medium', 'bsx-blocks' ) },
							{ value: '4', label: __( 'large', 'bsx-blocks' ) },
							{ value: '5', label: __( 'extra large', 'bsx-blocks' ) },
						] }
						help={ __( 'Spacer after Row', 'bsx-blocks' ) }
					/>
				</PanelBody>
			</InspectorControls>
			<InspectorAdvancedControls>
				<SelectControl 
					label={ __( 'Padding before', 'bsx-blocks' ) }
					value={ paddingBefore }
					onChange={ onChangePaddingBefore }
					options={ [
						{ value: '', label: __( '– unset –', 'bsx-blocks' ) },
						{ value: '0', label: __( 'none (0)', 'bsx-blocks' ) },
						{ value: '1', label: __( 'extra small', 'bsx-blocks' ) },
						{ value: '2', label: __( 'small', 'bsx-blocks' ) },
						{ value: '3', label: __( 'medium', 'bsx-blocks' ) },
						{ value: '4', label: __( 'large', 'bsx-blocks' ) },
						{ value: '5', label: __( 'extra large', 'bsx-blocks' ) },
					] }
					help={ __( 'Inner spacer before', 'bsx-blocks' ) }
				/>
				<SelectControl 
					label={ __( 'Padding after', 'bsx-blocks' ) }
					value={ paddingAfter }
					onChange={ onChangePaddingAfter }
					options={ [
						{ value: '', label: __( '– unset –', 'bsx-blocks' ) },
						{ value: '0', label: __( 'none (0)', 'bsx-blocks' ) },
						{ value: '1', label: __( 'extra small', 'bsx-blocks' ) },
						{ value: '2', label: __( 'small', 'bsx-blocks' ) },
						{ value: '3', label: __( 'medium', 'bsx-blocks' ) },
						{ value: '4', label: __( 'large', 'bsx-blocks' ) },
						{ value: '5', label: __( 'extra large', 'bsx-blocks' ) },
					] }
					help={ __( 'Inner spacer after', 'bsx-blocks' ) }
				/>
				<SelectControl 
					label={ __( 'Columns order reverse', 'bsx-blocks' ) }
					value={ rowReverse }
					onChange={ onChangeRowReverse }
					options={ [
						{ value: '', label: __( '– unset –', 'bsx-blocks' ) },
						{ value: 'xs', label: __( 'XS up', 'bsx-blocks' ) },
						{ value: 'sm', label: __( 'SM up', 'bsx-blocks' ) },
						{ value: 'md', label: __( 'MD up', 'bsx-blocks' ) },
						{ value: 'lg', label: __( 'LG up', 'bsx-blocks' ) },
						{ value: 'xl', label: __( 'XL', 'bsx-blocks' ) },
					] }
					help={ __( 'Reverse Column order from selected size', 'bsx-blocks' ) }
				/>
			</InspectorAdvancedControls>
		</>
	);

	// add class names to blockProps
	const blockProps = useBlockProps( { className: rowClassName, 'data-template-name': templateName } );
	// console.log( 'blockProps: ' + JSON.stringify( blockProps, null, 2 ) );

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		defaultBlock: { name: 'bsx-blocks/col' },
		directInsert: true,
		template: colsTemplate,
		templateLock: colsTemplateLock,
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
							{ __( 'Please select template', 'bsx-blocks' ) }
						</div>
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
					</div>
				)
				: 
				(
			   //      <div { ...blockProps }>
			   //      	<InnerBlocks
						//     template={ colsTemplate }
			   //              allowedBlocks={ allowedBlocks }
			   //              renderAppender={
			   //                  hasInnerBlocks
			   //                  ? undefined
			   //                  : () => <InnerBlocks.ButtonBlockAppender />
			   //              }
						// />
			   //      </div>
				<div { ...innerBlocksProps }/>
				)
			}
			{ controls }
		</>
	);
}
