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
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities.js */ "./src/_functions/utilities.js");

// wp import
const {
  __,
  setLocaleData
} = wp.i18n;
const {
  URLInput,
  RichText,
  MediaUpload,
  AlignmentToolbar
} = wp.blockEditor;
const {
  TextControl,
  PanelBody,
  ToggleControl,
  SelectControl,
  RadioControl,
  SVG,
  Path,
  Button
} = wp.components;

// functions


// internal vars

const marginPaddingSizes = [{
  value: '',
  label: __('– unset –', 'multiple-blocks-plugin-textdomain')
}, {
  value: '0',
  label: __('none (0)', 'multiple-blocks-plugin-textdomain')
}, {
  value: '1',
  label: __('extra small', 'multiple-blocks-plugin-textdomain')
}, {
  value: '2',
  label: __('small', 'multiple-blocks-plugin-textdomain')
}, {
  value: '3',
  label: __('medium', 'multiple-blocks-plugin-textdomain')
}, {
  value: '4',
  label: __('large', 'multiple-blocks-plugin-textdomain')
}, {
  value: '5',
  label: __('extra large', 'multiple-blocks-plugin-textdomain')
}];
const breakpointsWithUnset = [{
  value: '',
  label: __('– unset –', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'xs',
  label: __('Default (XS up)', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'sm',
  label: __('SM up', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'md',
  label: __('MD up', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'lg',
  label: __('LG up', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'xl',
  label: __('XL up', 'multiple-blocks-plugin-textdomain')
}];
const marginPaddingPositions = [{
  value: '',
  label: __('– unset –', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'all',
  label: __('All', 'multiple-blocks-plugin-textdomain')
}, {
  value: 't',
  label: __('Before', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'b',
  label: __('After', 'multiple-blocks-plugin-textdomain')
}, {
  value: '2',
  label: __('Y (before & after)', 'multiple-blocks-plugin-textdomain')
}, {
  value: '3',
  label: __('Left', 'multiple-blocks-plugin-textdomain')
}, {
  value: '4',
  label: __('Right', 'multiple-blocks-plugin-textdomain')
}, {
  value: '5',
  label: __('X (left & right)', 'multiple-blocks-plugin-textdomain')
}];
const states = [{
  value: '',
  label: __('– unset –', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'white',
  label: __('White', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'primary',
  label: __('Primary', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'secondary',
  label: __('Secondary', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'success',
  label: __('Success', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'danger',
  label: __('Danger', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'warning',
  label: __('Warning', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'info',
  label: __('Info', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'light',
  label: __('Light', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'dark',
  label: __('Dark', 'multiple-blocks-plugin-textdomain')
}];
const textColorStates = [{
  value: '',
  label: __('– unset –', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'white',
  label: __('White', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'primary',
  label: __('Primary', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'secondary',
  label: __('Secondary', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'success',
  label: __('Success', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'danger',
  label: __('Danger', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'warning',
  label: __('Warning', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'info',
  label: __('Info', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'light',
  label: __('Light', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'dark',
  label: __('Dark', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'muted',
  label: __('Muted', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'white-50',
  label: __('White transparent', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'black-50',
  label: __('Black transparent', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'inherit',
  label: __('Inherit', 'multiple-blocks-plugin-textdomain')
}];

// doesn’t have '', has additional 'text-link'
const btnStates = [{
  value: 'primary',
  label: __('Primary', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'secondary',
  label: __('Secondary', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'success',
  label: __('Success', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'danger',
  label: __('Danger', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'warning',
  label: __('Warning', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'info',
  label: __('Info', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'light',
  label: __('Light', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'dark',
  label: __('Dark', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'link',
  label: __('Link Button', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'text-link',
  label: __('Text link', 'multiple-blocks-plugin-textdomain')
}];
const bgStates = [{
  value: '',
  label: __('– unset –', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'white',
  label: __('White', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'white-opaque',
  label: __('White opaque', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'white-transparent',
  label: __('White transparent', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'black',
  label: __('Black', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'black-opaque',
  label: __('Black opaque', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'black-transparent',
  label: __('Black transparent', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'primary',
  label: __('Primary', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'primary-opaque',
  label: __('Primary opaque', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'primary-transparent',
  label: __('Primary transparent', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'secondary',
  label: __('Secondary', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'secondary-opaque',
  label: __('Secondary opaque', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'secondary-transparent',
  label: __('Secondary transparent', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'success',
  label: __('Success', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'success-opaque',
  label: __('Success opaque', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'success-transparent',
  label: __('Success transparent', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'danger',
  label: __('Danger', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'danger-opaque',
  label: __('Danger opaque', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'danger-transparent',
  label: __('Danger transparent', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'warning',
  label: __('Warning', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'warning-opaque',
  label: __('Warning opaque', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'warning-transparent',
  label: __('Warning transparent', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'info',
  label: __('Info', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'info-opaque',
  label: __('Info opaque', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'info-transparent',
  label: __('Info transparent', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'light',
  label: __('Light', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'light-opaque',
  label: __('Light opaque', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'light-transparent',
  label: __('Light transparent', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'dark',
  label: __('Dark', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'dark-opaque',
  label: __('Dark opaque', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'dark-transparent',
  label: __('Dark transparent', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'transparent',
  label: __('Transparent', 'multiple-blocks-plugin-textdomain')
}];
const textAlignValues = [{
  value: '',
  label: __('– unset –', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'left',
  label: __('left', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'center',
  label: __('Center', 'multiple-blocks-plugin-textdomain')
}, {
  value: 'right',
  label: __('Right', 'multiple-blocks-plugin-textdomain')
}];
const alignmentControls = [{
  icon: 'editor-alignleft',
  title: __('Align left', 'multiple-blocks-plugin-textdomain'),
  align: 'left'
}, {
  icon: 'editor-aligncenter',
  title: __('Align center', 'multiple-blocks-plugin-textdomain'),
  align: 'center'
}, {
  icon: 'editor-alignright',
  title: __('Align right', 'multiple-blocks-plugin-textdomain'),
  align: 'right'
}, {
  icon: 'editor-alignleft',
  title: __('– unset –', 'multiple-blocks-plugin-textdomain'),
  align: ''
}];

// toggles

const ignoreMailtoSpamProtectionToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Spam protected email link (default activated)', 'multiple-blocks-plugin-textdomain'),
    checked: !value,
    onChange: onChangeFunction,
    help: __('If activated email will not be easily readable for machines.', 'multiple-blocks-plugin-textdomain')
  });
};
const targetToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Open in new tab', 'multiple-blocks-plugin-textdomain'),
    checked: value == '_blank',
    onChange: onChangeFunction
  });
};
const disabledToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Disabled', 'multiple-blocks-plugin-textdomain'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const belowNavbarToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Below navbar', 'multiple-blocks-plugin-textdomain'),
    checked: !!value,
    onChange: onChangeFunction,
    help: __('Enable if element is overlayed by navbar and needs a spacer top.', 'multiple-blocks-plugin-textdomain')
  });
};
const touchFooterToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Touch footer', 'multiple-blocks-plugin-textdomain'),
    checked: !!value,
    onChange: onChangeFunction,
    help: __('Enable if element touch footer without spacing.', 'multiple-blocks-plugin-textdomain')
  });
};
const inverseTextColorToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Inverse text color', 'multiple-blocks-plugin-textdomain'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const headingInheritTextColorToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Inherit text color to headings', 'multiple-blocks-plugin-textdomain'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const headingInheritFontWeightToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Inherit font weight to headings', 'multiple-blocks-plugin-textdomain'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const roundedToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Rounded', 'multiple-blocks-plugin-textdomain'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const alertToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Alert', 'multiple-blocks-plugin-textdomain'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const isGalleryParentToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Is image gallery parent', 'multiple-blocks-plugin-textdomain'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const bannerInnerToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Is Banner Inner', 'multiple-blocks-plugin-textdomain'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const hiddenToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Hidden (optional)', 'multiple-blocks-plugin-textdomain'),
    checked: !!value,
    onChange: onChangeFunction
  });
};

// url inputs

const linkUrlInput = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(URLInput, {
    label: __('Link URL', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction
  });
};
const bgAttachmentFixedLimitedToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Limit fixed background', 'multiple-blocks-plugin-textdomain'),
    checked: !!value,
    onChange: onChangeFunction,
    help: __('If enabled large displays (>=2.000px) will have static background attachement.', 'multiple-blocks-plugin-textdomain')
  });
};
const disableResponsiveDownsizingToggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Disable responsive image downsizing', 'multiple-blocks-plugin-textdomain'),
    checked: !!value,
    onChange: onChangeFunction,
    help: __('Enable if you don’t want smaller responsive image sizes, since small devices display image in large dimensions.', 'multiple-blocks-plugin-textdomain')
  });
};
const top0Toggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Top: 0', 'multiple-blocks-plugin-textdomain'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const bottom0Toggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Bottom: 0', 'multiple-blocks-plugin-textdomain'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const left0Toggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Left: 0', 'multiple-blocks-plugin-textdomain'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const right0Toggle = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Right: 0', 'multiple-blocks-plugin-textdomain'),
    checked: !!value,
    onChange: onChangeFunction
  });
};

// text inputs

const relInput = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: __('Rel (optional)', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction
  });
};
const dataFnInput = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: __('data-fn (optional)', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction
  });
};
const dataFnOptionsInput = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: __('data-fn-options (optional)', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction
  });
};
const dataFnTargetInput = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: __('data-fn-target (optional)', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction
  });
};
const dataTgInput = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: __('data-tg (optional)', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction
  });
};
const iconKeyInput = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: __('Icon key', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction
  });
};
const portraitImgMaxWidthBreakpointInput = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: __('Portrait image max width breakpoint (numeric in px)', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    help: __('Portrait image will be shown up to this width.', 'multiple-blocks-plugin-textdomain')
  });
};
const roleInput = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: __('Role (optional)', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction
  });
};
const tabindexInput = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: __('Tabindex (optional)', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction
  });
};

// selects

const stateSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = states;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('State', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const bgColorSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = bgStates;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Background Color', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const textColorSelect = (value, onChangeFunction, allowedValues, label) => {
  const defaultValues = textColorStates;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: !!label ? label : __('Text Color', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const buttonStateSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = btnStates;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Color / Appearance', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const colorSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = states;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Text Color', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const stateTypeSelect = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Button Type', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: [{
      value: 'outline',
      label: __('Outline', 'multiple-blocks-plugin-textdomain')
    }, {
      value: '',
      label: __('Filled', 'multiple-blocks-plugin-textdomain')
    }]
  });
};
const sizeSelect = (value, onChangeFunction) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Size', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: [{
      value: '',
      label: __('– unset –', 'multiple-blocks-plugin-textdomain')
    }, {
      value: 'sm',
      label: __('Small', 'multiple-blocks-plugin-textdomain')
    }, {
      value: 'lg',
      label: __('Large', 'multiple-blocks-plugin-textdomain')
    }]
  });
};
const marginLeftSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = marginPaddingSizes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Margin left', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const marginRightSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = marginPaddingSizes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Margin right', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const marginBeforeSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = marginPaddingSizes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Margin before', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: __('Spacer before element', 'multiple-blocks-plugin-textdomain')
  });
};
const marginAfterSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = marginPaddingSizes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Margin after', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: __('Spacer after element', 'multiple-blocks-plugin-textdomain')
  });
};
const resMarginBreakpointsSelect = (value, onChangeFunction, allowedValues, sizeString) => {
  const defaultValues = breakpointsWithUnset;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Responsive margin breakpoint', 'multiple-blocks-plugin-textdomain') + (!!sizeString ? ' ' + sizeString : ''),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const resMarginPositionSelect = (value, onChangeFunction, allowedValues, sizeString) => {
  const defaultValues = marginPaddingPositions;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Responsive margin position', 'multiple-blocks-plugin-textdomain') + (!!sizeString ? ' ' + sizeString : ''),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const resMarginSizeSelect = (value, onChangeFunction, allowedValues, sizeString) => {
  const defaultValues = marginPaddingSizes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Responsive margin size', 'multiple-blocks-plugin-textdomain') + (!!sizeString ? ' ' + sizeString : ''),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const displaySelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: __('– unset –', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'block',
    label: __('Block', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'inline-block',
    label: __('Inline-block', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'inline',
    label: __('Inline', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'flex',
    label: __('Flex', 'multiple-blocks-plugin-textdomain')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Display', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const verticalAlignSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: __('– unset –', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'middle',
    label: __('Middle', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'baseline',
    label: __('Baseline', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'top',
    label: __('Top', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'bottom',
    label: __('Bottom', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'text-bottom',
    label: __('Text ottom', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'text-top',
    label: __('Text top', 'multiple-blocks-plugin-textdomain')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Vertical align', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const alignItemsSelect = (value, onChangeFunction, allowedValues, disabled, sizeString) => {
  const defaultValues = [{
    value: '',
    label: __('– unset –', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'start',
    label: __('Start', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'center',
    label: __('Center', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'end',
    label: __('End', 'multiple-blocks-plugin-textdomain')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Align items', 'multiple-blocks-plugin-textdomain') + (!!sizeString ? ' ' + sizeString : ''),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    disabled: disabled
  });
};
const paddingBeforeSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = marginPaddingSizes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Padding before', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: __('Inner spacer before', 'multiple-blocks-plugin-textdomain')
  });
};
const paddingAfterSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = marginPaddingSizes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Padding after', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: __('Inner spacer after', 'multiple-blocks-plugin-textdomain')
  });
};
const paddingLeftSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = marginPaddingSizes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Padding left', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: __('Inner spacer left', 'multiple-blocks-plugin-textdomain')
  });
};
const paddingRightSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = marginPaddingSizes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Padding right', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: __('Inner spacer right', 'multiple-blocks-plugin-textdomain')
  });
};
const nodeNameSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: __('– unset –', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'div',
    label: __('div', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'span',
    label: __('span', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'section',
    label: __('section', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'figure',
    label: __('figure', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'ul',
    label: __('ul', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'ol',
    label: __('ol', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'li',
    label: __('li', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'h1',
    label: __('h1', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'h2',
    label: __('h2', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'h3',
    label: __('h3', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'h4',
    label: __('h4', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'h5',
    label: __('h5', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'h6',
    label: __('h6', 'multiple-blocks-plugin-textdomain')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Node name', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: __('Node name (please edit only if you know what you’re doing)', 'multiple-blocks-plugin-textdomain')
  });
};
const bgPositionSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: 'c',
    label: __('Center center', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'c25',
    label: __('Center 25%', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'c66',
    label: __('Center 66%', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'c75',
    label: __('Center 75%', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'ct',
    label: __('Center top', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'lc',
    label: __('Left center', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'rc',
    label: __('Right center', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '33c',
    label: __('33% center', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '66c',
    label: __('66% center', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '80c',
    label: __('80% center', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '66t',
    label: __('66% top', 'multiple-blocks-plugin-textdomain')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Background position', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const bgSizeSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: 'cover',
    label: __('Cover', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'contain',
    label: __('Contain', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '100a',
    label: __('100% auto', 'multiple-blocks-plugin-textdomain')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Background size', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const bannerTypeSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: __('Fix height', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'vh',
    label: __('Viewport dependent height', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'st',
    label: __('Static height', 'multiple-blocks-plugin-textdomain')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Banner height type', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: __('Viewport dependant height will be e.g. all viewport height or viewport height - ? pixels. Static height instead depends only on the banners contents.', 'multiple-blocks-plugin-textdomain')
  });
};
const bannerSizeSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '1',
    label: __('1 (biggest)', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '2',
    label: __('2', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '3',
    label: __('3', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '4',
    label: __('4', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '5',
    label: __('5', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '6',
    label: __('6 (smallest)', 'multiple-blocks-plugin-textdomain')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Banner height size', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: __('Choose from 1 (maximum) to 3 (minimum)', 'multiple-blocks-plugin-textdomain')
  });
};
const bgAttachmentSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: __('– unset –', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'static',
    label: __('static', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'fixed',
    label: __('fixed', 'multiple-blocks-plugin-textdomain')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Background attachement', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const textShadowSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: __('– unset –', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'dark',
    label: __('Dark', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'darker',
    label: __('Darker', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'darkest',
    label: __('Darkest', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'light',
    label: __('Light', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'primary',
    label: __('Primary', 'multiple-blocks-plugin-textdomain')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Text shadow', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const fontWeightSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: __('– unset –', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'light',
    label: __('Light', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'normal',
    label: __('Normal', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'bold',
    label: __('Bold', 'multiple-blocks-plugin-textdomain')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Font weight', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const borderSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: __('– unset –', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'true',
    label: __('Around', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'top',
    label: __('Top', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'bottom',
    label: __('Bottom', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'left',
    label: __('Left', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'right',
    label: __('Right', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'x',
    label: __('X (left & right)', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'y',
    label: __('Y (top & bottom)', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'u',
    label: __('U (left, right & bottom)', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'inverted-u',
    label: __('Inverted U (left, right & top)', 'multiple-blocks-plugin-textdomain')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Border', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const borderStateSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = states;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Border color', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const iconFamilySelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: __('– Default –', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 's',
    label: __('Solid', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'b',
    label: __('Brand', 'multiple-blocks-plugin-textdomain')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Icon family', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const widthSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: __('– unset –', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '25',
    label: __('25 %', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '50',
    label: __('50 %', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '75',
    label: __('75 %', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '100',
    label: __('100 %', 'multiple-blocks-plugin-textdomain')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Width', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const heightSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: __('– unset –', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '25',
    label: __('25 %', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '50',
    label: __('50 %', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '75',
    label: __('75 %', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '100',
    label: __('100 %', 'multiple-blocks-plugin-textdomain')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Height', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const objectFitSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: __('– unset –', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'cover',
    label: __('Cover', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'contain',
    label: __('Contain', 'multiple-blocks-plugin-textdomain')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Object-Fit', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const overflowSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: __('– unset –', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'hidden',
    label: __('Hidden', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'auto',
    label: __('Auto', 'multiple-blocks-plugin-textdomain')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Overflow', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const justifyContentSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: __('– unset –', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'space-between',
    label: __('Space between', 'multiple-blocks-plugin-textdomain')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Justify content', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const flexDirectionSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: __('– unset –', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'column',
    label: __('Column', 'multiple-blocks-plugin-textdomain')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Flex direction', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const breakpointsSelect = (value, onChangeFunction, allowedValues, labelString) => {
  const defaultValues = breakpointsWithUnset;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: !!labelString ? ' ' + labelString : __('Breakpoint', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const textAlignSelect = (value, onChangeFunction, allowedValues, labelString) => {
  const defaultValues = textAlignValues;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: !!labelString ? ' ' + labelString : __('Text align', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const multilayerSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: __('– unset –', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'parent',
    label: __('Parent', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'absolute',
    label: __('Absolute', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'static',
    label: __('Static', 'multiple-blocks-plugin-textdomain')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Multilayer', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const positionSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: __('– unset –', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'relative',
    label: __('Relative', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'absolute',
    label: __('Absolute', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'static',
    label: __('Static', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'fixed',
    label: __('Fixed', 'multiple-blocks-plugin-textdomain')
  }, {
    value: 'sticky',
    label: __('Sticky', 'multiple-blocks-plugin-textdomain')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Position', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const zIndexSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: __('– unset –', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '-1',
    label: __('-1', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '0',
    label: __('0', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '1',
    label: __('1', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '2',
    label: __('2', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '3',
    label: __('3', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '4',
    label: __('4', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '5',
    label: __('5', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '6',
    label: __('6', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '7',
    label: __('7', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '8',
    label: __('8', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '9',
    label: __('9', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '10',
    label: __('10', 'multiple-blocks-plugin-textdomain')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: __('Z-Index', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};

// radio

const scaleSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '1',
    label: __('100%', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '0.75',
    label: __('75%', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '0.5',
    label: __('50%', 'multiple-blocks-plugin-textdomain')
  }, {
    value: '0.25',
    label: __('25%', 'multiple-blocks-plugin-textdomain')
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RadioControl, {
    label: __('Scale', 'multiple-blocks-plugin-textdomain'),
    selected: value + '',
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    onChange: onChangeFunction
  });
};

// toolbar

const textAlignToolbar = (value, onChangeFunction) => {
  const defaultValues = states;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AlignmentToolbar, {
    label: __('Alignment', 'multiple-blocks-plugin-textdomain'),
    value: value,
    onChange: onChangeFunction,
    alignmentControls: alignmentControls
  });
};

// uploads

const imgUploadClickableImg = (imgId, url, onChangeFunction, type) => {
  const alt = typeof type !== 'undefined' && type === 'p' ? __('Change / upload portrait image', 'multiple-blocks-plugin-textdomain') : __('Change / upload image', 'multiple-blocks-plugin-textdomain');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
    onSelect: onChangeFunction,
    allowedTypes: "image",
    value: imgId,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
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
  const label = typeof type !== 'undefined' && type === 'p' ? __('Change / upload portrait image', 'multiple-blocks-plugin-textdomain') : __('Change / upload image', 'multiple-blocks-plugin-textdomain');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
    onSelect: onChangeFunction,
    allowedTypes: "image",
    value: imgId,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
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
  }, __('Please select template', 'multiple-blocks-plugin-textdomain')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bsxui-icon-text-button-list"
  }, templates.map((template, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
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
  }, templates.map((template, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
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

/***/ "./src/check-list/deprecated.js":
/*!**************************************!*\
  !*** ./src/check-list/deprecated.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");



// import { rawHandler } from '@wordpress/blocks';


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
      __unstableMultilineWrapperTags: ['ul'],
      default: '',
      __experimentalRole: 'content'
    },
    supports: {
      __unstablePasteTextInline: true,
      __experimentalSelector: 'ul',
      __experimentalSlashInserter: true
    }
  },
  save({
    attributes
  }) {
    const {
      className,
      values,
      state,
      marginLeft,
      marginRight,
      marginBefore,
      marginAfter,
      display,
      textAlign
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

    const checklistClassNames = (0,_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__.addClassNames)({
      marginLeft,
      marginRight,
      marginBefore,
      marginAfter,
      display,
      textAlign
    }, !!className ? 'checklist ' + className : 'checklist');

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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TagName, {
      ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      value: values,
      multiline: "li"
    }));
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([v1]);

/***/ }),

/***/ "./src/check-list/edit.js":
/*!********************************!*\
  !*** ./src/check-list/edit.js ***!
  \********************************/
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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/check-list/editor.scss");
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../_functions/controls.js */ "./src/_functions/controls.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./src/check-list/utils.js");

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





// import { createBlock } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


// import { makeSaveAttributes } from './../_functions/attributes.js';


const TEMPLATE = [['create-block/check-list-item']];

/**
 * At the moment, deprecations don't handle create blocks from attributes
 * (like when using CPT templates). For this reason, this hook is necessary
 * to avoid breaking templates using the old list block format.
 *
 * @param {Object} attributes Block attributes.
 * @param {string} clientId   Block client ID.
 */
function useMigrateOnLoad(attributes, clientId) {
  // console.log( 'useMigrateOnLoad()' )

  const registry = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useRegistry)();
  const {
    updateBlockAttributes,
    replaceInnerBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    // As soon as the block is loaded, migrate it to the new version.

    if (!attributes.values) {
      return;
    }
    const [newAttributes, newInnerBlocks] = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.migrateToListV2)(attributes);

    // deprecated( 'Content attribute on the BSX Check List block', {
    // 	since: '6.0',
    // 	version: '6.5',
    // 	alternative: 'inner blocks',
    // } );

    registry.batch(() => {
      updateBlockAttributes(clientId, newAttributes);
      replaceInnerBlocks(clientId, newInnerBlocks);
    });
  }, [attributes.values]);
}

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
  clientId
}) {
  // console.log( 'Edit()' )

  const {
    className,
    values,
    state,
    marginLeft,
    marginRight,
    marginBefore,
    marginAfter,
    display,
    textAlign
  } = attributes;

  // console.log( 'values: \n' + JSON.stringify( values, null, 2 ) );
  // if ( content ) {
  // 	console.log( 'content found' )
  // }
  // else {
  // 	console.log( 'NO content found (migrated)' )
  // }

  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'checklist'
  });
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)(blockProps, {
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
  useMigrateOnLoad(attributes, clientId);

  // const test = createListBlockFromDOMElement( content )

  // console.log( 'innerBlocksProps: \n' + JSON.stringify( innerBlocksProps, null, 2 ) );
  // console.log( 'test: \n' + JSON.stringify( test, null, 2 ) );

  // console.log( 'innerBlocks: \n' + JSON.stringify( innerBlocks, null, 2 ) );

  // const allowedBlocks = [ 
  //     'check-list-item',  
  // ];

  // const onChangeContent = ( value ) => {
  //     setAttributes( { content: value } );
  // };
  const onChangeState = value => {
    setAttributes({
      state: value
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
  const onChangeDisplay = value => {
    setAttributes({
      display: value
    });
  };
  const onChangeTextAlign = value => {
    setAttributes({
      textAlign: value
    });
  };
  const checklistClassNames = (0,_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_7__.addClassNames)({
    marginLeft,
    marginRight,
    marginBefore,
    marginAfter,
    display,
    textAlign
  }, !!className ? 'checklist ' + className : 'checklist');
  const controls = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__.textAlignToolbar)(textAlign, onChangeTextAlign)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Appearance', 'bsx-blocks')
  }, (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__.stateSelect)(state, onChangeState), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__.displaySelect)(display, onChangeDisplay)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Margin', 'bsx-blocks')
  }, (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__.marginLeftSelect)(marginLeft, onChangeMarginLeft, ['', '0', '1', '2', '3']), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__.marginRightSelect)(marginRight, onChangeMarginRight, ['', '0', '1', '2', '3']), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__.marginBeforeSelect)(marginBefore, onChangeMarginBefore), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_8__.marginAfterSelect)(marginAfter, onChangeMarginAfter))));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    ...innerBlocksProps
  }), controls);
}

/***/ }),

/***/ "./src/check-list/index.js":
/*!*********************************!*\
  !*** ./src/check-list/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/check-list/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/check-list/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/check-list/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/check-list/block.json");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deprecated */ "./src/check-list/deprecated.js");

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
  d: "M10,3v3h8V3H10z M5.79,2.79L4,4.58L3.71,4.29c-0.39-0.39-1.03-0.39-1.42,0c-0.39,0.39-0.39,1.02,0,1.41h0l1,1 C3.48,6.9,3.73,7,4,7s0.52-0.1,0.71-0.29l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41C6.82,2.4,6.18,2.4,5.79,2.79z M10,12h8V9h-8V12z M3.29,12.71C3.48,12.89,3.73,13,4,13c0.27,0,0.52-0.1,0.71-0.29l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41c-0.39-0.39-1.02-0.39-1.41,0 L4,10.58l-0.29-0.29c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41L3.29,12.71z M10,18h8v-3h-8V18z M5.79,14.79L4,16.58 l-0.29-0.29c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41l1,1C3.48,18.89,3.73,19,4,19c0.27,0,0.52-0.1,0.71-0.29 l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41C6.82,14.4,6.18,14.4,5.79,14.79z"
}));

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  icon: icon,
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./src/check-list/save.js":
/*!********************************!*\
  !*** ./src/check-list/save.js ***!
  \********************************/
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
    content,
    state,
    marginLeft,
    marginRight,
    marginBefore,
    marginAfter,
    display,
    textAlign
  } = attributes;
  const checklistClassNames = (0,_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__.addClassNames)({
    marginLeft,
    marginRight,
    marginBefore,
    marginAfter,
    display,
    textAlign
  }, !!className ? 'checklist ' + className : 'checklist');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: checklistClassNames
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/check-list/utils.js":
/*!*********************************!*\
  !*** ./src/check-list/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   migrateToListV2: () => (/* binding */ migrateToListV2)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);

function migrateToListV2(attributes) {
  const {
    values,
    ...otherAttributes
  } = attributes;
  const list = document.createElement('ul');
  list.innerHTML = values;

  // console.log( 'values migrateToListV2(): \n' + JSON.stringify( values, null, 2 ) );

  // const [ listBlock ] = rawHandler( { HTML: list.outerHTML } );

  // console.log( 'listBlock: \n' + JSON.stringify( listBlock, null, 2 ) );

  const [listBlock] = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.rawHandler)({
    HTML: list.outerHTML
  });

  // console.log( 'listBlock: \n' + JSON.stringify( listBlock, null, 2 ) );

  // Create new inner blocks from old content attribute
  const innerBlocks = Array.from(listBlock.innerBlocks).map(listItem => {
    // console.log( '---- listItem: \n' + JSON.stringify( listItem, null, 2 ) );
    if (typeof listItem.attributes !== 'undefined' && typeof listItem.attributes.content !== 'undefined') {
      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('create-block/check-list-item', {
        content: listItem.attributes.content
      });
    }
  });

  // console.log( 'otherAttributes: \n' + JSON.stringify( otherAttributes, null, 2 ) );

  return [{
    ...otherAttributes
  },
  // listBlock.innerBlocks,
  innerBlocks];
}

/***/ }),

/***/ "./src/check-list/editor.scss":
/*!************************************!*\
  !*** ./src/check-list/editor.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/check-list/style.scss":
/*!***********************************!*\
  !*** ./src/check-list/style.scss ***!
  \***********************************/
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

/***/ "./src/check-list/block.json":
/*!***********************************!*\
  !*** ./src/check-list/block.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/check-list","version":"0.1.0","title":"CB Check List","category":"text","allowedBlocks":["create-block/check-list-item"],"description":"Create a check (unsorted) list.","example":{},"supports":{"__unstablePasteTextInline":true,"__experimentalSelector":"ul","__experimentalSlashInserter":true},"textdomain":"multiple-blocks-plugin-textdomain","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","attributes":{"values":{"type":"string","source":"html","selector":"ul","multiline":"li","__unstableMultilineWrapperTags":["ul"],"default":"","__experimentalRole":"content"},"state":{"type":"string","default":"primary"},"marginLeft":{"type":"string"},"marginRight":{"type":"string"},"marginBefore":{"type":"string"},"marginAfter":{"type":"string"},"display":{"type":"string"},"textAlign":{"type":"string","default":""}}}');

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
/******/ 			"check-list/index": 0,
/******/ 			"check-list/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["check-list/style-index"], () => (__webpack_require__("./src/check-list/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map