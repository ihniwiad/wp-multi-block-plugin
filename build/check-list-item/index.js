/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/_functions/add-class-names.js":
/*!*******************************************!*\
  !*** ./src/_functions/add-class-names.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addClassNames: () => (/* binding */ addClassNames)
/* harmony export */ });
// add class names

function addClassNames(attributes, classNamesString) {
  const {
    belowNavbar,
    touchFooter,
    display,
    marginBefore,
    marginAfter,
    marginLeft,
    marginRight,
    resMargin1Breakpoint,
    resMargin1Position,
    resMargin1Size,
    resMargin2Breakpoint,
    resMargin2Position,
    resMargin2Size,
    paddingBefore,
    paddingAfter,
    paddingLeft,
    paddingRight,
    bgColor,
    textColor,
    textSize,
    rounded,
    textAlign,
    resTextAlignBreakpoint,
    resTextAlign,
    textShadow,
    fontWeight,
    inverseTextColor,
    headingInheritTextColor,
    headingInheritFontWeight,
    width,
    height,
    imgThumbnail,
    borderState,
    border,
    hoverShadow,
    hoverMove,
    disabled,
    verticalAlign,
    speechBubble,
    isAlert,
    state,
    objectFit,
    overflow,
    multilayer,
    zIndex,
    isBannerInner,
    isTop0,
    isBottom0,
    isLeft0,
    isRight0,
    position
  } = attributes;
  const classNames = typeof classNamesString != 'undefined' && classNamesString.trim().length > 0 ? classNamesString.split(' ') : [];
  if (!!belowNavbar) {
    classNames.push('below-navbar-content');
  }
  if (!!touchFooter) {
    classNames.push('mb-n-footer-space');
  }
  if (!!display) {
    classNames.push('d-' + display);
  }
  if (!!marginBefore && marginBefore === marginAfter && marginBefore === marginLeft && marginBefore === marginRight) {
    // all
    classNames.push('m-' + marginBefore);
  } else {
    // top & bottom
    if (!!marginBefore && marginBefore === marginAfter) {
      classNames.push('my-' + marginBefore);
    } else {
      if (!!marginBefore) {
        classNames.push('mt-' + marginBefore);
      }
      if (!!marginAfter) {
        classNames.push('mb-' + marginAfter);
      }
    }

    // left & right
    if (!!marginLeft && marginLeft === marginRight) {
      classNames.push('mx-' + marginLeft);
    } else {
      if (!!marginLeft) {
        classNames.push('ml-' + marginLeft);
      }
      if (!!marginRight) {
        classNames.push('mr-' + marginRight);
      }
    }
  }
  if (!!resMargin1Breakpoint && !!resMargin1Position && !!resMargin1Size) {
    // examples: `my-sm-3`, `my-0
    classNames.push('m' + (resMargin1Position === 'all' ? '' : resMargin1Position) + '-' + (resMargin1Breakpoint === 'xs' ? '' : resMargin1Breakpoint + '-') + resMargin1Size);
  }
  if (!!resMargin2Breakpoint && !!resMargin2Position && !!resMargin2Size) {
    // examples: `my-sm-3`, `my-0
    classNames.push('m' + (resMargin2Position === 'all' ? '' : resMargin2Position) + '-' + (resMargin2Breakpoint === 'xs' ? '' : resMargin2Breakpoint + '-') + resMargin2Size);
  }
  if (!!paddingBefore && paddingBefore === paddingAfter && paddingBefore === paddingLeft && paddingBefore === paddingRight) {
    // all
    classNames.push('p-' + paddingBefore);
  } else {
    // top & bottom
    if (!!paddingBefore && paddingBefore === paddingAfter) {
      classNames.push('py-' + paddingBefore);
    } else {
      // top
      if (!!paddingBefore) {
        classNames.push('pt-' + paddingBefore);
      }
      // bottom
      if (!!paddingAfter) {
        classNames.push('pb-' + paddingAfter);
      }
    }

    // left & right
    if (!!paddingLeft && paddingLeft === paddingRight) {
      classNames.push('px-' + paddingLeft);
    } else {
      // left
      if (!!paddingLeft) {
        classNames.push('pl-' + paddingLeft);
      }
      // right
      if (!!paddingRight) {
        classNames.push('pr-' + paddingRight);
      }
    }
  }
  if (!!bgColor) {
    classNames.push('bg-' + bgColor);
  }
  if (!!textColor) {
    classNames.push('text-' + textColor);
  }
  if (!!textSize) {
    classNames.push(textSize);
  }
  if (!!textShadow) {
    classNames.push('text-shadow-' + textShadow);
  }
  if (!!fontWeight) {
    classNames.push('font-weight-' + fontWeight);
  }
  if (!!inverseTextColor) {
    classNames.push('text-inverse');
  }
  if (!!headingInheritTextColor) {
    classNames.push('heading-inherit-text');
  }
  if (!!headingInheritFontWeight) {
    classNames.push('heading-inherit-font-weight');
  }
  if (!!rounded) {
    if (rounded == true || rounded == 'rounded') {
      classNames.push('rounded');
    } else {
      classNames.push('rounded-' + rounded);
    }
  }
  if (!!textAlign) {
    classNames.push('text-' + textAlign);
  }
  if (!!resTextAlignBreakpoint && !!resTextAlign) {
    classNames.push('text-' + resTextAlignBreakpoint + '-' + resTextAlign);
  }
  if (!!width) {
    classNames.push('w-' + width);
  }
  if (!!height) {
    classNames.push('h-' + height);
  }
  if (!!imgThumbnail) {
    classNames.push('img-thumbnail');
  }
  if (!!border) {
    if (border == 'true') {
      classNames.push('border');
    } else if (border == 'x') {
      classNames.push('border-left');
      classNames.push('border-right');
    } else if (border == 'y') {
      classNames.push('border-top');
      classNames.push('border-bottom');
    } else if (border == 'u') {
      classNames.push('border-left');
      classNames.push('border-right');
      classNames.push('border-bottom');
    } else if (border == 'inverted-u') {
      classNames.push('border-left');
      classNames.push('border-right');
      classNames.push('border-top');
    } else {
      // TODO: what about multipla values, e.g. top and bottom?
      classNames.push('border-' + border);
    }
  }
  if (!!borderState) {
    classNames.push('border-' + borderState);
  }
  if (!!hoverShadow) {
    classNames.push('hover-shadow');
  }
  if (!!hoverMove) {
    classNames.push('hover-move');
  }
  if (!!disabled) {
    classNames.push('disabled');
  }
  if (!!verticalAlign) {
    classNames.push('align-' + verticalAlign);
  }
  if (!!speechBubble) {
    classNames.push('speech-bubble');
    if (speechBubble != 'md') {
      classNames.push('speech-bubble-' + speechBubble);
    }
  }
  if (!!isAlert) {
    classNames.push('alert');
    if (!!state) {
      classNames.push('alert-' + state);
    }
  }
  if (!!objectFit) {
    classNames.push('object-fit-' + objectFit);
  }
  if (!!overflow) {
    classNames.push('overflow-' + overflow);
  }
  if (!!multilayer) {
    classNames.push('multilayer-' + multilayer);
  }
  if (!!zIndex) {
    classNames.push('z-' + zIndex);
  }
  if (!!isBannerInner) {
    classNames.push('banner-inner');
  }
  if (!!isTop0) {
    classNames.push('top-0');
  }
  if (!!isBottom0) {
    classNames.push('bottom-0');
  }
  if (!!isLeft0) {
    classNames.push('left-0');
  }
  if (!!isRight0) {
    classNames.push('right-0');
  }
  if (!!position) {
    classNames.push('position-' + position);
  }
  return classNames.join(' ');
}

/***/ }),

/***/ "./src/check-list-item/edit.js":
/*!*************************************!*\
  !*** ./src/check-list-item/edit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks */ "./src/check-list-item/hooks/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./src/check-list-item/utils.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor.scss */ "./src/check-list-item/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */






/**
 * Internal dependencies
 */
// import { useOnEnter } from './use-enter';



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

const name = 'create-block/check-list-item';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function Edit({
  attributes,
  setAttributes,
  onReplace,
  clientId,
  mergeBlocks
}) {
  const {
    className,
    content
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)(blockProps, {
    renderAppender: false
    // __unstableDisableDropZone: true,
  });

  // const useEnterRef = useEnter( { content, clientId } );
  // const useSpaceRef = useSpace( clientId );
  // const onSplit = useSplit( clientId );

  const useEnterRef = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__.useEnter)({
    content,
    clientId
  });
  const onSplit = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__.useSplit)(clientId);
  const onMerge = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__.useMerge)(clientId, mergeBlocks);

  // console.log( 'edit() content: \n' + JSON.stringify( content, null, 2 ) );

  // const onChangeContent = ( value ) => {
  //     setAttributes( { content: value } );
  // };

  const itemClassNames = (0,_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_5__.addClassNames)({}, className);

  // return (
  //     <li { ...innerBlocksProps }>
  //             <RichText
  //                 ref={ useMergeRefs( [ useEnterRef, useSpaceRef ] ) }
  //                 identifier="content"
  //                 tagName="span"
  //                 onChange={ ( nextContent ) =>
  //                     setAttributes( { content: nextContent } )
  //                 }
  //                 value={ content }
  //                 aria-label={ __( 'List text' ) }
  //                 placeholder={ __( 'List' ) }
  // onSplit={ onSplit }
  // onMerge={ onMerge }
  //             />
  //             { innerBlocksProps.children }
  //     </li>
  // );

  // it seems to require a parent element for the rich text editor to 
  // work properly in the backend (be able to select parent list element
  // or select a new block via JavaScript)
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    ...innerBlocksProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    ref: (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useMergeRefs)([useEnterRef]),
    identifier: "content",
    tagName: "span",
    onChange: nextContent => setAttributes({
      content: nextContent
    }),
    value: content,
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('List text'),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('List'),
    onSplit: (value, isOriginal) => {
      let newAttributes;
      console.log('—— useSplit() callback');
      console.log('value: ' + JSON.stringify(value, null, 2));
      console.log('isOriginal: ' + JSON.stringify(isOriginal.current, null, 2));
      if (isOriginal || value) {
        console.log('——-- create new attributes for new block');
        newAttributes = {
          ...attributes,
          content: value
        };
      }
      const block = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__.createBlock)('create-block/check-list-item', newAttributes);
      if (isOriginal) {
        console.log('——-- keep clientId to block');
        block.clientId = clientId;
      }
      return block;
    },
    onMerge: onMerge,
    onReplace: onReplace ? (blocks, ...args) => {
      onReplace((0,_utils__WEBPACK_IMPORTED_MODULE_8__.convertToChecklistItems)(blocks), ...args);
    } : undefined
    // onRemove={  }
  }), innerBlocksProps.children);

  /*
           onSplit={ ( value, isOriginal ) => {
              console.log( '(attr) onSplit()' )
              let newAttributes;
               if ( isOriginal || value ) {
                  newAttributes = {
                      ...attributes,
                      content: value,
                  };
              }
               const block = createBlock( name, newAttributes );
               if ( isOriginal ) {
                  block.clientId = clientId;
              }
               return block;
          } }
           onSplit={ 
              ( value, isAfterOriginal ) => {
                  console.log( 'onSplit' )
                  createBlock( 'create-block/check-list-item', { ...attributes, text: value } );
              } 
          }
           ref={ useOnEnter( { clientId, content } ) }
           ref={ useMergeRefs( [ useEnterRef ] ) }
   */

  // return (
  //        <RichText
  //            ref={ useOnEnter( { clientId, content } ) }
  //            identifier="content"
  //            tagName="li"
  //            onChange={ ( nextContent ) =>
  //                setAttributes( { content: nextContent } )
  //            }
  //            value={ content }
  //            aria-label={ __( 'List text' ) }
  //            placeholder={ __( 'List' ) }

  //        />
  //    );
}

/***/ }),

/***/ "./src/check-list-item/hooks/index.js":
/*!********************************************!*\
  !*** ./src/check-list-item/hooks/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEnter: () => (/* reexport safe */ _use_enter__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   useMerge: () => (/* reexport safe */ _use_merge__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   useSplit: () => (/* reexport safe */ _use_split__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _use_enter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-enter */ "./src/check-list-item/hooks/use-enter.js");
/* harmony import */ var _use_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-split */ "./src/check-list-item/hooks/use-split.js");
/* harmony import */ var _use_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-merge */ "./src/check-list-item/hooks/use-merge.js");


// export { default as useSpace } from './use-space';


/***/ }),

/***/ "./src/check-list-item/hooks/use-enter.js":
/*!************************************************!*\
  !*** ./src/check-list-item/hooks/use-enter.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useEnter)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */
// import useOutdentListItem from './use-outdent-list-item';

function useEnter(props) {
  // console.log( '—— useEnter()' )
  const {
    replaceBlocks,
    selectionChange
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store);
  const {
    getBlock,
    getBlockRootClientId,
    getBlockIndex,
    getBlockName
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store);
  const propsRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(props);
  propsRef.current = props;
  // const outdentListItem = useOutdentListItem();
  return (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useRefEffect)(element => {
    console.log('—— useEnter() return');
    function onKeyDown(event) {
      if (event.defaultPrevented || event.keyCode !== _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__.ENTER) {
        return;
      }
      console.log('ENTER pressed in block');
      // console.log( 'propsRef: \n' + JSON.stringify( propsRef, null, 2 ) );
      // console.log( 'props: \n' + JSON.stringify( props, null, 2 ) );
      const {
        content,
        clientId
      } = propsRef.current;
      if (content.length) {
        return;
      }
      event.preventDefault();
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
      const topParentListBlock = getBlock(getBlockRootClientId(clientId));
      const blockIndex = getBlockIndex(clientId);
      const head = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.cloneBlock)({
        ...topParentListBlock,
        innerBlocks: topParentListBlock.innerBlocks.slice(0, blockIndex)
      });
      const middle = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('create-block/check-list-item');
      // Last list item might contain a `list` block innerBlock
      // In that case append remaining innerBlocks blocks.
      const after = [...(topParentListBlock.innerBlocks[blockIndex].innerBlocks[0]?.innerBlocks || []), ...topParentListBlock.innerBlocks.slice(blockIndex + 1)];
      const tail = after.length ? [(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.cloneBlock)({
        ...topParentListBlock,
        innerBlocks: after
      })] : [];
      replaceBlocks(topParentListBlock.clientId, [head, middle, ...tail], 1);
      // We manually change the selection here because we are replacing
      // a different block than the selected one.
      selectionChange(middle.clientId);
    }
    element.addEventListener('keydown', onKeyDown);
    return () => {
      element.removeEventListener('keydown', onKeyDown);
    };
  }, []);
}

/***/ }),

/***/ "./src/check-list-item/hooks/use-merge.js":
/*!************************************************!*\
  !*** ./src/check-list-item/hooks/use-merge.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useMerge)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */
// import useOutdentListItem from './use-outdent-list-item';

function useMerge(clientId, onMerge) {
  const registry = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useRegistry)();
  const {
    getPreviousBlockClientId,
    getNextBlockClientId,
    getBlockOrder,
    getBlockRootClientId,
    getBlockName
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store);
  const {
    mergeBlocks,
    moveBlocksToPosition
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store);
  // const outdentListItem = useOutdentListItem();

  function getTrailingId(id) {
    console.log('useMerge() getTrailingId()');
    const order = getBlockOrder(id);
    if (!order.length) {
      return id;
    }
    return getTrailingId(order[order.length - 1]);
  }
  function getParentListItemId(id) {
    console.log('useMerge() getParentListItemId()');
    const listId = getBlockRootClientId(id);
    const parentListItemId = getBlockRootClientId(listId);
    if (!parentListItemId) return;
    if (getBlockName(parentListItemId) !== 'create-block/check-list-item') return;
    return parentListItemId;
  }

  /**
   * Return the next list item with respect to the given list item. If none,
   * return the next list item of the parent list item if it exists.
   *
   * @param {string} id A list item client ID.
   * @return {string?} The client ID of the next list item.
   */
  function _getNextId(id) {
    console.log('useMerge() _getNextId()');
    const next = getNextBlockClientId(id);
    if (next) return next;
    const parentListItemId = getParentListItemId(id);
    if (!parentListItemId) return;
    return _getNextId(parentListItemId);
  }

  /**
   * Given a client ID, return the client ID of the list item on the next
   * line, regardless of indentation level.
   *
   * @param {string} id The client ID of the current list item.
   * @return {string?} The client ID of the next list item.
   */
  function getNextId(id) {
    console.log('useMerge() getNextId()');
    const order = getBlockOrder(id);

    // If the list item does not have a nested list, return the next list
    // item.
    if (!order.length) {
      return _getNextId(id);
    }

    // Get the first list item in the nested list.
    return getBlockOrder(order[0])[0];
  }
  return forward => {
    console.log('useMerge() return');
    function mergeWithNested(clientIdA, clientIdB) {
      registry.batch(() => {
        // When merging a sub list item with a higher next list item, we
        // also need to move any nested list items. Check if there's a
        // listed list, and append its nested list items to the current
        // list.
        const [nestedListClientId] = getBlockOrder(clientIdB);
        if (nestedListClientId) {
          moveBlocksToPosition(getBlockOrder(nestedListClientId), nestedListClientId, getBlockRootClientId(clientIdA));
        }
        mergeBlocks(clientIdA, clientIdB);
      });
    }
    if (forward) {
      const nextBlockClientId = getNextId(clientId);
      if (!nextBlockClientId) {
        onMerge(forward);
        return;
      }
      if (getParentListItemId(nextBlockClientId)) {
        // outdentListItem( nextBlockClientId );
      } else {
        mergeWithNested(clientId, nextBlockClientId);
      }
    } else {
      // Merging is only done from the top level. For lowel levels, the
      // list item is outdented instead.
      const previousBlockClientId = getPreviousBlockClientId(clientId);
      if (getParentListItemId(clientId)) {
        // outdentListItem( clientId );
      } else if (previousBlockClientId) {
        const trailingId = getTrailingId(previousBlockClientId);
        mergeWithNested(trailingId, clientId);
      } else {
        onMerge(forward);
      }
    }
  };
}

/***/ }),

/***/ "./src/check-list-item/hooks/use-split.js":
/*!************************************************!*\
  !*** ./src/check-list-item/hooks/use-split.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useSplit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */




function useSplit(clientId) {
  // console.log( 'useSplit()' )

  // We can not rely on the isAfterOriginal parameter of the callback,
  // because if the value after the split is empty isAfterOriginal is false
  // while the value is in fact after the original. So to avoid that issue we use
  // a flag where the first execution of the callback is false (it is the before value)
  // and the second execution is true, it is the after value.
  const isAfter = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);

  // console.log( 'isAfter: \n' + JSON.stringify( isAfter, null, 2 ) );

  const {
    getBlock,
    getBlockRootClientId,
    getBlockIndex,
    getBlockOrder
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(value => {
    console.log('—— useSplit() callback');
    console.log('value: ' + JSON.stringify(value, null, 2));
    console.log('isAfter.current: ' + JSON.stringify(isAfter.current, null, 2));
    const block = getBlock(clientId);
    // console.log( 'block: ' + JSON.stringify( block, null, 2 ) );

    // get ul
    const blockRootClientId = getBlockRootClientId(clientId);
    const blockIndex = getBlockIndex(clientId);
    console.log('blockRootClientId: ' + JSON.stringify(blockRootClientId, null, 2));
    console.log('blockIndex: ' + JSON.stringify(blockIndex, null, 2));

    // TODO:
    //	- clone parent ul
    //	- remove item @ blockIndex
    //	- insert blocks 1 & 2 instead
    //	- add rest

    // updateBlockAttributes( clientId, { content: 'TEST – ' + value } );

    if (isAfter.current) {
      console.log('——-- clone block');
      // return cloneBlock( block, {
      // 	content: value,
      // } );
      return {
        "clientId": "adbb39a2-5d17-4ac6-960b-8bfe1c89e1db",
        "name": "create-block/check-list-item",
        "isValid": true,
        "originalContent": "<li class=\"wp-block-create-block-check-list-item\">Lorem</li>",
        "validationIssues": [],
        "attributes": {
          "content": "TEST"
        },
        "innerBlocks": []
      };
    }
    isAfter.current = true;
    console.log('——-- create block');
    return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)(block.name, {
      ...block.attributes,
      content: value
    });
  }, [clientId, getBlock]);
}

/***/ }),

/***/ "./src/check-list-item/index.js":
/*!**************************************!*\
  !*** ./src/check-list-item/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/check-list-item/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/check-list-item/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/check-list-item/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/check-list-item/block.json");

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



const icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M10,12h8V9h-8V12z M3.29,12.71C3.48,12.89,3.73,13,4,13c0.27,0,0.52-0.1,0.71-0.29l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41 c-0.39-0.39-1.02-0.39-1.41,0L4,10.58l-0.29-0.29c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41L3.29,12.71z"
}));

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  icon,
  // merge( attributes, attributesToMerge ) {
  // 	return {
  // 		...attributes,
  // 		content: attributes.content + attributesToMerge.content,
  // 	};
  // },
  merge(attributes, attributesToMerge) {
    return {
      content: (attributes.content || '') + (attributesToMerge.content || '')
    };
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/check-list-item/save.js":
/*!*************************************!*\
  !*** ./src/check-list-item/save.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
function save({
  attributes
}) {
  const {
    className,
    content
  } = attributes;

  // console.log( 'save() content: \n' + content )

  /*
      <li class={ className } { ...useBlockProps.save() }>
          {
              content && ! RichText.isEmpty( content ) && (
                  <RichText.Content value={ content } />
              )
          }
      </li>
  */

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    value: attributes.content
  }));
}

/***/ }),

/***/ "./src/check-list-item/utils.js":
/*!**************************************!*\
  !*** ./src/check-list-item/utils.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertToChecklistItems: () => (/* binding */ convertToChecklistItems)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

function convertBlockToChecklist(block) {
  const list = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.switchToBlockType)(block, '"create-block/check-list');
  if (list) {
    return list;
  }
  const paragraph = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.switchToBlockType)(block, 'core/paragraph');
  if (!paragraph) {
    return null;
  }
  return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.switchToBlockType)(paragraph, 'core/list');
}
function convertToChecklistItems(blocks) {
  const listItems = [];
  for (let block of blocks) {
    if (block.name === '"create-block/check-list-item') {
      listItems.push(block);
    } else if (block.name === 'core/list') {
      listItems.push(...block.innerBlocks);
    } else if (block = convertBlockToChecklist(block)) {
      for (const {
        innerBlocks
      } of block) {
        listItems.push(...innerBlocks);
      }
    }
  }
  return listItems;
}

/***/ }),

/***/ "./src/check-list-item/editor.scss":
/*!*****************************************!*\
  !*** ./src/check-list-item/editor.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/check-list-item/style.scss":
/*!****************************************!*\
  !*** ./src/check-list-item/style.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/keycodes":
/*!**********************************!*\
  !*** external ["wp","keycodes"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["keycodes"];

/***/ }),

/***/ "./src/check-list-item/block.json":
/*!****************************************!*\
  !*** ./src/check-list-item/block.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/check-list-item","version":"0.1.0","title":"CB Check List Item","category":"text","parent":["create-block/check-list"],"allowedBlocks":[],"description":"Create a check list item.","example":{},"textdomain":"multiple-blocks-plugin-textdomain","attributes":{"content":{"type":"string","source":"html","selector":"li","__experimentalRole":"content"}},"supports":{"anchor":false,"className":true,"__experimentalSelector":"li","__unstablePasteTextInline":true,"interactivity":{"clientNavigation":true}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"check-list-item/index": 0,
/******/ 			"check-list-item/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkmultiple_blocks_plugin"] = globalThis["webpackChunkmultiple_blocks_plugin"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["check-list-item/style-index"], () => (__webpack_require__("./src/check-list-item/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map