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

/***/ "./src/_functions/icon.js":
/*!********************************!*\
  !*** ./src/_functions/icon.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XXXXX: () => (/* binding */ XXXXX),
/* harmony export */   badge: () => (/* binding */ badge),
/* harmony export */   banner: () => (/* binding */ banner),
/* harmony export */   bannerColumnRow: () => (/* binding */ bannerColumnRow),
/* harmony export */   bannerContainerWithHeading: () => (/* binding */ bannerContainerWithHeading),
/* harmony export */   bannerEmpty: () => (/* binding */ bannerEmpty),
/* harmony export */   bannerStaticContainerWithHeading: () => (/* binding */ bannerStaticContainerWithHeading),
/* harmony export */   button: () => (/* binding */ button),
/* harmony export */   buttonLabel: () => (/* binding */ buttonLabel),
/* harmony export */   buttons: () => (/* binding */ buttons),
/* harmony export */   buttonsLabelTextLink: () => (/* binding */ buttonsLabelTextLink),
/* harmony export */   buttonsOneButton: () => (/* binding */ buttonsOneButton),
/* harmony export */   buttonsTextLink: () => (/* binding */ buttonsTextLink),
/* harmony export */   buttonsTwoButtons: () => (/* binding */ buttonsTwoButtons),
/* harmony export */   checkList: () => (/* binding */ checkList),
/* harmony export */   checkListItem: () => (/* binding */ checkListItem),
/* harmony export */   container: () => (/* binding */ container),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   groups: () => (/* binding */ groups),
/* harmony export */   groupsLazyimgHeadingParagraph: () => (/* binding */ groupsLazyimgHeadingParagraph),
/* harmony export */   groupsLazyimgParagraphButton: () => (/* binding */ groupsLazyimgParagraphButton),
/* harmony export */   icon: () => (/* binding */ icon),
/* harmony export */   iconList: () => (/* binding */ iconList),
/* harmony export */   iconListItem: () => (/* binding */ iconListItem),
/* harmony export */   imgGallery: () => (/* binding */ imgGallery),
/* harmony export */   lazyImg: () => (/* binding */ lazyImg),
/* harmony export */   rowWithCols: () => (/* binding */ rowWithCols),
/* harmony export */   rowWithColsCol: () => (/* binding */ rowWithColsCol),
/* harmony export */   rowWithCols_1_1: () => (/* binding */ rowWithCols_1_1),
/* harmony export */   rowWithCols_1_1_1: () => (/* binding */ rowWithCols_1_1_1),
/* harmony export */   rowWithCols_1_2: () => (/* binding */ rowWithCols_1_2),
/* harmony export */   rowWithCols_1_2_1: () => (/* binding */ rowWithCols_1_2_1),
/* harmony export */   rowWithCols_2_1: () => (/* binding */ rowWithCols_2_1),
/* harmony export */   rowWithCols_custom: () => (/* binding */ rowWithCols_custom),
/* harmony export */   rowsCol: () => (/* binding */ rowsCol),
/* harmony export */   rowsColFlexStatic: () => (/* binding */ rowsColFlexStatic),
/* harmony export */   rowsColStaticFlex: () => (/* binding */ rowsColStaticFlex),
/* harmony export */   rowsRow: () => (/* binding */ rowsRow),
/* harmony export */   section: () => (/* binding */ section),
/* harmony export */   sectionBadgeHeadingTextButtonImgColumns: () => (/* binding */ sectionBadgeHeadingTextButtonImgColumns),
/* harmony export */   sectionBgHeadingIconHeadingTextColumns: () => (/* binding */ sectionBgHeadingIconHeadingTextColumns),
/* harmony export */   sectionContainerHeading: () => (/* binding */ sectionContainerHeading),
/* harmony export */   sectionContainerHeadingTextGallery: () => (/* binding */ sectionContainerHeadingTextGallery),
/* harmony export */   sectionContainerRoundedColoredBanner: () => (/* binding */ sectionContainerRoundedColoredBanner),
/* harmony export */   sectionEmpty: () => (/* binding */ sectionEmpty),
/* harmony export */   sectionHeadingListColumns: () => (/* binding */ sectionHeadingListColumns),
/* harmony export */   sectionImgBadgeHeadingTextButtonColumns: () => (/* binding */ sectionImgBadgeHeadingTextButtonColumns),
/* harmony export */   slider: () => (/* binding */ slider),
/* harmony export */   uiIconCarretLeft: () => (/* binding */ uiIconCarretLeft),
/* harmony export */   uiIconCarretRight: () => (/* binding */ uiIconCarretRight),
/* harmony export */   uiIconTrash: () => (/* binding */ uiIconTrash),
/* harmony export */   uiPlaceholderVideo: () => (/* binding */ uiPlaceholderVideo),
/* harmony export */   video: () => (/* binding */ video),
/* harmony export */   wrapper: () => (/* binding */ wrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const badge = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M14.5,7.5c0,0,0,0-9,0C4.12,7.5,3,8.62,3,10c0,1.38,1.12,2.5,2.5,2.5c9,0,9,0,9,0c1.38,0,2.5-1.12,2.5-2.5 C17,8.62,15.88,7.5,14.5,7.5z M14.5,10.5c0,0,0,0-9,0v0C5.22,10.5,5,10.28,5,10c0-0.28,0.22-0.5,0.5-0.5c9,0,9,0,9,0 c0.28,0,0.5,0.22,0.5,0.5C15,10.27,14.78,10.5,14.5,10.5z"
}));
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
const buttons = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16,7H4C2.9,7,2,7.9,2,9v2c0,1.11,0.9,2,2,2h12c1.1,0,2-0.89,2-2V9C18,7.9,17.1,7,16,7z M13,11c0,0,0,0-6,0v0 c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1c6,0,6,0,6,0c0.55,0,1,0.45,1,1C14,10.55,13.55,11,13,11z"
}));
const button = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16,7H4C2.9,7,2,7.9,2,9v2c0,1.11,0.9,2,2,2h12c1.1,0,2-0.89,2-2V9C18,7.9,17.1,7,16,7z M15,11H5V9h10V11z"
}));
const buttonLabel = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M4,3v3.5h1v-1c0-0.55,0.45-1,1-1h3.25V15c0,0.55-0.45,1-1,1h-1v1h5.5v-1h-1c-0.55,0-1-0.45-1-1V4.5H14c0.55,0,1,0.45,1,1v1 h1V3H4z"
}));
const buttonsOneButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
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
  d: "M30,20H18c-1.1,0-2,0.9-2,2v4c0,1.11,0.9,2,2,2h12c1.1,0,2-0.89,2-2v-4C32,20.9,31.1,20,30,20z M29,25.5H19v-3h10V25.5z"
}));
const buttonsTwoButtons = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
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
  d: "M21,20H9c-1.1,0-2,0.9-2,2v4c0,1.11,0.9,2,2,2h12c1.1,0,2-0.89,2-2v-4C23,20.9,22.1,20,21,20z M20,25.5H10v-3h10V25.5z M39,20H27c-1.1,0-2,0.9-2,2v4c0,1.11,0.9,2,2,2h12c1.1,0,2-0.89,2-2v-4C41,20.9,40.1,20,39,20z M38,25.5H28v-3h10V25.5z"
}));
const buttonsTextLink = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
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
  d: "M19,20c0-0.55,0.45-1,1-1h2.5v7c0,0.55-0.45,1-1,1h-1v1h7v-1h-1c-0.55,0-1-0.45-1-1v-7H28c0.55,0,1,0.45,1,1v1h1v-5H18v5h1 V20z M17,30v2h14v-2H17z"
}));
const buttonsLabelTextLink = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
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
  d: "M27,21c0-0.55,0.45-1,1-1h2.5v7c0,0.55-0.45,1-1,1h-1v1h7v-1h-1c-0.55,0-1-0.45-1-1v-7H36c0.55,0,1,0.45,1,1v1h1v-5H26v5h1 V21z M10,22h1v-1c0-0.55,0.45-1,1-1h2.5v7c0,0.55-0.45,1-1,1h-1v1h7v-1h-1c-0.55,0-1-0.45-1-1v-7H20c0.55,0,1,0.45,1,1v1h1v-5H10V22 z M25,31v2h14v-2H25z"
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
const imgGallery = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M8,10L6,9l-2,1v2.99h9V9l-2-1L8,10z M7,8c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2S5,4.9,5,6C5,7.1,5.9,8,7,8z M18.71,4.29 C18.52,4.1,18.27,4,18,4h-2V2c0-0.27-0.1-0.52-0.29-0.71C15.52,1.1,15.27,1,15,1H2C1.74,1,1.48,1.11,1.29,1.29C1.11,1.48,1,1.74,1,2 v13c0,0.26,0.11,0.52,0.29,0.71C1.48,15.89,1.74,16,2,16h2v2c0,0.26,0.11,0.52,0.29,0.71C4.48,18.89,4.74,19,5,19h13 c0.27,0,0.52-0.1,0.71-0.29C18.9,18.52,19,18.27,19,18V5C19,4.73,18.9,4.48,18.71,4.29z M3,14V3h11v11H3z M17,17H6v-1h9 c0.27,0,0.52-0.1,0.71-0.29C15.9,15.52,16,15.27,16,15V6h1V17z"
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
const groups = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7,7h6c0.55,0,1-0.45,1-1V4c0-0.55-0.45-1-1-1H7C6.45,3,6,3.45,6,4v2C6,6.55,6.45,7,7,7z M13,13H7c-0.55,0-1,0.45-1,1v2 c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1v-2C14,13.45,13.55,13,13,13z M9.5,11V9c0-0.55-0.45-1-1-1H3C2.45,8,2,8.45,2,9v2 c0,0.55,0.45,1,1,1h5.5C9.05,12,9.5,11.55,9.5,11z M17,8h-5.5c-0.55,0-1,0.45-1,1v2c0,0.55,0.45,1,1,1H17c0.55,0,1-0.45,1-1V9 C18,8.45,17.55,8,17,8z"
}));
const groupsLazyimgParagraphButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
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
const groupsLazyimgHeadingParagraph = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
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
const icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M10,3c-3.87,0-7,3.13-7,7c0,3.87,3.13,7,7,7c3.87,0,7-3.13,7-7C17,6.13,13.87,3,10,3z M13.08,9.08l-3.75,3.75 c-0.19,0.19-0.44,0.29-0.71,0.29c-0.27,0-0.52-0.1-0.71-0.29l-1.5-1.5c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.42,0 l0.79,0.79l3.04-3.04c0.39-0.39,1.02-0.39,1.41,0C13.47,8.06,13.47,8.69,13.08,9.08z"
}));
const iconList = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M10,3v3h8V3H10z M4.75,1.88L3.9,3.61L2,3.88l1.37,1.34L3.05,7.12l1.7-0.89l1.7,0.89L6.13,5.22L7.5,3.88L5.6,3.61L4.75,1.88z M10,12h8V9h-8V12z M5.79,8.79L4,10.58l-0.29-0.29c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41l1,1 C3.48,12.89,3.73,13,4,13c0.27,0,0.52-0.1,0.71-0.29l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41C6.82,8.4,6.18,8.4,5.79,8.79z M10,18h8v-3 h-8V18z M6.71,14.54c-0.39-0.39-1.02-0.39-1.41,0l-0.54,0.54l-0.54-0.54c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.42 l0.54,0.54l-0.54,0.54c-0.39,0.39-0.39,1.02,0,1.41c0.2,0.2,0.45,0.29,0.71,0.29c0.26,0,0.51-0.1,0.71-0.29l0.54-0.54l0.54,0.54 c0.19,0.2,0.45,0.29,0.71,0.29s0.51-0.1,0.71-0.29c0.39-0.39,0.39-1.02,0-1.41L6.16,16.5l0.54-0.54C7.1,15.57,7.1,14.93,6.71,14.54z "
}));
const iconListItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M10,9v3h8V9H10z M4.8,7.9L3.9,9.6L2,9.9l1.4,1.3L3,13.1l1.7-0.9l1.7,0.9l-0.3-1.9l1.4-1.3L5.6,9.6L4.8,7.9z"
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
const rowsCol = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M1.29,1.29C1.11,1.48,1,1.74,1,2v16c0,0.26,0.11,0.52,0.29,0.71C1.48,18.89,1.74,19,2,19h16c0.26,0,0.52-0.11,0.71-0.29  C18.89,18.52,19,18.26,19,18V2c0-0.26-0.11-0.52-0.29-0.71C18.52,1.11,18.26,1,18,1H2C1.74,1,1.48,1.11,1.29,1.29z M3,8h14v4H3V8z M3,17v-3h14v3H3z M17,6H3V3l14,0V6z"
}));
const rowsRow = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M1.29,1.29C1.11,1.48,1,1.74,1,2v16c0,0.26,0.11,0.52,0.29,0.71C1.48,18.89,1.74,19,2,19h16c0.26,0,0.52-0.11,0.71-0.29  C18.89,18.52,19,18.26,19,18V2c0-0.26-0.11-0.52-0.29-0.71C18.52,1.11,18.26,1,18,1H2C1.74,1,1.48,1.11,1.29,1.29z M3,8h14v4H3V8z M3,17v-3h14v3H3z M17,6H3V3l14,0V6z"
}));
const rowsColFlexStatic = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
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
  d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9v-5h30V34z M39,27H9 V14h30V27z"
}));
const rowsColStaticFlex = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
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
  d: "M39,36H9c-1.1,0-2-0.9-2-2V14c0-1.1,0.9-2,2-2h30c1.1,0,2,0.9,2,2v20C41,35.1,40.1,36,39,36z M39,14H9v5h30V14z M39,21H9v13 h30V21z"
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
const slider = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M10,17c-0.55,0-1,0.45-1,1s0.45,1,1,1c0.55,0,1-0.45,1-1S10.55,17,10,17z M7,17c-0.55,0-1,0.45-1,1s0.45,1,1,1 c0.55,0,1-0.45,1-1S7.55,17,7,17z M13,17c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S13.55,17,13,17z M12.61,11.57 c-0.23-0.56-0.1-1.21,0.33-1.63L14.88,8l-1.94-1.94c-0.43-0.43-0.56-1.07-0.33-1.63S13.39,3.5,14,3.5h2V2c0-0.55-0.45-1-1-1H5 C4.45,1,4,1.45,4,2v1.5h2c0.61,0,1.15,0.37,1.39,0.93c0.23,0.56,0.1,1.21-0.33,1.63L5.12,8l1.94,1.94 c0.43,0.43,0.56,1.07,0.33,1.63C7.15,12.13,6.61,12.5,6,12.5H4V14c0,0.55,0.45,1,1,1h10c0.55,0,1-0.45,1-1v-1.5h-2 C13.39,12.5,12.85,12.13,12.61,11.57z M3,8l3-3H3L0,8l3,3h3L3,8z M17,5h-3l3,3l-3,3h3l3-3L17,5z"
}));
const uiIconCarretLeft = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M14 5l-5 5 5 5-1 2-7-7 7-7z"
}));
const uiIconCarretRight = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M6 15l5-5-5-5 1-2 7 7-7 7z"
}));
const uiIconTrash = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 4h3c.6 0 1 .4 1 1v1H3V5c0-.6.5-1 1-1h3c.2-1.1 1.3-2 2.5-2s2.3.9 2.5 2zM8 4h3c-.2-.6-.9-1-1.5-1S8.2 3.4 8 4zM4 7h11l-.9 10.1c0 .5-.5.9-1 .9H5.9c-.5 0-.9-.4-1-.9L4 7z"
}));
const uiPlaceholderVideo = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "360",
  height: "240",
  viewBox: "0 0 360 240",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  d: "M0,0v240h360V0H0z M160,160V80l69.28,40L160,160z"
}));
const video = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17,4H3C1.9,4,1,5.07,1,6.4v7.2C1,14.93,1.9,16,3,16h14c1.1,0,2-1.07,2-2.4V6.4C19,5.07,18.1,4,17,4z M8,13V7l5.2,3L8,13z"
})));
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

/***/ "./src/icon-list/edit.js":
/*!*******************************!*\
  !*** ./src/icon-list/edit.js ***!
  \*******************************/
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
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../_functions/controls.js */ "./src/_functions/controls.js");







// import { makeSaveAttributes } from './../_functions/attributes.js';
// import { getTemplate } from './../_functions/utilities.js';


// utils
// import fooBar from './utils';

// templates
// import templates from './templates';

const DEFAULT_BLOCK = {
  name: 'bsx-blocks/icon-list-item'
};
const TEMPLATE = [['bsx-blocks/icon-list-item']];

/**
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import './editor.scss';

/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
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
    globalIconFamily,
    globalIconTextColor,
    textAlign,
    display,
    marginLeft,
    marginRight,
    marginBefore,
    marginAfter
  } = attributes;
  const hasInnerBlocks = () => {
    const block = getBlock(clientId);
    if (typeof block.innerBlocks === 'undefined') return false;
    return block.innerBlocks.length > 0;
  };
  const getInnerBlocks = () => {
    const block = getBlock(clientId);
    if (typeof block.innerBlocks === 'undefined') return false;
    return block.innerBlocks;
  };

  // let template = getTemplate( templates, templateName ).template;

  const onChangeGlobalIconFamily = value => {
    setAttributes({
      globalIconFamily: value
    });
  };
  const onChangeGlobalIconTextColor = value => {
    // change childrens calcIconTextColor
    setAttributes({
      globalIconTextColor: value
    });
    children.forEach((child, index) => {
      const childAttributes = getBlockAttributes(child.clientId);

      // console.log( 'child[ ' + index + ' ] attributes: \n' );
      // console.log( JSON.stringify( childAttributes, null, 2 ) );

      if (!childAttributes.iconTextColor && !childAttributes.itemTextColor) {
        // change only if no icon color and no item color is set
        const newAttributes = {
          calcIconTextColor: value
        };
        updateBlockAttributes(child.clientId, newAttributes);
      }
    });
  };
  const onChangeTextAlign = value => {
    setAttributes({
      textAlign: value
    });
  };
  const onChangeDisplay = value => {
    setAttributes({
      display: value
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
  const ulClassNames = (0,_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_5__.addClassNames)({
    textAlign,
    display,
    marginLeft,
    marginRight,
    marginBefore,
    marginAfter
  }, 'fa-ul');
  const controls = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__.textAlignToolbar)(textAlign, onChangeTextAlign)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Settings', 'bsx-blocks')
  }, (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__.iconFamilySelect)(globalIconFamily, onChangeGlobalIconFamily), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__.textColorSelect)(globalIconTextColor, onChangeGlobalIconTextColor, [], (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('List Icon Color', 'bsx-blocks')), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__.displaySelect)(display, onChangeDisplay)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Margin', 'bsx-blocks')
  }, (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__.marginLeftSelect)(marginLeft, onChangeMarginLeft), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__.marginRightSelect)(marginRight, onChangeMarginRight), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__.marginBeforeSelect)(marginBefore, onChangeMarginBefore), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_6__.marginAfterSelect)(marginAfter, onChangeMarginAfter))));

  // add class names to blockProps
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: ulClassNames
  });
  // console.log( 'blockProps: ' + JSON.stringify( blockProps, null, 2 ) );

  // use if appending inner blocks directly into outer elem
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)(blockProps, {
    defaultBlock: DEFAULT_BLOCK,
    directInsert: true,
    template: TEMPLATE,
    templateLock: false,
    templateInsertUpdatesSelection: true
    // ...( Platform.isNative && {
    // 	marginVertical: NATIVE_MARGIN_SPACING,
    // 	marginHorizontal: NATIVE_MARGIN_SPACING,
    // 	renderAppender: false,
    // } ),
    // __experimentalCaptureToolbars: true,
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    ...innerBlocksProps
  }), controls);
}

/***/ }),

/***/ "./src/icon-list/save.js":
/*!*******************************!*\
  !*** ./src/icon-list/save.js ***!
  \*******************************/
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

/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


// import { makeSaveAttributes } from './../_functions/attributes.js';

/**
 * @return {Element} Element to render.
 */
function save({
  attributes
}) {
  const {
    globalIconFamily,
    globalIconTextColor,
    textAlign,
    display,
    marginLeft,
    marginRight,
    marginBefore,
    marginAfter
  } = attributes;
  const ulClassNames = (0,_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__.addClassNames)({
    textAlign,
    display,
    marginLeft,
    marginRight,
    marginBefore,
    marginAfter
  }, 'fa-ul');

  // const saveAttributes = makeSaveAttributes( {
  //     'data-bar': bar,
  // } );

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: ulClassNames
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
}

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

/***/ "./src/icon-list/block.json":
/*!**********************************!*\
  !*** ./src/icon-list/block.json ***!
  \**********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"bsx-blocks/icon-list","version":"0.1.0","title":"BSX Icon List","category":"text","allowedBlocks":["bsx-blocks/icon-list-item"],"description":"Create an icon list.","example":{},"attributes":{"globalIconFamily":{"type":"string"},"globalIconTextColor":{"type":"string","default":"primary"},"textAlign":{"type":"string"},"display":{"type":"string"},"marginLeft":{"type":"string"},"marginRight":{"type":"string"},"marginBefore":{"type":"string"},"marginAfter":{"type":"string"}},"supports":{"html":false,"className":false},"textdomain":"bsx-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css"}');

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
/*!********************************!*\
  !*** ./src/icon-list/index.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_functions/icon */ "./src/_functions/icon.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/icon-list/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/icon-list/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/icon-list/block.json");
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
  icon: _functions_icon__WEBPACK_IMPORTED_MODULE_1__.iconList,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map