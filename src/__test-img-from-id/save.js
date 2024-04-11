/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

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
        imgId,
        foo,
        bar,
        imgUrl,
    } = attributes;

    return (
        <div { ...useBlockProps.save( { className: 'test-class-name' } ) }>
            <div>imgId: { imgId }</div>
            <div>foo: { foo }</div>
            <div>bar: { bar }</div>
            <div>imgUrl: { imgUrl }</div>
        </div>
    );
}
