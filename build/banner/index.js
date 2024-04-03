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

/***/ "./src/_functions/attributes.js":
/*!**************************************!*\
  !*** ./src/_functions/attributes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeSaveAttributes: () => (/* binding */ makeSaveAttributes)
/* harmony export */ });
// attribute functions 

// returns list of non empty attributes to add to html element
function makeSaveAttributes(attributes) {
  const nonEmptyAttributes = {};
  for (let [key, value] of Object.entries(attributes)) {
    //console.log( 'key: "' + key + '", val: "' + value + '"' );
    if (value) {
      nonEmptyAttributes[key] = value;
    }
  }
  return nonEmptyAttributes;
}

/***/ }),

/***/ "./src/_functions/controls.js":
/*!************************************!*\
  !*** ./src/_functions/controls.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alertToggle: () => (/* binding */ alertToggle),
/* harmony export */   alignItemsSelect: () => (/* binding */ alignItemsSelect),
/* harmony export */   bannerInnerToggle: () => (/* binding */ bannerInnerToggle),
/* harmony export */   bannerSizeSelect: () => (/* binding */ bannerSizeSelect),
/* harmony export */   bannerTypeSelect: () => (/* binding */ bannerTypeSelect),
/* harmony export */   belowNavbarToggle: () => (/* binding */ belowNavbarToggle),
/* harmony export */   bgAttachmentFixedLimitedToggle: () => (/* binding */ bgAttachmentFixedLimitedToggle),
/* harmony export */   bgAttachmentSelect: () => (/* binding */ bgAttachmentSelect),
/* harmony export */   bgColorSelect: () => (/* binding */ bgColorSelect),
/* harmony export */   bgPositionSelect: () => (/* binding */ bgPositionSelect),
/* harmony export */   bgSizeSelect: () => (/* binding */ bgSizeSelect),
/* harmony export */   borderSelect: () => (/* binding */ borderSelect),
/* harmony export */   borderStateSelect: () => (/* binding */ borderStateSelect),
/* harmony export */   bottom0Toggle: () => (/* binding */ bottom0Toggle),
/* harmony export */   breakpointsSelect: () => (/* binding */ breakpointsSelect),
/* harmony export */   buttonStateSelect: () => (/* binding */ buttonStateSelect),
/* harmony export */   colorSelect: () => (/* binding */ colorSelect),
/* harmony export */   dataFnInput: () => (/* binding */ dataFnInput),
/* harmony export */   dataFnOptionsInput: () => (/* binding */ dataFnOptionsInput),
/* harmony export */   dataFnTargetInput: () => (/* binding */ dataFnTargetInput),
/* harmony export */   dataTgInput: () => (/* binding */ dataTgInput),
/* harmony export */   disableResponsiveDownsizingToggle: () => (/* binding */ disableResponsiveDownsizingToggle),
/* harmony export */   disabledToggle: () => (/* binding */ disabledToggle),
/* harmony export */   displaySelect: () => (/* binding */ displaySelect),
/* harmony export */   flexDirectionSelect: () => (/* binding */ flexDirectionSelect),
/* harmony export */   fontWeightSelect: () => (/* binding */ fontWeightSelect),
/* harmony export */   headingInheritFontWeightToggle: () => (/* binding */ headingInheritFontWeightToggle),
/* harmony export */   headingInheritTextColorToggle: () => (/* binding */ headingInheritTextColorToggle),
/* harmony export */   heightSelect: () => (/* binding */ heightSelect),
/* harmony export */   hiddenToggle: () => (/* binding */ hiddenToggle),
/* harmony export */   iconFamilySelect: () => (/* binding */ iconFamilySelect),
/* harmony export */   iconKeyInput: () => (/* binding */ iconKeyInput),
/* harmony export */   ignoreMailtoSpamProtectionToggle: () => (/* binding */ ignoreMailtoSpamProtectionToggle),
/* harmony export */   imgUploadButton: () => (/* binding */ imgUploadButton),
/* harmony export */   imgUploadClickableImg: () => (/* binding */ imgUploadClickableImg),
/* harmony export */   inlineTemplateSelect: () => (/* binding */ inlineTemplateSelect),
/* harmony export */   inverseTextColorToggle: () => (/* binding */ inverseTextColorToggle),
/* harmony export */   isGalleryParentToggle: () => (/* binding */ isGalleryParentToggle),
/* harmony export */   justifyContentSelect: () => (/* binding */ justifyContentSelect),
/* harmony export */   left0Toggle: () => (/* binding */ left0Toggle),
/* harmony export */   linkUrlInput: () => (/* binding */ linkUrlInput),
/* harmony export */   marginAfterSelect: () => (/* binding */ marginAfterSelect),
/* harmony export */   marginBeforeSelect: () => (/* binding */ marginBeforeSelect),
/* harmony export */   marginLeftSelect: () => (/* binding */ marginLeftSelect),
/* harmony export */   marginRightSelect: () => (/* binding */ marginRightSelect),
/* harmony export */   multilayerSelect: () => (/* binding */ multilayerSelect),
/* harmony export */   nodeNameSelect: () => (/* binding */ nodeNameSelect),
/* harmony export */   objectFitSelect: () => (/* binding */ objectFitSelect),
/* harmony export */   overflowSelect: () => (/* binding */ overflowSelect),
/* harmony export */   paddingAfterSelect: () => (/* binding */ paddingAfterSelect),
/* harmony export */   paddingBeforeSelect: () => (/* binding */ paddingBeforeSelect),
/* harmony export */   paddingLeftSelect: () => (/* binding */ paddingLeftSelect),
/* harmony export */   paddingRightSelect: () => (/* binding */ paddingRightSelect),
/* harmony export */   portraitImgMaxWidthBreakpointInput: () => (/* binding */ portraitImgMaxWidthBreakpointInput),
/* harmony export */   positionSelect: () => (/* binding */ positionSelect),
/* harmony export */   relInput: () => (/* binding */ relInput),
/* harmony export */   resMarginBreakpointsSelect: () => (/* binding */ resMarginBreakpointsSelect),
/* harmony export */   resMarginPositionSelect: () => (/* binding */ resMarginPositionSelect),
/* harmony export */   resMarginSizeSelect: () => (/* binding */ resMarginSizeSelect),
/* harmony export */   right0Toggle: () => (/* binding */ right0Toggle),
/* harmony export */   roleInput: () => (/* binding */ roleInput),
/* harmony export */   roundedToggle: () => (/* binding */ roundedToggle),
/* harmony export */   scaleSelect: () => (/* binding */ scaleSelect),
/* harmony export */   sizeSelect: () => (/* binding */ sizeSelect),
/* harmony export */   stateSelect: () => (/* binding */ stateSelect),
/* harmony export */   stateTypeSelect: () => (/* binding */ stateTypeSelect),
/* harmony export */   tabindexInput: () => (/* binding */ tabindexInput),
/* harmony export */   targetToggle: () => (/* binding */ targetToggle),
/* harmony export */   textAlignSelect: () => (/* binding */ textAlignSelect),
/* harmony export */   textAlignToolbar: () => (/* binding */ textAlignToolbar),
/* harmony export */   textColorSelect: () => (/* binding */ textColorSelect),
/* harmony export */   textShadowSelect: () => (/* binding */ textShadowSelect),
/* harmony export */   top0Toggle: () => (/* binding */ top0Toggle),
/* harmony export */   touchFooterToggle: () => (/* binding */ touchFooterToggle),
/* harmony export */   uiTemplateSelect: () => (/* binding */ uiTemplateSelect),
/* harmony export */   verticalAlignSelect: () => (/* binding */ verticalAlignSelect),
/* harmony export */   widthSelect: () => (/* binding */ widthSelect),
/* harmony export */   zIndexSelect: () => (/* binding */ zIndexSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities.js */ "./src/_functions/utilities.js");

// wp import




// functions


// internal vars

const marginPaddingSizes = [{
  value: '',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
}, {
  value: '0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('none (0)', 'bsx-blocks')
}, {
  value: '1',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('extra small', 'bsx-blocks')
}, {
  value: '2',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('small', 'bsx-blocks')
}, {
  value: '3',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('medium', 'bsx-blocks')
}, {
  value: '4',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('large', 'bsx-blocks')
}, {
  value: '5',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('extra large', 'bsx-blocks')
}];
const breakpointsWithUnset = [{
  value: '',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
}, {
  value: 'xs',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default (XS up)', 'bsx-blocks')
}, {
  value: 'sm',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('SM up', 'bsx-blocks')
}, {
  value: 'md',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('MD up', 'bsx-blocks')
}, {
  value: 'lg',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('LG up', 'bsx-blocks')
}, {
  value: 'xl',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('XL up', 'bsx-blocks')
}];
const marginPaddingPositions = [{
  value: '',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
}, {
  value: 'all',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('All', 'bsx-blocks')
}, {
  value: 't',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Before', 'bsx-blocks')
}, {
  value: 'b',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('After', 'bsx-blocks')
}, {
  value: '2',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Y (before & after)', 'bsx-blocks')
}, {
  value: '3',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'bsx-blocks')
}, {
  value: '4',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'bsx-blocks')
}, {
  value: '5',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('X (left & right)', 'bsx-blocks')
}];
const states = [{
  value: '',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
}, {
  value: 'white',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('White', 'bsx-blocks')
}, {
  value: 'primary',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Primary', 'bsx-blocks')
}, {
  value: 'secondary',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Secondary', 'bsx-blocks')
}, {
  value: 'success',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Success', 'bsx-blocks')
}, {
  value: 'danger',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Danger', 'bsx-blocks')
}, {
  value: 'warning',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Warning', 'bsx-blocks')
}, {
  value: 'info',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Info', 'bsx-blocks')
}, {
  value: 'light',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Light', 'bsx-blocks')
}, {
  value: 'dark',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dark', 'bsx-blocks')
}];
const textColorStates = [{
  value: '',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
}, {
  value: 'white',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('White', 'bsx-blocks')
}, {
  value: 'primary',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Primary', 'bsx-blocks')
}, {
  value: 'secondary',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Secondary', 'bsx-blocks')
}, {
  value: 'success',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Success', 'bsx-blocks')
}, {
  value: 'danger',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Danger', 'bsx-blocks')
}, {
  value: 'warning',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Warning', 'bsx-blocks')
}, {
  value: 'info',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Info', 'bsx-blocks')
}, {
  value: 'light',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Light', 'bsx-blocks')
}, {
  value: 'dark',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dark', 'bsx-blocks')
}, {
  value: 'muted',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Muted', 'bsx-blocks')
}, {
  value: 'white-50',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('White transparent', 'bsx-blocks')
}, {
  value: 'black-50',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Black transparent', 'bsx-blocks')
}, {
  value: 'inherit',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inherit', 'bsx-blocks')
}];

// doesn’t have '', has additional 'text-link'
const btnStates = [{
  value: 'primary',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Primary', 'bsx-blocks')
}, {
  value: 'secondary',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Secondary', 'bsx-blocks')
}, {
  value: 'success',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Success', 'bsx-blocks')
}, {
  value: 'danger',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Danger', 'bsx-blocks')
}, {
  value: 'warning',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Warning', 'bsx-blocks')
}, {
  value: 'info',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Info', 'bsx-blocks')
}, {
  value: 'light',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Light', 'bsx-blocks')
}, {
  value: 'dark',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dark', 'bsx-blocks')
}, {
  value: 'link',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link Button', 'bsx-blocks')
}, {
  value: 'text-link',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text link', 'bsx-blocks')
}];
const bgStates = [{
  value: '',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
}, {
  value: 'white',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('White', 'bsx-blocks')
}, {
  value: 'white-opaque',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('White opaque', 'bsx-blocks')
}, {
  value: 'white-transparent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('White transparent', 'bsx-blocks')
}, {
  value: 'black',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Black', 'bsx-blocks')
}, {
  value: 'black-opaque',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Black opaque', 'bsx-blocks')
}, {
  value: 'black-transparent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Black transparent', 'bsx-blocks')
}, {
  value: 'primary',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Primary', 'bsx-blocks')
}, {
  value: 'primary-opaque',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Primary opaque', 'bsx-blocks')
}, {
  value: 'primary-transparent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Primary transparent', 'bsx-blocks')
}, {
  value: 'secondary',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Secondary', 'bsx-blocks')
}, {
  value: 'secondary-opaque',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Secondary opaque', 'bsx-blocks')
}, {
  value: 'secondary-transparent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Secondary transparent', 'bsx-blocks')
}, {
  value: 'success',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Success', 'bsx-blocks')
}, {
  value: 'success-opaque',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Success opaque', 'bsx-blocks')
}, {
  value: 'success-transparent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Success transparent', 'bsx-blocks')
}, {
  value: 'danger',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Danger', 'bsx-blocks')
}, {
  value: 'danger-opaque',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Danger opaque', 'bsx-blocks')
}, {
  value: 'danger-transparent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Danger transparent', 'bsx-blocks')
}, {
  value: 'warning',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Warning', 'bsx-blocks')
}, {
  value: 'warning-opaque',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Warning opaque', 'bsx-blocks')
}, {
  value: 'warning-transparent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Warning transparent', 'bsx-blocks')
}, {
  value: 'info',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Info', 'bsx-blocks')
}, {
  value: 'info-opaque',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Info opaque', 'bsx-blocks')
}, {
  value: 'info-transparent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Info transparent', 'bsx-blocks')
}, {
  value: 'light',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Light', 'bsx-blocks')
}, {
  value: 'light-opaque',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Light opaque', 'bsx-blocks')
}, {
  value: 'light-transparent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Light transparent', 'bsx-blocks')
}, {
  value: 'dark',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dark', 'bsx-blocks')
}, {
  value: 'dark-opaque',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dark opaque', 'bsx-blocks')
}, {
  value: 'dark-transparent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dark transparent', 'bsx-blocks')
}, {
  value: 'transparent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Transparent', 'bsx-blocks')
}];
const textAlignValues = [{
  value: '',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
}, {
  value: 'left',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('left', 'bsx-blocks')
}, {
  value: 'center',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center', 'bsx-blocks')
}, {
  value: 'right',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'bsx-blocks')
}];
const alignmentControls = [{
  icon: 'editor-alignleft',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align left', 'bsx-blocks'),
  align: 'left'
}, {
  icon: 'editor-aligncenter',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align center', 'bsx-blocks'),
  align: 'center'
}, {
  icon: 'editor-alignright',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align right', 'bsx-blocks'),
  align: 'right'
}, {
  icon: 'editor-alignleft',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks'),
  align: ''
}];

// toggles

const ignoreMailtoSpamProtectionToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spam protected email link (default activated)', 'bsx-blocks'),
    checked: !value,
    onChange: onChangeFunction,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('If activated email will not be easily readable for machines.', 'bsx-blocks')
  });
};
const targetToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Open in new tab', 'bsx-blocks'),
    checked: value == '_blank',
    onChange: onChangeFunction
  });
};
const disabledToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Disabled', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const belowNavbarToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Below navbar', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable if element is overlayed by navbar and needs a spacer top.', 'bsx-blocks')
  });
};
const touchFooterToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Touch footer', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable if element touch footer without spacing.', 'bsx-blocks')
  });
};
const inverseTextColorToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inverse text color', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const headingInheritTextColorToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inherit text color to headings', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const headingInheritFontWeightToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inherit font weight to headings', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const roundedToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Rounded', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const alertToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Alert', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const isGalleryParentToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Is image gallery parent', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const bannerInnerToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Is Banner Inner', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const hiddenToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hidden (optional)', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};

// url inputs

const linkUrlInput = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.URLInput, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link URL', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
const bgAttachmentFixedLimitedToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Limit fixed background', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('If enabled large displays (>=2.000px) will have static background attachement.', 'bsx-blocks')
  });
};
const disableResponsiveDownsizingToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Disable responsive image downsizing', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable if you don’t want smaller responsive image sizes, since small devices display image in large dimensions.', 'bsx-blocks')
  });
};
const top0Toggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top: 0', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const bottom0Toggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom: 0', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const left0Toggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left: 0', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const right0Toggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right: 0', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};

// text inputs

const relInput = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Rel (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
const dataFnInput = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('data-fn (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
const dataFnOptionsInput = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('data-fn-options (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
const dataFnTargetInput = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('data-fn-target (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
const dataTgInput = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('data-tg (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
const iconKeyInput = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon key', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
const portraitImgMaxWidthBreakpointInput = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Portrait image max width breakpoint (numeric in px)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Portrait image will be shown up to this width.', 'bsx-blocks')
  });
};
const roleInput = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Role (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
const tabindexInput = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tabindex (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};

// selects

const stateSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = states;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('State', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const bgColorSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = bgStates;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const textColorSelect = (value, onChangeFunction, allowedValues, label) => {
  const defaultValues = textColorStates;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: !!label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const buttonStateSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = btnStates;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color / Appearance', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const colorSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = states;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const stateTypeSelect = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Type', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: [{
      value: 'outline',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Outline', 'bsx-blocks')
    }, {
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Filled', 'bsx-blocks')
    }]
  });
};
const sizeSelect = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Size', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
    }, {
      value: 'sm',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Small', 'bsx-blocks')
    }, {
      value: 'lg',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Large', 'bsx-blocks')
    }]
  });
};
const marginLeftSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = marginPaddingSizes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Margin left', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const marginRightSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = marginPaddingSizes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Margin right', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const marginBeforeSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = marginPaddingSizes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Margin before', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spacer before element', 'bsx-blocks')
  });
};
const marginAfterSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = marginPaddingSizes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Margin after', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spacer after element', 'bsx-blocks')
  });
};
const resMarginBreakpointsSelect = (value, onChangeFunction, allowedValues, sizeString) => {
  const defaultValues = breakpointsWithUnset;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Responsive margin breakpoint', 'bsx-blocks') + (!!sizeString ? ' ' + sizeString : ''),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const resMarginPositionSelect = (value, onChangeFunction, allowedValues, sizeString) => {
  const defaultValues = marginPaddingPositions;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Responsive margin position', 'bsx-blocks') + (!!sizeString ? ' ' + sizeString : ''),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const resMarginSizeSelect = (value, onChangeFunction, allowedValues, sizeString) => {
  const defaultValues = marginPaddingSizes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Responsive margin size', 'bsx-blocks') + (!!sizeString ? ' ' + sizeString : ''),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const displaySelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'block',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Block', 'bsx-blocks')
  }, {
    value: 'inline-block',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inline-block', 'bsx-blocks')
  }, {
    value: 'inline',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inline', 'bsx-blocks')
  }, {
    value: 'flex',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flex', 'bsx-blocks')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Display', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const verticalAlignSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'middle',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Middle', 'bsx-blocks')
  }, {
    value: 'baseline',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Baseline', 'bsx-blocks')
  }, {
    value: 'top',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top', 'bsx-blocks')
  }, {
    value: 'bottom',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'bsx-blocks')
  }, {
    value: 'text-bottom',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text ottom', 'bsx-blocks')
  }, {
    value: 'text-top',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text top', 'bsx-blocks')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Vertical align', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const alignItemsSelect = (value, onChangeFunction, allowedValues, disabled, sizeString) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'start',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Start', 'bsx-blocks')
  }, {
    value: 'center',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center', 'bsx-blocks')
  }, {
    value: 'end',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('End', 'bsx-blocks')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Align items', 'bsx-blocks') + (!!sizeString ? ' ' + sizeString : ''),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    disabled: disabled
  });
};
const paddingBeforeSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = marginPaddingSizes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding before', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inner spacer before', 'bsx-blocks')
  });
};
const paddingAfterSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = marginPaddingSizes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding after', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inner spacer after', 'bsx-blocks')
  });
};
const paddingLeftSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = marginPaddingSizes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding left', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inner spacer left', 'bsx-blocks')
  });
};
const paddingRightSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = marginPaddingSizes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding right', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inner spacer right', 'bsx-blocks')
  });
};
const nodeNameSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'div',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('div', 'bsx-blocks')
  }, {
    value: 'span',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('span', 'bsx-blocks')
  }, {
    value: 'section',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('section', 'bsx-blocks')
  }, {
    value: 'figure',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('figure', 'bsx-blocks')
  }, {
    value: 'ul',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('ul', 'bsx-blocks')
  }, {
    value: 'ol',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('ol', 'bsx-blocks')
  }, {
    value: 'li',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('li', 'bsx-blocks')
  }, {
    value: 'h1',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('h1', 'bsx-blocks')
  }, {
    value: 'h2',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('h2', 'bsx-blocks')
  }, {
    value: 'h3',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('h3', 'bsx-blocks')
  }, {
    value: 'h4',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('h4', 'bsx-blocks')
  }, {
    value: 'h5',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('h5', 'bsx-blocks')
  }, {
    value: 'h6',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('h6', 'bsx-blocks')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Node name', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Node name (please edit only if you know what you’re doing)', 'bsx-blocks')
  });
};
const bgPositionSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: 'c',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center center', 'bsx-blocks')
  }, {
    value: 'c25',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center 25%', 'bsx-blocks')
  }, {
    value: 'c66',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center 66%', 'bsx-blocks')
  }, {
    value: 'c75',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center 75%', 'bsx-blocks')
  }, {
    value: 'ct',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center top', 'bsx-blocks')
  }, {
    value: 'lc',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left center', 'bsx-blocks')
  }, {
    value: 'rc',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right center', 'bsx-blocks')
  }, {
    value: '33c',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('33% center', 'bsx-blocks')
  }, {
    value: '66c',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('66% center', 'bsx-blocks')
  }, {
    value: '80c',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('80% center', 'bsx-blocks')
  }, {
    value: '66t',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('66% top', 'bsx-blocks')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background position', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const bgSizeSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: 'cover',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cover', 'bsx-blocks')
  }, {
    value: 'contain',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Contain', 'bsx-blocks')
  }, {
    value: '100a',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('100% auto', 'bsx-blocks')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background size', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const bannerTypeSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fix height', 'bsx-blocks')
  }, {
    value: 'vh',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Viewport dependent height', 'bsx-blocks')
  }, {
    value: 'st',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Static height', 'bsx-blocks')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Banner height type', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Viewport dependant height will be e.g. all viewport height or viewport height - ? pixels. Static height instead depends only on the banners contents.', 'bsx-blocks')
  });
};
const bannerSizeSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '1',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('1 (biggest)', 'bsx-blocks')
  }, {
    value: '2',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('2', 'bsx-blocks')
  }, {
    value: '3',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('3', 'bsx-blocks')
  }, {
    value: '4',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('4', 'bsx-blocks')
  }, {
    value: '5',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('5', 'bsx-blocks')
  }, {
    value: '6',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('6 (smallest)', 'bsx-blocks')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Banner height size', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose from 1 (maximum) to 3 (minimum)', 'bsx-blocks')
  });
};
const bgAttachmentSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'static',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('static', 'bsx-blocks')
  }, {
    value: 'fixed',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('fixed', 'bsx-blocks')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background attachement', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const textShadowSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'dark',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dark', 'bsx-blocks')
  }, {
    value: 'darker',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Darker', 'bsx-blocks')
  }, {
    value: 'darkest',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Darkest', 'bsx-blocks')
  }, {
    value: 'light',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Light', 'bsx-blocks')
  }, {
    value: 'primary',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Primary', 'bsx-blocks')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text shadow', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const fontWeightSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'light',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Light', 'bsx-blocks')
  }, {
    value: 'normal',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Normal', 'bsx-blocks')
  }, {
    value: 'bold',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bold', 'bsx-blocks')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font weight', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const borderSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'true',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Around', 'bsx-blocks')
  }, {
    value: 'top',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top', 'bsx-blocks')
  }, {
    value: 'bottom',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'bsx-blocks')
  }, {
    value: 'left',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'bsx-blocks')
  }, {
    value: 'right',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'bsx-blocks')
  }, {
    value: 'x',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('X (left & right)', 'bsx-blocks')
  }, {
    value: 'y',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Y (top & bottom)', 'bsx-blocks')
  }, {
    value: 'u',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('U (left, right & bottom)', 'bsx-blocks')
  }, {
    value: 'inverted-u',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inverted U (left, right & top)', 'bsx-blocks')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const borderStateSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = states;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border color', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const iconFamilySelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– Default –', 'bsx-blocks')
  }, {
    value: 's',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Solid', 'bsx-blocks')
  }, {
    value: 'b',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Brand', 'bsx-blocks')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon family', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const widthSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
  }, {
    value: '25',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('25 %', 'bsx-blocks')
  }, {
    value: '50',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('50 %', 'bsx-blocks')
  }, {
    value: '75',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('75 %', 'bsx-blocks')
  }, {
    value: '100',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('100 %', 'bsx-blocks')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Width', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const heightSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
  }, {
    value: '25',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('25 %', 'bsx-blocks')
  }, {
    value: '50',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('50 %', 'bsx-blocks')
  }, {
    value: '75',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('75 %', 'bsx-blocks')
  }, {
    value: '100',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('100 %', 'bsx-blocks')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Height', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const objectFitSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'cover',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cover', 'bsx-blocks')
  }, {
    value: 'contain',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Contain', 'bsx-blocks')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Object-Fit', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const overflowSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'hidden',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hidden', 'bsx-blocks')
  }, {
    value: 'auto',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Auto', 'bsx-blocks')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Overflow', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const justifyContentSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'space-between',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Space between', 'bsx-blocks')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Justify content', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const flexDirectionSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'column',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Column', 'bsx-blocks')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flex direction', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const breakpointsSelect = (value, onChangeFunction, allowedValues, labelString) => {
  const defaultValues = breakpointsWithUnset;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: !!labelString ? ' ' + labelString : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Breakpoint', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const textAlignSelect = (value, onChangeFunction, allowedValues, labelString) => {
  const defaultValues = textAlignValues;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: !!labelString ? ' ' + labelString : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text align', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const multilayerSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'parent',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Parent', 'bsx-blocks')
  }, {
    value: 'absolute',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Absolute', 'bsx-blocks')
  }, {
    value: 'static',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Static', 'bsx-blocks')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Multilayer', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const positionSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'relative',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Relative', 'bsx-blocks')
  }, {
    value: 'absolute',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Absolute', 'bsx-blocks')
  }, {
    value: 'static',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Static', 'bsx-blocks')
  }, {
    value: 'fixed',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fixed', 'bsx-blocks')
  }, {
    value: 'sticky',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sticky', 'bsx-blocks')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Position', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const zIndexSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
  }, {
    value: '-1',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('-1', 'bsx-blocks')
  }, {
    value: '0',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('0', 'bsx-blocks')
  }, {
    value: '1',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('1', 'bsx-blocks')
  }, {
    value: '2',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('2', 'bsx-blocks')
  }, {
    value: '3',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('3', 'bsx-blocks')
  }, {
    value: '4',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('4', 'bsx-blocks')
  }, {
    value: '5',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('5', 'bsx-blocks')
  }, {
    value: '6',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('6', 'bsx-blocks')
  }, {
    value: '7',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('7', 'bsx-blocks')
  }, {
    value: '8',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('8', 'bsx-blocks')
  }, {
    value: '9',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('9', 'bsx-blocks')
  }, {
    value: '10',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('10', 'bsx-blocks')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Z-Index', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};

// radio

const scaleSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '1',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('100%', 'bsx-blocks')
  }, {
    value: '0.75',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('75%', 'bsx-blocks')
  }, {
    value: '0.5',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('50%', 'bsx-blocks')
  }, {
    value: '0.25',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('25%', 'bsx-blocks')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Scale', 'bsx-blocks'),
    selected: value + '',
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    onChange: onChangeFunction
  });
};

// toolbar

const textAlignToolbar = (value, onChangeFunction) => {
  const defaultValues = states;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.AlignmentToolbar, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Alignment', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    alignmentControls: alignmentControls
  });
};

// uploads

const imgUploadClickableImg = (imgId, url, onChangeFunction, type) => {
  const alt = typeof type !== 'undefined' && type === 'p' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Change / upload portrait image', 'bsx-blocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Change / upload image', 'bsx-blocks');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: onChangeFunction,
    allowedTypes: "image",
    value: imgId,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: "bsxui-config-panel-img-button has-margin-bottom",
      onClick: open
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      class: "bsxui-config-panel-img",
      src: url,
      alt: alt
    }))
  });
};
const imgUploadButton = (imgId, onChangeFunction, type) => {
  const label = typeof type !== 'undefined' && type === 'p' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Change / upload portrait image', 'bsx-blocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Change / upload image', 'bsx-blocks');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: onChangeFunction,
    allowedTypes: "image",
    value: imgId,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      isSecondary: true
    }, label)
  });
};

// template selects

const inlineTemplateSelect = (templates, onChangeFunction) => {
  // has no templateName since non selected yet
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "bsxui-initial-inline-control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "bsxui-initial-inline-control-heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Please select template', 'bsx-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bsxui-icon-text-button-list"
  }, templates.map((template, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    label: template.title,
    onClick: () => {
      onChangeFunction(template.name);
    },
    className: 'bsxui-icon-text-button-list-item '
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "bsxui-icon-text-button-list-item-icon"
  }, template.icon), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "bsxui-icon-text-button-list-item-label"
  }, template.title)))));
};
const uiTemplateSelect = (templates, templateName, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bsxui-icon-text-button-list"
  }, templates.map((template, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    label: template.title,
    onClick: () => {
      onChangeFunction(template.name);
    },
    className: 'bsxui-icon-text-button-list-item ' + (templateName === template.name ? 'active' : '')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "bsxui-icon-text-button-list-item-icon"
  }, template.icon), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "bsxui-icon-text-button-list-item-label"
  }, template.title))));
};

/***/ }),

/***/ "./src/_functions/icon.js":
/*!********************************!*\
  !*** ./src/_functions/icon.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XXXXX: () => (/* binding */ XXXXX),
/* harmony export */   banner: () => (/* binding */ banner),
/* harmony export */   bannerColumnRow: () => (/* binding */ bannerColumnRow),
/* harmony export */   bannerContainerWithHeading: () => (/* binding */ bannerContainerWithHeading),
/* harmony export */   bannerEmpty: () => (/* binding */ bannerEmpty),
/* harmony export */   bannerStaticContainerWithHeading: () => (/* binding */ bannerStaticContainerWithHeading),
/* harmony export */   checkList: () => (/* binding */ checkList),
/* harmony export */   checkListItem: () => (/* binding */ checkListItem),
/* harmony export */   container: () => (/* binding */ container),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   lazyImg: () => (/* binding */ lazyImg),
/* harmony export */   rowWithCols: () => (/* binding */ rowWithCols),
/* harmony export */   rowWithColsCol: () => (/* binding */ rowWithColsCol),
/* harmony export */   rowWithCols_1_1: () => (/* binding */ rowWithCols_1_1),
/* harmony export */   rowWithCols_1_1_1: () => (/* binding */ rowWithCols_1_1_1),
/* harmony export */   rowWithCols_1_2: () => (/* binding */ rowWithCols_1_2),
/* harmony export */   rowWithCols_1_2_1: () => (/* binding */ rowWithCols_1_2_1),
/* harmony export */   rowWithCols_2_1: () => (/* binding */ rowWithCols_2_1),
/* harmony export */   rowWithCols_custom: () => (/* binding */ rowWithCols_custom),
/* harmony export */   section: () => (/* binding */ section),
/* harmony export */   sectionBadgeHeadingTextButtonImgColumns: () => (/* binding */ sectionBadgeHeadingTextButtonImgColumns),
/* harmony export */   sectionBgHeadingIconHeadingTextColumns: () => (/* binding */ sectionBgHeadingIconHeadingTextColumns),
/* harmony export */   sectionContainerHeading: () => (/* binding */ sectionContainerHeading),
/* harmony export */   sectionContainerHeadingTextGallery: () => (/* binding */ sectionContainerHeadingTextGallery),
/* harmony export */   sectionContainerRoundedColoredBanner: () => (/* binding */ sectionContainerRoundedColoredBanner),
/* harmony export */   sectionEmpty: () => (/* binding */ sectionEmpty),
/* harmony export */   sectionHeadingListColumns: () => (/* binding */ sectionHeadingListColumns),
/* harmony export */   sectionImgBadgeHeadingTextButtonColumns: () => (/* binding */ sectionImgBadgeHeadingTextButtonColumns),
/* harmony export */   wrapper: () => (/* binding */ wrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const banner = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17,5H3C1.9,5,1,5.9,1,7v6c0,1.11,0.9,2,2,2h14c1.1,0,2-0.89,2-2V7C19,5.9,18.1,5,17,5z M4.5,7C5.33,7,6,7.67,6,8.5 C6,9.33,5.33,10,4.5,10C3.67,10,3,9.33,3,8.5C3,7.67,3.67,7,4.5,7z M17,13H3l-0.02-1L7,10l2,1l5-3l3,2V13z"
}));
const bannerEmpty = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
}));
const bannerContainerWithHeading = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
}));
const bannerStaticContainerWithHeading = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
}));
const bannerColumnRow = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
}));
const checkList = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M10,3v3h8V3H10z M5.79,2.79L4,4.58L3.71,4.29c-0.39-0.39-1.03-0.39-1.42,0c-0.39,0.39-0.39,1.02,0,1.41h0l1,1 C3.48,6.9,3.73,7,4,7s0.52-0.1,0.71-0.29l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41C6.82,2.4,6.18,2.4,5.79,2.79z M10,12h8V9h-8V12z M3.29,12.71C3.48,12.89,3.73,13,4,13c0.27,0,0.52-0.1,0.71-0.29l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41c-0.39-0.39-1.02-0.39-1.41,0 L4,10.58l-0.29-0.29c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41L3.29,12.71z M10,18h8v-3h-8V18z M5.79,14.79L4,16.58 l-0.29-0.29c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41l1,1C3.48,18.89,3.73,19,4,19c0.27,0,0.52-0.1,0.71-0.29 l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41C6.82,14.4,6.18,14.4,5.79,14.79z"
}));
const checkListItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
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
const container = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M6,5H4v2h2V5z M6,9H4v2h2V9z M4,15h2v-2H4V15z M16,5h-2v2h2V5z M16,9h-2v2h2V9z M14,15h2v-2h-2V15z M2,4h16 c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1H2C1.45,2,1,2.45,1,3C1,3.55,1.45,4,2,4z M18,16H2c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h16 c0.55,0,1-0.45,1-1C19,16.45,18.55,16,18,16z"
}));
const lazyImg = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M18.71,1.29C18.52,1.11,18.26,1,18,1H2C1.74,1,1.48,1.11,1.29,1.29C1.11,1.48,1,1.74,1,2v16c0,0.26,0.11,0.52,0.29,0.71 C1.48,18.89,1.74,19,2,19h16c0.26,0,0.52-0.11,0.71-0.29C18.89,18.52,19,18.26,19,18V2C19,1.74,18.89,1.48,18.71,1.29z M3,17V3h14 l0,14H3z M9,12l-2-1l-3,2v2.98h12V11l-3-2L9,12z M7.5,9C8.88,9,10,7.88,10,6.5S8.88,4,7.5,4S5,5.12,5,6.5S6.12,9,7.5,9z"
}));
const rowWithCols = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M18.71,1.29C18.52,1.11,18.26,1,18,1H2C1.74,1,1.48,1.11,1.29,1.29C1.11,1.48,1,1.74,1,2v16c0,0.26,0.11,0.52,0.29,0.71 C1.48,18.89,1.74,19,2,19h16c0.26,0,0.52-0.11,0.71-0.29C18.89,18.52,19,18.26,19,18V2C19,1.74,18.89,1.48,18.71,1.29z M12,3v14H8V3 H12z M3,3h3v14H3V3z M14,17V3h3l0,14H14z"
}));
const rowWithColsCol = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M18.71,1.29C18.52,1.11,18.26,1,18,1H2C1.74,1,1.48,1.11,1.29,1.29C1.11,1.48,1,1.74,1,2v16c0,0.26,0.11,0.52,0.29,0.71 C1.48,18.89,1.74,19,2,19h16c0.26,0,0.52-0.11,0.71-0.29C18.89,18.52,19,18.26,19,18V2C19,1.74,18.89,1.48,18.71,1.29z M12,3v14H8V3 H12z M3,3h3v14H3V3z M14,17V3h3l0,14H14z"
}));
const rowWithCols_1_1_1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
}));
const rowWithCols_1_1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z"
}));
const rowWithCols_1_2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z"
}));
const rowWithCols_2_1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z"
}));
const rowWithCols_1_2_1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM31 34H17V14h14v20zm2 0V14h6v20h-6zm-18 0H9V14h6v20z"
}));
const rowWithCols_custom = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
}));
const section = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M14,4h-3v2h3V4z M8.29,5.71C8.48,5.9,8.73,6,9,6h0V3.59L7.71,2.29C7.52,2.1,7.26,2,7,2H6v2h0.58L8.29,5.71z M19,7V5 c0-0.27-0.1-0.52-0.29-0.71C18.52,4.1,18.27,4,18,4h-2v2h1v9L3,15v-2H1v3c0,0.26,0.11,0.52,0.29,0.71C1.48,16.89,1.74,17,2,17h2v-2 h2v2h3v-2h2v2h3v-2h2v2h2c0.27,0,0.52-0.1,0.71-0.29C18.89,16.52,19,16.27,19,16v-2h-2v-2h2V9h-2V7H19z M3,4h1V2H2 C1.74,2,1.48,2.11,1.29,2.29C1.11,2.48,1,2.74,1,3v3h2V4z M3,8H1v3h2V8z"
}));
const sectionEmpty = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M38.96,30h2l0.01-3h-2L38.96,30z M23,18h3v-2h-3V18z M28,36h3v-2h-3V36z M33,36h3v-2h-3V36z M23,36h3v-2h-3V36z M40.71,16.29C40.52,16.1,40.27,16,40,16h-2v2h1l0,2h2L41,17C41,16.73,40.9,16.48,40.71,16.29z M13,36h3v-2h-3V36z M33,18h3v-2h-3 V18z M18,36h3v-2h-3V36z M28,18h3v-2h-3V18z M9,33H7v2c0,0.26,0.1,0.52,0.29,0.71C7.48,35.89,7.74,36,8,36h3v-2H9V33z M9,23H7v3h2 V23z M9,18H7v3h2V18z M38.95,34H38v2h1.95c0.55,0,1-0.45,1-1l0.01-3h-2L38.95,34z M15.58,14L17,12.59l-0.29-0.29 C16.52,12.11,16.26,12,16,12h-4v2L15.58,14L15.58,14z M9,28H7v3h2V28z M38.98,25h2l0.01-3h-2L38.98,25z M18.41,14L17,15.41 l2.29,2.29C19.48,17.9,19.73,18,20,18h1v-2h-0.59L18.41,14z M9,14h1v-2H8c-0.26,0-0.52,0.1-0.71,0.29C7.11,12.48,7,12.74,7,13v3h2 V14z"
}));
const sectionContainerHeading = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M13,24h22v-3H13V24z M9,23H7v3h2V23z M9,28H7v3h2V28z M9,33H7v2c0,0.26,0.1,0.52,0.29,0.71C7.48,35.89,7.74,36,8,36h3v-2H9 V33z M9,18H7v3h2V18z M9,14h1v-2H8c-0.26,0-0.52,0.1-0.71,0.29C7.11,12.48,7,12.74,7,13v3h2V14z M31,16h-3v2h3V16z M26,16h-3v2h3V16 z M19.29,17.71C19.48,17.9,19.73,18,20,18h1v-2h-0.59l-2-2L17,15.41L19.29,17.71z M15.58,14L17,12.59l-0.29-0.29 C16.52,12.11,16.26,12,16,12h-4v2L15.58,14L15.58,14z M23,36h3v-2h-3V36z M38.96,30h2l0.01-3h-2L38.96,30z M38.95,34H38v2h1.95 c0.55,0,1-0.45,1-1l0.01-3h-2L38.95,34z M38.98,25h2l0.01-3h-2L38.98,25z M33,18h3v-2h-3V18z M33,36h3v-2h-3V36z M13,36h3v-2h-3V36z M40.71,16.29C40.52,16.1,40.27,16,40,16h-2v2h1l0,2h2L41,17C41,16.73,40.9,16.48,40.71,16.29z M18,36h3v-2h-3V36z M28,36h3v-2h-3 V36z"
}));
const sectionContainerHeadingTextGallery = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M35,20H13v3h22V20z M9,23H7v3h2V23z M9,28H7v3h2V28z M9,18H7v3h2V18z M26,16h-3v2h3V16z M9,14h1v-2H8 c-0.26,0-0.52,0.1-0.71,0.29C7.11,12.48,7,12.74,7,13v3h2V14z M31,16h-3v2h3V16z M19.29,17.71C19.48,17.9,19.73,18,20,18h1v-2h-0.59 l-2-2L17,15.41L19.29,17.71z M9,33H7v2c0,0.26,0.1,0.52,0.29,0.71C7.48,35.89,7.74,36,8,36h3v-2H9V33z M38.95,34H38v2h1.95 c0.55,0,1-0.45,1-1l0.01-3h-2L38.95,34z M38.96,30h2l0.01-3h-2L38.96,30z M15.58,14L17,12.59l-0.29-0.29C16.52,12.11,16.26,12,16,12 h-4v2L15.58,14L15.58,14z M38.98,25h2l0.01-3h-2L38.98,25z M33,18h3v-2h-3V18z M40.71,16.29C40.52,16.1,40.27,16,40,16h-2v2h1l0,2h2 L41,17C41,16.73,40.9,16.48,40.71,16.29z M18,36h3v-2h-3V36z M13,36h3v-2h-3V36z M33,36h3v-2h-3V36z M23,36h3v-2h-3V36z M28,36h3v-2 h-3V36z M35,31v-3h-6v3H35z M21,31h6v-3h-6V31z M13,31h6v-3h-6V31z M35,24H13v1h22V24z M35,26H13v1h22V26z"
}));
const sectionContainerRoundedColoredBanner = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M9,23H7v3h2V23z M9,28H7v3h2V28z M9,18H7v3h2V18z M31,16h-3v2h3V16z M9,14h1v-2H8c-0.26,0-0.52,0.1-0.71,0.29 C7.11,12.48,7,12.74,7,13v3h2V14z M26,16h-3v2h3V16z M9,33H7v2c0,0.26,0.1,0.52,0.29,0.71C7.48,35.89,7.74,36,8,36h3v-2H9V33z M19.29,17.71C19.48,17.9,19.73,18,20,18h1v-2h-0.59l-2-2L17,15.41L19.29,17.71z M15.58,14L17,12.59l-0.29-0.29 C16.52,12.11,16.26,12,16,12h-4v2L15.58,14L15.58,14z M38.96,30h2l0.01-3h-2L38.96,30z M38.95,34H38v2h1.95c0.55,0,1-0.45,1-1 l0.01-3h-2L38.95,34z M40.71,16.29C40.52,16.1,40.27,16,40,16h-2v2h1l0,2h2L41,17C41,16.73,40.9,16.48,40.71,16.29z M38.98,25h2 l0.01-3h-2L38.98,25z M33,18h3v-2h-3V18z M18,36h3v-2h-3V36z M13,36h3v-2h-3V36z M23,36h3v-2h-3V36z M28,36h3v-2h-3V36z M33,36h3v-2 h-3V36z M13,22v5c0,0.55,0.45,1,1,1h20c0.55,0,1-0.45,1-1v-5c0-0.55-0.45-1-1-1H14C13.45,21,13,21.45,13,22z M26,27h-4v-1h4V27z M20,22h8v1h-8V22z M15,24h18v1H15V24z"
}));
const sectionImgBadgeHeadingTextButtonColumns = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", null);
const sectionBadgeHeadingTextButtonImgColumns = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", null);
const sectionHeadingListColumns = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", null);
const sectionBgHeadingIconHeadingTextColumns = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", null);
const wrapper = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M11,5h3V3h-3V5z M3,9H1v3h2V9z M6,5h3V3H6V5z M6,17h3v-2H6V17z M18.71,3.29C18.52,3.1,18.27,3,18,3h-2v2h1v1h2V4 C19,3.73,18.9,3.48,18.71,3.29z M17,11h2V8h-2V11z M3,14H1v2c0,0.26,0.11,0.52,0.29,0.71C1.48,16.89,1.74,17,2,17h2v-2H3V14z M17,15 h-1v2h2c0.27,0,0.52-0.1,0.71-0.29C18.9,16.52,19,16.27,19,16v-3h-2V15z M11,17h3v-2h-3V17z M1.29,3.29C1.11,3.48,1,3.74,1,4v3h2V5 h1V3H2C1.74,3,1.48,3.11,1.29,3.29z"
}));
const XXXXX = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
})));

/***/ }),

/***/ "./src/_functions/img.js":
/*!*******************************!*\
  !*** ./src/_functions/img.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkFullImgIsScaled: () => (/* binding */ checkFullImgIsScaled),
/* harmony export */   getImgSizesData: () => (/* binding */ getImgSizesData),
/* harmony export */   getImgWidthHeight: () => (/* binding */ getImgWidthHeight),
/* harmony export */   getOriginalImgUrl: () => (/* binding */ getOriginalImgUrl),
/* harmony export */   getSizeSlugFromUrl: () => (/* binding */ getSizeSlugFromUrl),
/* harmony export */   getSizesAndWithoutSizesTruncFromUrlTrunc: () => (/* binding */ getSizesAndWithoutSizesTruncFromUrlTrunc),
/* harmony export */   getUrlTruncAndExtension: () => (/* binding */ getUrlTruncAndExtension),
/* harmony export */   imgExists: () => (/* binding */ imgExists),
/* harmony export */   makeBase64PreloadImgSrc: () => (/* binding */ makeBase64PreloadImgSrc),
/* harmony export */   makeImgData: () => (/* binding */ makeImgData),
/* harmony export */   makeImgSizesFromImgData: () => (/* binding */ makeImgSizesFromImgData),
/* harmony export */   makeSizedImgs: () => (/* binding */ makeSizedImgs),
/* harmony export */   removeFileExt: () => (/* binding */ removeFileExt)
/* harmony export */ });
// img functions

function getUrlTruncAndExtension(url) {
  const urlExplode = url.split('.');
  const fileExtension = urlExplode[urlExplode.length - 1];
  urlExplode.pop();
  const urlWithoutFileExtension = urlExplode.join('.');
  return {
    trunc: urlWithoutFileExtension,
    extension: fileExtension
  };
}
function checkFullImgIsScaled(fullUrl) {
  const urlWithoutFileExtension = getUrlTruncAndExtension(fullUrl).trunc;
  return urlWithoutFileExtension.lastIndexOf('-scaled') === urlWithoutFileExtension.length - 7;
}
function getOriginalImgUrl(fullUrl) {
  const truncAndExtension = getUrlTruncAndExtension(fullUrl);
  return truncAndExtension.trunc.substring(0, truncAndExtension.trunc.length - 7) + '.' + truncAndExtension.extension;
}
function getSizesAndWithoutSizesTruncFromUrlTrunc(urlTrunc) {
  // input may be
  // http://my-domain.local/wp-content/uploads/2024/02/my-img-name-1024x768
  // http://my-domain.local/wp-content/uploads/2024/02/my-img-name-768x1333
  // http://my-domain.local/wp-content/uploads/2024/02/my-img-name

  // remove file name after last '-'
  const urlWithoutFileExtensionExplode = urlTrunc.split('-');
  const sizes = urlWithoutFileExtensionExplode[urlWithoutFileExtensionExplode.length - 1].split('x');
  urlWithoutFileExtensionExplode.pop();
  return {
    width: sizes[0],
    height: sizes[1],
    withoutSizeSlugTrunc: urlWithoutFileExtensionExplode.join('-')
  };
}
function removeFileExt(fullUrl) {
  const urlExplode = fullUrl.split('.');
  urlExplode.pop();
  return urlExplode.join('.');
}
function getSizeSlugFromUrl(fullUrl, originalImgUrl) {
  const sizeSlugWithFileExt = fullUrl.replace(removeFileExt(originalImgUrl), '');
  return removeFileExt(sizeSlugWithFileExt);
}
function makeSizedImgs(config) {
  const {
    originalWidth,
    originalHeight,
    url,
    scaleList
  } = config;
  const ratio = originalWidth / originalHeight;

  // need to separate if img size 'large' img is scaled down of a larger original img or is original size
  // doesn’t depend on ratio but only on width (not height!)
  const imgIsBetween770And1024 = originalWidth <= 1024 && originalWidth >= 770;

  // console.log( 'ratio: ' + ratio )
  // console.log( 'original size: ' + originalWidth + 'x' + originalHeight )
  // console.log( 'imgIsBetween770And1024: ' + ( imgIsBetween770And1024 ? 'true' : 'false' ) )

  const urlTruncAndExtension = getUrlTruncAndExtension(url);

  // console.log( 'urlTruncAndExtension: \n' + JSON.stringify( urlTruncAndExtension, null, 2 ) );

  const fileExtension = urlTruncAndExtension.extension;
  const urlWithoutFileExtension = urlTruncAndExtension.trunc;
  const sizesAndWithoutSizeSlugTrunc = imgIsBetween770And1024 ? {
    width: originalWidth,
    height: originalHeight,
    withoutSizeSlugTrunc: urlWithoutFileExtension
  } :
  // split img name to get sizes
  getSizesAndWithoutSizesTruncFromUrlTrunc(urlWithoutFileExtension);
  // console.log( 'sizesAndWithoutSizeSlugTrunc: \n' + JSON.stringify( sizesAndWithoutSizeSlugTrunc, null, 2 ) );

  // base width for scaling is still 1024 even for smaller images
  // const width = imgIsBetween770And1024 ? 1024 : sizesAndWithoutSizeSlugTrunc.width;
  const urlWithoutSizeSlugAndFileExtension = sizesAndWithoutSizeSlugTrunc.withoutSizeSlugTrunc;

  // console.log( 'width: ' + width )
  // console.log( 'urlWithoutSizeSlugAndFileExtension: ' + urlWithoutSizeSlugAndFileExtension )

  const returnList = [];
  scaleList.forEach((scale, index) => {
    // calculate new size

    let scaledWidth, scaledHeight;
    if (ratio >= 1 || scale === 768) {
      // is landscape or scale size is 768 (has a different calculation)

      scaledWidth = scale;
      scaledHeight = Math.round(scale / originalWidth * originalHeight);
    } else {
      // is portrait and not scale size 768

      scaledWidth = Math.round(scale / originalHeight * originalWidth);
      scaledHeight = scale;
    }

    // console.log( 'scaled size: ' + scaledWidth + 'x' + scaledHeight + ' (' + ( ratio >= 1 ? 'landscape' : 'portrait' ) + ')' )

    // check if default size exists for current img (only if original img is larger)
    if (scaledWidth <= originalWidth) {
      const sizeSlug = '-' + scaledWidth + 'x' + scaledHeight;
      const scaledUrl = urlWithoutSizeSlugAndFileExtension + sizeSlug + '.' + fileExtension;
      returnList.push({
        url: scaledUrl,
        // deprecated soon
        sizeSlug: sizeSlug,
        width: scaledWidth,
        height: scaledHeight
      });
    }
  });
  return returnList;
}
function getImgWidthHeight(imgUrl) {
  return new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height
      });
      img.remove;
    };
    img.onerror = err => {
      reject('Error on loading image "' + imgUrl + '"', err);
    };
    img.src = imgUrl;
    document.body.appendChild(img);
  });
}
function imgExists(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('HEAD', url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          resolve(true);
        } else {
          resolve(false);
        }
      }
    };
    xhr.send(null);
  });
}

// getting sorted list of all imgs (default and hidden scaled)
async function getImgSizesData(img) {
  // console.log( 'getImgSizesData()' );

  // console.log( 'img.sizes: \n' + JSON.stringify( img.sizes, null, 2 ) );
  // console.log( 'img.media_details: \n' + JSON.stringify( img.media_details, null, 2 ) );

  // scaled (hidden) img settings

  const imgScaleList = [768, 1536, 2048];
  const defaultImgList = ['thumbnail', 'medium', 'large', 'full'];
  const imgSizesOrder = ['thumbnail', 'medium', imgScaleList[0] + '', 'large', imgScaleList[1] + '', imgScaleList[2] + '', 'full', 'original'];
  let originalImgUrl = '';
  let originalWidth = 0;
  let originalHeight = 0;
  const fullImgIsScaled = checkFullImgIsScaled(img.url);
  const imgIsBetween770And1024 = img.width <= 1024 && img.width >= 770;
  if (fullImgIsScaled) {
    // get original, get sizes
    originalImgUrl = getOriginalImgUrl(img.url);
    let originalImgSizes;
    try {
      originalImgSizes = await getImgWidthHeight(originalImgUrl);
    } catch (err) {
      console.error(err);
    }
    originalWidth = originalImgSizes.width;
    originalHeight = originalImgSizes.height;
  } else {
    // get sizes from full img
    originalImgUrl = img.sizes.full.url;
    originalWidth = img.sizes.full.width;
    originalHeight = img.sizes.full.height;
  }
  const originalImgUrlTruncAndExt = getUrlTruncAndExtension(originalImgUrl);
  const truncWithoutSizeSlug = originalImgUrlTruncAndExt.trunc;
  const fileExt = originalImgUrlTruncAndExt.extension;
  let scaledImgs = new Map();
  const returnImgs = [];

  // console.log( 'img.width: ' + img.width )

  // make sizes only if large img exists or original img has 1024px width
  if (img.sizes.large != undefined || imgIsBetween770And1024) {
    // if ( img.sizes.large != undefined ) {

    // config for making sizes (might change in newer WP versions)
    const sizedImgsConfig = {
      url: imgIsBetween770And1024 ? img.url : img.sizes.large.url,
      scaleList: imgScaleList,
      originalWidth: originalWidth,
      originalHeight: originalHeight
    };
    const sizedImgs = makeSizedImgs(sizedImgsConfig);

    // console.log( 'sizedImgsConfig: ' + JSON.stringify( sizedImgsConfig, null, 2 ) );
    // console.log( 'sizedImgs: ' + JSON.stringify( sizedImgs, null, 2 ) );

    // check all imgs if exist (since WordPress might change hidden img sizes one day);
    await Promise.all(sizedImgs.map(async (sizedImg, index) => {
      const currentImageExists = await imgExists(sizedImg.url);
      if (currentImageExists) {
        scaledImgs.set(imgScaleList[index] + '', sizedImg);
      }
    }));
  }

  // console.log( 'scaledImgs.length: ' + scaledImgs.length );

  // make ordered list of all existing default img sizes and scaled (hidden) img sizes
  imgSizesOrder.forEach((imgSizeKey, index) => {
    if (defaultImgList.indexOf(imgSizeKey) != -1 && img.sizes[imgSizeKey] != undefined) {
      // get from default img list
      returnImgs.push({
        url: img.sizes[imgSizeKey].url,
        sizeSlug: getSizeSlugFromUrl(img.sizes[imgSizeKey].url, originalImgUrl),
        width: img.sizes[imgSizeKey].width,
        height: img.sizes[imgSizeKey].height
      });
    } else if (imgScaleList.indexOf(parseFloat(imgSizeKey)) != -1 && scaledImgs.get(imgSizeKey) != undefined) {
      // get from scaled imgs list
      returnImgs.push(scaledImgs.get(imgSizeKey));
    } else if (imgSizeKey == 'original' && fullImgIsScaled) {
      // add unscaled original
      returnImgs.push({
        url: originalImgUrl,
        sizeSlug: getSizeSlugFromUrl(originalImgUrl, originalImgUrl),
        width: originalWidth,
        height: originalHeight
      });
    }
  });

  // sort by width since current order might not correspond to sizes (e.g. portrait image at scale 768)
  returnImgs.sort((a, b) => a.width - b.width);

  // console.log( 'returnImgs: \n' + JSON.stringify( returnImgs, null, 2 ) );
  // console.log( 'truncWithoutSizeSlug: ' + truncWithoutSizeSlug );
  // console.log( 'fileExt: ' + fileExt );

  return {
    imgs: returnImgs,
    originalWidth: originalWidth,
    originalHeight: originalHeight,
    truncWithoutSizeSlug: truncWithoutSizeSlug,
    fileExt: fileExt
  };
}
const makeBase64PreloadImgSrc = (imgWidth, imgHeight) => {
  const img = '<svg xmlns="http://www.w3.org/2000/svg" width="' + imgWidth + 'px" height="' + imgHeight + 'px" viewBox="0 0 ' + imgWidth + ' ' + imgHeight + '"><rect fill="none" width="' + imgWidth + '" height="' + imgHeight + '"/></svg>';
  const imgBase64 = btoa(img);
  return 'data:image/svg+xml;base64,' + imgBase64;
};

/*
example:

// was saved in attibutes before
imgSizes = [
    {
        url: '', // url was very large
        width: '',
        height: '',
    },
    // ... (1...n)
];

// is saved in attributes now, replaces imgSizes
imgData = [
    sizes: [
        {
            s: '', // size slug is short
            w: '',
            h: '',
        },
        // ... (1...n)
    ],
    trunc: '',
    ext: '',
];
*/
const makeImgSizesFromImgData = imgData => {
  // console.log( 'makeImgSizesFromImgData()' );
  // console.log( 'imgData: ' + JSON.stringify( imgData, null, 2 ) + '\n' );

  const imgSizes = [];
  if (typeof imgData[0] !== 'undefined' && typeof imgData[0].sizes !== 'undefined' && typeof imgData[0].trunc !== 'undefined' && typeof imgData[0].ext !== 'undefined') {
    imgData[0].sizes.forEach((size, index) => {
      if (typeof size.s !== 'undefined' && typeof size.w !== 'undefined' && typeof size.h !== 'undefined') {
        imgSizes.push({
          url: imgData[0].trunc + size.s + '.' + imgData[0].ext,
          width: size.w,
          height: size.h
        });
      }
    });
  }
  return imgSizes;
};
const makeImgData = (imgSizes, truncWithoutSizeSlug, fileExt) => {
  const sizes = [];
  imgSizes.forEach((img, index) => {
    sizes.push({
      s: img.sizeSlug,
      w: img.width,
      h: img.height
    });
  });
  return [{
    sizes: sizes,
    trunc: truncWithoutSizeSlug,
    ext: fileExt
  }];
};

// export async function getOriginalImgSizes( img ) {

//     if ( fullImgIsScaled( img.url ) ) {
//         // find original img

//         let originalImgSizes;

//         try {
//             originalImgSizes = await getImgWidthHeight( getOriginalImgUrl( img.url ) );
//         } catch( err ) {
//             console.error( err );
//         }

//         return {
//             width: originalImgSizes.width,
//             height: originalImgSizes.height,
//         };

//     }
//     else {
//         // get sizes from full img
//         return {
//             width: img.sizes.full.width,
//             height: img.sizes.full.height,
//         };
//     }
// }

/***/ }),

/***/ "./src/_functions/utilities.js":
/*!*************************************!*\
  !*** ./src/_functions/utilities.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterByAllowedValueKeys: () => (/* binding */ filterByAllowedValueKeys),
/* harmony export */   getFileName: () => (/* binding */ getFileName),
/* harmony export */   getFileSuffix: () => (/* binding */ getFileSuffix),
/* harmony export */   getTemplate: () => (/* binding */ getTemplate)
/* harmony export */ });
const filterByAllowedValueKeys = (mapArray, allowedValues) => {
  let filteredValues = [];
  if (typeof allowedValues !== 'undefined' && allowedValues != null && Array.isArray(allowedValues) && allowedValues.length > 0) {
    mapArray.forEach(item => {
      if (typeof allowedValues.find(key => key === item.value) !== 'undefined') {
        filteredValues.push(item);
      }
    });
  } else {
    filteredValues = mapArray;
  }
  return filteredValues;
};
const getTemplate = (templates, currentTemplateName) => {
  const currentTemplate = templates.find(item => item.name === currentTemplateName);
  return currentTemplate ? currentTemplate : {};
};
const getFileSuffix = filePath => {
  if (!!filePath && filePath.indexOf('.') != -1) {
    const explode = filePath.split('.');
    return explode[explode.length - 1];
  } else {
    return '';
  }
};
const getFileName = filePath => {
  if (!!filePath && filePath.indexOf('/') != -1) {
    const explode = filePath.split('/');
    return explode[explode.length - 1];
  } else {
    return '';
  }
};

/***/ }),

/***/ "./src/banner/edit.js":
/*!****************************!*\
  !*** ./src/banner/edit.js ***!
  \****************************/
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_attributes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../_functions/attributes.js */ "./src/_functions/attributes.js");
/* harmony import */ var _functions_utilities_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../_functions/utilities.js */ "./src/_functions/utilities.js");
/* harmony import */ var _functions_img_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../_functions/img.js */ "./src/_functions/img.js");
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../_functions/controls.js */ "./src/_functions/controls.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./src/banner/utils.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./templates */ "./src/banner/templates.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./editor.scss */ "./src/banner/editor.scss");












// utils


// templates


/**
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


// insert directly into banner element without `.banner-inner`
const noBannerInnerTemplateNames = ['column-row-banner'];

/**
 * @return {Element} Element to render.
 */
function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    getBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
  const {
    nodeName,
    templateName,
    belowNavbar,
    touchFooter,
    bgColor,
    imgId,
    imgSizes,
    imgData,
    imgSizeIndex,
    url,
    portraitImgId,
    portraitImgSizes,
    portraitImgData,
    portraitImgSizeIndex,
    bannerType,
    bannerSize,
    bgAttachment,
    bgAttachmentFixedLimited,
    bgSize,
    bgPosition,
    alignItems,
    smAlignItems,
    mdAlignItems,
    rounded,
    marginBefore,
    marginAfter,
    paddingBefore,
    paddingAfter,
    href,
    target,
    rel,
    dataFn,
    disableResponsiveDownsizing,
    multilayer
  } = attributes;
  const hasInnerBlocks = () => {
    const block = getBlock(clientId);
    if (typeof block.innerBlocks === 'undefined') return false;
    return block.innerBlocks.length > 0;
  };
  let template = (0,_functions_utilities_js__WEBPACK_IMPORTED_MODULE_7__.getTemplate)(_templates__WEBPACK_IMPORTED_MODULE_11__["default"], templateName).template;

  // initial set, replaces old attr 'imgSizes'
  const hasOldAttrImgSizes = typeof imgSizes !== 'undefined' && Array.isArray(imgSizes) && imgSizes.length > 0;
  const hasOldAttrPortraitImgSizes = typeof portraitImgSizes !== 'undefined' && Array.isArray(portraitImgSizes) && portraitImgSizes.length > 0;
  const calcImgSizes = hasOldAttrImgSizes ? imgSizes : (0,_functions_img_js__WEBPACK_IMPORTED_MODULE_8__.makeImgSizesFromImgData)(imgData);
  const calcPortraitImgSizes = hasOldAttrPortraitImgSizes ? portraitImgSizes : (0,_functions_img_js__WEBPACK_IMPORTED_MODULE_8__.makeImgSizesFromImgData)(portraitImgData);

  // TEST
  // console.log( 'props.attributes: ' + JSON.stringify( props.attributes, null, 2 ) );
  // console.log( 'calcImgSizes: ' + JSON.stringify( calcImgSizes, null, 2 ) );
  // console.log( 'calcPortraitImgSizes: ' + JSON.stringify( calcPortraitImgSizes, null, 2 ) + '\n\n' );

  const onChangeTemplate = value => {
    const currentTemplateMap = (0,_functions_utilities_js__WEBPACK_IMPORTED_MODULE_7__.getTemplate)(_templates__WEBPACK_IMPORTED_MODULE_11__["default"], value);
    if (currentTemplateMap.template != undefined && currentTemplateMap.attributes != undefined) {
      template = currentTemplateMap.template;
      setAttributes({
        templateName: value,
        ...currentTemplateMap.attributes
      });
    } else {
      console.log('Error: Template change failed.');
    }

    // console.log( 'changed templateName: ' + value );
    // console.log( 'changed template: ' + template );
  };
  const onChangeNodeName = value => {
    setAttributes({
      nodeName: value
    });
  };
  const onChangeBelowNavbar = value => {
    setAttributes({
      belowNavbar: value
    });
  };
  const onChangeTouchFooter = value => {
    setAttributes({
      touchFooter: value
    });
  };
  const onChangeBgColor = value => {
    setAttributes({
      bgColor: value
    });
  };
  async function onSelectImage(img) {
    if (typeof img.url !== 'undefined') {
      const newImgAllData = await (0,_functions_img_js__WEBPACK_IMPORTED_MODULE_8__.getImgSizesData)(img);

      // check if current img size index fits to new img (might be too large)
      let newImgSizeIndex = parseInt(imgSizeIndex);
      if (parseInt(imgSizeIndex) >= newImgAllData.imgs.length) {
        newImgSizeIndex = newImgAllData.imgs.length - 1;
      }

      // prepare attr 'imgData' to save in block (replacing old attr 'imgSizes')
      const newImgData = (0,_functions_img_js__WEBPACK_IMPORTED_MODULE_8__.makeImgData)(newImgAllData.imgs, newImgAllData.truncWithoutSizeSlug, newImgAllData.fileExt);

      // avoid creating deprecated (empty) attr 'imgSizes'
      if (imgSizes && imgSizes.length > 0) {
        // delete value of 'imgSizes'
        setAttributes({
          imgId: img.id,
          imgSizes: '',
          // save empty, replaced by imgData
          imgData: newImgData,
          imgSizeIndex: newImgSizeIndex.toString(),
          url: '' // save empty, replaced by imgData
        });
      } else {
        // skip 'imgSizes'
        setAttributes({
          imgId: img.id,
          imgData: newImgData,
          imgSizeIndex: newImgSizeIndex.toString()
        });
      }

      // console.log( 'url: ' + newImgAllData.imgs[ newImgSizeIndex ].url );
    }
  }
  ;
  async function onSelectPortraitImage(portraitImg) {
    if (typeof portraitImg.url !== 'undefined') {
      const newPortraitImgAllData = await (0,_functions_img_js__WEBPACK_IMPORTED_MODULE_8__.getImgSizesData)(portraitImg);

      // check if current img size index fits to new img (might be too large)
      let newPortraitImgSizeIndex = parseInt(portraitImgSizeIndex);
      if (parseInt(portraitImgSizeIndex) >= newPortraitImgAllData.imgs.length) {
        newPortraitImgSizeIndex = newPortraitImgAllData.imgs.length - 1;
      }
      // console.log( 'newPortraitImgSizeIndex: ' + newPortraitImgSizeIndex );

      // prepare attr 'imgData' to save in block (replacing old attr 'portraitImgSizes')
      const newPortraitImgData = (0,_functions_img_js__WEBPACK_IMPORTED_MODULE_8__.makeImgData)(newPortraitImgAllData.imgs, newPortraitImgAllData.truncWithoutSizeSlug, newPortraitImgAllData.fileExt);

      // avoid creating deprecated (empty) attr 'portraitImgSizes'
      if (portraitImgSizes && portraitImgSizes.length > 0) {
        // delete value of 'portraitImgSizes'
        setAttributes({
          portraitImgId: portraitImg.id,
          portraitImgSizes: '',
          // save empty, replaced by portraitImgData
          portraitImgData: newPortraitImgData,
          portraitImgSizeIndex: newPortraitImgSizeIndex.toString()
        });
      } else {
        // skip 'portraitImgSizes'
        setAttributes({
          portraitImgId: portraitImg.id,
          portraitImgData: newPortraitImgData,
          portraitImgSizeIndex: newPortraitImgSizeIndex.toString()
        });
      }

      // console.log( 'portraitImgSizes[ portraitImgSizeIndex ].url: ' + newPortraitImgAllData.imgs[ newPortraitImgSizeIndex ].url );
    }
  }
  ;
  const onDeleteImage = () => {
    // avoid creating deprecated attr 'imgSizes'
    if (imgSizes && imgSizes.length > 0) {
      // delete value of 'imgSizes'
      setAttributes({
        imgId: '',
        imgSizes: '',
        imgData: ''
      });
    } else {
      // skip 'imgSizes'
      setAttributes({
        imgId: '',
        imgData: ''
      });
    }
  };
  const onDeletePortraitImage = () => {
    // avoid creating deprecated attr 'portraitImgSizes'
    if (portraitImgSizes && portraitImgSizes.length > 0) {
      // delete value of 'portraitImgSizes'
      setAttributes({
        portraitImgId: '',
        portraitImgSizes: '',
        portraitImgData: ''
      });
    } else {
      // skip 'portraitImgSizes'
      setAttributes({
        portraitImgId: '',
        portraitImgData: ''
      });
    }
  };
  const onChangeBannerType = value => {
    setAttributes({
      bannerType: value
    });
  };
  const onChangeBannerSize = value => {
    setAttributes({
      bannerSize: value
    });
  };
  const onChangeBgAttachment = value => {
    setAttributes({
      bgAttachment: value
    });
  };
  const onChangeBgAttachmentFixedLimited = value => {
    setAttributes({
      bgAttachmentFixedLimited: value
    });
  };
  const onChangeBgSize = value => {
    setAttributes({
      bgSize: value
    });
  };
  const onChangeBgPosition = value => {
    setAttributes({
      bgPosition: value
    });
  };
  const onChangeAlignItems = value => {
    setAttributes({
      alignItems: value
    });
  };
  const onChangeSmAlignItems = value => {
    setAttributes({
      smAlignItems: value
    });
  };
  const onChangeMdAlignItems = value => {
    setAttributes({
      mdAlignItems: value
    });
  };
  const onChangeRounded = value => {
    setAttributes({
      rounded: value
    });
  };
  const onChangeMarginBefore = value => {
    setAttributes({
      marginBefore: value
    });
  };
  const onChangeMarginAfter = value => {
    setAttributes({
      marginAfter: value
    });
  };
  const onChangePaddingBefore = value => {
    setAttributes({
      paddingBefore: value
    });
  };
  const onChangePaddingAfter = value => {
    setAttributes({
      paddingAfter: value
    });
  };
  const onChangeHref = value => {
    setAttributes({
      href: value
    });
  };
  const onChangeTarget = value => {
    setAttributes({
      target: !!value ? '_blank' : ''
    });
  };
  const onChangeRel = value => {
    setAttributes({
      rel: value
    });
  };
  const onChangeDataFn = value => {
    setAttributes({
      dataFn: value
    });
  };
  const onChangeDisableResponsiveDownsizing = value => {
    setAttributes({
      disableResponsiveDownsizing: value
    });
  };
  const onChangeMultilayer = value => {
    setAttributes({
      multilayer: value
    });
  };
  const onChangeImgSizeIndex = value => {
    setAttributes({
      imgSizeIndex: value.toString()
    });
  };
  const imgSizeRadioControlOptions = [];
  calcImgSizes.forEach((imgSize, index) => {
    imgSizeRadioControlOptions.push({
      value: index.toString(),
      label: imgSize.width + 'x' + imgSize.height + (imgSize.width === imgSize.height ? ' ' + (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('(Square format)', 'bsx-blocks') : '')
    });
  });
  const onChangePortraitImgSizeIndex = value => {
    setAttributes({
      portraitImgSizeIndex: value.toString()
    });
  };
  const portraitImgSizeRadioControlOptions = [];
  calcPortraitImgSizes.forEach((portraitImgSize, index) => {
    portraitImgSizeRadioControlOptions.push({
      value: index.toString(),
      label: portraitImgSize.width + 'x' + portraitImgSize.height + (portraitImgSize.width === portraitImgSize.height ? ' ' + (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('(Square format)', 'bsx-blocks') : '')
    });
  });
  let bannerClassName = (0,_utils__WEBPACK_IMPORTED_MODULE_10__.makeBannerClassNames)({
    bannerType,
    bannerSize,
    bgAttachment,
    bgAttachmentFixedLimited,
    bgSize,
    bgPosition,
    alignItems,
    smAlignItems,
    mdAlignItems,
    templateName,
    rounded,
    href
  });
  bannerClassName = (0,_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_5__.addClassNames)({
    belowNavbar,
    touchFooter,
    bgColor,
    rounded,
    marginBefore,
    marginAfter,
    paddingBefore,
    paddingAfter,
    multilayer
  }, bannerClassName);
  const bannerInnerClassName = (0,_utils__WEBPACK_IMPORTED_MODULE_10__.makeBannerInnerClassNames)({
    templateName
  });
  const TagName = nodeName;
  const bannerStyle = typeof calcImgSizes[imgSizeIndex] !== 'undefined' ? {
    backgroundImage: `url(${calcImgSizes[imgSizeIndex].url})`
  } : {};
  const controls = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Banner template', 'bsx-blocks')
  }, (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.uiTemplateSelect)(_templates__WEBPACK_IMPORTED_MODULE_11__["default"], templateName, onChangeTemplate)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Banner image', 'bsx-blocks')
  }, imgId ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.imgUploadClickableImg)(imgId, calcImgSizes[imgSizeIndex].url, onSelectImage)) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "bsxui-config-panel-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "bsxui-config-panel-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– No image selected yet –', 'bsx-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "bsxui-config-panel-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.imgUploadButton)(imgId, onSelectImage))), imgId && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "bsxui-config-panel-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: onDeleteImage,
    isDestructive: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove image', 'bsx-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image size and format', 'bsx-blocks'),
    selected: imgSizeIndex.toString(),
    options: imgSizeRadioControlOptions,
    onChange: onChangeImgSizeIndex
  }), calcImgSizes[imgSizeIndex] != undefined && calcImgSizes[imgSizeIndex].url != undefined && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "bsxui-config-panel-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    class: "bsxui-link",
    href: calcImgSizes[imgSizeIndex].url,
    target: "_blank"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Preview selected image', 'bsx-blocks')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Banner portrait image (optional)', 'bsx-blocks')
  }, portraitImgId && typeof calcPortraitImgSizes[portraitImgSizeIndex] != 'undefined' && typeof calcPortraitImgSizes[portraitImgSizeIndex].url != 'undefined' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.imgUploadClickableImg)(portraitImgId, calcPortraitImgSizes[portraitImgSizeIndex].url, onSelectPortraitImage, 'p')) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "bsxui-config-panel-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "bsxui-config-panel-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– No portrait image selected yet –', 'bsx-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "bsxui-config-panel-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.imgUploadButton)(portraitImgId, onSelectPortraitImage, 'p'))), portraitImgId && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "bsxui-config-panel-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: onDeletePortraitImage,
    isDestructive: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove portrait image', 'bsx-blocks'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image size and format', 'bsx-blocks'),
    selected: portraitImgSizeIndex.toString(),
    options: portraitImgSizeRadioControlOptions,
    onChange: onChangePortraitImgSizeIndex
  }), typeof calcPortraitImgSizes[portraitImgSizeIndex] != 'undefined' && typeof calcPortraitImgSizes[portraitImgSizeIndex].url != 'undefined' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "bsxui-config-panel-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    class: "bsxui-link",
    href: calcPortraitImgSizes[portraitImgSizeIndex].url,
    target: "_blank"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Preview selected portrait image', 'bsx-blocks')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Banner dimensions', 'bsx-blocks')
  }, (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.bannerTypeSelect)(bannerType, onChangeBannerType), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.bannerSizeSelect)(bannerSize, onChangeBannerSize), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.bgAttachmentSelect)(bgAttachment, onChangeBgAttachment), bgAttachment === 'fixed' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.bgAttachmentFixedLimitedToggle)(bgAttachmentFixedLimited, onChangeBgAttachmentFixedLimited)), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.alignItemsSelect)(alignItems, onChangeAlignItems, ['', 'center', 'end'], templateName == 'column-row-banner'), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.alignItemsSelect)(smAlignItems, onChangeSmAlignItems, ['', 'center', 'end'], templateName == 'column-row-banner', 'SM'), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.alignItemsSelect)(mdAlignItems, onChangeMdAlignItems, ['', 'center', 'end'], templateName == 'column-row-banner', 'MD'), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.roundedToggle)(rounded, onChangeRounded)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background', 'bsx-blocks')
  }, (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.bgColorSelect)(bgColor, onChangeBgColor)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Margin', 'bsx-blocks')
  }, (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.marginBeforeSelect)(marginBefore, onChangeMarginBefore), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.marginAfterSelect)(marginAfter, onChangeMarginAfter)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link', 'bsx-blocks')
  }, (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.linkUrlInput)(href, onChangeHref), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.targetToggle)(target, onChangeTarget), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.relInput)(rel, onChangeRel), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.dataFnInput)(dataFn, onChangeDataFn))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorAdvancedControls, null, (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.belowNavbarToggle)(belowNavbar, onChangeBelowNavbar), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.touchFooterToggle)(touchFooter, onChangeTouchFooter), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.nodeNameSelect)(nodeName, onChangeNodeName, ['div', 'section']), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.bgPositionSelect)(bgPosition, onChangeBgPosition), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.bgSizeSelect)(bgSize, onChangeBgSize), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.paddingBeforeSelect)(paddingBefore, onChangePaddingBefore), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.paddingAfterSelect)(paddingAfter, onChangePaddingAfter), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.disableResponsiveDownsizingToggle)(disableResponsiveDownsizing, onChangeDisableResponsiveDownsizing), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.multilayerSelect)(multilayer, onChangeMultilayer)));

  // add class names to blockProps
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: bannerClassName,
    style: bannerStyle
  });
  // console.log( 'blockProps: ' + JSON.stringify( blockProps, null, 2 ) );

  // prepare props for .banner-inner without additional 
  const bannerInnerBlockProps = {
    className: bannerInnerClassName
  };
  // console.log( 'bannerInnerBlockProps: ' + JSON.stringify( bannerInnerBlockProps, null, 2 ) );
  const bannerInnerInnerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)(bannerInnerBlockProps, {
    // defaultBlock: { name: 'bsx-blocks/container' },
    directInsert: true,
    template: template,
    templateLock: false,
    templateInsertUpdatesSelection: true
  });
  // console.log( 'bannerInnerInnerBlocksProps: ' + JSON.stringify( bannerInnerInnerBlocksProps, null, 2 ) );

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !templateName ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "bsxui-initial-inline-control"
  }, (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_9__.inlineTemplateSelect)(_templates__WEBPACK_IMPORTED_MODULE_11__["default"], onChangeTemplate)) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TagName, {
    ...blockProps
  },  false && 0, noBannerInnerTemplateNames.indexOf(templateName) == -1 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...bannerInnerInnerBlocksProps
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    template: template,
    renderAppender: hasInnerBlocks ? undefined : () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.ButtonBlockAppender, null)
  })), controls);
}

/***/ }),

/***/ "./src/banner/save.js":
/*!****************************!*\
  !*** ./src/banner/save.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_attributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../_functions/attributes.js */ "./src/_functions/attributes.js");
/* harmony import */ var _functions_img_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../_functions/img.js */ "./src/_functions/img.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/banner/utils.js");

/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */





// utils


// insert directly into banner element without `.banner-inner`
const noBannerInnerTemplateNames = ['column-row-banner'];

/**
 * @return {Element} Element to render.
 */
function save({
  attributes
}) {
  const {
    nodeName,
    templateName,
    belowNavbar,
    touchFooter,
    bgColor,
    imgId,
    imgSizes,
    imgData,
    imgSizeIndex,
    url,
    portraitImgId,
    portraitImgSizes,
    portraitImgData,
    portraitImgSizeIndex,
    bannerType,
    bannerSize,
    bgAttachment,
    bgAttachmentFixedLimited,
    bgSize,
    bgPosition,
    alignItems,
    smAlignItems,
    mdAlignItems,
    rounded,
    marginBefore,
    marginAfter,
    paddingBefore,
    paddingAfter,
    href,
    target,
    rel,
    dataFn,
    disableResponsiveDownsizing,
    multilayer
  } = attributes;

  // initial set, replaces old attr 'imgSizes'
  const hasOldAttrImgSizes = typeof imgSizes !== 'undefined' && Array.isArray(imgSizes) && imgSizes.length > 0;
  const hasOldAttrPortraitImgSizes = typeof portraitImgSizes !== 'undefined' && Array.isArray(portraitImgSizes) && portraitImgSizes.length > 0;
  const calcImgSizes = hasOldAttrImgSizes ? imgSizes : (0,_functions_img_js__WEBPACK_IMPORTED_MODULE_4__.makeImgSizesFromImgData)(imgData);
  const calcPortraitImgSizes = hasOldAttrPortraitImgSizes ? portraitImgSizes : (0,_functions_img_js__WEBPACK_IMPORTED_MODULE_4__.makeImgSizesFromImgData)(portraitImgData);

  // TEST
  // console.log( 'props.attributes: ' + JSON.stringify( props.attributes, null, 2 ) );
  // console.log( 'calcImgSizes: ' + JSON.stringify( calcImgSizes, null, 2 ) );
  // console.log( 'calcPortraitImgSizes: ' + JSON.stringify( calcPortraitImgSizes, null, 2 ) + '\n\n' );

  // class names

  let bannerClassName = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.makeBannerClassNames)({
    bannerType,
    bannerSize,
    bgAttachment,
    bgAttachmentFixedLimited,
    bgSize,
    bgPosition,
    alignItems,
    smAlignItems,
    mdAlignItems,
    templateName,
    rounded,
    href
  });
  bannerClassName = (0,_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__.addClassNames)({
    belowNavbar,
    touchFooter,
    bgColor,
    rounded,
    marginBefore,
    marginAfter,
    paddingBefore,
    paddingAfter,
    multilayer
  }, bannerClassName);
  const bannerInnerClassName = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.makeBannerInnerClassNames)({
    templateName
  });
  const srcsetJson = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.makeSrcsetJson)({
    calcImgSizes,
    imgSizeIndex,
    calcPortraitImgSizes,
    portraitImgSizeIndex,
    disableResponsiveDownsizing
  });

  // there might be no images at all, e.g. if background color banner
  const saveAttributes = (0,_functions_attributes_js__WEBPACK_IMPORTED_MODULE_3__.makeSaveAttributes)({
    'data-fn': imgId ? 'lazyload' : dataFn,
    'data-src': imgId ? calcImgSizes[imgSizeIndex].url : '',
    'data-srcset': imgId ? srcsetJson : '',
    href: href,
    target: target,
    rel: href ? rel ? rel + ' noopener noreferrer' : 'noopener noreferrer' : ''
  });
  const TagName = href ? 'a' : nodeName;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TagName, {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: bannerClassName,
      ...saveAttributes
    })
  }, noBannerInnerTemplateNames.indexOf(templateName) == -1 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: bannerInnerClassName
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/banner/templates.js":
/*!*********************************!*\
  !*** ./src/banner/templates.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_functions/icon */ "./src/_functions/icon.js");
// wp import


// functions

const templates = [{
  name: 'empty',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Empty', 'bsx-blocks'),
  icon: _functions_icon__WEBPACK_IMPORTED_MODULE_1__.bannerEmpty,
  attributes: {
    marginAfter: '5'
  },
  template: [['core/paragraph', {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Change paragraph text or delete...', 'bsx-blocks')
  }]],
  templateLock: false
}, {
  name: 'container-with-heading',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Container with Heading', 'bsx-blocks'),
  icon: _functions_icon__WEBPACK_IMPORTED_MODULE_1__.bannerContainerWithHeading,
  attributes: {
    marginAfter: '5'
  },
  template: [['bsx-blocks/container', {}, [['core/heading', {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add heading text, configure heading level...', 'bsx-blocks'),
    textSize: 'display-1',
    textColor: 'white',
    textShadow: 'darker',
    marginAfter: '0'
  }]]]],
  templateLock: false
}, {
  name: 'static-container-with-heading',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Static with Container & Heading', 'bsx-blocks'),
  icon: _functions_icon__WEBPACK_IMPORTED_MODULE_1__.bannerStaticContainerWithHeading,
  attributes: {
    bannerType: 'st',
    bannerSize: '3',
    marginAfter: '5'
  },
  template: [['bsx-blocks/container', {}, [['core/heading', {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add heading text, configure heading level...', 'bsx-blocks'),
    textSize: 'display-1',
    textColor: 'white',
    textShadow: 'darker',
    marginAfter: '0'
  }]]]],
  templateLock: false
}, {
  name: 'column-row-banner',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bottom bar Banner', 'bsx-blocks'),
  icon: _functions_icon__WEBPACK_IMPORTED_MODULE_1__.bannerColumnRow,
  attributes: {
    marginAfter: '5'
  },
  template: [['bsx-blocks/column-rows', {
    templateName: 'default-auto',
    display: 'flex',
    flexDirection: 'column',
    className: 'banner-inner'
  }, [['bsx-blocks/column-row', {
    columnRowType: '',
    display: 'flex',
    alignItems: 'center'
  }, [['bsx-blocks/wrapper', {
    width: '100'
  }, [['bsx-blocks/container', {}, [['core/heading', {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add heading text, configure heading level...', 'bsx-blocks'),
    textSize: 'display-1',
    textColor: 'white',
    textShadow: 'darker',
    marginAfter: '0'
  }]]]]]]], ['bsx-blocks/column-row', {
    columnRowType: 'auto'
  }, [['bsx-blocks/wrapper', {
    bgColor: 'primary-transparent',
    paddingBefore: '3',
    paddingAfter: '3'
  }, [['bsx-blocks/container', {}, [['core/paragraph', {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add text...', 'bsx-blocks'),
    textSize: 'lead',
    textColor: 'white',
    marginAfter: '0'
  }]]]]]]]]]],
  templateLock: false
}, {
  name: 'heading-text-banner',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Heading Text Banner', 'bsx-blocks'),
  icon: _functions_icon__WEBPACK_IMPORTED_MODULE_1__["default"],
  attributes: {
    marginAfter: '5',
    bannerSize: '1',
    belowNavbar: true
  },
  template: [['bsx-blocks/container', {}, [['bsx-blocks/wrapper', {
    textShadow: 'darker',
    fontWeight: 'normal',
    headingInheritTextColor: true,
    headingInheritFontWeight: true,
    textColor: 'white',
    textAlign: 'center',
    marginAfter: '4'
  }, [['core/heading', {
    level: 1,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add heading text, configure heading level...', 'bsx-blocks'),
    textSize: 'display-1'
  }]]], ['bsx-blocks/wrapper', {
    textSize: 'h2',
    textShadow: 'darker',
    fontWeight: 'bold',
    textColor: 'white',
    headingInheritTextColor: true,
    headingInheritFontWeight: true,
    textAlign: 'center'
  }, [['core/paragraph', {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add text...', 'bsx-blocks')
  }]]]]]],
  templateLock: false
}, {
  name: 'heading-text-button-color-banner',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Heading Text Button Color Banner', 'bsx-blocks'),
  icon: _functions_icon__WEBPACK_IMPORTED_MODULE_1__["default"],
  attributes: {
    marginAfter: '5',
    bannerType: 'st',
    bgColor: 'primary',
    bannerSize: '2',
    nodeName: 'section'
  },
  template: [['bsx-blocks/container', {}, [['bsx-blocks/wrapper', {
    inverseTextColor: true,
    headingInheritTextColor: true,
    textAlign: 'center'
  }, [['core/heading', {
    marginAfter: '0',
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add heading text, configure heading level...', 'bsx-blocks')
  }]]], ['bsx-blocks/wrapper', {
    textSize: 'lead',
    inverseTextColor: true,
    headingInheritTextColor: true,
    textAlign: 'center',
    marginBefore: 4,
    paddingAfter: 3
  }, [['core/paragraph', {
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add text...', 'bsx-blocks')
  }]]], ['bsx-blocks/buttons', {
    templateName: 'one-button',
    textAlign: 'center'
  }, [['bsx-blocks/button', {
    state: 'light',
    stateType: '',
    size: 'lg'
  }]]]]]],
  templateLock: false
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (templates);

/***/ }),

/***/ "./src/banner/utils.js":
/*!*****************************!*\
  !*** ./src/banner/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeBannerClassNames: () => (/* binding */ makeBannerClassNames),
/* harmony export */   makeBannerInnerClassNames: () => (/* binding */ makeBannerInnerClassNames),
/* harmony export */   makeSrcsetJson: () => (/* binding */ makeSrcsetJson)
/* harmony export */ });
const makeBannerClassNames = attributes => {
  const {
    bannerType,
    bannerSize,
    bgAttachment,
    bgAttachmentFixedLimited,
    bgSize,
    bgPosition,
    alignItems,
    smAlignItems,
    mdAlignItems,
    templateName,
    rounded,
    href
  } = attributes;
  const classNames = [];
  if (!!bannerType) {
    // always set bannerType and bannerSize to keep debugging easy
    classNames.push('banner-' + bannerType + '-' + bannerSize);
  } else {
    classNames.push('banner-' + bannerSize);
  }
  if (!!bgAttachment) {
    classNames.push('bg-' + bgAttachment);
  }
  if (!!bgAttachmentFixedLimited) {
    classNames.push('bg-w2000-static');
  }
  if (!!bgSize) {
    classNames.push('bg-' + bgSize);
  }
  if (!!bgPosition) {
    classNames.push('bg-' + bgPosition);
  }
  if (!!templateName == 'column-row-banner' && classNames.indexOf('d-flex') == -1) {
    classNames.push('d-flex');
  }
  if (!!alignItems) {
    if (classNames.indexOf('d-flex') == -1) {
      classNames.push('d-flex');
    }
    if (templateName !== 'column-row-banner') {
      classNames.push('align-items-' + alignItems);
    }
  }
  if (!!smAlignItems) {
    if (classNames.indexOf('d-flex') == -1) {
      classNames.push('d-flex');
    }
    if (templateName !== 'column-row-banner') {
      classNames.push('align-items-sm-' + smAlignItems);
    }
  }
  if (!!mdAlignItems) {
    if (classNames.indexOf('d-flex') == -1) {
      classNames.push('d-flex');
    }
    if (templateName !== 'column-row-banner') {
      classNames.push('align-items-md-' + mdAlignItems);
    }
  }
  if (rounded === true) {
    classNames.push('of-hidden');
  }
  if (!!href) {
    classNames.push('d-block');
    classNames.push('no-underline');
  }
  return classNames.join(' ');
};
const makeBannerInnerClassNames = attributes => {
  const {
    templateName
  } = attributes;
  const classNames = ['banner-inner'];
  if (!!templateName && templateName == 'column-row-banner') {
    classNames.push('w-100');
    classNames.push('d-flex');
    classNames.push('flex-column');
  }
  return classNames.join(' ');
};

// responsive sizes
const responsivePortraitMediaIndexList = [{
  media: '(orientation: portrait) and (max-width: 499.98px)',
  imgSizeIndexShift: '-1'
}, {
  media: '(orientation: portrait)',
  imgSizeIndexShift: '0'
}];
const responsiveMediaIndexList = [{
  media: '(max-width: 999.98px)',
  imgSizeIndexShift: '-3'
}, {
  media: '(max-width: 1399.98px)',
  imgSizeIndexShift: '-2'
}];
const skipIndex = 0;
const makeSrcsetJson = attributes => {
  const {
    calcImgSizes,
    imgSizeIndex,
    calcPortraitImgSizes,
    portraitImgSizeIndex,
    disableResponsiveDownsizing
  } = attributes;

  // srcsetJson = "[ { media: '" + mobileMediaQuery + "', src: '" + url + "' }, { media: '" + smallMobileMediaQuery + "', src: '" + calcImgSizes[ ( imgSizeIndex - mobileSizeStep > 0 ? imgSizeIndex - mobileSizeStep : 0 ) ].url + "' }, { media: '', src: '" + calcImgSizes[ ( imgSizeIndex - smallMobileSizeStep > 0 ? imgSizeIndex - smallMobileSizeStep : 0 ) ].url + "' } ]";
  let srcsetJson = '[ ';
  responsivePortraitMediaIndexList.forEach((item, index) => {
    // add item if img resulting indes > skipIndex (no square format)
    if (!disableResponsiveDownsizing || index == 0) {
      // always add 1st item, others only if downsizing is enabled
      const currentPortraitImgSizeIndex = parseInt(portraitImgSizeIndex) + parseInt(item.imgSizeIndexShift);
      if (typeof calcPortraitImgSizes !== 'undefined' && currentPortraitImgSizeIndex > skipIndex && currentPortraitImgSizeIndex < calcPortraitImgSizes.length) {
        srcsetJson += '{ media: \'' + item.media + '\', src: \'' + calcPortraitImgSizes[currentPortraitImgSizeIndex].url + '\' }, ';
      }
    }
  });
  if (!disableResponsiveDownsizing) {
    responsiveMediaIndexList.forEach((item, index) => {
      // add item if img resulting indes > skipIndex (no square format)
      const currentImgSizeIndex = parseInt(imgSizeIndex) + parseInt(item.imgSizeIndexShift);
      if (currentImgSizeIndex > skipIndex && currentImgSizeIndex < calcImgSizes.length) {
        srcsetJson += '{ media: \'' + item.media + '\', src: \'' + calcImgSizes[currentImgSizeIndex].url + '\' }, ';
      }
    });
  }
  if (srcsetJson.lastIndexOf(', ') == srcsetJson.length - 2) {
    srcsetJson = srcsetJson.substring(0, srcsetJson.length - 2);
  }
  srcsetJson += ' ]';
  return srcsetJson;
};

/***/ }),

/***/ "./src/banner/editor.scss":
/*!********************************!*\
  !*** ./src/banner/editor.scss ***!
  \********************************/
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

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/banner/block.json":
/*!*******************************!*\
  !*** ./src/banner/block.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"bsx-blocks/banner","version":"0.1.0","title":"BSX Banner","category":"layout","description":"Image or color background banner e.g. for header of Page.","example":{},"attributes":{"nodeName":{"type":"string","default":"div"},"templateName":{"type":"string"},"belowNavbar":{"type":"boolean","default":false},"touchFooter":{"type":"boolean","default":false},"bgColor":{"type":"string"},"imgId":{"type":"number"},"imgSizes":{"type":"array","default":[]},"imgData":{"type":"array","default":[]},"imgSizeIndex":{"type":"string","default":"6"},"url":{"type":"string"},"portraitImgId":{"type":"number"},"portraitImgSizes":{"type":"array","default":[]},"portraitImgData":{"type":"array","default":[]},"portraitImgSizeIndex":{"type":"string","default":"3"},"bannerType":{"type":"string","default":"vh"},"bannerSize":{"type":"string","default":"2"},"bgAttachment":{"type":"string","default":"fixed"},"bgAttachmentFixedLimited":{"type":"boolean"},"bgSize":{"type":"string","default":"cover"},"bgPosition":{"type":"string","default":"c"},"alignItems":{"type":"string","default":"center"},"rounded":{"type":"boolean"},"marginBefore":{"type":"string","default":""},"marginAfter":{"type":"string","default":""},"paddingBefore":{"type":"string","default":""},"paddingAfter":{"type":"string","default":""},"href":{"type":"string"},"target":{"type":"string"},"rel":{"type":"string"},"dataFn":{"type":"string"},"disableResponsiveDownsizing":{"type":"boolean"},"multilayer":{"type":"string"}},"supports":{"html":false,"className":false},"textdomain":"bsx-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css"}');

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/banner/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_functions/icon */ "./src/_functions/icon.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/banner/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/banner/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/banner/block.json");
/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import './style.scss';

/**
 * Internal dependencies
 */





// import deprecated from './deprecated';

/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  icon: _functions_icon__WEBPACK_IMPORTED_MODULE_1__.banner,
  getEditWrapperProps(attributes) {
    const {
      multilayer
    } = attributes;
    return {
      'data-multilayer': multilayer
    };
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map