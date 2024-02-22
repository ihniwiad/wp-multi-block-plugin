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
	const { replaceBlocks, selectionChange, replaceInnerBlocks } = useDispatch( blockEditorStore );
	const { getBlock, getBlockRootClientId, getBlockIndex, getBlockName, getBlockOrder } =
		useSelect( blockEditorStore );
	const propsRef = useRef( props );
	propsRef.current = props;
	// const outdentListItem = useOutdentListItem();
	return useRefEffect( ( element ) => {
		function onKeyDown( event ) {
			if ( event.defaultPrevented || event.keyCode !== ENTER ) {
				return;
			}

					console.log( 'ENTER pressed in block' )
		    		console.log( 'propsRef: \n' + JSON.stringify( propsRef, null, 2 ) );
		    		console.log( 'props: \n' + JSON.stringify( props, null, 2 ) );

			const { content, clientId } = propsRef.current;
			// if ( content.length ) {
			// 	// returns if item has content length >0 (keep new list item, do not create paragraph)
			// 	console.log( 'return' )
			// 	return;
			// }

			event.preventDefault();
			console.log( 'next' )
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

			console.log( 'blockIndex: ' + blockIndex )

		 //    // list with items before current item
			// const head = cloneBlock( {
			// 	...topParentListBlock,
			// 	innerBlocks: topParentListBlock.innerBlocks.slice( // removing current list item (expected to be empty)
			// 		0,
			// 		blockIndex
			// 	),
			// } );
		 //    		console.log( 'head: \n' + JSON.stringify( head, null, 2 ) );
		 //    // new (outside list) inseted paragraph
			// const middle = createBlock( getDefaultBlockName() );
		 //    		console.log( 'middle: \n' + JSON.stringify( middle, null, 2 ) );
			// // Last list item might contain a `list` block innerBlock
			// // In that case append remaining innerBlocks blocks.
		 //    // inner items after current item (without list)
			// const after = [
			// 	...( topParentListBlock.innerBlocks[ blockIndex ]
			// 		.innerBlocks[ 0 ]?.innerBlocks || [] ),
			// 	...topParentListBlock.innerBlocks.slice( blockIndex + 1 ),
			// ];
		 //    		console.log( 'after: \n' + JSON.stringify( after, null, 2 ) );
		 //    // list with items after current item
			// const tail = after.length
			// 	? [
			// 			cloneBlock( {
			// 				...topParentListBlock,
			// 				innerBlocks: after,
			// 			} ),
			// 	  ]
			// 	: [];
		 //    		console.log( 'tail: \n' + JSON.stringify( tail, null, 2 ) );
   //  		// replacing old block by 3 new blocks: list start, paragraph, list end
			// replaceBlocks(
			// 	topParentListBlock.clientId,
			// 	[ head, middle, ...tail ],
			// 	1
			// );




		    // list with items before current item
			const head = cloneBlock( {
				...topParentListBlock,
				innerBlocks: topParentListBlock.innerBlocks.slice(
					0,
					blockIndex + 1 // keep current item
				),
			} );
		    		console.log( 'head: \n' + JSON.stringify( head, null, 2 ) );
		    // new (outside list) inseted paragraph
			const middle = createBlock( 'create-block/check-list-item' );
		    		console.log( 'middle: \n' + JSON.stringify( middle, null, 2 ) );
			// Last list item might contain a `list` block innerBlock
			// In that case append remaining innerBlocks blocks.
		    // inner items after current item (without list)
			const after = [
				...( topParentListBlock.innerBlocks[ blockIndex ]
					.innerBlocks[ 0 ]?.innerBlocks || [] ),
				...topParentListBlock.innerBlocks.slice( blockIndex + 1 ),
			];
		    		console.log( 'after: \n' + JSON.stringify( after, null, 2 ) );
		    // list with items after current item
			const tail = after.length
				? [
						cloneBlock( {
							...topParentListBlock,
							innerBlocks: after,
						} ),
				  ]
				: [];
		    		console.log( 'tail: \n' + JSON.stringify( tail, null, 2 ) );
    		// replacing old block by 3 new blocks: list start, paragraph, list end
			replaceInnerBlocks(
				topParentListBlock.clientId,
				[ ...head.innerBlocks, middle, ...tail[ 0 ].innerBlocks ],
				1
			);










				// replaceInnerBlocks(
				// 	getNextBlockClientId( wrapperClientId ),
				// 	wrapperBlock.innerBlocks.slice( position + 1 )
				// );


    		// console.log( 'topParentListBlock: \n' + JSON.stringify( topParentListBlock, null, 2 ) );

					// const parent = cloneBlock( {
					// 	...topParentListBlock,
					// 	innerBlocks: topParentListBlock.innerBlocks.slice(
					// 		0,
					// 		blockIndex + 1
					// 	),
					// } );
		   //  		console.log( 'parent: \n' + JSON.stringify( parent, null, 2 ) );
		   //  		console.log( 'tail: \n' + JSON.stringify( tail, null, 2 ) );

					// // add a new check list item
					// const newBlock = createBlock(
					// 	'create-block/check-list-item',
					// 	{}
					// );
		   //  		console.log( 'newBlock: \n' + JSON.stringify( newBlock, null, 2 ) );
					// replaceBlocks(
					// 	topParentListBlock.clientId,
					// 	[ parent, middle, ...tail ],
					// 	1
					// );



    		// console.log( 'topParentListBlock (after replace): \n' + JSON.stringify( topParentListBlock, null, 2 ) );



			// We manually change the selection here because we are replacing
			// a different block than the selected one.

					console.log( 'select: ' + middle.clientId )

					const order = getBlockOrder( topParentListBlock.clientId );
					const position = null;
					console.log( 'order: ' + order + ', position: ' + position )


			selectionChange( middle.clientId );

					// selectionChange( newBlock.clientId );

			console.log( 'done' )
		}

		element.addEventListener( 'keydown', onKeyDown );
		return () => {
			element.removeEventListener( 'keydown', onKeyDown );
		};
	}, [] );
}