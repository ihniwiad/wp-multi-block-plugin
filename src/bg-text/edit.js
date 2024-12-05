import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
    InspectorControls,
    RichText,
	// useInnerBlocksProps, // use if appending inner blocks directly into outer elem
} from '@wordpress/block-editor';
import { 
    PanelBody,
} from '@wordpress/components';
// import { useSelect } from '@wordpress/data';
// import { store as blockEditorStore } from '@wordpress/block-editor';


import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';
// import { getTemplate } from './../_functions/utilities.js';
import { 
    nodeNameSelect,
    textColorSelect,
    bgColorSelect,
    marginLeftSelect,
    marginRightSelect,
    marginBeforeSelect,
    marginAfterSelect,
} from './../_functions/controls.js';


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

	// const { getBlock } = useSelect( blockEditorStore );

	const {
        nodeName,
        content,
        textColor,
        bgColor,
        marginLeft,
        marginRight,
        marginBefore,
        marginAfter,
	} = attributes;

	// const hasInnerBlocks = () => {
	// 	const block = getBlock( clientId );
	// 	if ( typeof block.innerBlocks === 'undefined' ) return false;
	// 	return block.innerBlocks.length > 0;
	// }

	// let template = getTemplate( templates, templateName ).template;

    const onChangeNodeName = ( value ) => {
        setAttributes( { nodeName: value } );
    };

    const onChangeContent = ( value ) => {
        setAttributes( { content: value } );
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

    const onChangeTextColor = ( value ) => {
        setAttributes( { textColor: value } );
    };
    const onChangeBgColor = ( value ) => {
        setAttributes( { bgColor: value } );
    };

    const outerClassNames = addClassNames( {
        marginLeft, 
        marginRight, 
        marginBefore,
        marginAfter,
    }, 'bg-text-parent');

    const innerClassNames = addClassNames( {
        textColor,
        bgColor,
    }, 'bg-text' );

    const TagName = nodeName;


    const controls = (
    	<InspectorControls>
            <PanelBody title={ __( 'Settings', 'bsx-blocks' ) }>
                {
                    nodeNameSelect( nodeName, onChangeNodeName, [ 'div', 'span', 'h1', 'h2', 'h3', 'h4', 'h4', 'h6' ] )
                }
            </PanelBody>

            <PanelBody title={ __( 'Appearance', 'bsx-blocks' ) }>
                {
                    // stateSelect( state, onChangeState )
                }
                {
                    bgColorSelect( bgColor, onChangeBgColor )
                }
                {
                    textColorSelect( textColor, onChangeTextColor )
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
	);

    // add class names to blockProps
    const blockProps = useBlockProps( { className: outerClassNames } );
	// console.log( 'blockProps: ' + JSON.stringify( blockProps, null, 2 ) );

	return (
		<>
            {
                (
                    <TagName { ...blockProps }>
                        <RichText
                            tagName={ 'span' }
                            className={ innerClassNames }
                            multiline={ false }
                            placeholder={ __( 'Add Text...', 'bsx-blocks' ) }
                            value={ content }
                            onChange={ onChangeContent }
                            allowedFormats={ [] }
                            keepPlaceholderOnFocus
                        />
                    </TagName>
                )
            }
			{ controls }
		</>
	);
}
