
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
    InnerBlocks,
    useInnerBlocksProps,
    InspectorControls,
    InspectorAdvancedControls,
} from '@wordpress/block-editor';
import { 
    PanelBody,
    TextControl,
    ToggleControl,
    SelectControl,
    Button,
    SVG, 
    Path,
} from '@wordpress/components';
// import { 
//     withSelect, 
// } from '@wordpress/data';
import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';


import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';
import { getTemplate } from './../_functions/utilities.js';
import { 
    belowNavbarToggle,
    touchFooterToggle,
    marginBeforeSelect,
    marginAfterSelect,
    bgColorSelect,
    paddingBeforeSelect,
    paddingAfterSelect,
    isGalleryParentToggle,
} from './../_functions/controls.js';


// templates
import templates from './templates';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
// { attributes, setAttributes, clientId }
export default function Edit( props ) {

// withSelect( ( select, { clientId } ) => {
//         const { 
//             getBlocksByClientId,
//         } = select( 'core/block-editor' );

//         const children = getBlocksByClientId( clientId )[ 0 ]
//             ? getBlocksByClientId( clientId )[ 0 ].innerBlocks
//             : [];

//         return {
//             children,
//         };
//     } )( ( props ) => {


		// console.log( 'props: ' + JSON.stringify( props, null, 2 ) );


		const { getBlock } = useSelect( blockEditorStore );

        const {
            className,
            attributes: {
                templateName,
	            belowNavbar,
                touchFooter,
	            id,
	            marginBefore,
	            marginAfter,
                bgColor,
                paddingBefore,
                paddingAfter,
                isGalleryParent,
            },
            setAttributes,
            // children,
            clientId,
        } = props;




        // const hasInnerBlocks = ( children ) => {
        //     return children.length > 0;
        // }
        const hasInnerBlocks = () => {
        	const block = getBlock( clientId );
			// console.log( '-- block: ' + JSON.stringify( block, null, 2 ) );
			if ( typeof block.innerBlocks === 'undefined' ) return false;
            return block.innerBlocks.length > 0;
        }

        // const hasBlocks = hasInnerBlocks();

        let template = getTemplate( templates, templateName ).template;

		const blockProps = useBlockProps();
		// console.log( 'blockProps: ' + JSON.stringify( blockProps, null, 2 ) );

		// let innerBlocksProps = useInnerBlocksProps( blockProps );
		// console.log( 'innerBlocksProps: ' + JSON.stringify( innerBlocksProps, null, 2 ) );

        const onChangeTemplate = ( value ) => {
        	// console.log( 'onChangeTemplate: ' + value )
            const currentTemplateMap = getTemplate( templates, value );
			// console.log( '-- currentTemplateMap: ' + JSON.stringify( currentTemplateMap, null, 2 ) );
            if ( currentTemplateMap.template != undefined && currentTemplateMap.attributes != undefined ) {
                template = currentTemplateMap.template;
				// console.log( '---- template: ' + JSON.stringify( template, null, 2 ) );
                setAttributes( { 
                    templateName: value,
                    ...currentTemplateMap.attributes,
                } );
                // console.log( '------ setAttributes done' )
				// innerBlocksProps = useInnerBlocksProps( blockProps, {
			 //        directInsert: true,
				// 	template: template,
				// 	templateLock: false,
				// 	templateInsertUpdatesSelection: true,
				// } );
				// console.log( 'innerBlocksProps: ' + JSON.stringify( innerBlocksProps, null, 2 ) );
            }
            else {
                console.log( 'Error: Template change failed.' );
            }

            // console.log( 'changed templateName: ' + value );
            // console.log( 'changed template: ' + template );
        };

        const onChangeBelowNavbar = ( value ) => {
            setAttributes( { belowNavbar: value } );
        };
        const onChangeTouchFooter = ( value ) => {
            setAttributes( { touchFooter: value } );
        };

        const onChangeId = ( value ) => {
            setAttributes( { id: value } );
        };

        const onChangeMarginBefore = ( value ) => {
            setAttributes( { marginBefore: value } );
        };
        const onChangeMarginAfter = ( value ) => {
            setAttributes( { marginAfter: value } );
        };

        const onChangeBgColor = ( value ) => {
            setAttributes( { bgColor: value } );
        };

        const onChangePaddingBefore = ( value ) => {
            setAttributes( { paddingBefore: value } );
        };
        const onChangePaddingAfter = ( value ) => {
            setAttributes( { paddingAfter: value } );
        };

        const onChangeIsGalleryParent = ( value ) => {
            setAttributes( { isGalleryParent: value } );
        };

        // class name

        const containerClassName = addClassNames( { 
            belowNavbar, 
            touchFooter,
            marginBefore, 
            marginAfter, 
            bgColor,
            paddingBefore,
            paddingAfter,
        } );

        return [
            <>
                <InspectorControls>
                    <PanelBody title={ __( 'Section Settings', 'bsx-blocks' ) }>
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
                        <TextControl 
                            label={ __( 'ID', 'bsx-blocks' ) }
                            value={ id } 
                            onChange={ onChangeId }
                        />
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
                <InspectorAdvancedControls>
                    {
                        belowNavbarToggle( belowNavbar, onChangeBelowNavbar )
                    }
                    {
                        touchFooterToggle( touchFooter, onChangeTouchFooter )
                    }
                    {
                        bgColorSelect( bgColor, onChangeBgColor )
                    }
                    {
                        paddingBeforeSelect( paddingBefore, onChangePaddingBefore )
                    }
                    {
                        paddingAfterSelect( paddingAfter, onChangePaddingAfter )
                    }
                    {
                        isGalleryParentToggle( isGalleryParent, onChangeIsGalleryParent )
                    }
                </InspectorAdvancedControls>
            </>,
            (
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
                            <section className={ containerClassName } id={ id } { ...blockProps }>
                            	<InnerBlocks
					                template={ template }
                                    renderAppender={
                                        hasInnerBlocks
                                        ? undefined
                                        : () => <InnerBlocks.ButtonBlockAppender />
                                    }
					            />
                            </section>
                        )
                    }
                </>
            )
        ];
    // } )



	// return (
	// 	<p { ...useBlockProps() }>
	// 		{ __(
	// 			'Multiple Blocks Plugin – hello from the editor!',
	// 			'multiple-blocks-plugin'
	// 		) }
	// 	</p>
	// );
}
