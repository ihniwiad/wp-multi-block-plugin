import { useBlockProps, RichText } from '@wordpress/block-editor';

// import { rawHandler } from '@wordpress/blocks';

import { addClassNames } from './../_functions/add-class-names.js';

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






		// const list = document.createElement( 'ul' );
		// list.innerHTML = content;

		// const [ listBlock ] = rawHandler( { HTML: list.outerHTML } );

		// console.log( 'listBlock: \n' + JSON.stringify( listBlock, null, 2 ) );


		// const innerBlocks = Array.from( listBlock.innerBlocks ).map(
		// 	( listItem ) => {
		// 		console.log( '---- listItem: \n' + JSON.stringify( listItem, null, 2 ) );
		// 		if ( typeof listItem.attributes !== 'undefined' && typeof listItem.attributes.content !== 'undefined' ) {
		// 			return {
		// 				"type": "li",
		// 				"props": {
		// 					"children": [
		// 						listItem.attributes.content
		// 					]
		// 				}
		// 			};
		// 		}
		// 	}
		// );

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

	    // return (
	    //     <>
	    //         {
	    //             ( content && ! RichText.isEmpty( content ) ) && (
	    //                 <RichText.Content 
	    //                     tagName="ul" 
	    //                     value={ innerBlocks } 
	    //                     className={ checklistClassNames }
	    //                 />
	    //             )
	    //         }
	    //     </>
	    // );

	    const TagName = 'ul';

		return (
			<TagName { ...useBlockProps.save() }>
				<RichText.Content value={ values } multiline="li" />
			</TagName>
		);
	}
}

export default [ v1 ];

