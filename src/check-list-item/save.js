/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

    const {
        content,
    } = attributes;

    // console.log( 'save() content: \n' + content )

    /*
        <li class={ className } { ...useBlockProps.save() }>
            {
                content && ! RichText.isEmpty( content ) && (
                    <RichText.Content value={ content } />
                )
            }
        </li>
    */
    
    return (
        <li { ...useBlockProps.save() }>
            <RichText.Content value={ content } />
        </li>
    );
}
