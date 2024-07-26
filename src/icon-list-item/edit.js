import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InspectorControls,
    RichText,
    useInnerBlocksProps, // use if appending inner blocks directly into outer elem
} from '@wordpress/block-editor';
import { 
    PanelBody,
    SVG, 
    Path,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';


import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';
// import { getTemplate } from './../_functions/utilities.js';
import { 
    textColorSelect,
    iconFamilySelect,
    iconKeyInput,
    marginBeforeSelect,
    marginAfterSelect,
} from './../_functions/controls.js';


// utils
// import fooBar from './utils';


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
        content,
        iconKey,
        iconFamily,
        calcIconFamily,
        itemTextColor,
        iconTextColor,
        calcIconTextColor,
    } = attributes;

    // const hasInnerBlocks = () => {
    //     const block = getBlock( clientId );
    //     if ( typeof block.innerBlocks === 'undefined' ) return false;
    //     return block.innerBlocks.length > 0;
    // }


    // get block parent attributes
    const parentBlock = getBlock(
        getBlockRootClientId( clientId )
    );
    const parentAttributes = parentBlock.attributes;

    // let template = getTemplate( templates, templateName ).template;


    // console.log( JSON.stringify( parentAttributes, null, 2 ) );
    // console.log( JSON.stringify( attributes, null, 2 ) );

    // initial settings
    if ( ! calcIconFamily ) {
        setAttributes( {
            calcIconFamily: ( ! iconFamily && typeof parentAttributes.globalIconFamily != 'undefined' ) ? parentAttributes.globalIconFamily : '',
        } );
    }
    if ( ! calcIconTextColor && ! itemTextColor ) {
        // do not set icon color if item color is set, inherit icon color instead
        setAttributes( { 
            calcIconTextColor: ( ! iconTextColor && typeof parentAttributes.globalIconTextColor != 'undefined' ) ? parentAttributes.globalIconTextColor : '',
        } );
    }

    const onChangeContent = ( value ) => {
        setAttributes( { content: value } );
    };

    const onChangeIconKey = ( value ) => {
        setAttributes( { iconKey: value } );
    };
    const onChangeIconFamily = ( value ) => {
        // get icon family from item config or from parent config
        setAttributes( {
            iconFamily: value,
            calcIconFamily: ( ! value && typeof parentAttributes.globalIconFamily != 'undefined' ) ? parentAttributes.globalIconFamily : value,
        } );
    };
    const onChangeIconTextColor = ( value ) => {
        setAttributes( {
            iconTextColor: value,
            calcIconTextColor: ( ! value && typeof parentAttributes.globalIconTextColor != 'undefined' ) ? parentAttributes.globalIconTextColor : value,
        } );
    };

    const onChangeItemTextColor = ( value ) => {
        // reset icon color if all item has text color
        setAttributes( {
            itemTextColor: value,
            iconTextColor: '',
            calcIconTextColor: '',
        } );
    };

    const itemClassNames = addClassNames( {
        textColor: itemTextColor,
    } );

    const iconClassNames = addClassNames( {
        textColor: calcIconTextColor,
    }, 'fa-li ' + 'fa' + calcIconFamily + ' fa-' + iconKey );


    const controls = (
        <InspectorControls>
            <PanelBody title={ __( 'Icon Appearance', 'bsx-blocks' ) }>
                {
                    iconKeyInput( iconKey, onChangeIconKey )
                }
                {
                    iconFamilySelect( iconFamily, onChangeIconFamily )
                }
                {
                    textColorSelect( iconTextColor, onChangeIconTextColor, [], __( 'Icon Color', 'bsx-blocks' ) )
                }
            </PanelBody>
            <PanelBody title={ __( 'Item Appearance', 'bsx-blocks' ) }>
                {
                    textColorSelect( itemTextColor, onChangeItemTextColor, [], __( 'Item Color', 'bsx-blocks' ) )
                }
            </PanelBody>
        </InspectorControls>
    );

    // add class names to blockProps
    const blockProps = useBlockProps( { className: itemClassNames } );
    // console.log( 'blockProps: ' + JSON.stringify( blockProps, null, 2 ) );

    // use if appending inner blocks directly into outer elem
    const innerBlocksProps = useInnerBlocksProps( blockProps, {
        // renderAppender: false,
        // __unstableDisableDropZone: true,
    } );

    return (
        <>
            <li { ...innerBlocksProps }>
                <i class={ iconClassNames } aria-hidden="true"></i>
                <RichText
                    tagName="span"
                    multiline={ false }
                    placeholder={ __( 'Add text...', 'bsx-blocks' ) }
                    value={ content }
                    onChange={ onChangeContent }
                    allowedFormats={ [] }
                />
            </li>
            { innerBlocksProps.children }
            { controls }
        </>
    );
}
