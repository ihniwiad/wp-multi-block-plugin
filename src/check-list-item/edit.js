/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
    RichText,
    useBlockProps,
    useInnerBlocksProps,
} from '@wordpress/block-editor';

import { useMergeRefs } from '@wordpress/compose';
import { useSelect } from '@wordpress/data';

import { addClassNames } from './../_functions/add-class-names.js';
import { createBlock, rawHandler } from '@wordpress/blocks';
import { useRef } from '@wordpress/element';

/**
 * Internal dependencies
 */
// import { useOnEnter } from './use-enter';
import {
    useEnter,
    // useSpace,
    useSplit,
    useMerge,
} from './hooks';
import { convertToChecklistItems } from './utils';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

const name = 'create-block/check-list-item';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { 
    attributes,
    setAttributes,
    onReplace,
    clientId,
    mergeBlocks,
} ) {

    const {
        className,
        content,
    } = attributes;

    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps( blockProps, {
        renderAppender: false,
        // __unstableDisableDropZone: true,
    } );

    // const useEnterRef = useEnter( { content, clientId } );
    // const useSpaceRef = useSpace( clientId );
    // const onSplit = useSplit( clientId );

    const useEnterRef = useEnter( { content, clientId } );
    const onSplit = useSplit( clientId );
    const onMerge = useMerge( clientId, mergeBlocks );



    // console.log( 'edit() content: \n' + JSON.stringify( content, null, 2 ) );

    // const onChangeContent = ( value ) => {
    //     setAttributes( { content: value } );
    // };

    const itemClassNames = addClassNames( {
    }, className );



    // return (
    //     <li { ...innerBlocksProps }>
    //             <RichText
    //                 ref={ useMergeRefs( [ useEnterRef, useSpaceRef ] ) }
    //                 identifier="content"
    //                 tagName="span"
    //                 onChange={ ( nextContent ) =>
    //                     setAttributes( { content: nextContent } )
    //                 }
    //                 value={ content }
    //                 aria-label={ __( 'List text' ) }
    //                 placeholder={ __( 'List' ) }
                    // onSplit={ onSplit }
                    // onMerge={ onMerge }
    //             />
    //             { innerBlocksProps.children }
    //     </li>
    // );


    // it seems to require a parent element for the rich text editor to 
    // work properly in the backend (be able to select parent list element
    // or select a new block via JavaScript)
    return (
        <>
            <RichText
                ref={ useMergeRefs( [ useEnterRef ] ) }
                identifier="content"
                tagName="li"
                onChange={ ( nextContent ) =>
                    setAttributes( { content: nextContent } )
                }
                value={ content }
                aria-label={ __( 'List text' ) }
                placeholder={ __( 'List' ) }
                onSplit={ onSplit }
                onMerge={ onMerge }
                onReplace={
                    onReplace
                        ? ( blocks, ...args ) => {
                                onReplace(
                                    convertToChecklistItems( blocks ),
                                    ...args
                                );
                          }
                        : undefined
                }
                // onReplace={ onReplace }
                // onRemove={  }
            />
        </>
    );

    /*

            onSplit={ ( value, isOriginal ) => {
                console.log( '(attr) onSplit()' )
                let newAttributes;

                if ( isOriginal || value ) {
                    newAttributes = {
                        ...attributes,
                        content: value,
                    };
                }

                const block = createBlock( name, newAttributes );

                if ( isOriginal ) {
                    block.clientId = clientId;
                }

                return block;
            } }

            onSplit={ 
                ( value, isAfterOriginal ) => {
                    console.log( 'onSplit' )
                    createBlock( 'create-block/check-list-item', { ...attributes, text: value } );
                } 
            }

            ref={ useOnEnter( { clientId, content } ) }

            ref={ useMergeRefs( [ useEnterRef ] ) }

    */

	// return (
 //        <RichText
 //            ref={ useOnEnter( { clientId, content } ) }
 //            identifier="content"
 //            tagName="li"
 //            onChange={ ( nextContent ) =>
 //                setAttributes( { content: nextContent } )
 //            }
 //            value={ content }
 //            aria-label={ __( 'List text' ) }
 //            placeholder={ __( 'List' ) }


 //        />
 //    );
}
