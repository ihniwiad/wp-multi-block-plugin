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
    SVG, 
    Path,
} from '@wordpress/components';
// import { useSelect } from '@wordpress/data';
// import { store as blockEditorStore } from '@wordpress/block-editor';


import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';
// import { getTemplate } from './../_functions/utilities.js';
import { 
    buttonStateSelect,
    stateTypeSelect,
    sizeSelect,
    linkUrlInput,
    ignoreMailtoSpamProtectionToggle,
    targetToggle,
    disabledToggle,
    relInput,
    dataFnInput,
    marginLeftSelect,
    marginRightSelect,
    marginBeforeSelect,
    marginAfterSelect,
    typeInput,
    onclickInput,
} from './../_functions/controls.js';


// utils
import {
	makeButtonClassNames,
	isEmailFormat,
} from './utils';


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
export default function Edit( { attributes, setAttributes, isSelected } ) {

	// const { getBlock } = useSelect( blockEditorStore );

	const {
        href,
        content,
        target,
        rel,
        state,
        stateType,
        size,
        dataFn,
        marginLeft,
        marginRight,
        marginBefore,
        marginAfter,
        ignoreMailtoSpamProtection,
        disabled,
        type,
        onclick,
    } = attributes;

	// const hasInnerBlocks = () => {
	// 	const block = getBlock( clientId );
	// 	if ( typeof block.innerBlocks === 'undefined' ) return false;
	// 	return block.innerBlocks.length > 0;
	// }

	// let template = getTemplate( templates, templateName ).template;

    const checkEmail = isEmailFormat( href );
    const hrefIsEmail = checkEmail.valid
    // const hrefIsEmailIsContent = checkEmail.valid && href == 'mailto:' + content;
    let hrefIsEmailIsContent = hrefIsEmail && ( href == 'mailto:' + content || ( typeof content == 'string' && content.length == 0 ) );

    const onChangeContent = ( value ) => {
        setAttributes( { content: value } );
    };
    const onChangeHref = ( value ) => {
        // TODO: check hrefIsEmailIsContent
        const checkEmail = isEmailFormat( href );
        const hrefIsEmail = checkEmail.valid
        hrefIsEmailIsContent = hrefIsEmail && ( href == 'mailto:' + content || ( typeof content == 'string' && content.length == 0 ) );
        setAttributes( { href: value } );
    };
    const onChangeTarget = ( value ) => {
        setAttributes( { target: !! value ? '_blank' : '' } );
    };
    const onChangeRel = ( value ) => {
        setAttributes( { rel: value } );
    };
    const onChangeState = ( value ) => {
        setAttributes( { state: value } );
    };
    const onChangeStateType = ( value ) => {
        setAttributes( { stateType: value } );
    };
    const onChangeSize = ( value ) => {
        setAttributes( { size: value } );
    };
    const onChangeDataFn = ( value ) => {
        setAttributes( { dataFn: value } );
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

    const onChangeDisabled = ( value ) => {
        setAttributes( { disabled: value } );
    };

    const onChangeType = ( value ) => {
        setAttributes( { type: value } );
    };

    const onChangeOnclick = ( value ) => {
        setAttributes( { onclick: value } );
    };

    // exclude hrefIsEmailIsContent here to keep correct button title shown
    let buttonClassNames = makeButtonClassNames( { 
        state, 
        stateType, 
        size,
        // ignoreMailtoSpamProtection: true, // skip in Editor (edit.js)
    } );
    buttonClassNames = addClassNames( {
        marginLeft, 
        marginRight, 
        marginBefore,
        marginAfter,
        disabled,
    }, buttonClassNames );

    // console.log( 'content: ' + content );
    // console.log( '-- typeof content: ' + typeof content );
    // console.log( '-- content.length: ' + content.length );
    // console.log( '-- hrefIsEmailIsContent: ' + hrefIsEmailIsContent );

    // get content if is empty since content is spam protected email, get content from href instead of from html
    if ( ! ignoreMailtoSpamProtection && ! isSelected && typeof content == 'string' && content.length == 0 && hrefIsEmailIsContent ) {
        // recreate button content (containing e-mail adress) from href mailto (HTML has been saved empty for spam protection)
        setAttributes( { content: href.substring( 7 ) } );

	    // remove .create-mt from className
	    if ( typeof className !== 'undefined' && className.indexOf( 'create-mt' ) !== -1 ) {
	        let newClassName = className.split( 'create-mt' ).join( '' ).trim();
	        newClassName = newClassName.replace( '  ', ' ' );
	        // console.log( '---- new class name: ' + newClassName )
	        setAttributes( { className: newClassName } );
	    }
	    // else console.log( '---- no class name change' )
    }

    const TagName = href || state == 'text-link' ? 'a' : 'button';


    const controls = (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Button link settings', 'bsx-blocks' ) }>
                    {
                        linkUrlInput( href, onChangeHref )
                    }
                    {
                        hrefIsEmail && (
                            <>
                                {
                                    ignoreMailtoSpamProtectionToggle( ignoreMailtoSpamProtection, onChangeIgnoreMailtoSpamProtection )
                                }
                            </>
                        )
                    }
                    {
                        targetToggle( target, onChangeTarget )
                    }
                    {
                        disabledToggle( disabled, onChangeDisabled )
                    }
                    {
                        relInput( rel, onChangeRel )
                    }
                    {
                        dataFnInput( dataFn, onChangeDataFn )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Button appearance', 'bsx-blocks' ) }>
                    {
                        buttonStateSelect( state, onChangeState )
                    }
                    {
                        stateTypeSelect( stateType, onChangeStateType )
                    }
                    {
                        sizeSelect( size, onChangeSize )
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
            <InspectorAdvancedControls>
                {
                    typeInput( type, onChangeType )
                }
                {
                    onclickInput( onclick, onChangeOnclick )
                }
            </InspectorAdvancedControls>
        </>
	);

    // add class names to blockProps
    const blockProps = useBlockProps( { className: buttonClassNames, 'data-tag-name': TagName, 'data-type': type, 'data-onclick': onclick } );
	// console.log( 'blockProps: ' + JSON.stringify( blockProps, null, 2 ) );

	// use if appending inner blocks directly into outer elem
	// const innerBlocksProps = useInnerBlocksProps( blockProps, {
	// } );

	return (
		<>
			<RichText
                // tagName={ href || state == 'text-link' ? 'a' : 'button' }
                tagName={ 'a' }
                multiline={ false }
                placeholder={ __( 'Add Title...', 'bsx-blocks' ) }
                value={ content }
                onChange={ onChangeContent }
                allowedFormats={ [] }
                keepPlaceholderOnFocus
                href={ 'javascript:void( 0 );' }
                { ...blockProps }
            />
			{ controls }
		</>
	);
}
