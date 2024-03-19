/**
 * WordPress dependencies
 */
import { useRef } from '@wordpress/element';
import { useRefEffect } from '@wordpress/compose';
import { ENTER } from '@wordpress/keycodes';
import { useSelect, useDispatch, useRegistry, updateBlockAttributes } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';

import { splitValue } from './split-value';

import {
	hasBlockSupport,
	createBlock,
	getDefaultBlockName,
} from '@wordpress/blocks';


function getCursorPosition( contentElem ) {

	if ( typeof window.getSelection !== "undefined" ) {


	    const selection = window.getSelection();
	  //   if ( !! selection.getRangeAt( 0 ) ) {
		const range = selection.getRangeAt( 0 );
		const clonedRange = range.cloneRange();

	    		console.log( 'range: \n' + JSON.stringify( range, null, 2 ) );

		clonedRange.selectNodeContents( contentElem );
	    		console.log( 'clonedRange: \n' + JSON.stringify( clonedRange, null, 2 ) );
		clonedRange.setEnd( range.endContainer, range.endOffset );

				console.log( 'clonedRange.toString(): \n' + JSON.stringify( clonedRange.toString(), null, 2 ) );

		const cursorPosition = clonedRange.toString().length;

					console.log( 'firstCEText: "' + clonedRange.toString().slice( 0, cursorPosition ) + '", secondCEText: "' + clonedRange.toString().slice( cursorPosition ) + '"' )
	  //   }
	  	return cursorPosition;
  	}
  	return null;
}


export function useOnEnter( props ) {
	const { batch } = useRegistry();
	const {
		moveBlocksToPosition,
		replaceInnerBlocks,
		duplicateBlocks,
		insertBlock,
		selectionChange,
		updateBlockAttributes,
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
	const propsRef = useRef( props );
	propsRef.current = props;

    		// console.log( 'props: \n' + JSON.stringify( props, null, 2 ) );

	return useRefEffect( ( element ) => {
		function onKeyDown( event ) {

					console.log( 'useOnEnter() onKeyDown()' )
		    		console.log( 'propsRef: \n' + JSON.stringify( propsRef, null, 2 ) );

			if ( event.defaultPrevented ) {
				return;
			}

			if ( event.keyCode !== ENTER ) {
				return;
			}

			// const {
			// 	removeEditorOnlyFormats,
			// 	value,
			// 	onReplace,
			// 	onSplit,
			// 	onChange,
			// 	disableLineBreaks,
			// 	onSplitAtEnd,
			// 	onSplitAtDoubleLineEnd,
			// } = propsRef.current;

			// const _value = { ...value };
			// _value.formats = removeEditorOnlyFormats( value );
			// const canSplit = onReplace && onSplit;

			
    		console.log( '_value: \n' + JSON.stringify( _value, null, 2 ) );

			const { content, clientId } = propsRef.current;


		    		let cursorPosition = getCursorPosition( event.target );

		    		if ( cursorPosition == null ) {
		    			// ignore cursor position, set to end of content
		    			cursorPosition = content.length
		    		}

					console.log( 'cursor position: ' + getCursorPosition( event.target ) + ' of "' + content + '"' )

					const [ firstContent, secondContent ] = [ content.slice( 0, cursorPosition ), content.slice( cursorPosition ) ];

					console.log( 'firstContent: "' + firstContent + '", secondContent: "' + secondContent + '"' )

			// The paragraph should be empty.
			// if ( content.length ) {
			// 		console.log( 'return (not empty)' )
			// 	return;
			// }

			// update existing (first) block
			updateBlockAttributes( clientId, { content: firstContent } );

			const wrapperClientId = getBlockRootClientId( clientId );

					// console.log( 'wrapperClientId: ' + wrapperClientId )

			if (
				! hasBlockSupport(
					getBlockName( wrapperClientId ),
					'__experimentalOnEnter',
					false
				)
			) {
					// console.log( 'return (no block support)' )
				return;
			}

			const order = getBlockOrder( wrapperClientId );
			const position = order.indexOf( clientId );



					// console.log( 'order: ' + order + ', position: ' + position )

			// If it is the last block, exit.
			// if ( position === order.length - 1 ) {
			// 		console.log( 'is last block in parent' )
			// 	let newWrapperClientId = wrapperClientId;

			// 	while (
			// 		! canInsertBlockType(
			// 			getBlockName( clientId ),
			// 			getBlockRootClientId( newWrapperClientId )
			// 		)
			// 	) {
			// 				console.log( 'doing while' )
			// 		newWrapperClientId =
			// 			getBlockRootClientId( newWrapperClientId );
			// 	}

			// 	if ( typeof newWrapperClientId === 'string' ) {
			// 				console.log( 'move blocks' )
			// 		event.preventDefault();
			// 		moveBlocksToPosition(
			// 			[ clientId ],
			// 			wrapperClientId,
			// 			getBlockRootClientId( newWrapperClientId ),
			// 			getBlockIndex( newWrapperClientId ) + 1
			// 		);
			// 	}
			// 			console.log( 'return (end of other options)' )
			// 	return;
			// }

			// const defaultBlockName = getDefaultBlockName();
					const defaultBlockName = 'create-block/check-list-item';

					// console.log( 'defaultBlockName: ' + defaultBlockName + ', wrapperClientId: ' + wrapperClientId )
		    		// console.log( 'propsRef: \n' + JSON.stringify( propsRef, null, 2 ) );
		    		const wrapperBlock = getBlock( wrapperClientId );
		    		// console.log( 'wrapperBlock: \n' + JSON.stringify( wrapperBlock, null, 2 ) );
			// if (
			// 	! canInsertBlockType(
			// 		defaultBlockName,
			// 		getBlockRootClientId( wrapperClientId )
			// 	)
			// ) {
			// 		console.log( 'return (! canInsertBlockType())' )
			// 	return;
			// }

					if (
						wrapperBlock.name !== 'create-block/check-list'
					) {
							// console.log( 'return (wrapper is not "create-block/check-list")' )
						return;
					}
					else {
						// console.log( 'wrapper is "create-block/check-list", no return' )
					}

			event.preventDefault();

					const wrapperRootClientId = getBlockRootClientId( wrapperClientId );
					const blockIndex = getBlockIndex( wrapperClientId );

			// If it is in the middle, split the block in two.
			// const wrapperBlock = getBlock( wrapperClientId );
			batch( () => {
						// console.log( 'duplicateBlocks()' )


						insertBlock(
							createBlock( defaultBlockName, { content: secondContent } ),
							position + 1,
							wrapperClientId,
							true
						);
				// duplicateBlocks( [ wrapperClientId ] );
				// const blockIndex = getBlockIndex( wrapperClientId );

				// replaceInnerBlocks(
				// 	wrapperClientId,
				// 	wrapperBlock.innerBlocks.slice( 0, blockIndex )
				// );
				// replaceInnerBlocks(
				// 	getNextBlockClientId( wrapperClientId ),
				// 	wrapperBlock.innerBlocks.slice( position + 1 )
				// );
				// insertBlock(
				// 	createBlock( defaultBlockName ),
				// 	blockIndex + 1,
				// 	// getBlockRootClientId( wrapperClientId ),
				// 	wrapperRootClientId,
				// 	true
				// );

			} );

					// const newWrapperBlock = getBlock( wrapperClientId );
	    // 			console.log( 'newWrapperBlock: \n' + JSON.stringify( newWrapperBlock, null, 2 ) );
					// const rootOrder = getBlockOrder( wrapperRootClientId );
					// console.log( 'rootOrder: ' + rootOrder + ', blockIndex: ' + blockIndex )

					// const newOrder = getBlockOrder( getBlock( rootOrder[ blockIndex + 1 ] ).clientId );
					// console.log( 'newOrder: ' + newOrder + ', position + 1: ' + ( position + 1 ) )
					// console.log( 'select: ' + newOrder[ position + 1 ] )
					// selectionChange( newOrder[ position + 1 ] );


					// const newOrder = getBlockOrder( wrapperClientId );
					// console.log( 'newOrder: ' + newOrder + ', position + 1: ' + ( position + 1 ) )
					// console.log( 'select: ' + newOrder[ position + 1 ] )

					// no need to select manually since Block Editor select automaticalls new inseted Block
					// selectionChange( newOrder[ position + 1 ] );
		}

		element.addEventListener( 'keydown', onKeyDown );
		return () => {
			element.removeEventListener( 'keydown', onKeyDown );
		};
	}, [] );
}