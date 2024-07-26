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
/* harmony export */   forInput: () => (/* binding */ forInput),
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
/* harmony export */   onclickInput: () => (/* binding */ onclickInput),
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
/* harmony export */   typeInput: () => (/* binding */ typeInput),
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
    onChange: onChangeFunction,
    __nextHasNoMarginBottom: true
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
const forInput = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('For (optional, required if Node Name is Label)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
const typeInput = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('type (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
const onclickInput = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Onclick (optional)', 'bsx-blocks'),
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
    value: 'label',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('label', 'bsx-blocks')
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

/***/ "./src/_global-block-settings/global-block-settings.js":
/*!*************************************************************!*\
  !*** ./src/_global-block-settings/global-block-settings.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAttribute: () => (/* binding */ addAttribute),
/* harmony export */   addGlobalBlockSettings: () => (/* binding */ addGlobalBlockSettings),
/* harmony export */   addSaveProps: () => (/* binding */ addSaveProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../_functions/controls.js */ "./src/_functions/controls.js");

// TODO: refactor, use external controls, use addClassName()










//restrict to specific block names
const allowedBlocks = ['core/paragraph', 'core/heading'];

/**
 * Override the default edit UI to include a new block inspector control for
 * adding our custom control.
 *
 * @param {function|Component} BlockEdit Original component.
 *
 * @return {string} Wrapped component.
 */
const addGlobalBlockSettings = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    const {
      name,
      attributes,
      setAttributes,
      isSelected
    } = props;
    const {
      id,
      textSize,
      textColor,
      fontWeight,
      textShadow,
      belowNavbar,
      marginBefore,
      marginAfter,
      marginLeft,
      marginRight,
      paddingBefore,
      paddingAfter,
      paddingLeft,
      paddingRight,
      // additionaClassNames,
      className
    } = attributes;

    // TEST – force editor to add class names to core blocks created by custom attributes
    // const addClassName = ( value ) => {
    //     // already existing class name(s) – might be undefined

    //     // const classNamesArr = typeof className !== 'undefined' ? className.split( ' ' ) : [];

    //     // ignore exiting class names to be able to reset once added class names (use custom setting for additional class names)
    //     const classNamesArr = typeof className !== 'undefined' ? className.split( ' ' ) : [];
    //     // class name value(s) to add (one or multiple space separated)
    //     const valuesArr = value.split( ' ' );
    //     valuesArr.forEach( ( value ) => {
    //         if ( classNamesArr.indexOf( value ) == -1 ) {
    //             // add class name if not already set (avoid infinite adding of equal class name)
    //             classNamesArr.push( value );
    //             setAttributes( { className: classNamesArr.join( ' ' ) } );
    //         }
    //     } );
    // }
    const toAddClassNames = (0,_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_7__.addClassNames)({
      textSize,
      textColor,
      fontWeight,
      textShadow,
      belowNavbar,
      marginBefore,
      marginAfter,
      marginLeft,
      marginRight,
      paddingBefore,
      paddingAfter,
      paddingLeft,
      paddingRight
    }, 'bsxui-core-block-wrapper');
    // if ( allowedBlocks.includes( props.name ) ) {
    //     addClassName( toAddClassNames );
    //     // console.log( 'props: ' + JSON.stringify( props, null, 2 ) );
    // }
    // /TEST

    // TEST 2
    // props.setAttributes( {
    //     className: 'TEST',
    // } );
    // /TEST 2

    const onChangeId = value => {
      setAttributes({
        id: value
      });
    };
    const onChangeTextSize = value => {
      setAttributes({
        textSize: value
      });
    };
    const onChangeTextColor = value => {
      setAttributes({
        textColor: value
      });
    };
    const onChangeFontWeight = value => {
      setAttributes({
        fontWeight: value
      });
    };
    const onChangeTextShadow = value => {
      setAttributes({
        textShadow: value
      });
    };
    const onChangeBelowNavbar = value => {
      setAttributes({
        belowNavbar: value
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
    const onChangeMarginLeft = value => {
      setAttributes({
        marginLeft: value
      });
    };
    const onChangeMarginRight = value => {
      setAttributes({
        marginRight: value
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
    const onChangePaddingLeft = value => {
      setAttributes({
        paddingLeft: value
      });
    };
    const onChangePaddingRight = value => {
      setAttributes({
        paddingRight: value
      });
    };

    // const onChangeAdditionaClassNames = ( value ) => {
    //     setAttributes( { additionaClassNames: value } );
    // };

    const wrappedBlockEdit = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, allowedBlocks.includes(props.name) && typeof toAddClassNames !== 'undefiend' && toAddClassNames ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: toAddClassNames
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }));

    // If this block supports custom property and is currently selected, add our UI
    if (allowedBlocks.includes(props.name) && props.isSelected) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, wrappedBlockEdit, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('BSX global settings', 'bsx-blocks')
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('ID', 'bsx-blocks'),
        value: id,
        onChange: onChangeId,
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add ID if necessary (optional).', 'bsx-blocks')
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text size (optional)', 'bsx-blocks'),
        value: textSize,
        onChange: onChangeTextSize,
        options: [{
          value: '',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('– unset –', 'bsx-blocks')
        }, {
          value: 'lead',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Larger', 'bsx-blocks')
        }, {
          value: 'small',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Smaller', 'bsx-blocks')
        }, {
          value: 'h6',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading 6 (smallest)', 'bsx-blocks')
        }, {
          value: 'h5',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading 5', 'bsx-blocks')
        }, {
          value: 'h4',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading 4', 'bsx-blocks')
        }, {
          value: 'h3',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading 3', 'bsx-blocks')
        }, {
          value: 'h2',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading 2', 'bsx-blocks')
        }, {
          value: 'h1',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading 1 (biggest)', 'bsx-blocks')
        }, {
          value: 'display-4',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Large 4 (smallest)', 'bsx-blocks')
        }, {
          value: 'display-3',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Large 3', 'bsx-blocks')
        }, {
          value: 'display-2',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Large 2', 'bsx-blocks')
        }, {
          value: 'display-1',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Large 1 (biggest)', 'bsx-blocks')
        }]
      }), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__.textColorSelect)(textColor, onChangeTextColor), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__.fontWeightSelect)(fontWeight, onChangeFontWeight), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__.textShadowSelect)(textShadow, onChangeTextShadow), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__.marginBeforeSelect)(marginBefore, onChangeMarginBefore), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__.marginAfterSelect)(marginAfter, onChangeMarginAfter), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__.marginLeftSelect)(marginLeft, onChangeMarginLeft), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__.marginRightSelect)(marginRight, onChangeMarginRight))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InspectorAdvancedControls, null, (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__.paddingLeftSelect)(paddingLeft, onChangePaddingLeft), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__.paddingRightSelect)(paddingRight, onChangePaddingRight), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__.paddingBeforeSelect)(paddingBefore, onChangePaddingBefore), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__.paddingAfterSelect)(paddingAfter, onChangePaddingAfter), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__.belowNavbarToggle)(belowNavbar, onChangeBelowNavbar)));
    }

    /*
                        <TextControl 
                            label={ __( 'Additional class(es)', 'bsx-blocks' ) }
                            value={ additionaClassNames } 
                            onChange={ onChangeAdditionaClassNames }
                            help={ __( 'Use this field instead of WordPress native additional class(es)', 'bsx-blocks' ) }
                        />
    */

    return wrappedBlockEdit;
  };
}, 'addGlobalBlockSettings');

/**
 * Filters registered block settings, extending attributes with our custom data.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
function addAttribute(settings) {
  /*
  // If this is a valid block
  if ( allowedBlocks.includes( settings.name ) ) {
       // Use Lodash's assign to gracefully handle if attributes are undefined
      settings.attributes = assign( settings.attributes, {
          additionalAttributes: {
              type: 'string',
          },
      } );
  }
  */

  if (typeof settings.attributes !== 'undefined' && allowedBlocks.includes(settings.name)) {
    if (typeof settings.attributes.id === 'undefined') {
      settings.attributes = Object.assign(settings.attributes, {
        id: {
          type: 'string'
        }
      });
    }
    if (typeof settings.attributes.belowNavbar === 'undefined') {
      settings.attributes = Object.assign(settings.attributes, {
        belowNavbar: {
          type: 'boolean'
        }
      });
    }
    if (typeof settings.attributes.textSize === 'undefined') {
      settings.attributes = Object.assign(settings.attributes, {
        textSize: {
          type: 'string'
        }
      });
    }
    if (typeof settings.attributes.textColor === 'undefined') {
      settings.attributes = Object.assign(settings.attributes, {
        textColor: {
          type: 'string'
        }
      });
    }
    if (typeof settings.attributes.fontWeight === 'undefined') {
      settings.attributes = Object.assign(settings.attributes, {
        fontWeight: {
          type: 'string'
        }
      });
    }
    if (typeof settings.attributes.textShadow === 'undefined') {
      settings.attributes = Object.assign(settings.attributes, {
        textShadow: {
          type: 'string'
        }
      });
    }
    if (typeof settings.attributes.marginBefore === 'undefined') {
      settings.attributes = Object.assign(settings.attributes, {
        marginBefore: {
          type: 'string'
        }
      });
    }
    if (typeof settings.attributes.marginAfter === 'undefined') {
      settings.attributes = Object.assign(settings.attributes, {
        marginAfter: {
          type: 'string'
        }
      });
    }
    if (typeof settings.attributes.marginLeft === 'undefined') {
      settings.attributes = Object.assign(settings.attributes, {
        marginLeft: {
          type: 'string'
        }
      });
    }
    if (typeof settings.attributes.marginRight === 'undefined') {
      settings.attributes = Object.assign(settings.attributes, {
        marginRight: {
          type: 'string'
        }
      });
    }
    if (typeof settings.attributes.paddingBefore === 'undefined') {
      settings.attributes = Object.assign(settings.attributes, {
        paddingBefore: {
          type: 'string'
        }
      });
    }
    if (typeof settings.attributes.paddingAfter === 'undefined') {
      settings.attributes = Object.assign(settings.attributes, {
        paddingAfter: {
          type: 'string'
        }
      });
    }
    if (typeof settings.attributes.paddingLeft === 'undefined') {
      settings.attributes = Object.assign(settings.attributes, {
        paddingLeft: {
          type: 'string'
        }
      });
    }
    if (typeof settings.attributes.paddingRight === 'undefined') {
      settings.attributes = Object.assign(settings.attributes, {
        paddingRight: {
          type: 'string'
        }
      });
    }

    /*if ( typeof settings.attributes.additionalAttributes === 'undefined' ) {
        settings.attributes = Object.assign( settings.attributes, {
            additionalAttributes: {
                type: 'string',
            },
        } );
    }*/

    // if ( typeof settings.attributes.dataTest === 'undefined' ) {
    //     settings.attributes = Object.assign( settings.attributes, {
    //         dataTest: {
    //             type: 'string',
    //         },
    //     } );
    // }

    // add custom props in case of several wp props
    /*
    if ( typeof settings.attributes.align !== 'undefined' ) {
        settings.attributes = Object.assign( settings.attributes, {
            textAlign: {
                type: 'string',
            },
        } );
    }
    else {
        // TODO: remove attr?
    }
    */
  }
  return settings;
} // end addAttribute()

/**
 * Override props assigned to save component to inject our custom data.
 * This is only done if the component is a valid block type.
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
function addSaveProps(extraProps, blockType, attributes) {
  const {
    id,
    textSize,
    textColor,
    fontWeight,
    textShadow,
    belowNavbar,
    marginBefore,
    marginAfter,
    marginLeft,
    marginRight,
    paddingBefore,
    paddingAfter,
    paddingLeft,
    paddingRight
    // dataTest,
    // additionaClassNames,
  } = attributes;

  // If the current block is valid, add our prop.
  if (allowedBlocks.includes(blockType.name)) {
    //if ( attributes.additionalAttributes ) extraProps.additionalAttributes = attributes.additionalAttributes;

    if (attributes.id) extraProps.id = attributes.id;

    // if ( attributes.dataTest ) extraProps.dataTest = attributes.dataTest;

    // class names

    const classNames = typeof extraProps.className !== 'undefined' ? extraProps.className.split(' ') : [];

    // if ( typeof textSize !== 'undefined' && !! textSize ) {

    //     if ( ! classNames.includes( textSize ) ) {
    //         // add (if not already set)
    //         classNames.push( textSize );
    //     }
    // }

    // if ( typeof textColor !== 'undefined' && !! textColor ) {

    //     if ( ! classNames.includes( 'text-' + textColor ) ) {
    //         // add (if not already set)
    //         classNames.push( 'text-' + textColor );
    //     }
    // }

    // if ( typeof fontWeight !== 'undefined' && !! fontWeight ) {

    //     if ( ! classNames.includes( 'font-weight-' + fontWeight ) ) {
    //         // add (if not already set)
    //         classNames.push( 'font-weight-' + fontWeight );
    //     }
    // }

    // if ( typeof textShadow !== 'undefined' && !! textShadow ) {

    //     if ( ! classNames.includes( 'text-shadow-' + textShadow ) ) {
    //         // add (if not already set)
    //         classNames.push( 'text-shadow-' + textShadow );
    //     }
    // }

    // if ( typeof belowNavbar !== 'undefined' && belowNavbar ) {

    //     if ( ! classNames.includes( 'below-navbar-content' ) ) {
    //         // add (if not already set)
    //         classNames.push( 'below-navbar-content' );
    //     }
    // }

    // check wp internal attributes, add custom class names for certain ones
    // NOTE: added class name will be updated but never removed (as WP currently does too)

    // textAlign
    const alignAllowedValues = ['left', 'center', 'right'];
    const alignPrefix = 'text-';
    const textAlignAttrVal = attributes.textAlign != undefined ? attributes.textAlign : attributes.align;
    if (!!textAlignAttrVal && alignAllowedValues.includes(textAlignAttrVal)) {
      classNames.push(alignPrefix + textAlignAttrVal);
    } else {
      for (let i = 0; i < classNames.length; i++) {
        if (classNames[i].indexOf(alignPrefix) == 0 && alignAllowedValues.includes(classNames[i].substring(alignPrefix.length))) {
          classNames.splice(i, 1);
        }
      }
    }
    ;

    // if ( typeof marginBefore !== 'undefined' && !! marginBefore && marginBefore == marginAfter ) {
    //     if ( ! ( classNames.includes( 'my-' + marginBefore ) ) ) {
    //         // add (if not already set)
    //         classNames.push( 'my-' + marginBefore );
    //     }
    // }
    // else {
    //     if ( typeof marginBefore !== 'undefined' && !! marginBefore ) {

    //         if ( ! ( classNames.includes( 'mt-' + marginBefore ) || classNames.includes( 'my-' + marginBefore ) ) ) {
    //             // add (if not already set)
    //             classNames.push( 'mt-' + marginBefore );
    //         }

    //     }
    //     if ( typeof marginAfter !== 'undefined' && !! marginAfter ) {

    //         if ( ! ( classNames.includes( 'mb-' + marginAfter ) || classNames.includes( 'my-' + marginAfter ) ) ) {
    //             // add (if not already set)
    //             classNames.push( 'mb-' + marginAfter );
    //         }

    //     }
    // }

    // if ( typeof additionaClassNames !== 'undefined' && additionaClassNames ) {

    //     const additionaClassNamesArr = additionaClassNames.split( ' ' );
    //     additionaClassNamesArr.forEach( ( additionaClassName ) => {
    //         if ( ! classNames.includes( additionaClassName ) ) {
    //             // add (if not already set)
    //             classNames.push( additionaClassName );
    //         }
    //     } );
    // }

    // extraProps.className = classNames.join( ' ' );

    extraProps.className = (0,_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_7__.addClassNames)({
      textSize,
      textColor,
      fontWeight,
      textShadow,
      belowNavbar,
      marginBefore,
      marginAfter,
      marginLeft,
      marginRight,
      paddingBefore,
      paddingAfter,
      paddingLeft,
      paddingRight
    }, classNames.join(' '));
  }
  return extraProps;
} // end addSaveProps()

// on register
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('blocks.registerBlockType', 'bsx-blocks/custom-attributes', addAttribute);

// on get editor class name
// Our filter function
// function setBlockCustomClassName( className, blockName ) {
//     console.log( 'setBlockCustomClassName() – blockName: ' + blockName + ', className: ' + className )
//     return blockName === 'core/paragraph' ? className + ' TEST-3' : className;
// }

// // Adding the filter
// addFilter(
//     'blocks.getBlockDefaultClassName',
//     'bsx-blocks/set-block-custom-class-name-2',
//     setBlockCustomClassName
// );

// on edit
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('editor.BlockEdit', 'bsx-blocks/add-global-block-settings', addGlobalBlockSettings);

// blocks.getSaveElement

// on save
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('blocks.getSaveContent.extraProps', 'bsx-blocks/apply-extra-attributes', addSaveProps);

/***/ }),

/***/ "./src/_global-block-settings/editor.scss":
/*!************************************************!*\
  !*** ./src/_global-block-settings/editor.scss ***!
  \************************************************/
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

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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
/*!*********************************************!*\
  !*** ./src/_global-block-settings/index.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/_global-block-settings/editor.scss");
/* harmony import */ var _global_block_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-block-settings */ "./src/_global-block-settings/global-block-settings.js");
/**
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


})();

/******/ })()
;
//# sourceMappingURL=index.js.map