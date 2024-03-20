import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

import { rawHandler, switchToBlockType, createBlock } from '@wordpress/blocks';

import { migrateToListV2 } from './utils';

import { addClassNames } from './../_functions/add-class-names.js';


// v1 functions


/**
 * At the moment, deprecations don't handle create blocks from attributes
 * (like when using CPT templates). For this reason, this hook is necessary
 * to avoid breaking templates using the old list block format.
 *
 * @param {Object} attributes Block attributes.
 * @param {string} clientId   Block client ID.
 */
function useMigrateOnLoad( attributes, clientId ) {

	// console.log( 'useMigrateOnLoad()' )

	const registry = useRegistry();
	const { updateBlockAttributes, replaceInnerBlocks } =
		useDispatch( blockEditorStore );

	useEffect( () => {
		// As soon as the block is loaded, migrate it to the new version.

		if ( ! attributes.values ) {
			return;
		}

		const [ newAttributes, newInnerBlocks ] = migrateToListV2( attributes );

		// deprecated( 'Content attribute on the BSX Check List block', {
		// 	since: '6.0',
		// 	version: '6.5',
		// 	alternative: 'inner blocks',
		// } );

		registry.batch( () => {
			updateBlockAttributes( clientId, newAttributes );
			replaceInnerBlocks( clientId, newInnerBlocks );
		} );
	}, [ attributes.values ] );
}

const v1 = {

	// get old attr
	attributes: {
		// content: {
		// 	type: 'array',
		// 	source: 'children',
		// 	selector: '.checklist',
		// },
		values: {
			type: 'string',
			source: 'html',
			selector: 'ul',
			multiline: 'li',
			__unstableMultilineWrapperTags: [ 'ul' ],
			default: '',
			__experimentalRole: 'content',
		},
		supports: {
			__unstablePasteTextInline: true,
			__experimentalSelector: 'ul',
			__experimentalSlashInserter: true,
		},
	},

	save( { attributes } ) {

		const {
	        className,
	        values,
	        state,
	        marginLeft,
	        marginRight,
	        marginBefore,
	        marginAfter,
	        display,
	        textAlign,
		} = attributes;


		console.log( 'hello from deprecation' );


		// const content = values;
		// console.log( 'deprecated attr content: ' + content )


		// required content object
		// [
		//   {
		//     "type": "li",
		//     "props": {
		//       "children": [
		//         "Lorem"
		//       ]
		//     }
		//   },
		//   {
		//     "type": "li",
		//     "props": {
		//       "children": [
		//         "Ipsum"
		//       ]
		//     }
		//   }
		// ]


		// console.log( 'deprecated attr values: \n' + JSON.stringify( values, null, 2 ) );

		// const list = document.createElement( 'ul' );
		// list.innerHTML = content;

		// const node = document.createRange().createContextualFragment( content );


		// console.log( 'list: \n' + node );
		// console.log( 'list: \n' + JSON.stringify( node, null, 2 ) );

		// const innerBlocks = Array.from( node ).map(
		// 	( listItem ) => {
		// 		console.log( '---- listItem: \n' + JSON.stringify( listItem, null, 2 ) );
		// 		// if ( typeof listItem.props !== 'undefined' && typeof listItem.props.children !== 'undefined' && typeof listItem.props.children[ 0 ] !== 'undefined' ) {
		// 		// 	return createBlock(
		// 		// 		'create-block/check-list-item',
		// 		// 		{ content: listItem.props.children[ 0 ] }
		// 		// 	);
		// 		// }
		// 	}
		// );







		// const newContent = '<ul>' + content + '<ul>';
		// const list = document.createElement( 'ul' );
		// list.innerHTML = content;
		// const parser = new DOMParser();
		// const htmlDoc = parser.parseFromString( content, 'text/html' );

		// const innerBlocks = Array.from( content.children ).map(
		// 	( listItem ) => {
		// 		console.log( 'innerBlocks: \n' + JSON.stringify( innerBlocks, null, 2 ) );
		// 	}
		// );






		const list = document.createElement( 'ul' );
		list.innerHTML = values;

		const [ listBlock ] = rawHandler( { HTML: list.outerHTML } );

		// console.log( 'listBlock: \n' + JSON.stringify( listBlock, null, 2 ) );


		// rebuild old content attribute from inner blocks data
		const content = Array.from( listBlock.innerBlocks ).map(
			( listItem ) => {
				// console.log( '---- listItem: \n' + JSON.stringify( listItem, null, 2 ) );
				if ( typeof listItem.attributes !== 'undefined' && typeof listItem.attributes.content !== 'undefined' ) {
					return {
						"type": "li",
						"props": {
							"children": [
								listItem.attributes.content
							]
						}
					};
				}
			}
		);

		// console.log( 'innerBlocks: \n' + JSON.stringify( innerBlocks, null, 2 ) );







		// const newContent = [ 'Lorem', 'Ipsum' ];


	    const checklistClassNames = addClassNames( {
	        marginLeft, 
	        marginRight, 
	        marginBefore,
	        marginAfter,
	        display,
	        textAlign,
	    }, !! className ? 'checklist ' + className : 'checklist' );

	    /*

	                    <RichText.Content 
	                        tagName="ul" 
	                        value={ innerBlocks } 
	                        className={ checklistClassNames }
	                    />
	    */

	    return (
	        <>
	            {
	                ( content && ! RichText.isEmpty( content ) ) && (
	                    <RichText.Content 
	                        tagName="ul" 
	                        value={ content } 
	                        className={ checklistClassNames }
	                    />
	                )
	            }
	        </>
	    );

	    // const TagName = 'ul';

	 //    const test = (
		// 	<TagName { ...useBlockProps.save( { className: checklistClassNames } ) }>
		// 		<RichText.Content value={ values } multiline="li" />
		// 	</TagName>
		// );
		// console.log( 'test: \n' + JSON.stringify( test, null, 2 ) );

		// return (
		// 	<TagName { ...useBlockProps.save( { className: checklistClassNames } ) }>
		// 		<InnerBlocks.Content />
		// 	</TagName>
		// );
	}
}

export default [ v1 ];

