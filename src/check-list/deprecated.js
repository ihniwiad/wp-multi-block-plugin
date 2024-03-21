import { RichText, useBlockProps } from '@wordpress/block-editor';

import { rawHandler } from '@wordpress/blocks';

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
		}
	},
	supports: {
		className: false,
		__unstablePasteTextInline: true,
		__experimentalSelector: 'ul',
		__experimentalSlashInserter: true,
	},

	// save( { attributes } ) {
	save( props ) {

		const {
			attributes: {
                className,
                values,
                state,
                marginLeft,
                marginRight,
                marginBefore,
                marginAfter,
                display,
                textAlign,
			},
        } = props;


		// console.log( 'hello from deprecation' );


		// console.log( 'values: ' + values )


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

	 //    const test_1 = (
	 //        <>
	 //            {
	 //                ( content && ! RichText.isEmpty( content ) ) && (
	 //                    <RichText.Content 
	 //                        tagName="ul" 
	 //                        value={ content } 
	 //                        className={ checklistClassNames }
	 //                    />
	 //                )
	 //            }
	 //        </>
		// );
		// console.log( 'test_1: \n' + JSON.stringify( test_1, null, 2 ) );

		// // create element without type
		// const Element = props.element;
		// const test_2 = (
		// 	<>
		// 		<Element { ...useBlockProps.save( { tagName: 'ul', value: content, className: checklistClassNames } ) }/>
		// 	</>
		// );
		// // const test_2 = (
		// // 	<>
		// // 		<Element tagName="ul" value={ content } className={ checklistClassNames }/>
		// // 	</>
		// // );

		// console.log( 'test_2: \n' + JSON.stringify( test_2, null, 2 ) );

	    // return test_1;

	    // RichText value now accepting HTML content
	    return (
	        <>
	            {
	                ( content && ! RichText.isEmpty( content ) ) && (
	                    <RichText.Content 
	                        tagName="ul" 
	                        value={ values } 
	                        className={ checklistClassNames }
	                    />
	                )
	            }
	        </>
	    );


	}
}

export default [ v1 ];

