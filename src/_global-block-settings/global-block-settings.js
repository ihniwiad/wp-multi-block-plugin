
// TODO: refactor, use external controls, use addClassName()


import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { 
    ToggleControl,
    TextControl, 
    PanelBody,
    SelectControl,
} from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import {
    InspectorControls, 
    InspectorAdvancedControls,
} from '@wordpress/block-editor';


import { addClassNames } from './../_functions/add-class-names.js';
import { 
    idInput,
    belowNavbarToggle,
    // touchFooterToggle,
    textShadowSelect,
    textSizeSelect,
    fontWeightSelect,
    // inverseTextColorToggle,
    // headingInheritTextColorToggle,
    // headingInheritFontWeightToggle,
    marginLeftSelect,
    marginRightSelect,
    marginBeforeSelect,
    marginAfterSelect,
    paddingBeforeSelect,
    paddingAfterSelect,
    paddingLeftSelect,
    paddingRightSelect,
    // bgColorSelect,
    // roundedToggle,
    // borderSelect,
    // borderStateSelect,
    textColorSelect,
} from './../_functions/controls.js';


//restrict to specific block names
const allowedBlocks = [
    'core/paragraph',
    'core/heading',
];


/**
 * Override the default edit UI to include a new block inspector control for
 * adding our custom control.
 *
 * @param {function|Component} BlockEdit Original component.
 *
 * @return {string} Wrapped component.
 */
export const addGlobalBlockSettings = createHigherOrderComponent( ( BlockEdit ) => {

    return ( props ) => {

        const {
            name,
            attributes,
            setAttributes,
            isSelected,
        } = props;

        const {
            id,
            textSize,
            textColor,
            fontWeight,
            textShadow,
            belowNavbar,
            marginBefore,
            marginAfter,
            marginLeft,
            marginRight,
            paddingBefore, 
            paddingAfter, 
            paddingLeft, 
            paddingRight,
            // additionaClassNames,
            className,
        } = attributes;


        // TEST – force editor to add class names to core blocks created by custom attributes
        // const addClassName = ( value ) => {
        //     // already existing class name(s) – might be undefined

        //     // const classNamesArr = typeof className !== 'undefined' ? className.split( ' ' ) : [];

        //     // ignore exiting class names to be able to reset once added class names (use custom setting for additional class names)
        //     const classNamesArr = typeof className !== 'undefined' ? className.split( ' ' ) : [];
        //     // class name value(s) to add (one or multiple space separated)
        //     const valuesArr = value.split( ' ' );
        //     valuesArr.forEach( ( value ) => {
        //         if ( classNamesArr.indexOf( value ) == -1 ) {
        //             // add class name if not already set (avoid infinite adding of equal class name)
        //             classNamesArr.push( value );
        //             setAttributes( { className: classNamesArr.join( ' ' ) } );
        //         }
        //     } );
        // }
        const toAddClassNames = addClassNames( {
            textSize,
            textColor,
            fontWeight,
            textShadow,
            belowNavbar,
            marginBefore,
            marginAfter,
            marginLeft,
            marginRight,
            paddingBefore, 
            paddingAfter, 
            paddingLeft, 
            paddingRight,
        }, 'bsxui-core-block-wrapper' );
        // if ( allowedBlocks.includes( props.name ) ) {
        //     addClassName( toAddClassNames );
        //     // console.log( 'props: ' + JSON.stringify( props, null, 2 ) );
        // }
        // /TEST


        // TEST 2
        // props.setAttributes( {
        //     className: 'TEST',
        // } );
        // /TEST 2


        const onChangeId = ( value ) => {
            setAttributes( { id: value } );
        };

        const onChangeTextSize = ( value ) => {
            setAttributes( { textSize: value } );
        };
        const onChangeTextColor = ( value ) => {
            setAttributes( { textColor: value } );
        };
        const onChangeFontWeight = ( value ) => {
            setAttributes( { fontWeight: value } );
        };
        const onChangeTextShadow = ( value ) => {
            setAttributes( { textShadow: value } );
        };

        const onChangeBelowNavbar = ( value ) => {
            setAttributes( { belowNavbar: value } );
        };
        
        const onChangeMarginBefore = ( value ) => {
            setAttributes( { marginBefore: value } );
        };
        const onChangeMarginAfter = ( value ) => {
            setAttributes( { marginAfter: value } );
        };
        const onChangeMarginLeft = ( value ) => {
            setAttributes( { marginLeft: value } );
        };
        const onChangeMarginRight = ( value ) => {
            setAttributes( { marginRight: value } );
        };

        const onChangePaddingBefore = ( value ) => {
            setAttributes( { paddingBefore: value } );
        };
        const onChangePaddingAfter = ( value ) => {
            setAttributes( { paddingAfter: value } );
        };
        const onChangePaddingLeft = ( value ) => {
            setAttributes( { paddingLeft: value } );
        };
        const onChangePaddingRight = ( value ) => {
            setAttributes( { paddingRight: value } );
        };

        // const onChangeAdditionaClassNames = ( value ) => {
        //     setAttributes( { additionaClassNames: value } );
        // };


        const wrappedBlockEdit = (
            <>
                {
                    allowedBlocks.includes( props.name ) && typeof toAddClassNames !== 'undefiend' && toAddClassNames ?
                    (
                        <div className={ toAddClassNames }>
                            <BlockEdit { ...props } />
                        </div>
                    )
                    :
                    (
                        <BlockEdit { ...props } />
                    )
                }
            </>
        );


        // If this block supports custom property and is currently selected, add our UI
        if ( allowedBlocks.includes( props.name ) && props.isSelected ) {
            return (
                <Fragment>
                    {
                        wrappedBlockEdit
                    }
                    <InspectorControls>
                        <PanelBody title={ __( 'BSX global settings', 'bsx-blocks' ) }>
                            {
                                idInput( id, onChangeId )
                            }
                            {
                                textSizeSelect( textSize, onChangeTextSize )
                            }
                            {
                                textColorSelect( textColor, onChangeTextColor )
                            }
                            {
                                fontWeightSelect( fontWeight, onChangeFontWeight )
                            }
                            {
                                textShadowSelect( textShadow, onChangeTextShadow )
                            }
                            {
                                marginBeforeSelect( marginBefore, onChangeMarginBefore )
                            }
                            {
                                marginAfterSelect( marginAfter, onChangeMarginAfter )
                            }
                            {
                                marginLeftSelect( marginLeft, onChangeMarginLeft )
                            }
                            {
                                marginRightSelect( marginRight, onChangeMarginRight )
                            }
                        </PanelBody>
                    </InspectorControls>
                    <InspectorAdvancedControls>
                        {
                            paddingLeftSelect( paddingLeft, onChangePaddingLeft )
                        }
                        {
                            paddingRightSelect( paddingRight, onChangePaddingRight )
                        }
                        {
                            paddingBeforeSelect( paddingBefore, onChangePaddingBefore )
                        }
                        {
                            paddingAfterSelect( paddingAfter, onChangePaddingAfter )
                        }
                        {
                            belowNavbarToggle( belowNavbar, onChangeBelowNavbar )
                        }
                    </InspectorAdvancedControls>
                </Fragment>
            );
        }

        /*
                            <TextControl 
                                label={ __( 'Additional class(es)', 'bsx-blocks' ) }
                                value={ additionaClassNames } 
                                onChange={ onChangeAdditionaClassNames }
                                help={ __( 'Use this field instead of WordPress native additional class(es)', 'bsx-blocks' ) }
                            />
        */

        return wrappedBlockEdit;
    };
}, 'addGlobalBlockSettings' );



/**
 * Filters registered block settings, extending attributes with our custom data.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
export function addAttribute( settings ) {

    /*
    // If this is a valid block
    if ( allowedBlocks.includes( settings.name ) ) {

        // Use Lodash's assign to gracefully handle if attributes are undefined
        settings.attributes = assign( settings.attributes, {
            additionalAttributes: {
                type: 'string',
            },
        } );
    }
    */


    if ( typeof settings.attributes !== 'undefined' && allowedBlocks.includes( settings.name ) ) {
    
        if ( typeof settings.attributes.id === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                id: {
                    type: 'string',
                },
            } );
        }
    
        if ( typeof settings.attributes.belowNavbar === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                belowNavbar: { 
                    type: 'boolean',
                }
            } );
        }
    
        if ( typeof settings.attributes.textSize === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                textSize: {
                    type: 'string',
                },
            } );
        }
    
        if ( typeof settings.attributes.textColor === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                textColor: {
                    type: 'string',
                },
            } );
        }
    
        if ( typeof settings.attributes.fontWeight === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                fontWeight: {
                    type: 'string',
                },
            } );
        }
    
        if ( typeof settings.attributes.textShadow === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                textShadow: {
                    type: 'string',
                },
            } );
        }
    
        if ( typeof settings.attributes.marginBefore === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                marginBefore: { 
                    type: 'string',
                }
            } );
        }
        if ( typeof settings.attributes.marginAfter === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                marginAfter: { 
                    type: 'string',
                }
            } );
        }
        if ( typeof settings.attributes.marginLeft === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                marginLeft: { 
                    type: 'string',
                }
            } );
        }
        if ( typeof settings.attributes.marginRight === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                marginRight: { 
                    type: 'string',
                }
            } );
        }
    
        if ( typeof settings.attributes.paddingBefore === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                paddingBefore: { 
                    type: 'string',
                }
            } );
        }
        if ( typeof settings.attributes.paddingAfter === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                paddingAfter: { 
                    type: 'string',
                }
            } );
        }
        if ( typeof settings.attributes.paddingLeft === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                paddingLeft: { 
                    type: 'string',
                }
            } );
        }
        if ( typeof settings.attributes.paddingRight === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                paddingRight: { 
                    type: 'string',
                }
            } );
        }
    
        /*if ( typeof settings.attributes.additionalAttributes === 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                additionalAttributes: {
                    type: 'string',
                },
            } );
        }*/
    
        // if ( typeof settings.attributes.dataTest === 'undefined' ) {
        //     settings.attributes = Object.assign( settings.attributes, {
        //         dataTest: {
        //             type: 'string',
        //         },
        //     } );
        // }

        // add custom props in case of several wp props
        /*
        if ( typeof settings.attributes.align !== 'undefined' ) {
            settings.attributes = Object.assign( settings.attributes, {
                textAlign: {
                    type: 'string',
                },
            } );
        }
        else {
            // TODO: remove attr?
        }
        */
    
    }


    return settings;

}// end addAttribute()


/**
 * Override props assigned to save component to inject our custom data.
 * This is only done if the component is a valid block type.
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
export function addSaveProps( extraProps, blockType, attributes ) {

    const { 
        id,
        textSize,
        textColor,
        fontWeight,
        textShadow,
        belowNavbar,
        marginBefore,
        marginAfter,
        marginLeft,
        marginRight,
        paddingBefore, 
        paddingAfter, 
        paddingLeft, 
        paddingRight,
        // dataTest,
        // additionaClassNames,
    } = attributes;

    // If the current block is valid, add our prop.
    if ( allowedBlocks.includes( blockType.name ) ) {
        //if ( attributes.additionalAttributes ) extraProps.additionalAttributes = attributes.additionalAttributes;

        if ( attributes.id ) extraProps.id = attributes.id;

        // if ( attributes.dataTest ) extraProps.dataTest = attributes.dataTest;

        // class names

        const classNames = typeof extraProps.className !== 'undefined' ? extraProps.className.split( ' ' ) : [];

        // if ( typeof textSize !== 'undefined' && !! textSize ) {
            
        //     if ( ! classNames.includes( textSize ) ) {
        //         // add (if not already set)
        //         classNames.push( textSize );
        //     }
        // }

        // if ( typeof textColor !== 'undefined' && !! textColor ) {
            
        //     if ( ! classNames.includes( 'text-' + textColor ) ) {
        //         // add (if not already set)
        //         classNames.push( 'text-' + textColor );
        //     }
        // }

        // if ( typeof fontWeight !== 'undefined' && !! fontWeight ) {
            
        //     if ( ! classNames.includes( 'font-weight-' + fontWeight ) ) {
        //         // add (if not already set)
        //         classNames.push( 'font-weight-' + fontWeight );
        //     }
        // }

        // if ( typeof textShadow !== 'undefined' && !! textShadow ) {
            
        //     if ( ! classNames.includes( 'text-shadow-' + textShadow ) ) {
        //         // add (if not already set)
        //         classNames.push( 'text-shadow-' + textShadow );
        //     }
        // }

        // if ( typeof belowNavbar !== 'undefined' && belowNavbar ) {
            
        //     if ( ! classNames.includes( 'below-navbar-content' ) ) {
        //         // add (if not already set)
        //         classNames.push( 'below-navbar-content' );
        //     }
        // }

        // check wp internal attributes, add custom class names for certain ones
        // NOTE: added class name will be updated but never removed (as WP currently does too)

        // textAlign
        const alignAllowedValues = [
            'left',
            'center',
            'right',
        ];
        const alignPrefix = 'text-';
        const textAlignAttrVal = attributes.textAlign != undefined ? attributes.textAlign : attributes.align;
        
        if ( !! textAlignAttrVal && alignAllowedValues.includes( textAlignAttrVal ) ) {
            classNames.push( alignPrefix + textAlignAttrVal );
        }
        else {
            for ( let i = 0; i < classNames.length; i++ ) {
                if ( 
                    classNames[ i ].indexOf( alignPrefix ) == 0 
                    && alignAllowedValues.includes( classNames[ i ].substring( alignPrefix.length ) ) 
                ) {
                    classNames.splice( i, 1 );
                }
            }
        };


        // if ( typeof marginBefore !== 'undefined' && !! marginBefore && marginBefore == marginAfter ) {
        //     if ( ! ( classNames.includes( 'my-' + marginBefore ) ) ) {
        //         // add (if not already set)
        //         classNames.push( 'my-' + marginBefore );
        //     }
        // }
        // else {
        //     if ( typeof marginBefore !== 'undefined' && !! marginBefore ) {
                
        //         if ( ! ( classNames.includes( 'mt-' + marginBefore ) || classNames.includes( 'my-' + marginBefore ) ) ) {
        //             // add (if not already set)
        //             classNames.push( 'mt-' + marginBefore );
        //         }

        //     }
        //     if ( typeof marginAfter !== 'undefined' && !! marginAfter ) {
                
        //         if ( ! ( classNames.includes( 'mb-' + marginAfter ) || classNames.includes( 'my-' + marginAfter ) ) ) {
        //             // add (if not already set)
        //             classNames.push( 'mb-' + marginAfter );
        //         }

        //     }
        // }

        // if ( typeof additionaClassNames !== 'undefined' && additionaClassNames ) {

        //     const additionaClassNamesArr = additionaClassNames.split( ' ' );
        //     additionaClassNamesArr.forEach( ( additionaClassName ) => {
        //         if ( ! classNames.includes( additionaClassName ) ) {
        //             // add (if not already set)
        //             classNames.push( additionaClassName );
        //         }
        //     } );
        // }


        // extraProps.className = classNames.join( ' ' );

        extraProps.className = addClassNames( {
            textSize,
            textColor,
            fontWeight,
            textShadow,
            belowNavbar,
            marginBefore,
            marginAfter,
            marginLeft,
            marginRight,
            paddingBefore, 
            paddingAfter, 
            paddingLeft, 
            paddingRight,
        }, classNames.join( ' ' ) );

    }

    return extraProps;

}// end addSaveProps()

// on register
addFilter( 
    'blocks.registerBlockType', 
    'bsx-blocks/custom-attributes', 
    addAttribute 
);



// on get editor class name
// Our filter function
// function setBlockCustomClassName( className, blockName ) {
//     console.log( 'setBlockCustomClassName() – blockName: ' + blockName + ', className: ' + className )
//     return blockName === 'core/paragraph' ? className + ' TEST-3' : className;
// }
 
// // Adding the filter
// addFilter(
//     'blocks.getBlockDefaultClassName',
//     'bsx-blocks/set-block-custom-class-name-2',
//     setBlockCustomClassName
// );



// on edit
addFilter( 
    'editor.BlockEdit', 
    'bsx-blocks/add-global-block-settings', 
    addGlobalBlockSettings 
);

// blocks.getSaveElement

// on save
addFilter( 
    'blocks.getSaveContent.extraProps', 
    'bsx-blocks/apply-extra-attributes', 
    addSaveProps 
);
