/**
 * WordPress dependencies
 */
import { useCallback, useRef } from '@wordpress/element';
// import { useSelect } from '@wordpress/data';
// import { store as blockEditorStore } from '@wordpress/block-editor';
import { cloneBlock, createBlock } from '@wordpress/blocks';
// import { useRef } from '@wordpress/element';
import { useRefEffect } from '@wordpress/compose';
import { useSelect, useDispatch, useRegistry, updateBlockAttributes } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';

export default function useSplit( clientId ) {

			// console.log( 'useSplit()' )

	// We can not rely on the isAfterOriginal parameter of the callback,
	// because if the value after the split is empty isAfterOriginal is false
	// while the value is in fact after the original. So to avoid that issue we use
	// a flag where the first execution of the callback is false (it is the before value)
	// and the second execution is true, it is the after value.
	const isAfter = useRef( false );

			// console.log( 'isAfter: \n' + JSON.stringify( isAfter, null, 2 ) );

	// const { 
	// 	getBlock,
	// 	getBlockRootClientId,
	// 	getBlockIndex,
	// 	getBlockOrder,
	// } = useSelect( blockEditorStore );

	const { batch } = useRegistry();
	const {
		moveBlocksToPosition,
		replaceInnerBlocks,
		duplicateBlocks,
		insertBlock,
		selectionChange,
		updateBlockAttributes,
		replaceBlocks,
	} = useDispatch( blockEditorStore );
	const {
		getBlockRootClientId,
		getBlockIndex,
		getBlockOrder,
		getBlockName,
		getBlock,
		getNextBlockClientId,
		canInsertBlockType,
	} = useSelect( blockEditorStore );

	return useCallback(
		( value ) => {
					console.log( '—— useSplit() callback' )
					console.log( 'value: ' + JSON.stringify( value, null, 2 ) );
					console.log( 'isAfter.current: ' + JSON.stringify( isAfter.current, null, 2 ) );
			const block = getBlock( clientId );
					// console.log( 'block: ' + JSON.stringify( block, null, 2 ) );

			// get ul
			const blockRootClientId = getBlockRootClientId( clientId );
			const blockIndex = getBlockIndex( clientId );


					console.log( 'blockRootClientId: ' + JSON.stringify( blockRootClientId, null, 2 ) );
					console.log( 'blockIndex: ' + JSON.stringify( blockIndex, null, 2 ) );


			// TODO:
			//	- clone parent ul
			//	- remove item @ blockIndex
			//	- insert blocks 1 & 2 instead
			//	- add rest


			// updateBlockAttributes( clientId, { content: 'TEST – ' + value } );


			// remember: returned content will be recieved by onReplace function and so converted by convertToChecklistItems()

			if ( isAfter.current ) {
						console.log( '——-- clone block' )
				return cloneBlock( block, {
					content: value,
				} );
			}
			isAfter.current = true;
						console.log( '——-- create block' )
			return createBlock( block.name, {
				...block.attributes,
				content: value,
			} );
		},
		[ clientId, getBlock ]
	);
}