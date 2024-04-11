/**
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
    useBlockProps,
} from '@wordpress/block-editor';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { store as coreStore } from '@wordpress/core-data';

import {
    useDispatch,
    useRegistry,
    select,
    useSelect,
    withSelect,
} from '@wordpress/data';

import { useEffect } from '@wordpress/element';

/**
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import './editor.scss';



function useMigrateOnLoad( attributes, clientId, mediaSizes ) {

    // const { getMedia } = useSelect( coreStore );

    const {
        imgId,
        foo,
        bar,
        imgUrl,
    } = attributes;

    console.log( 'useMigrateOnLoad() BEGIN – imgId: ' + imgId + ', foo: ' + foo + ', bar: ' + bar + ', imgUrl: ' + imgUrl )
    // console.log( 'media (' + foo + '): \n' + JSON.stringify( media, null, 2 ) + '\n' );

    const registry = useRegistry();
    const { updateBlockAttributes } =
        useDispatch( blockEditorStore );

    // const imgId = parseInt( foo );
    // console.log( 'useMigrateOnLoad() – imgId: ' + imgId )

    // const media = useSelect(
    //     ( select ) =>
    //         imgId &&
    //         select( coreStore ).getMedia( imgId, { context: 'view' } ),
    //     [ imgId ]
    // );


    // const { media } = useSelect(
    //     ( select ) => ( {
    //         media:
    //             imgId === undefined
    //                 ? undefined
    //                 : select( coreStore ).getMedia( imgId ),
    //     } ),
    //     [ imgId ]
    // );

    // useEffect( () => {
    //     // As soon as the block is loaded, migrate it to the new version.
    //     console.log( 'useEffect()' )

    //     if ( typeof media !== 'undefined' ) {

    //         console.log( 'media (' + imgId + '): \n' + JSON.stringify( media, null, 2 ) + '\n' );

    //         // if ( ! attributes.foo ) {
    //         //     return;
    //         // }
    //         const newImgUrl = media?.media_details?.sizes?.[ 'full' ]?.source_url;

    //         const newAttributes = {
    //             bar: 'changed',
    //             imgUrl: newImgUrl,
    //             ...attributes,
    //             // foo: 'changed'
    //         }

    //         registry.batch( () => {
    //             updateBlockAttributes( clientId, newAttributes );
    //         } );

    //     }
    //     else {
    //         console.log( 'media: UNDEFINED' )
    //     }

    // }, [ attributes ] );


    // const newImgUrl = media?.media_details?.sizes?.[ 'full' ]?.source_url;
    const newImgUrl = mediaSizes?.[ 'full' ]?.source_url;


    useEffect( () => {

        if ( ! newImgUrl ) {
            return;
        }

        const newAttributes = {
            bar: 'changed',
            imgUrl: newImgUrl,
            ...attributes,
            // foo: 'changed'
        }

        registry.batch( () => {
            updateBlockAttributes( clientId, newAttributes );
        } );
        
    }, [ attributes ] );

    console.log( 'useMigrateOnLoad() END – imgId: ' + imgId + ', foo: ' + foo + ', bar: ' + bar + ', imgUrl: ' + imgUrl )
}



/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
// export default function Edit( { attributes, setAttributes, clientId } ) {
function Edit( { attributes, setAttributes, clientId, mediaSizes } ) {

    const {
        imgId,
        foo,
        bar,
        imgUrl,
    } = attributes;

    console.log( 'Edit() – imgId: ' + imgId )
    console.log( 'mediaSizes (' + imgId + '): \n' + JSON.stringify( mediaSizes, null, 2 ) + '\n' );

    const blockProps = useBlockProps( { className: 'foo-bar-test' } );

    useMigrateOnLoad( attributes, clientId, mediaSizes );

	return (
		<p { ...blockProps }>
			{ __( 'BSX Blocks 2.0 (Multiple Blocks Plugin) – __test-img-from-id – hello from the editor!', 'bsx-blocks' ) }
		</p>
	);
}


export default withSelect( ( select, props ) => {
    return {
        mediaSizes: props.attributes.imgId ? select( 'core' ).getMedia( props.attributes.imgId )?.media_details?.sizes : null,
    };
} )( Edit );
