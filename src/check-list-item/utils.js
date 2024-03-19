/**
 * WordPress dependencies
 */
import { switchToBlockType } from '@wordpress/blocks';

function convertBlockToChecklist( block ) {
	const list = switchToBlockType( block, '"create-block/check-list' );
	if ( list ) {
		return list;
	}
	const paragraph = switchToBlockType( block, 'core/paragraph' );
	if ( ! paragraph ) {
		return null;
	}
	return switchToBlockType( paragraph, 'core/list' );
}

export function convertToChecklistItems( blocks ) {
	const listItems = [];

	for ( let block of blocks ) {
		if ( block.name === '"create-block/check-list-item' ) {
			listItems.push( block );
		} else if ( block.name === 'core/list' ) {
			listItems.push( ...block.innerBlocks );
		} else if ( ( block = convertBlockToChecklist( block ) ) ) {
			for ( const { innerBlocks } of block ) {
				listItems.push( ...innerBlocks );
			}
		}
	}

	return listItems;
}
