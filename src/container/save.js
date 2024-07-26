/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';

// utils
import makeContainerClassNames from './utils';

/**
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

    const {
        // className,
        isFluid,
        containerBreakpoint,
        belowNavbar,
        marginBefore,
        marginAfter,
        paddingBefore,
        paddingAfter,
        paddingLeft,
        paddingRight,
        sized,
    } = attributes;

    let containerClassName = makeContainerClassNames( {
        isFluid, 
        containerBreakpoint, 
        sized, 
    } );
    
    containerClassName = addClassNames( {
        belowNavbar, 
        marginBefore, 
        marginAfter, 
        paddingBefore, 
        paddingAfter,
        paddingLeft,
        paddingRight,
    }, containerClassName );

	return (
		<div { ...useBlockProps.save( { className: containerClassName } ) }>
            <InnerBlocks.Content />
		</div>
	);
}
