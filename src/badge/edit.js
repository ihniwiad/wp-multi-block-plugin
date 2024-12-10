import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
    InspectorControls,
    RichText,
	// useInnerBlocksProps, // use if appending inner blocks directly into outer elem
} from '@wordpress/block-editor';
import { 
    PanelBody,
    SVG, 
    Path,
    SelectControl,
} from '@wordpress/components';
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
    marginLeftSelect,
    marginRightSelect,
    marginBeforeSelect,
    marginAfterSelect,
    textColorSelect,
    bgColorSelect,
    iconFamilySelect,
    iconKeyInput,
} from './../_functions/controls.js';


// utils
import makeBadgeClassNames from './utils';


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
        href,
        content,
        state,
        badgeType,
        marginLeft,
        marginRight,
        marginBefore,
        marginAfter,
        textColor,
        bgColor,
        iconKey,
        iconFamily,
	} = attributes;

	// const hasInnerBlocks = () => {
	// 	const block = getBlock( clientId );
	// 	if ( typeof block.innerBlocks === 'undefined' ) return false;
	// 	return block.innerBlocks.length > 0;
	// }

    const onChangeContent = ( value ) => {
        setAttributes( { content: value } );
    };
    const onChangeHref = ( value ) => {
        setAttributes( { href: value } );
    };
    // const onChangeTarget = ( value ) => {
    //     setAttributes( { target: !! value ? '_blank' : '' } );
    // };
    // const onChangeRel = ( value ) => {
    //     setAttributes( { rel: value } );
    // };
    const onChangeState = ( value ) => {
        setAttributes( { state: value } );
    };
    const onChangeBadgeType = ( value ) => {
        setAttributes( { badgeType: value } );
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

    const onChangeIconKey = ( value ) => {
        setAttributes( { iconKey: value } );
    };
    const onChangeIconFamily = ( value ) => {
        setAttributes( { iconFamily: value } );
    };

    let badgeClassNames = makeBadgeClassNames( { 
        state, 
        badgeType,
    } );
    badgeClassNames = addClassNames( {
        marginLeft, 
        marginRight, 
        marginBefore,
        marginAfter,
        textColor,
        bgColor,
    }, badgeClassNames );

    if ( ! iconKey ) {
        badgeClassNames += ' badge-content';
    }

    const TagName = href ? 'a' : 'span';
    const iconFamilyClassName = ( !! iconFamily ) ? 'fa' + iconFamily : 'fa';
    const iconClassNames = iconFamilyClassName + ' ' + ( iconKey ? 'fa-' + iconKey : '' ) + ' pr-1';


    const controls = (
    	<InspectorControls>
            <PanelBody title={ __( 'Settings', 'bsx-blocks' ) }>
                {
                    linkUrlInput( href, onChangeHref )
                }
                {
                    // targetToggle( target, onChangeTarget )
                }
                {
                    // relInput( rel, onChangeRel )
                }
            </PanelBody>

            <PanelBody title={ __( 'Appearance', 'bsx-blocks' ) }>
                {
                    stateSelect( state, onChangeState )
                }
                <SelectControl label={ __( 'Type', 'bsx-blocks' ) }
                    value={ badgeType }
                    onChange={ onChangeBadgeType }
                    options={ [
                        { value: '', label: __( '– unset –', 'bsx-blocks' ) },
                        { value: 'pill', label: __( 'Pill', 'bsx-blocks' ) },
                    ] }
                />
                {
                    textColorSelect( textColor, onChangeTextColor )
                }
                {
                    bgColorSelect( bgColor, onChangeBgColor )
                }
            </PanelBody>

            <PanelBody title={ __( 'Icon', 'bsx-blocks' ) }>
                {
                    iconKeyInput( iconKey, onChangeIconKey )
                }
                {
                    iconFamilySelect( iconFamily, onChangeIconFamily )
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
    const blockProps = useBlockProps( { className: badgeClassNames } );
	// console.log( 'blockProps: ' + JSON.stringify( blockProps, null, 2 ) );

	return (
		<>
            {
                iconKey ? (
                    <TagName { ...blockProps }>
                        <span className={ iconClassNames } aria-hidden="true"></span>
                        <RichText
                            tagName={ 'span' }
                            multiline={ false }
                            placeholder={ __( 'Add Text...', 'bsx-blocks' ) }
                            value={ content }
                            onChange={ onChangeContent }
                            allowedFormats={ [] }
                            keepPlaceholderOnFocus
                            href={ 'javascript:void( 0 );' }
                        />
                    </TagName>
                )
                :
                (
                    <>
                        <RichText
                            tagName={ TagName }
                            className={ badgeClassNames }
                            multiline={ false }
                            placeholder={ __( 'Add Text...', 'bsx-blocks' ) }
                            value={ content }
                            onChange={ onChangeContent }
                            allowedFormats={ [] }
                            keepPlaceholderOnFocus
                            href={ 'javascript:void( 0 );' }
                            { ...blockProps }
                        />
                    </>
                )
            }
			{ controls }
		</>
	);
}
