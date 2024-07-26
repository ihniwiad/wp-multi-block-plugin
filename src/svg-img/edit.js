import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
    InspectorControls,
    InspectorAdvancedControls,
    RichText,
    PlainText,
    BlockControls,
	// useInnerBlocksProps, // use if appending inner blocks directly into outer elem
} from '@wordpress/block-editor';
import { 
    PanelBody,
    SVG, 
    Path,
    SelectControl,
    TextControl,
    TextareaControl,
} from '@wordpress/components';
import { RawHTML } from '@wordpress/element';
// import { useSelect } from '@wordpress/data';
// import { store as blockEditorStore } from '@wordpress/block-editor';


import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';
// import { getTemplate } from './../_functions/utilities.js';
import { 
    stateSelect,
    linkUrlInput,
    targetToggle,
    relInput,
    marginBeforeSelect,
    marginAfterSelect,
    verticalAlignSelect,
    nodeNameSelect,
    textAlignToolbar,
    displaySelect,
} from './../_functions/controls.js';


// utils
import unwrapContent from './utils';


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
        content,
        nodeName,
        href,
        target,
        rel,
        state,
        marginBefore,
        marginAfter,
        verticalAlign,
        textAlign,
        display,
	} = attributes;

	// const hasInnerBlocks = () => {
	// 	const block = getBlock( clientId );
	// 	if ( typeof block.innerBlocks === 'undefined' ) return false;
	// 	return block.innerBlocks.length > 0;
	// }

	// let template = getTemplate( templates, templateName ).template;


    // unwrap content (remove wrapping outer element)
    // setAttributes( { content: unwrapContent( content ) } );
    let unwrappedContent = unwrapContent( content );


    const onChangeContent = ( value ) => {
        // reset initial unvrapped content
        unwrappedContent = '';
        setAttributes( { content: value } );
    };
    const onChangeHref = ( value ) => {
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

    const onChangeMarginBefore = ( value ) => {
        setAttributes( { marginBefore: value } );
    };
    const onChangeMarginAfter = ( value ) => {
        setAttributes( { marginAfter: value } );
    };

    const onChangeVerticalAlign = ( value ) => {
        setAttributes( { verticalAlign: value } );
    };
    const onChangeNodeName = ( value ) => {
        setAttributes( { nodeName: value } );
    };
    const onChangeTextAlign = ( value ) => {
        setAttributes( { textAlign: value } );
    };
    const onChangeDisplay = ( value ) => {
        setAttributes( { display: value } );
    };


    const className = addClassNames( {
        state,
        marginBefore,
        marginAfter,
        verticalAlign,
        textAlign,
        display,
    }, 'svg-wrap' );

    // const saveAttributes = makeSaveAttributes( {
    //     href: href, 
    //     target: target, 
    //     rel: href ? ( rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' ) : '',
    // } );

    let TagName = !! nodeName ? nodeName : '';
    if ( !! href ) {
        TagName = 'a';
    }


    const controls = (
    	<>
            <BlockControls>
                {
                    textAlignToolbar( textAlign, onChangeTextAlign )
                }
            </BlockControls>
            <InspectorControls>

                <PanelBody title={ __( 'Content', 'bsx-blocks' ) }>
                    <TextareaControl 
                        label={ __( 'SVG code', 'bsx-blocks' ) }
                        value={ unwrappedContent } 
                        onChange={ onChangeContent }
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
                <PanelBody title={ __( 'Link', 'bsx-blocks' ) }>
                    {
                        linkUrlInput( href, onChangeHref )
                    }
                    {
                        targetToggle( target, onChangeTarget )
                    }
                    {
                        relInput( rel, onChangeRel )
                    }
                </PanelBody>
            </InspectorControls>
            <InspectorAdvancedControls>
                {
                    verticalAlignSelect( verticalAlign, onChangeVerticalAlign )
                }
                {
                    displaySelect( display, onChangeDisplay )
                }
                {
                    nodeNameSelect( nodeName, onChangeNodeName, [ '' , 'figure', 'div', 'span' ] )
                }
            </InspectorAdvancedControls>
    	</>
	);

    // add class names to blockProps
    const blockProps = useBlockProps( { className: className } );
	// console.log( 'blockProps: ' + JSON.stringify( blockProps, null, 2 ) );

	return (
		<>
            {
                ! content ?
                (
                    <div className="bsxui-img-upload-placeholder">
                        { __( 'Add SVG code (right column)', 'bsx-blocks' ) }
                    </div>
                )
                :
                (
                    <>
                        {
                            TagName ? 
                            (
                                <TagName { ...blockProps }>
                                    <RawHTML>{ unwrappedContent ? unwrappedContent : content }</RawHTML>
                                </TagName>
                            )
                            : 
                            (
                                <RawHTML { ...blockProps }>{ unwrappedContent ? unwrappedContent : content }</RawHTML>
                            )
                        }
                    </>
                )
            }
			{ controls }
		</>
	);
}
