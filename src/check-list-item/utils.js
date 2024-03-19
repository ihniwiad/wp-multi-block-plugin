/**
 * WordPress dependencies
 */
import { switchToBlockType } from '@wordpress/blocks';

function convertBlockToChecklist( block ) {
	const list = switchToBlockType( block, 'create-block/check-list' );
	if ( list ) {
		return list;
	}
	const paragraph = switchToBlockType( block, 'core/paragraph' );
	if ( ! paragraph ) {
		return null;
	}
	return switchToBlockType( paragraph, 'create-block/check-list' );
}

export function convertToChecklistItems( blocks ) {
	const listItems = [];

	for ( let block of blocks ) {
				console.log( 'convertToChecklistItems(), iterate blocks, block: ' + JSON.stringify( block, null, 2 ) );
		if ( typeof block !== 'undefined' && typeof block.name !== 'undefined' ) {
			if ( block.name === 'create-block/check-list-item' ) {
				listItems.push( block );
			} else if ( block.name === 'create-block/check-list' ) {
				listItems.push( ...block.innerBlocks );
			} else if ( ( block = convertBlockToChecklist( block ) ) ) {
				for ( const { innerBlocks } of block ) {
					listItems.push( ...innerBlocks );
				}
			}
		}
		else {
			// skip, do nothing
		}
	}

	return listItems;
}
