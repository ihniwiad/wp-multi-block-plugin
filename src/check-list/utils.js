import { createBlock, rawHandler } from '@wordpress/blocks';


export function migrateToListV2( attributes ) {
	const { values, ...otherAttributes } =
		attributes;

	const list = document.createElement( 'ul' );
	list.innerHTML = values;


	// console.log( 'values migrateToListV2(): \n' + JSON.stringify( values, null, 2 ) );

	// const [ listBlock ] = rawHandler( { HTML: list.outerHTML } );

	// console.log( 'listBlock: \n' + JSON.stringify( listBlock, null, 2 ) );

	const [ listBlock ] = rawHandler( { HTML: list.outerHTML } );

	// console.log( 'listBlock: \n' + JSON.stringify( listBlock, null, 2 ) );

	// Create new inner blocks from old content attribute
	const innerBlocks = Array.from( listBlock.innerBlocks ).map(
		( listItem ) => {
			// console.log( '---- listItem: \n' + JSON.stringify( listItem, null, 2 ) );
			if ( typeof listItem.attributes !== 'undefined' && typeof listItem.attributes.content !== 'undefined' ) {
				return createBlock(
					'create-block/check-list-item',
					{ content: listItem.attributes.content }
				);
			}
		}
	);

	// console.log( 'otherAttributes: \n' + JSON.stringify( otherAttributes, null, 2 ) );

	return [
		{ ...otherAttributes },
		// listBlock.innerBlocks,
		innerBlocks,
	];
}

