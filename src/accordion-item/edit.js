import { __ } from '@wordpress/i18n';
import {
    RichText,
	useBlockProps,
    InnerBlocks,
    InspectorControls,
    // InspectorAdvancedControls,
    // BlockControls,
    // AlignmentToolbar,
    // useInnerBlocksProps,
} from '@wordpress/block-editor';
import { 
    PanelBody,
    // SelectControl,
    ToggleControl,
    // TextControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';


import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';
// import { getTemplate } from './../_functions/utilities.js';
import { 
    paddingBeforeSelect,
    paddingAfterSelect,
    paddingLeftSelect,
    paddingRightSelect,
} from './../_functions/controls.js';


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
export default function Edit( { attributes, clientId, setAttributes } ) {

	const { getBlock, getBlockRootClientId } = useSelect( blockEditorStore );

	const {
        uniqueId,
        title,
        headingLevel,
        open,
        paddingBefore,
        paddingAfter,
        paddingLeft,
        paddingRight,
    } = attributes;

    // Generate a unique ID if it doesn't exist.
    // Using clientID, store to use in save() function.
    useEffect(() => {
        if (!uniqueId) {
            setAttributes({ uniqueId: `acc-${clientId}` });
        }
    }, [clientId, uniqueId, setAttributes]);

    // // get block parent attributes
    // const parentAttributes = useSelect(
    //     ( select ) => {
    //         const { getBlock, getBlockRootClientId } = select( blockEditorStore );
    //         const parentId = getBlockRootClientId( clientId );
    //         if ( parentId ) {
    //             const parentBlock = getBlock( parentId );
    //             return parentBlock?.attributes || {};
    //         }
    //         return {};
    //     },
    //     [ clientId ]
    // );

    // // Synchronize headingLevel with parent block's headingLevel
    // useEffect(() => {
    //     if ( parentAttributes.headingLevel && parentAttributes.headingLevel !== headingLevel ) {
    //         setAttributes( { headingLevel: parentAttributes.headingLevel } );
    //     }
    // }, [ parentAttributes.headingLevel, headingLevel, setAttributes ]);


	// let template = getTemplate( templates, templateName ).template;

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

    const onChangeOpen = ( value ) => {
        setAttributes( { open: value } );
    };

    const liClassName = addClassNames( { 
        open,
        paddingBefore, 
        paddingAfter, 
        paddingLeft, 
        paddingRight,
    }, 'accordion-item' );

    const btnClassName = addClassNames( { 
        open,
    }, 'acc-header' );

    const TagName = 'li';
    const HeadingTagName = `h${headingLevel || 3}`;

    // Generate unique IDs using clientId
    const triggerId = `${uniqueId}-trig`;
    const contentId = `${uniqueId}-cont`;

    const controls = (
        <InspectorControls>
            <PanelBody title={ __( 'Settings', 'bsx-blocks' ) }>
                <ToggleControl
                    label={ __( 'Item is opened', 'bsx-blocks' ) }
                    checked={ !! open }
                    onChange={ onChangeOpen }
                    help={ __( 'If enabled, the accordion item is opened by default.', 'bsx-blocks' ) }
                />
            </PanelBody>
            <PanelBody title={ __( 'Padding', 'bsx-blocks' ) }>
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
            </PanelBody>
        </InspectorControls>
	);

    // add class names to blockProps
    const blockProps = useBlockProps( { className: liClassName } );

    // // use if appending inner blocks directly into outer elem
    // const innerBlocksProps = useInnerBlocksProps( blockProps, {
    // } );

/*
    <!-- Old BSX markup. You need to replace the ID-stub “acc-1” with a unique string. -->
    <ul class="list-unstyled" data-acc="">
        <li data-acc-itm="">
            <section>
                <h3 class="h4 my-0">
                    <button class="acc-header" id="acc-1-0-trig" data-bsx="acc" aria-controls="acc-1-0-cont" aria-expanded="false">
                        <span class="acc-header-text">Consequat</span><span class="acc-header-icon"></span>
                    </button>
                </h3>
                <div class="bsx-acc-content" id="acc-1-0-cont" role="region" aria-labeledby="acc-1-0-trig">
                    <div class="bsx-acc-content-inner" data-acc-cnt-inr="">
                        <p>Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>
                    </div>
                </div>
            </section>
        </li>
    </ul>


    <!-- Bootstrap 5 accordion. You need to replace the ID(-stub) “faq” with a unique string. -->
    <li class="accordion-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h3 class="accordion-header">
            <button class="accordion-button flex-row-reverse collapsed ps-3" type="button" data-bs-toggle="collapse" data-bs-target="#faq-0" aria-expanded="false" aria-controls="faq-0">
                <span class="mb-0 d-flex flex-grow-1 ps-2 h4" itemprop="name">Welche Ausbildung ist erforderlich?</span>
            </button>
        </h3>
        <div class="accordion-collapse collapse" id="faq-0"  itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div class="accordion-body ps-5 pb-0" itemprop="text">
                <p>Ein Studium in Betriebswirtschaftslehre, Finanzwesen oder einem ähnlichen Bereich.</p>
            </div>
        </div>
    </li>
*/

	return (
		<TagName { ...blockProps } data-acc-itm="">
            <section>
                <HeadingTagName class="my-0">
                    <button class={ btnClassName } id={triggerId} data-bsx="acc" aria-controls={ contentId } aria-expanded="true">
                        <RichText
                            identifier="title"
                            tagName="span"
                            className="acc-header-text"
                            onChange={ ( nextTitle ) =>
                                setAttributes( { title: nextTitle } )
                            }
                            value={ title }
                            aria-label={ __( 'Accordion item title' ) }
                            placeholder={ __( 'Accordion Title' ) }
                        /><span class="acc-header-icon"></span>
                    </button>
                </HeadingTagName>
                <div class="bsx-acc-content open" id={ contentId } role="region" aria-labeledby={triggerId}>
                    <div class="bsx-acc-content-inner" data-acc-cnt-inr="">
                        <InnerBlocks/>
                    </div>
                </div>
            </section>
			{ controls }
		</TagName>
	);
}
