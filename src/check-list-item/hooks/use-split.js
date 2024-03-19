/**
 * WordPress dependencies
 */
import { useCallback, useRef } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { cloneBlock, createBlock } from '@wordpress/blocks';

export default function useSplit( clientId ) {

			// console.log( 'useSplit()' )

	// We can not rely on the isAfterOriginal parameter of the callback,
	// because if the value after the split is empty isAfterOriginal is false
	// while the value is in fact after the original. So to avoid that issue we use
	// a flag where the first execution of the callback is false (it is the before value)
	// and the second execution is true, it is the after value.
	const isAfter = useRef( false );

			// console.log( 'isAfter: \n' + JSON.stringify( isAfter, null, 2 ) );

	const { 
		getBlock,
		getBlockRootClientId,
		getBlockIndex,
		getBlockOrder,
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

			if ( isAfter.current ) {
						console.log( '——-- clone block' )
				// return cloneBlock( block, {
				// 	content: value,
				// } );
				return {
  "clientId": "adbb39a2-5d17-4ac6-960b-8bfe1c89e1db",
  "name": "create-block/check-list-item",
  "isValid": true,
  "originalContent": "<li class=\"wp-block-create-block-check-list-item\">Lorem</li>",
  "validationIssues": [],
  "attributes": {
    "content": "TEST"
  },
  "innerBlocks": []
}
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