/**
 * WordPress dependencies
 */
import { useCallback, useRef } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { cloneBlock, createBlock } from '@wordpress/blocks';

export default function useSplit( clientId ) {

			console.log( 'useSplit()' )

	// We can not rely on the isAfterOriginal parameter of the callback,
	// because if the value after the split is empty isAfterOriginal is false
	// while the value is in fact after the original. So to avoid that issue we use
	// a flag where the first execution of the callback is false (it is the before value)
	// and the second execution is true, it is the after value.
	const isAfter = useRef( false );

			console.log( 'isAfter: \n' + JSON.stringify( isAfter, null, 2 ) );

	const { getBlock } = useSelect( blockEditorStore );
	return useCallback(
		( value ) => {
					consiole.log( '—— useCallback()' )
			const block = getBlock( clientId );
			if ( isAfter.current ) {
						consiole.log( '—— clone block' )
				return cloneBlock( block, {
					content: value,
				} );
			}
			isAfter.current = true;
						consiole.log( '—— create block' )
			return createBlock( block.name, {
				...block.attributes,
				content: value,
			} );
		},
		[ clientId, getBlock ]
	);
}