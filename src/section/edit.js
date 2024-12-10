
import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InnerBlocks,
    InspectorControls,
    InspectorAdvancedControls,
    useInnerBlocksProps,
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
// import { useSelect } from '@wordpress/data';
// import { store as blockEditorStore } from '@wordpress/block-editor';


import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';
import { getTemplate } from './../_functions/utilities.js';
import { 
    idInput,
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
    } = attributes;

    // const hasInnerBlocks = () => {
    //     const block = getBlock( clientId );
    //     if ( typeof block.innerBlocks === 'undefined' ) return false;
    //     return block.innerBlocks.length > 0;
    // }

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
    const sectionClassName = addClassNames( { 
        belowNavbar, 
        touchFooter,
        marginBefore, 
        marginAfter, 
        bgColor,
        paddingBefore,
        paddingAfter,
    } );


    const controls = (

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
                    {
                        idInput( id, onChangeId )
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
        </>
    );

    // add class names to blockProps
    const blockProps = useBlockProps( { className: sectionClassName, id: id } );
    // console.log( 'blockProps: ' + JSON.stringify( blockProps, null, 2 ) );

    // use if appending inner blocks directly into outer elem
    const innerBlocksProps = useInnerBlocksProps( blockProps, {
		// defaultBlock: { name: 'bsx-blocks/container' },
		directInsert: true,
		template: template,
		templateLock: false,
		templateInsertUpdatesSelection: true,
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
                    <section { ...innerBlocksProps }/>
                )
            }
            { controls }
        </>
    )
}
