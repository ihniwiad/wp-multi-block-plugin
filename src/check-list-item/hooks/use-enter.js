/**
 * WordPress dependencies
 */
import {
	createBlock,
	getDefaultBlockName,
	cloneBlock,
} from '@wordpress/blocks';
import { useRef } from '@wordpress/element';
import { useRefEffect } from '@wordpress/compose';
import { ENTER } from '@wordpress/keycodes';
import { useSelect, useDispatch } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
// import useOutdentListItem from './use-outdent-list-item';

export default function useEnter( props ) {
			// console.log( '—— useEnter()' )
	const { replaceBlocks, selectionChange } = useDispatch( blockEditorStore );
	const { getBlock, getBlockRootClientId, getBlockIndex, getBlockName } =
		useSelect( blockEditorStore );
	const propsRef = useRef( props );
	propsRef.current = props;
	// const outdentListItem = useOutdentListItem();
	return useRefEffect( ( element ) => {
				// console.log( '—— useEnter() return' )
		function onKeyDown( event ) {
			if ( event.defaultPrevented || event.keyCode !== ENTER ) {
				return;
			}
					console.log( 'ENTER pressed in block' )
		    		// console.log( 'propsRef: \n' + JSON.stringify( propsRef, null, 2 ) );
		    		// console.log( 'props: \n' + JSON.stringify( props, null, 2 ) );
			const { content, clientId } = propsRef.current;
			if ( content.length ) {
				return;
			}
			event.preventDefault();
			// const canOutdent =
			// 	getBlockName(
			// 		getBlockRootClientId(
			// 			getBlockRootClientId( propsRef.current.clientId )
			// 		)
			// 	) === 'create-block/check-list-item';
			// if ( canOutdent ) {
			// 	// outdentListItem();
			// 	return;
			// }
			// Here we are in top level list so we need to split.
			const topParentListBlock = getBlock(
				getBlockRootClientId( clientId )
			);
			const blockIndex = getBlockIndex( clientId );
			const head = cloneBlock( {
				...topParentListBlock,
				innerBlocks: topParentListBlock.innerBlocks.slice(
					0,
					blockIndex
				),
			} );
			const middle = createBlock( getDefaultBlockName() );
			// Last list item might contain a `list` block innerBlock
			// In that case append remaining innerBlocks blocks.
			const after = [
				...( topParentListBlock.innerBlocks[ blockIndex ]
					.innerBlocks[ 0 ]?.innerBlocks || [] ),
				...topParentListBlock.innerBlocks.slice( blockIndex + 1 ),
			];
			const tail = after.length
				? [
						cloneBlock( {
							...topParentListBlock,
							innerBlocks: after,
						} ),
				  ]
				: [];
			replaceBlocks(
				topParentListBlock.clientId,
				[ head, middle, ...tail ],
				1
			);
			// We manually change the selection here because we are replacing
			// a different block than the selected one.
			selectionChange( middle.clientId );
		}

		element.addEventListener( 'keydown', onKeyDown );
		return () => {
			element.removeEventListener( 'keydown', onKeyDown );
		};
	}, [] );
}
