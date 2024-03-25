/**
 * WordPress dependencies
 */
import { switchToBlockType, createBlock } from '@wordpress/blocks';

function convertBlockToChecklist( block ) {
	const list = switchToBlockType( block, 'bsx-blocks/check-list' );
	if ( list ) {
		return list;
	}
	const paragraph = switchToBlockType( block, 'core/paragraph' );
	if ( ! paragraph ) {
		return null;
	}
	return switchToBlockType( paragraph, 'bsx-blocks/check-list' );
}

export function convertToChecklistItems( blocks ) {
	const listItems = [];

	for ( let block of blocks ) {
				console.log( 'convertToChecklistItems(), iterate blocks, block: ' + JSON.stringify( block, null, 2 ) );
		if ( typeof block !== 'undefined' && typeof block.name !== 'undefined' ) {
			if ( block.name === 'bsx-blocks/check-list-item' ) {
				console.log( "block.name === 'bsx-blocks/check-list-item'" );
				listItems.push( block );
			} 
			else if ( block.name === 'bsx-blocks/check-list' ) {
				console.log( block.name === 'bsx-blocks/check-list' );
				listItems.push( ...block.innerBlocks );
			}
			else if ( block.name === 'core/paragraph' ) {
				console.log( "block.name === 'core/paragraph'" );
				// make each line a single check list item
				const lines = block.attributes.content.split( '<br>' );
				for ( let line of lines ) {
					console.log( '-- add: ' + line );

					const item = createBlock( 'bsx-blocks/check-list-item', {
						content: line,
					} );
					console.log( '-- item: ' + JSON.stringify( item, null, 2 ) );
					listItems.push( item );
					console.log( '-- listItems: ' + JSON.stringify( listItems, null, 2 ) );
				}
			}
			else if ( ( block = convertBlockToChecklist( block ) ) ) {
				console.log( 'block = convertBlockToChecklist( block )' );
				for ( const { innerBlocks } of block ) {
					listItems.push( ...innerBlocks );
				}
			}
			else {
				console.log( 'else' );
			}
		}
		else {
			// skip, do nothing
		}
	}

	return listItems;
}
