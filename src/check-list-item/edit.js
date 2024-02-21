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
import { useBlockProps, RichText, useInnerBlocksProps } from '@wordpress/block-editor';

import { useMergeRefs } from '@wordpress/compose';

import { addClassNames } from './../_functions/add-class-names.js';

import {
    useEnter,
    useSpace,
} from './hooks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes, clientId } ) {

    const {
        className,
        content,
    } = attributes;

    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps( blockProps, {
        renderAppender: false,
        __unstableDisableDropZone: true,
    } );

    const useEnterRef = useEnter( { content, clientId } );
    const useSpaceRef = useSpace( clientId );
    


    // console.log( 'edit() content: \n' + JSON.stringify( content, null, 2 ) );

    // const onChangeContent = ( value ) => {
    //     setAttributes( { content: value } );
    // };

    const itemClassNames = addClassNames( {
    }, className );

	return (
        <li { ...innerBlocksProps }>
                <RichText
                    ref={ useMergeRefs( [ useEnterRef, useSpaceRef ] ) }
                    identifier="content"
                    tagName="span"
                    onChange={ ( nextContent ) =>
                        setAttributes( { content: nextContent } )
                    }
                    value={ content }
                    aria-label={ __( 'List text' ) }
                    placeholder={ __( 'List' ) }
                />
        </li>
    );
}
