/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';

/**
 * @return {Element} Element to render.
 */
export default function save( { attributes, clientId } ) {

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


    const liClassName = addClassNames( { 
        paddingBefore, 
        paddingAfter, 
        paddingLeft, 
        paddingRight,
    }, 'accordion-item' );

    const btnClassName = addClassNames( { 
        open,
    }, 'acc-header' );

    const contentClassName = addClassNames( { 
        open,
    }, 'bsx-acc-content' );

    const saveAttributes = makeSaveAttributes( {
        // 'data-acc-itm': 'true',
    } );

    const TagName = 'li';
    const HeadingTagName = `h${headingLevel || 3}`;

    // Generate unique IDs using clientId
    const triggerId = `${uniqueId}-trig`;
    const contentId = `${uniqueId}-cont`;

/*
    <!-- Old BSX markup. You need to replace the ID-stub “acc-1” with a unique string. -->
    <ul class="list-unstyled" data-acc="">
        <li data-acc-itm="">
            <section>
                <h3 class="my-0">
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
        <h3 class="my-0">
            <button class="acc-header" type="button" aria-expanded="false" aria-controls="faq-0">
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

    // TODO: ids, heading level

	return (
		<TagName { ...useBlockProps.save( { className: liClassName, ...saveAttributes } ) } data-acc-itm="" itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
            <section>
                <HeadingTagName class="h4 my-0">
                    <button class={ btnClassName } id={triggerId} data-bsx="acc" aria-controls={ contentId } aria-expanded={ open ? 'true' : 'false' } itemprop="name">
                        <span class="acc-header-text" itemprop="name"><RichText.Content value={ title } /></span><span class="acc-header-icon"></span>
                    </button>
                </HeadingTagName>
                <div class={ contentClassName } id={ contentId } role="region" aria-labeledby={triggerId} itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div class="bsx-acc-content-inner" itemprop="text" data-acc-cnt-inr="">
                        <InnerBlocks.Content />
                    </div>
                </div>
            </section>
		</TagName>

		// <TagName { ...useBlockProps.save( { className: liClassName, ...saveAttributes } ) } itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        //     <h3 class="accordion-header">
        //         <button class="accordion-button flex-row-reverse collapsed ps-3" type="button" data-bs-toggle="collapse" data-bs-target="#faq-0" aria-expanded="false" aria-controls="faq-0">
        //             <span class="mb-0 d-flex flex-grow-1 ps-2 h4" itemprop="name"><RichText.Content value={ title } /></span>
        //         </button>
        //     </h3>
        //     <div class="accordion-collapse collapse" id="faq-0"  itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        //         <div class="accordion-body ps-5 pb-0" itemprop="text">
        //             <InnerBlocks.Content />
        //         </div>
        //     </div>
        // </TagName>
	);
}
